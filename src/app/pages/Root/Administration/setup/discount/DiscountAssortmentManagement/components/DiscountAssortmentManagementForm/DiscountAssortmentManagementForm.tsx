import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'


import DiscountAssortmentTab from './components/DiscountAssortmentTab'
import { discountAssortmentFormatter } from '../../helper/discountAssortmentDataFormatter'
import mapDiscountFetchedTypeToTableData from '../../helper/DiscountDataTbleExtracter'
import { useCreateDiscountAssortment } from '../../hooks_api/useCreateDiscountAssortmentData'
import { useDiscountAssortmentDataById } from '../../hooks_api/useDiscountAssortmentDataById'
import { useDiscountMasterDataStore } from '../../store/useDiscountAssortmentManagementDataStore'
import { useDiscountAssortmentManagementStore } from '../../store/useDiscountAssortmentManagementStore'
import DiscountAssortmentTableVIewer, { DiscountTableData } from './components/DiscountAssortmentListTable/DiscountAssortmentTableVIewer/DiscountAssortmentVIewer'

import GlobalViewerLoader from '@/components/GlobalViewerLoader'
import { Button } from '@/components/ui/button'


export const DiscountFormSchema = z.object({
  assortmentName: z.string().min(2).max(50),
  description: z.string().optional(),
})

function DiscountAssortmentManagementForm() {
  const assortmentId = useDiscountMasterDataStore((state) => state.currentDiscountMasterId)
  const clearId = useDiscountMasterDataStore((state) => state.clearCurrentDiscountMasterId)
  const { assortmentData, isLoading } = useDiscountAssortmentDataById(assortmentId)
  const mode = useDiscountAssortmentManagementStore((state) => state.mode)
  const { createAssortment, isPending } = useCreateDiscountAssortment()
  const closeModal = useDiscountAssortmentManagementStore((state) => state.close)
  const form = useForm<z.infer<typeof DiscountFormSchema>>({
    resolver: zodResolver(DiscountFormSchema),
    defaultValues: {
      assortmentName: '',
      description: '',
    },
  })

  useEffect(() => {
    if (assortmentData && mode === 'Edit') {
      form.reset({
        assortmentName: assortmentData.assortmentName || '',
        description: assortmentData.description || '',
      })
    }
  }, [mode, assortmentData, form.reset])
   
  console.log(assortmentData, mode)

  async function onSubmit(values: z.infer<typeof DiscountFormSchema>) {
    try {
      const sendedData = discountAssortmentFormatter(values, mode, Number(assortmentId))
      await createAssortment(sendedData)
      closeModal()
      clearId()
    } catch (err: unknown) {
      if (err instanceof Error) {
        throw new Error(err.message)
      }
    }
  }

  if (isLoading && mode === 'View') {
    return <GlobalViewerLoader />
  }


  if (mode === 'View') {
    if (isLoading) return <GlobalViewerLoader />;
    if (!assortmentData) return <h3>No data available</h3>; 
  
    // Format data properly
    const formattedDiscountrData: DiscountTableData = Array.isArray(assortmentData)
      ? mapDiscountFetchedTypeToTableData(assortmentData[0])
      : mapDiscountFetchedTypeToTableData(assortmentData);
  
    return <DiscountAssortmentTableVIewer data={formattedDiscountrData} />;
  }
  

  // if (assortmentData && mode === 'View' && !isLoading) {
  //   return JSON.stringify(assortmentData)
  // }


  return (
    <div>
      <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        <DiscountAssortmentTab />
        <div className="ms-auto">
          <Button type="submit" disabled={isPending}>
            {isPending ? 'Submiting' : 'Submit'}
          </Button>
        </div>
        </form>
      </FormProvider>
    </div>
  )
}

export default DiscountAssortmentManagementForm
