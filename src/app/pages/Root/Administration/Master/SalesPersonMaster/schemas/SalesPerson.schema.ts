import { z } from "zod";

export const  salesPersonSchema = z.object({
    firstName: z.string().min(1, { message: 'First Name is required.' }),
    lastName: z.string().min(1, { message: 'Last Name is required.' }),
    mobileNo: z.string().min(10, { message: 'Mobile No. must be at least 10 digits.' }).max(10),
    whatsappNo: z.string().min(10, {message: 'WhatsApp No. must be at least 10 digits.'}).max(10),
    // email: z.string().email({ message: 'Invalid email address.' }).optional(),
    email: z.string().optional(),
    employeeId: z.string().optional(),
    allocateRole: z.string().optional(),
    allocateUser: z.string().optional(),
    inactive: z.boolean().optional().default(false),
  })