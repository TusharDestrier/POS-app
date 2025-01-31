import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'

import StoreWiseSetupTab from './components/StoreSpecificTab'
import { StoreWisePolicyFormatter } from './helper/StoreWisePolicyFormatter'
import { useCreateOrganizationPolicy } from './hooks_api/useCreateStoreWisePolicy'
import { useStorePolicyData } from './hooks_api/useStoreWisePolicyData'
import { PostStoreWisePolicySchema } from './schemas/PostStoreWisePolicySchema'
import { useStoreWisePolicyDataStore } from './store/useStoreWisePolicyDataStore'
import useStoreWisePolicyHead from './store/useStoreWisePolicyHead'

import { Button } from '@/components/ui/button'
import { useEffect } from 'react'

function StoreSpecificPolicy() {
  const {storePolicyData}=useStorePolicyData(0,1);
  const { createStoreWisePolicy, error } = useCreateOrganizationPolicy()
  const closeModal = useStoreWisePolicyHead((state) => state.toggleOpen)
  const clearId = useStoreWisePolicyDataStore((state) => state.clearStoreWisePolicyId)
const setMode=useStoreWisePolicyHead(state=>state.setMode)
  const formMethods = useForm({
    resolver: zodResolver(PostStoreWisePolicySchema),
    defaultValues: {
      storeID: '',
      fromDate: '',
      toDate: '',
      pendingSettlementDays: 0,
      footfallEntryRequiredInDaySettlement: 'N',
      maxAllowDiscountPolicyValidationID: 0,
      maxBillAmountSinglePOSBill: 0,
      pan: '',
      creditCardDetailsCapturePolicyID: 0,
      isCCardAuthNoEntryMandatory: 'N',
      allowBackDateEntry: 'N',
      backDateEntryDays: 0,
      negativeStockCheckingModeID: 0,
      allowItemLevelDiscount: 'N',
      maxAllowDiscountPercentage: 0,
      allowBillLevelDiscount: 'N',
      maxAllowDiscountAmount: 0,
      allowToSelectActivePromotionFromList: 'N',
      allowToClearAppliedPromotion: 'N',
      salePersonTaggingMandatory: 'N',
      salePersonTaggingPolicyID: 0,
      customerTaggingMandatory: 'N',
      returnOfItemWithin: 0,
      creditNoteValidityDays: 0,
      billTaggingMandatoryDuringReturn: 'N',
      noOfCopiesToBePrint: 0,
      excessGoodsReceiptTolerancePercentage: 0,
      shortGoodsReceiptTolerancePercentage: 0,
      dueDateMandatoryInPOSOrder: 'N',
      minPercentageOfAdvanceDuringPOSOrder: 0,
      posOrderCancellationIsMandatory: 'N',
    },
  })

  console.log(storePolicyData);
  
  useEffect(() => {
    if (storePolicyData) {
      setMode('Edit');
      formMethods.reset({
        storeID: String(storePolicyData.storeID) || '1',
        fromDate: storePolicyData.fromDate || '',
        toDate: storePolicyData.toDate || '',
        pendingSettlementDays: storePolicyData.pendingSettlementDays || 20,
        footfallEntryRequiredInDaySettlement: storePolicyData.footfallEntryRequiredInDaySettlement || 'N',
        maxAllowDiscountPolicyValidationID: Number(storePolicyData.maxAllowDiscountPolicyValidationID) || 1,
        maxBillAmountSinglePOSBill: storePolicyData.maxBillAmountSinglePOSBill || 0,
        pan: storePolicyData.pan || '8844443G',
        creditCardDetailsCapturePolicyID: Number(storePolicyData.creditCardDetailsCapturePolicyID) || 1,
        isCCardAuthNoEntryMandatory: storePolicyData.isCCardAuthNoEntryMandatory || 'N',
        allowBackDateEntry: storePolicyData.allowBackDateEntry || 'N',
        backDateEntryDays: storePolicyData.backDateEntryDays || 1,
        negativeStockCheckingModeID: Number(storePolicyData.negativeStockCheckingModeID) || 1,
        allowItemLevelDiscount: storePolicyData.allowItemLevelDiscount || 'N',
        maxAllowDiscountPercentage: storePolicyData.maxAllowDiscountPercentage || 2,
        allowBillLevelDiscount: storePolicyData.allowBillLevelDiscount || 'N',
        maxAllowDiscountAmount: storePolicyData.maxAllowDiscountAmount || 2,
        allowToSelectActivePromotionFromList: storePolicyData.allowToSelectActivePromotionFromList || 'N',
        allowToClearAppliedPromotion: storePolicyData.allowToClearAppliedPromotion || 'N',
        salePersonTaggingMandatory: storePolicyData.salePersonTaggingMandatory || 'N',
        salePersonTaggingPolicyID: Number(storePolicyData.salePersonTaggingPolicyID) || 1,
        customerTaggingMandatory: storePolicyData.customerTaggingMandatory || 'N',
        returnOfItemWithin: storePolicyData.returnOfItemWithin || 5,
        creditNoteValidityDays: storePolicyData.creditNoteValidityDays || 3,
        billTaggingMandatoryDuringReturn: storePolicyData.billTaggingMandatoryDuringReturn || 'N',
        noOfCopiesToBePrint: storePolicyData.noOfCopiesToBePrint || 4,
        excessGoodsReceiptTolerancePercentage: storePolicyData.excessGoodsReceiptTolerancePercentage || 33,
        shortGoodsReceiptTolerancePercentage: storePolicyData.shortGoodsReceiptTolerancePercentage || 32,
        allowReceiveDamagedGoods: storePolicyData.allowReceiveDamagedGoods || 'N',
        dueDateMandatoryInPOSOrder: storePolicyData.dueDateMandatoryInPOSOrder || 'N',
        minPercentageOfAdvanceDuringPOSOrder: storePolicyData.minPercentageOfAdvanceDuringPOSOrder || 20,
        posOrderCancellationIsMandatory: storePolicyData.posOrderCancellationIsMandatory || 'N',
      });
    } else {
      setMode('Create');
    }
  }, [storePolicyData, formMethods]);
  
  
  // Handle form submission
  async function onSubmit(data: z.infer<typeof PostStoreWisePolicySchema>) {
    const formattedData = StoreWisePolicyFormatter(data, 1)
    console.log('Formatted Data:', formattedData)
    console.log("API call success");
    try {
       console.log("Formatted Data:", formattedData);
       await createStoreWisePolicy(formattedData);
     // console.log(data)
      closeModal()
      clearId()
      // console.log(data)
    } catch (err) {
      console.error(err)
    }
  }

  // Error handling
  if (error) {
    return <p>{error.message}</p>
  }

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={formMethods.handleSubmit(onSubmit)}>
        <StoreWiseSetupTab />
        <div className="h-[60px] sticky bottom-0 right-0 flex justify-end items-center">
        <Button type="submit" className="btn btn-primary">
            Submit
          </Button>
          {/* <Button type="submit" className="btn btn-primary">
            Cancel
          </Button> */}
        </div>
      </form>
    </FormProvider>
  )
}

export default StoreSpecificPolicy
