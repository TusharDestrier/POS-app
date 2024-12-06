import { z } from "zod";

export const generalSchema = z.object({
  storeName: z.string().min(2, {
    message: 'Store Name is required',
  }),
  fromDate: z.date(),
  toDate: z.date().optional(),
  pendingSettlement: z.string().optional(),
  footfallEntry: z.boolean().optional(),
  maxAllowable: z.string().optional(),
  maxBillingAmt: z.string().optional(),
  panNo: z.string().min(10, {
    message: 'PAN No. is less than or more than 10 characters',
  }),
  creditCardDetails: z.string().optional(),
  crcardAutho: z.string().optional(),
  backDateEntry: z.boolean().optional(),
  backDateDays: z.boolean().optional(),
  stockCheck: z.string().optional(),
}).refine((data) => {
  // Validate that if `toDate` exists, it should not be earlier than `fromDate`
  return !data.toDate || data.toDate >= data.fromDate;
}, {
  message: 'To Date cannot be earlier than From Date',
  path: ['toDate'], // Specify where the error message should be attached
});
