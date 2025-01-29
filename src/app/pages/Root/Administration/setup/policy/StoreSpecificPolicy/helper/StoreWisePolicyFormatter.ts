import { z } from 'zod'

import { PostStoreWisePolicySchema } from '../schemas/PostStoreWisePolicySchema'
import useStoreWisePolicyHead from '../store/useStoreWisePolicyHead'

import { formatDate } from '@/lib/utils'

export type StoreWisePolicyFormatterType = z.infer<typeof PostStoreWisePolicySchema>

const operation = {
  Create: 'I',
  Edit: 'U',
  Delete: 'D',
}

export function StoreWisePolicyFormatter(
  data: StoreWisePolicyFormatterType,
  id: number | string | null
) {
  const mode = useStoreWisePolicyHead.getState().mode as 'Create' | 'Edit' | 'Delete'

  // Default structure with all required fields and default values
  const defaultData = {
    storeSpecificPolicyID: mode === 'Edit' ? id : 0,
    storeID: 0,
    fromDate: 'string',
    toDate: 'string',
    pendingSettlementDays: 0,
    footfallEntryRequiredInDaySettlement: 'string',
    maxAllowDiscountPolicyValidationID: 0,
    maxBillAmountSinglePOSBill: 0,
    pan: 'string',
    creditCardDetailsCapturePolicyID: 0,
    isCCardAuthNoEntryMandatory: 'string',
    allowBackDateEntry: 'string',
    backDateEntryDays: 0,
    negativeStockCheckingModeID: 0,
    allowItemLevelDiscount: 'string',
    maxAllowDiscountPercentage: 0,
    allowBillLevelDiscount: 'string',
    maxAllowDiscountAmount: 0,
    allowToSelectActivePromotionFromList: 'string',
    allowToClearAppliedPromotion: 'string',
    salePersonTaggingMandatory: 'string',
    salePersonTaggingPolicyID: 0,
    customerTaggingMandatory: 'string',
    returnOfItemWithin: 0,
    creditNoteValidityDays: 0,
    billTaggingMandatoryDuringReturn: 'string',
    noOfCopiesToBePrint: 0,
    excessGoodsReceiptTolerancePercentage: 0,
    shortGoodsReceiptTolerancePercentage: 0,
    allowReceiveDamagedGoods: 'string',
    dueDateMandatoryInPOSOrder: 'string',
    minPercentageOfAdvanceDuringPOSOrder: 0,
    posOrderCancellationIsMandatory: 'string',
    enteredBy: 0,
    usedFor: operation[mode],
  }

  // Merge input data with default structure
  return {
    ...defaultData,

    ...data,
    fromDate: formatDate(data.fromDate as string),
    toDate: formatDate(data.toDate as string),
  }
}
