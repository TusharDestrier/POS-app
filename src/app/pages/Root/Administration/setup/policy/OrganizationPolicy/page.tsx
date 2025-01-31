import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'

import OrganizationTab from './components/OrganizationTab'
import { OrganizationPolicyFormatter } from './helper/OrganizationPolicyFormatter'
import { useCreateOrganizationPolicy } from './hooks_api/useCreateOrganizationPolicy'
//import { useOrganizationPolicyDataById } from './hooks_api/useOrganizationPolicyById'
import { useOrganizationPolicyData } from './hooks_api/useOrganizationPolicyData'
import { PostOrganizationPolicySchema } from './schemas/PostOrganizationPolicySchema'
import { useOrganizationPolicyDataStore } from './store/useOrganizationPolicyDataStore'
import useOrganizationPolicyHead from './store/useOrganizationPolicyHead'

import GlobalViewerLoader from '@/components/GlobalViewerLoader'
import { Button } from '@/components/ui/button'
//import GlobalViewerLoader from '@/components/GlobalViewerLoader'

function OrganizationPage() {
  const { createOrganizationPolicy, isPending } = useCreateOrganizationPolicy()
  const { organizationPolicyData, isLoading } = useOrganizationPolicyData()
  const clearId = useOrganizationPolicyDataStore((state) => state.clearOrganizationPolicyId)
const setMode=useOrganizationPolicyHead(state=>state.setMode);
  const formMethods = useForm({
    resolver: zodResolver(PostOrganizationPolicySchema),
    defaultValues: {
      pendingSettlementDays: 0,
      footfallEntryRequiredDaySettlement: '',
      maxAllowDiscountPolicyValidationID: '',
      maxBillAmountSinglePOSBill: '',
      pan: '',
      creditCardDetailsCapturePolicyID: '',
      isCCardAuthNoEntryMandatory: '',
      allowBackDateEntry: '',
      backDateEntryDays: '',
      negativestockcheckingmode: '',
      picture: '',
      allowItemLevelDiscount: '',
      allowBillLevelDiscount: '',
      maxAllowDiscountPercentage: '',
      maxAllowDiscountAmount: '',
      allowToSelectActivePromotionFromList: '',
      allowToClearAppliedPromotion: '',
      salePersonTaggingMandatory: '',
      salePersonTaggingPolicyID: '',
      customerTaggingIsMandatory: '',
      returnOfItemWithin: '',
      creditNoteValidityDays: '',
      billTaggingMandatoryDuringReturn: '',
      numberOfCopiesPrint: '',
      excessGoodsReceiptTolerancePercentage: '',
      shortGoodsReceiptTolerancePercentage: '',
      allowToReceiveDamagedGoods: '',
      dueDateIsMandatoryInPOSOrder: '',
      minPercentageOfAdvanceDuringPOSOrder: '',
      posOrderCancellationIsMandatory: '',
    },
  })

  useEffect(() => {
    if (organizationPolicyData?.length > 0) {
      setMode('Edit')
      const lastPolicy = organizationPolicyData?.[organizationPolicyData.length - 1]
      formMethods.reset({
        pendingSettlementDays: String(lastPolicy?.pendingSettlementDays) || 30,
        footfallEntryRequiredDaySettlement: lastPolicy?.footfallEntryRequiredDaySettlement || 'N',
        maxAllowDiscountPolicyValidationID: String(lastPolicy?.maxAllowDiscountPolicyValidationID) || '1',
        maxBillAmountSinglePOSBill: String(lastPolicy?.maxBillAmountSinglePOSBill) || '22',
        pan: String(lastPolicy?.pan) || '988994670j',
        creditCardDetailsCapturePolicyID: String(lastPolicy?.creditCardDetailsCapturePolicyID) || '1',
        isCCardAuthNoEntryMandatory: String(lastPolicy?.isCCardAuthNoEntryMandatory) || 'N',
        allowBackDateEntry: String(lastPolicy?.allowBackDateEntry) || 'N',
        backDateEntryDays: String(lastPolicy?.backDateEntryDays) || '5',
        negativestockcheckingmode: String(lastPolicy?.stockCheck) || "1",
        picture: String(lastPolicy?.picture) || '',
        allowItemLevelDiscount: String(lastPolicy?.allowItemLevelDiscount) || 'N',
        allowBillLevelDiscount: String(lastPolicy?.allowBillLevelDiscount) || 'N',
        maxAllowDiscountPercentage: String(lastPolicy?.maxAllowDiscountPercentage) || '0',
        maxAllowDiscountAmount: String(lastPolicy?.maxAllowDiscountAmount) || '0',
        allowToSelectActivePromotionFromList: String(lastPolicy?.allowToSelectActivePromotionFromList) || 'N',
        allowToClearAppliedPromotion: String(lastPolicy?.allowToClearAppliedPromotion) || 'N',
        salePersonTaggingMandatory: String(lastPolicy?.salePersonTaggingMandatory) || 'N',
        salePersonTaggingPolicyID: String(lastPolicy?.salePersonTaggingPolicyID) || '1',
        customerTaggingIsMandatory: String(lastPolicy?.customerTaggingIsMandatory) || 'N',
        returnOfItemWithin: String(lastPolicy?.returnOfItemWithin) || '0',
        creditNoteValidityDays: String(lastPolicy?.creditNoteValidityDays) || '0',
        billTaggingMandatoryDuringReturn: String(lastPolicy?.billTaggingMandatoryDuringReturn) || 'N',
        noOfCopiesToBePrint: String(lastPolicy?.noOfCopiesToBePrint) || '3',
        excessGoodsReceiptTolerancePercentage: String(lastPolicy?.excessGoodsReceiptTolerancePercentage) || '0',
        shortGoodsReceiptTolerancePercentage: String(lastPolicy?.shortGoodsReceiptTolerancePercentage) || '0',
        allowToReceiveDamagedGoods: String(lastPolicy?.allowToReceiveDamagedGoods) || 'N',
        dueDateIsMandatoryInPOSOrder: String(lastPolicy?.dueDateIsMandatoryInPOSOrder) || 'N',
        minPercentageOfAdvanceDuringPOSOrder: String(lastPolicy?.minPercentageOfAdvanceDuringPOSOrder) || '0',
        posOrderCancellationIsMandatory: String(lastPolicy?.posOrderCancellationIsMandatory) || 'N',
      })
    } else {
      setMode('Create')
    }
  }, [organizationPolicyData])
  

  async function onSubmit(data: z.infer<typeof PostOrganizationPolicySchema>) {
    const formattedData = OrganizationPolicyFormatter(data, String(organizationPolicyData?.[0]?.orgPolicyID))
    console.log('Formatted Data:', formattedData)

    try {
      await createOrganizationPolicy(formattedData)
      clearId()
    } catch (err) {
      console.error(err)
    }
  }

  if (isLoading) {
    return <GlobalViewerLoader />
  }

  return (
    <FormProvider {...formMethods}>
      <form onSubmit={formMethods.handleSubmit(onSubmit)}>
        <OrganizationTab />
        <div className="h-[60px] sticky bottom-0 right-0 flex justify-end items-center">
          <Button type="submit" className="btn btn-primary" disabled={isPending}>
            {isPending ? 'Submiting' : 'Submit'}
          </Button>
        </div>
      </form>
    </FormProvider>
  )
}

export default OrganizationPage
