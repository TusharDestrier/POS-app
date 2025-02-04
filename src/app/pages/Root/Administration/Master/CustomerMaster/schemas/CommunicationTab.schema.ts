import { z } from 'zod'

export const CommunicationTabSchema = z.object({
  address: z.string().min(1, { message: 'Address is required.' }),
  area: z.string().optional(),
  city: z.string().optional(),
  pin: z.string().optional(),
  state: z.string().optional(),
  email: z.string().email({ message: 'Invalid email address.' }).optional(),
  whatsappNo: z
    .string()
    .length(10, { message: "Whatsapp No. must be exactly 10 digits." }) 
    .regex(/^\d+$/, { message: 'Only numbers are allowed in WhatsApp No.' }),

  alternatePhoneNo: z
    .string()
    .length(10, { message: "Alternate No. must be exactly 10 digits." }) 
    .regex(/^\d+$/, { message: 'Only numbers are allowed in Alternate No.' })
    .optional(),
  receivePushMessage: z.boolean().optional(),
  preferredCommunication: z.enum(['sms', 'email', 'whatsapp'], {
    required_error: 'Preferred communication mode is required.',
  }),
})
