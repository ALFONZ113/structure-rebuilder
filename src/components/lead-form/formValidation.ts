import { leadFormSchema } from '@/lib/validationSchemas';
import { z } from 'zod';

// Types for form data
interface LeadFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  zipCode: string;
  city: string;
  street: string;
  currentProvider: string;
  monthlyPayment: string;
  services: string[];
  additionalRequirements: string;
  gdprConsent: boolean;
}

// Contact step schema (partial)
const contactStepSchema = leadFormSchema.pick({
  firstName: true,
  lastName: true,
  email: true,
  phone: true,
});

// Location step schema (partial)
const locationStepSchema = leadFormSchema.pick({
  zipCode: true,
  city: true,
  street: true,
});

// Requirements step schema (partial)
const requirementsStepSchema = z.object({
  services: z.array(z.string()).min(1),
  gdprConsent: z.literal(true),
});

export const validateContactStep = (formData: LeadFormData): boolean => {
  const result = contactStepSchema.safeParse(formData);
  return result.success;
};

export const validateLocationStep = (formData: LeadFormData): boolean => {
  const result = locationStepSchema.safeParse(formData);
  return result.success;
};

export const validateCurrentStep = (): boolean => {
  return true;
};

export const validateRequirementsStep = (formData: LeadFormData): boolean => {
  const result = requirementsStepSchema.safeParse({
    services: formData.services,
    gdprConsent: formData.gdprConsent,
  });
  return result.success;
};

export const isStepValid = (currentStep: string, formData: LeadFormData): boolean => {
  switch (currentStep) {
    case 'contact':
      return validateContactStep(formData);
    case 'location':
      return validateLocationStep(formData);
    case 'current':
      return validateCurrentStep();
    case 'requirements':
      return validateRequirementsStep(formData);
    default:
      return true;
  }
};

// Get validation errors for a specific step
export const getStepErrors = (currentStep: string, formData: LeadFormData): Record<string, string> => {
  const errors: Record<string, string> = {};
  
  let result;
  switch (currentStep) {
    case 'contact':
      result = contactStepSchema.safeParse(formData);
      break;
    case 'location':
      result = locationStepSchema.safeParse(formData);
      break;
    case 'requirements':
      result = requirementsStepSchema.safeParse({
        services: formData.services,
        gdprConsent: formData.gdprConsent,
      });
      break;
    default:
      return errors;
  }

  if (result && !result.success) {
    result.error.errors.forEach((err) => {
      if (err.path[0]) {
        errors[err.path[0] as string] = err.message;
      }
    });
  }

  return errors;
};
