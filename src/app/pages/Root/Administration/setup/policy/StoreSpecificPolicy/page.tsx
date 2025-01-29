import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'

import StoreWiseSetupTab from './components/StoreSpecificTab'
import { StoreWisePolicyFormatter } from './helper/StoreWisePolicyFormatter'
import { useCreateOrganizationPolicy } from './hooks_api/useCreateStoreWisePolicy'
import { PostStoreWisePolicySchema } from './schemas/PostStoreWisePolicySchema'
import { useStoreWisePolicyDataStore } from './store/useStoreWisePolicyDataStore'
import useStoreWisePolicyHead from './store/useStoreWisePolicyHead'

import { Button } from '@/components/ui/button'

function StoreSpecificPolicy() {
  const { createStoreWisePolicy, error } = useCreateOrganizationPolicy()
  const closeModal = useStoreWisePolicyHead((state) => state.toggleOpen)
  const clearId = useStoreWisePolicyDataStore((state) => state.clearStoreWisePolicyId)

  const formMethods = useForm({
    resolver: zodResolver(PostStoreWisePolicySchema),
    defaultValues: {
      storeID: '1',
      fromDate: '',
      toDate: '',
      pendingSettlementDays: 20,
      footfallEntryRequiredInDaySettlement: 'N',
      maxAllowDiscountPolicyValidationID: "1",
      maxBillAmountSinglePOSBill: 0,
      pan: '8844443G',
      creditCardDetailsCapturePolicyID: "1",
      isCCardAuthNoEntryMandatory: 'N',
      allowBackDateEntry: 'N',
      backDateEntryDays: 1,
      negativeStockCheckingModeID: "1",
      allowItemLevelDiscount: 'N',
      maxAllowDiscountPercentage: 2,
      allowBillLevelDiscount: 'N',
      maxAllowDiscountAmount: 2,
      allowToSelectActivePromotionFromList: 'N',
      allowToClearAppliedPromotion: 'N',
      salePersonTaggingMandatory: 'N',
      salePersonTaggingPolicyID: 1,
      customerTaggingMandatory: 'N',
      returnOfItemWithin: 5,
      creditNoteValidityDays: 3,
      billTaggingMandatoryDuringReturn: 'N',
      noOfCopiesToBePrint: 4,
      excessGoodsReceiptTolerancePercentage: 33,
      shortGoodsReceiptTolerancePercentage: 32,
      dueDateMandatoryInPOSOrder: 'N',
      minPercentageOfAdvanceDuringPOSOrder: 20,
      posOrderCancellationIsMandatory: 'N',
    },
  })

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
