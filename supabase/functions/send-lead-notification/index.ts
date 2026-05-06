import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface LeadData {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  zip_code: string;
  city: string;
  street: string;
  current_provider?: string;
  monthly_payment?: string;
  services: string[];
  additional_requirements?: string;
}

interface ContactData {
  name: string;
  email: string;
  phone?: string;
  message: string;
}

interface NotificationRequest {
  type: "lead" | "contact";
  data: LeadData | ContactData;
}

function formatLeadEmail(data: LeadData): string {
  return `
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          h1 { color: #2EB698; border-bottom: 2px solid #2EB698; padding-bottom: 10px; }
          .section { margin: 20px 0; padding: 15px; background: #f9f9f9; border-radius: 8px; }
          .label { font-weight: bold; color: #555; }
          .value { margin-left: 10px; }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>🎯 Nový Lead z webu</h1>
          <p>Datum: ${new Date().toLocaleString("cs-CZ")}</p>
          
          <div class="section">
            <h3>Kontaktní údaje</h3>
            <p><span class="label">Jméno:</span><span class="value">${data.first_name} ${data.last_name}</span></p>
            <p><span class="label">Email:</span><span class="value">${data.email}</span></p>
            <p><span class="label">Telefon:</span><span class="value">${data.phone}</span></p>
          </div>
          
          <div class="section">
            <h3>Adresa</h3>
            <p><span class="label">Ulice:</span><span class="value">${data.street}</span></p>
            <p><span class="label">Město:</span><span class="value">${data.city}</span></p>
            <p><span class="label">PSČ:</span><span class="value">${data.zip_code}</span></p>
          </div>
          
          <div class="section">
            <h3>Požadavky</h3>
            <p><span class="label">Služby:</span><span class="value">${data.services.join(", ")}</span></p>
            ${data.current_provider ? `<p><span class="label">Současný poskytovatel:</span><span class="value">${data.current_provider}</span></p>` : ""}
            ${data.monthly_payment ? `<p><span class="label">Měsíční platba:</span><span class="value">${data.monthly_payment}</span></p>` : ""}
            ${data.additional_requirements ? `<p><span class="label">Další požadavky:</span><span class="value">${data.additional_requirements}</span></p>` : ""}
          </div>
        </div>
      </body>
    </html>
  `;
}

function formatContactEmail(data: ContactData): string {
  return `
    <html>
      <head>
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; }
          h1 { color: #2EB698; border-bottom: 2px solid #2EB698; padding-bottom: 10px; }
          .section { margin: 20px 0; padding: 15px; background: #f9f9f9; border-radius: 8px; }
          .label { font-weight: bold; color: #555; }
          .value { margin-left: 10px; }
          .message { background: white; padding: 20px; border-left: 4px solid #2EB698; margin-top: 15px; }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>✉️ Nová zpráva z kontaktního formuláře</h1>
          <p>Datum: ${new Date().toLocaleString("cs-CZ")}</p>
          
          <div class="section">
            <h3>Kontaktní údaje</h3>
            <p><span class="label">Jméno:</span><span class="value">${data.name}</span></p>
            <p><span class="label">Email:</span><span class="value">${data.email}</span></p>
            ${data.phone ? `<p><span class="label">Telefon:</span><span class="value">${data.phone}</span></p>` : ""}
          </div>
          
          <div class="section">
            <h3>Zpráva</h3>
            <div class="message">${data.message.replace(/\n/g, "<br>")}</div>
          </div>
        </div>
      </body>
    </html>
  `;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    if (!resendApiKey) {
      console.error("RESEND_API_KEY is not configured");
      return new Response(
        JSON.stringify({ error: "Email service not configured" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const resend = new Resend(resendApiKey);
    const { type, data }: NotificationRequest = await req.json();

    const isLead = type === "lead";
    const leadData = data as LeadData;
    const contactData = data as ContactData;

    const subject = isLead
      ? `🎯 Nový lead: ${leadData.first_name} ${leadData.last_name}`
      : `✉️ Nová zpráva: ${contactData.name}`;

    const htmlContent = isLead
      ? formatLeadEmail(leadData)
      : formatContactEmail(contactData);

    const emailResponse = await resend.emails.send({
      from: "Nejvýhodnější Připojení <info@nejvyhodnejsipripojeni.cz>",
      to: ["junkert77@gmail.com"],
      subject,
      html: htmlContent,
    });

    console.log("Email sent successfully:", emailResponse);

    return new Response(
      JSON.stringify({ success: true, id: emailResponse.data?.id }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : "Unknown error";
    console.error("Error sending notification:", errorMessage);
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
};

serve(handler);
