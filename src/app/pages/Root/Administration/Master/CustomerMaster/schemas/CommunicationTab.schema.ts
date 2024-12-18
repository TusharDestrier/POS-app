import { z } from 'zod'

export const CommunicationTabSchema = z.object({
  address: z.string().min(1, { message: 'Address is required.' }),
  area: z.string().optional(),
  city: z.string().optional(),
  pin: z.string().optional(),
  state: z.string().optional(),
  email: z.string().email({ message: 'Invalid email address.' }).optional(),
  whatsappNo: z.string().min(10, { message: 'WhatsApp No. must be at least 10 digits.' }),
  alternatePhoneNo: z.string().optional(),
  receivePushMessage: z.boolean().optional(),
  preferredCommunication: z.enum(['sms', 'email', 'whatsapp'], {
    required_error: 'Preferred communication mode is required.',
  }),
})
