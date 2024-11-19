import { z } from 'zod'

// Define the schema for each item in the `generalValues` array
export const generalSchema = z.object({
  pendingSettlement: z.string().optional(),
  footfallEntry: z.boolean().optional(),
  maxAllowable: z.string().optional(),
  maxBillingAmt: z.string().optional(),
  panNo: z.string().optional(),
  creditCardDetails: z.string().optional(),
  crcardAutho: z.string().optional(),
  backDateEntry: z.boolean().optional(),
  backDateDays: z.boolean().optional(),
  stockCheck: z.string().optional(),
})
