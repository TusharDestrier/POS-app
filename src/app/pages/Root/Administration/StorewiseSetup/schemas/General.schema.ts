import { z } from 'zod'

export const generalSchema = z.object({
  storeName: z.string().min(2, {
    message: 'Store Name is required',
  }),
  fromDate: z.date().optional(),
  toDate: z.date().optional(),
  pendingSettlement: z.string().optional(),
  footfallEntry: z.boolean().optional(),
  maxAllowable: z.string().optional(),
  maxBillingAmt: z.string().optional(),
  panNo: z.string().min(10, {
    message: 'PAN No. is less than or more than 10 characters'
  }),
  creditCardDetails: z.string().optional(),
  crcardAutho: z.string().optional(),
  backDateEntry: z.boolean().optional(),
  backDateDays: z.boolean().optional(),
  stockCheck: z.string().optional(),
})
