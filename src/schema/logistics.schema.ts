import { z } from 'zod'

export const logisticsScema = z.object({
  storeName: z.string().min(2, {
    message: 'Store Name must be at least 2 characters.',
  }),

  billToAddress: z.string().optional(),
  city: z.string().optional(),
  postalCode: z.string().optional(),
  state: z.string().optional(),
  contactPerson: z.string().optional(),
  contactNo: z.string().optional(),
  alcontactNo: z.string().optional(),
  emailId: z.string().optional(),
  shipToAddress: z.string().optional(),
  searching: z.string().optional(),

  default: z.string().optional(),
  defaultSale: z.string().optional(),
  defaultReturn: z.string().optional(),

  date: z.string().optional(),
  factor: z.string().optional(),
  storeType: z.string().optional(),
  category: z.string().optional(),

  operationType: z.string().optional(),
  inActive: z.string().optional(),
})
