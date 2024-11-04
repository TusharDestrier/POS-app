import { z } from "zod";

export const personalTabSchema = z.object({
  mobileNo: z.string().min(10, { message: 'Mobile No. must be at least 10 digits.' }),
  firstName: z.string().min(1, { message: 'First Name is required.' }),
  middleName: z.string().optional(),
  lastName: z.string().min(1, { message: 'Last Name is required.' }),
  gender: z.enum(['male', 'female'], { message: 'Gender is required.' }),
  dateOfBirth: z.date({ required_error: 'Date of Birth is required.' }),
  anniversaryDate: z.date().optional(),
  profession: z.string().optional(),
  spouseName: z.string().optional(),
  isEmployee: z.boolean().optional(),
  panNo: z.string().optional(),
  gstNo: z.string().optional(),
  gstDate: z.date().optional(),
})