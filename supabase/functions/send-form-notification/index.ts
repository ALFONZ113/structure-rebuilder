import { serve } from 'https://deno.land/std@0.177.0/http/server.ts';
import { SmtpClient } from 'https://deno.land/x/smtp@v0.7.0/mod.ts';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface FormData {
  [key: string]: any;
}

interface RequestBody {
  recipient: string;
  subject: string;
  formData: FormData;
  formType: 'contact' | 'lead';
}

serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { recipient, subject, formData, formType } = await req.json() as RequestBody;
    
    // Validate required fields
    if (!recipient || !subject || !formData || !formType) {
      console.error('Missing required fields in request');
      return new Response(
        JSON.stringify({ error: 'Missing required fields' }), 
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(recipient)) {
      console.error('Invalid recipient email format');
      return new Response(
        JSON.stringify({ error: 'Invalid recipient email' }), 
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Format the email content based on form type
    let emailContent = formatEmailContent(formData, formType);
    
    // Send the email using SMTP client
    const client = new SmtpClient();
    
    const smtpHost = Deno.env.get('SMTP_HOST');
    const smtpPort = Deno.env.get('SMTP_PORT');
    const smtpUser = Deno.env.get('SMTP_USER');
    const smtpPassword = Deno.env.get('SMTP_PASSWORD');

    if (!smtpHost || !smtpPort || !smtpUser || !smtpPassword) {
      console.error('Missing SMTP configuration');
      return new Response(
        JSON.stringify({ error: 'SMTP not configured' }), 
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    await client.connectTLS({
      hostname: smtpHost,
      port: Number(smtpPort),
      username: smtpUser,
      password: smtpPassword,
    });
    
    await client.send({
      from: Deno.env.get('SMTP_FROM') || 'formular@nejvyhodnejsipripojeni.cz',
      to: recipient,
      subject: subject,
      content: emailContent,
      html: emailContent,
    });
    
    await client.close();
    
    console.log('Email sent successfully');
    return new Response(JSON.stringify({ success: true }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 200,
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return new Response(JSON.stringify({ error: 'Failed to send email' }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      status: 500,
    });
  }
});

// Sanitize string to prevent XSS in email
function sanitizeString(str: string): string {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function formatEmailContent(formData: FormData, formType: 'contact' | 'lead'): string {
  let htmlContent = `
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          h1 { color: #2EB698; }
          .data-item { margin-bottom: 10px; }
          .label { font-weight: bold; }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>${formType === 'contact' ? 'Nový kontaktní formulář' : 'Nový formulář pro získání nabídky'}</h1>
          <p>Datum a čas: ${new Date().toLocaleString('cs-CZ')}</p>
          <div class="form-data">
  `;
  
  // Add all form data fields to the email with sanitization
  for (const [key, value] of Object.entries(formData)) {
    if (value !== undefined && value !== null && value !== '') {
      // Format the key for display
      const formattedKey = sanitizeString(
        key
          .replace(/([A-Z])/g, ' $1')
          .replace(/^./, (str) => str.toUpperCase())
          .replace(/([a-z])([A-Z])/g, '$1 $2')
      );
      
      // Handle arrays (like services in lead form)
      let displayValue: string;
      if (Array.isArray(value)) {
        displayValue = sanitizeString(value.join(', '));
      } else if (typeof value === 'boolean') {
        displayValue = value ? 'Ano' : 'Ne';
      } else {
        displayValue = sanitizeString(String(value));
      }
      
      htmlContent += `
        <div class="data-item">
          <span class="label">${formattedKey}:</span> ${displayValue}
        </div>
      `;
    }
  }
  
  htmlContent += `
          </div>
        </div>
      </body>
    </html>
  `;
  
  return htmlContent;
}
