import { z } from 'zod'

// Define the form schema with all required fields
export const storeDetailFormSchema = z.object({
  storeName: z.string().min(2, {
    message: 'Store Name must be at least 2 characters.',
  }),
  storeCode: z.string().optional(),
  startDate: z.string().optional(),
  closeDate: z.string().optional(),
  storeSize: z.string().optional(),
  default: z.string().optional(),
  defaultSale: z.string().optional(),
  defaultReturn: z.string().optional(),
  GSTIN: z.string().optional(),
  date: z.string().optional(),
  state: z.string().optional(),
  factor: z.string().optional(),
  priceList: z.string().optional(),
  factorIfAny: z.string().optional(),
  storeType: z.string().optional(),
  category: z.string().optional(),
  franchise: z.string().optional(),
  operationType: z.string().optional(),
  inActive: z.string().optional(),
})
