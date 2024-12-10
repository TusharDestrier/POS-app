import { z } from 'zod'
export const posBSillchema = z.object({
  allowItemLevelDiscount: z.boolean().optional(),
  allowBillLevelDiscount: z.boolean().optional(),
  maxAllowableDisPer: z.string().optional(),
  maxAllowableDisAmt: z.string().optional(),
  selectActivePromotion: z.boolean().optional(),
  clearAppliedPromotion: z.boolean().optional(),
  salePersonTagging: z.boolean().optional(),
  salePersonTaggingPolicy: z.string().optional(),
  customerTagging: z.boolean().optional(),
})