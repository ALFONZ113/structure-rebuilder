import { supabase } from "@/integrations/supabase/client";
import { 
  validateContactForm, 
  validateLeadForm, 
  validateSpeedTest,
  type ContactFormData,
  type LeadFormData,
  type SpeedTestData
} from './validationSchemas';

// Type for form submission results
export interface FormSubmissionResult {
  success: boolean;
  error?: string;
  validationErrors?: Record<string, string>;
}

// Type for validation result
type ValidationResult<T> = {
  success: boolean;
  data?: T;
  error?: { issues?: Array<{ path: (string | number)[]; message: string }>; errors?: Array<{ path: (string | number)[]; message: string }> };
};

// Helper to extract validation errors from Zod result
function extractValidationErrors<T>(validation: ValidationResult<T>): Record<string, string> {
  const errors: Record<string, string> = {};
  const issues = validation.error?.issues || validation.error?.errors || [];
  issues.forEach((issue) => {
    const path = issue.path.join('.');
    if (path) {
      errors[path] = issue.message;
    }
  });
  return errors;
}

// Send email notification via edge function
async function sendNotification(type: 'lead' | 'contact', data: Record<string, unknown>): Promise<void> {
  try {
    const { error } = await supabase.functions.invoke('send-lead-notification', {
      body: { type, data }
    });
    if (error) {
      console.error('Failed to send notification:', error);
    }
  } catch (err) {
    console.error('Notification error:', err);
  }
}

// Submit contact form to Supabase
export async function submitContactForm(formData: Record<string, unknown>): Promise<FormSubmissionResult> {
  try {
    const validation = validateContactForm(formData);
    
    if (!validation.success || !validation.data) {
      return { 
        success: false, 
        error: 'Validační chyba', 
        validationErrors: extractValidationErrors(validation as ValidationResult<ContactFormData>) 
      };
    }

    const data = validation.data;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { error } = await (supabase as any).from('contact_messages').insert({
      name: data.name,
      email: data.email,
      phone: data.phone || null,
      message: data.message,
    });

    if (error) throw new Error(error.message);
    
    // Send email notification (fire and forget)
    sendNotification('contact', {
      name: data.name,
      email: data.email,
      phone: data.phone || undefined,
      message: data.message
    });
    
    return { success: true };
  } catch (error) {
    console.error('Contact form submission error:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Neznámá chyba'
    };
  }
}

// Submit lead form to Supabase
export async function submitLeadForm(formData: Record<string, unknown>): Promise<FormSubmissionResult> {
  try {
    const validation = validateLeadForm(formData);
    
    if (!validation.success || !validation.data) {
      return { 
        success: false, 
        error: 'Validační chyba', 
        validationErrors: extractValidationErrors(validation as ValidationResult<LeadFormData>) 
      };
    }

    const data = validation.data;

    const leadData = {
      first_name: data.firstName,
      last_name: data.lastName,
      email: data.email,
      phone: data.phone,
      zip_code: data.zipCode,
      city: data.city,
      street: data.street,
      current_provider: data.currentProvider || null,
      monthly_payment: data.monthlyPayment || null,
      services: data.services,
      additional_requirements: data.additionalRequirements || null,
    };

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const { error } = await (supabase as any).from('leads').insert(leadData);

    if (error) throw new Error(error.message);
    
    // Send email notification (fire and forget)
    sendNotification('lead', leadData);
    
    return { success: true };
  } catch (error) {
    console.error('Lead form submission error:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Neznámá chyba'
    };
  }
}

// Form types for Netlify submission (kept for speed test only)
type FormType = 'speedtest-results';

// Generic form submission function for speed test
async function submitFormGeneric<T>(
  formName: FormType,
  formData: Record<string, unknown>,
  validator: (data: Record<string, unknown>) => ValidationResult<T>,
  fieldMapper: (data: T) => Record<string, string>
): Promise<FormSubmissionResult> {
  try {
    const validation = validator(formData);
    
    if (!validation.success || !validation.data) {
      return { 
        success: false, 
        error: 'Validační chyba', 
        validationErrors: extractValidationErrors(validation) 
      };
    }

    const data = validation.data;
    const mappedFields = fieldMapper(data);
    
    const netlifyFormData = new FormData();
    netlifyFormData.append('form-name', formName);
    
    Object.entries(mappedFields).forEach(([key, value]) => {
      if (value) netlifyFormData.append(key, value);
    });

    const response = await fetch('/', {
      method: 'POST',
      body: netlifyFormData,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return { success: true };
  } catch (error) {
    console.error('Form submission error:', error);
    return { 
      success: false, 
      error: error instanceof Error ? error.message : 'Neznámá chyba'
    };
  }
}

// Submit speed test results (still uses Netlify)
export async function submitSpeedTestResults(formData: Record<string, unknown>): Promise<FormSubmissionResult> {
  return submitFormGeneric(
    'speedtest-results',
    formData,
    validateSpeedTest,
    (data: SpeedTestData) => ({
      downloadSpeed: data.downloadSpeed || '',
      uploadSpeed: data.uploadSpeed || '',
      ping: data.ping || '',
      packetLoss: data.packetLoss || '',
      consistency: data.consistency || '',
      testDate: data.testDate || '',
      userAgent: data.userAgent || '',
      location: data.location || '',
      notes: data.notes || '',
      email: data.email || ''
    })
  );
}
