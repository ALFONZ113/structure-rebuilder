import { z } from 'zod';

// Contact Form Schema
export const contactFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(1, { message: "Jméno je povinné" })
    .max(100, { message: "Jméno nesmí být delší než 100 znaků" }),
  email: z
    .string()
    .trim()
    .email({ message: "Neplatná emailová adresa" })
    .max(255, { message: "Email nesmí být delší než 255 znaků" }),
  phone: z
    .string()
    .trim()
    .max(20, { message: "Telefon nesmí být delší než 20 znaků" })
    .optional()
    .or(z.literal('')),
  message: z
    .string()
    .trim()
    .min(1, { message: "Zpráva je povinná" })
    .max(2000, { message: "Zpráva nesmí být delší než 2000 znaků" }),
});

// Lead Form Schema
export const leadFormSchema = z.object({
  firstName: z
    .string()
    .trim()
    .min(1, { message: "Jméno je povinné" })
    .max(50, { message: "Jméno nesmí být delší než 50 znaků" }),
  lastName: z
    .string()
    .trim()
    .min(1, { message: "Příjmení je povinné" })
    .max(50, { message: "Příjmení nesmí být delší než 50 znaků" }),
  email: z
    .string()
    .trim()
    .email({ message: "Neplatná emailová adresa" })
    .max(255, { message: "Email nesmí být delší než 255 znaků" }),
  phone: z
    .string()
    .trim()
    .min(1, { message: "Telefon je povinný" })
    .max(20, { message: "Telefon nesmí být delší než 20 znaků" }),
  zipCode: z
    .string()
    .trim()
    .regex(/^\d{5}$/, { message: "PSČ musí obsahovat 5 číslic" }),
  city: z
    .string()
    .trim()
    .min(1, { message: "Město je povinné" })
    .max(100, { message: "Město nesmí být delší než 100 znaků" }),
  street: z
    .string()
    .trim()
    .min(1, { message: "Ulice je povinná" })
    .max(200, { message: "Ulice nesmí být delší než 200 znaků" }),
  currentProvider: z
    .string()
    .trim()
    .max(100, { message: "Poskytovatel nesmí být delší než 100 znaků" })
    .optional()
    .or(z.literal('')),
  monthlyPayment: z
    .string()
    .trim()
    .max(20, { message: "Měsíční platba nesmí být delší než 20 znaků" })
    .optional()
    .or(z.literal('')),
  services: z
    .array(z.string().max(50))
    .min(1, { message: "Vyberte alespoň jednu službu" }),
  additionalRequirements: z
    .string()
    .trim()
    .max(1000, { message: "Požadavky nesmí být delší než 1000 znaků" })
    .optional()
    .or(z.literal('')),
  gdprConsent: z.literal(true, {
    errorMap: () => ({ message: "Musíte souhlasit se zpracováním osobních údajů" }),
  }),
});

// Speed Test Results Schema
export const speedTestSchema = z.object({
  email: z
    .string()
    .trim()
    .email({ message: "Neplatná emailová adresa" })
    .max(255)
    .optional()
    .or(z.literal('')),
  notes: z
    .string()
    .trim()
    .max(500)
    .optional()
    .or(z.literal('')),
  location: z
    .string()
    .trim()
    .max(200)
    .optional()
    .or(z.literal('')),
  downloadSpeed: z.string().optional(),
  uploadSpeed: z.string().optional(),
  ping: z.string().optional(),
  packetLoss: z.string().optional(),
  consistency: z.string().optional(),
  testDate: z.string().optional(),
  userAgent: z.string().max(500).optional(),
});

// Types
export type ContactFormData = z.infer<typeof contactFormSchema>;
export type LeadFormData = z.infer<typeof leadFormSchema>;
export type SpeedTestData = z.infer<typeof speedTestSchema>;

// Validation functions
export const validateContactForm = (data: unknown) => {
  return contactFormSchema.safeParse(data);
};

export const validateLeadForm = (data: unknown) => {
  return leadFormSchema.safeParse(data);
};

export const validateSpeedTest = (data: unknown) => {
  return speedTestSchema.safeParse(data);
};
