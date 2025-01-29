import { z } from 'zod'

export const PostOrganizationPolicySchema = z.object({
  pendingSettlementDays: z.number().optional(),
  footfallEntryRequiredDaySettlement: z.enum(['Y', 'N']).optional(),
  maxAllowDiscountPolicyValidationID: z.string().optional(),
  maxBillAmountSinglePOSBill: z.string().optional(),
  pan: z.string().optional(),
  creditCardDetailsCapturePolicyID: z.string().optional(),
  isCCardAuthNoEntryMandatory: z.enum(['Y', 'N']).optional(),
  allowBackDateEntry: z.enum(['Y', 'N']).optional(),
  backDateEntryDays: z.string().optional(),
  //negativestockcheckingmode: z.string().optional(),
  picture: z.string().optional(),
  //POS BILL
  allowItemLevelDiscount: z.enum(['Y', 'N']).optional(),
  allowBillLevelDiscount: z.enum(['Y', 'N']).optional(),
  maxAllowDiscountPercentage: z.string().optional(),
  maxAllowDiscountAmount: z.string().optional(),
  allowToSelectActivePromotionFromList: z.enum(['Y', 'N']).optional(),
  allowToClearAppliedPromotion: z.enum(['Y', 'N']).optional(),
  salePersonTaggingMandatory: z.enum(['Y', 'N']).optional(),
  salePersonTaggingPolicyID: z.string().optional(),
  customerTaggingIsMandatory: z.enum(['Y', 'N']).optional(),
  //Credit Note
  returnOfItemWithin: z.string().optional(),
  creditNoteValidityDays: z.string().optional(),
  billTaggingMandatoryDuringReturn: z.enum(['Y', 'N']).optional(),
  //Goods Receipt Return
  excessGoodsReceiptTolerancePercentage: z.string().optional(),
  shortGoodsReceiptTolerancePercentage: z.string().optional(),
  allowToReceiveDamagedGoods: z.enum(['Y', 'N']).optional(),
  //POS ORDER
  dueDateIsMandatoryInPOSOrder: z.enum(['Y', 'N']).optional(),
  minPercentageOfAdvanceDuringPOSOrder: z.string().optional(),
  posOrderCancellationIsMandatory: z.enum(['Y', 'N']).optional(),
})
