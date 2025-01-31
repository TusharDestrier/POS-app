export type FetchedStoreWisePolicyType = {
  storeSpecificPolicyID: number
  storeID: number
  fromDate: string
  toDate: string
  pendingSettlementDays: number
  footfallEntryRequiredInDaySettlement: string
  maxAllowDiscountPolicyValidationID: number
  maxBillAmountSinglePOSBill: number
  pan: string
  creditCardDetailsCapturePolicyID: number
  isCCardAuthNoEntryMandatory: string
  allowBackDateEntry: string
  backDateEntryDays: number
  negativeStockCheckingModeID: number
  allowItemLevelDiscount: string
  maxAllowDiscountPercentage: number
  allowBillLevelDiscount: string
  maxAllowDiscountAmount: number
  allowToSelectActivePromotionFromList: string
  allowToClearAppliedPromotion: string
  salePersonTaggingMandatory: string
  salePersonTaggingPolicyID: number
  customerTaggingMandatory: string
  returnOfItemWithin: number
  creditNoteValidityDays: number
  billTaggingMandatoryDuringReturn: string
  noOfCopiesToBePrint: number
  excessGoodsReceiptTolerancePercentage: number
  shortGoodsReceiptTolerancePercentage: number
  allowReceiveDamagedGoods: string
  dueDateMandatoryInPOSOrder: string
  minPercentageOfAdvanceDuringPOSOrder: number
  posOrderCancellationIsMandatory: string
  enteredBy: number
  usedFor: string
}

export type StoreWisePolicyResponseType = {
  returnCode: string
  returnMsg: string
}[]
