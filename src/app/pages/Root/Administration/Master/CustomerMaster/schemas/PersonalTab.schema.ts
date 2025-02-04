import { z } from "zod";

const GST_REGEX = /^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}[Z]{1}[0-9A-Z]{1}$/;

export const personalTabSchema = z.object({
  mobileNo: z
  .string()
  .min(10, { message: "Mobile No. must be exactly 10 digits." })
  .max(10, { message: "Mobile No. must be exactly 10 digits." })
  .regex(/^\d+$/, { message: "Only numbers are allowed in Mobile No." }),
  
  firstName: z.string().min(1, { message: 'First Name is required.' }),
  middleName: z.string().min(1, { message: 'Middle Name is required.' }),
  lastName: z.string().min(1, { message: 'Last Name is required.' }),
  gender: z.enum(['male', 'female'], { message: 'Gender is required.' }),
  dateOfBirth: z.coerce
  .date()
  .max(new Date(), { message: "DOB cannot be in the future." })
  .min(new Date("1900-01-01"), { message: "DOB cannot be before 1900." }),

anniversaryDate: z.coerce
  .date()
  .max(new Date(), { message: "Anniversary Date cannot be in the future." })
  .min(new Date("1900-01-01"), { message: "Anniversary cannot be before 1900." })
  .optional(),

  profession: z.string().optional(),
  spouseName: z.string().optional(),
  isEmployee: z.boolean().optional(),
  panNo: z.string().min(10, { message: 'Pan No. can not be less than or more than 10 characters.' }),
  gstNo: z
  .string()
  .regex(GST_REGEX, { message: "Invalid GST Number format." })
  .optional(), // GST required hai ya optional, wo business rule pe depend karega

  gstDate: z.date().optional(),
})