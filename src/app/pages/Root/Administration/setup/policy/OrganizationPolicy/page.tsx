import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'

import OrganizationTab from './components/OrganizationTab'
import { OrganizationPolicyFormatter } from './helper/OrganizationPolicyFormatter'
import { useCreateOrganizationPolicy } from './hooks_api/useCreateOrganizationPolicy';
//import { useOrganizationPolicyDataById } from './hooks_api/useOrganizationPolicyById'
import { PostOrganizationPolicySchema } from './schemas/PostOrganizationPolicySchema'
import { useOrganizationPolicyDataStore } from './store/useOrganizationPolicyDataStore'
import useOrganizationPolicyHead from './store/useOrganizationPolicyHead'

//import GlobalViewerLoader from '@/components/GlobalViewerLoader'
import { Button } from '@/components/ui/button'

function OrganizationPage() {
  const { createOrganizationPolicy, error } = useCreateOrganizationPolicy();
  //const { createOrganizationPolicy } = useCreateOrganizationPolicy();
  //const orgPolicyID = useOrganizationPolicyDataStore((state) => state.currentOrganizationPolicyId)
  // const { organizationPolicybyId, isLoading } = useOrganizationPolicyDataById(orgPolicyID);
  //const mode = useOrganizationPolicyHead((state) => state.mode)
  const closeModal = useOrganizationPolicyHead((state) => state.toggleOpen)
  const clearId = useOrganizationPolicyDataStore((state) => state.clearOrganizationPolicyId)

  const formMethods = useForm({
    resolver: zodResolver(PostOrganizationPolicySchema),
    defaultValues: {
      pendingSettlementDays: 29,
      footfallEntryRequiredDaySettlement: 'N',
      maxAllowDiscountPolicyValidationID: '1',
      maxBillAmountSinglePOSBill: '22',
      pan: '988994670j',
      creditCardDetailsCapturePolicyID: '1',
      isCCardAuthNoEntryMandatory: 'N',
      allowBackDateEntry: 'N',
      backDateEntryDays: '5',
      stockCheck: '1',
      picture: '',
      allowItemLevelDiscount: 'N',
      allowBillLevelDiscount: 'N',
      maxAllowDiscountPercentage: '0',
      maxAllowDiscountAmount: '0',
      allowToSelectActivePromotionFromList: 'N',
      allowToClearAppliedPromotion:"N",
      salePersonTaggingMandatory: 'N',
      salePersonTaggingPolicyID: '1',
      customerTaggingIsMandatory: 'N',
      returnOfItemWithin: '0',
      creditNoteValidityDays: '0',
      billTaggingMandatoryDuringReturn: 'N',
      numberOfCopiesPrint: '3',
      excessGoodsReceiptTolerancePercentage: '0',
      shortGoodsReceiptTolerancePercentage: '0',
      allowToReceiveDamagedGoods: 'N',
      dueDateIsMandatoryInPOSOrder: 'N',
      minPercentageOfAdvanceDuringPOSOrder: '0',
      posOrderCancellationIsMandatory: 'N',
    },
  })

  // Handle form submission
  async function onSubmit(data: z.infer<typeof PostOrganizationPolicySchema>) {
    const formattedData = OrganizationPolicyFormatter(data, 1)
    console.log('Formatted Data:', formattedData)

    try {
      // console.log("Formatted Data:", formattedData);
      await createOrganizationPolicy(formattedData);
      closeModal();
      clearId();
      // console.log(data)
    } catch (err) {
      console.error(err)
    }
  }

  // Loading state
  // if (isLoading && mode === 'View') {
  //   return <GlobalViewerLoader />;
  // }

  // Error handling
  // if (error) {
  //   return <p>{error.message}</p>;
  // }

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={formMethods.handleSubmit(onSubmit)}>
        <OrganizationTab />
        <div className="h-[60px] sticky bottom-0 right-0 flex justify-end items-center">
          <Button type="submit" className="btn btn-primary">
            Submit
          </Button>
        </div>
      </form>
    </FormProvider>
  )
}

export default OrganizationPage
