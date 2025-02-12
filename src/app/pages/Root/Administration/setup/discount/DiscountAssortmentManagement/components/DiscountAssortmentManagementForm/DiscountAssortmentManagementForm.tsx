import { zodResolver } from '@hookform/resolvers/zod'
import { useQueryClient } from '@tanstack/react-query'
import { useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'


import { useGetGeneratedItems } from './components/DiscountAssortmentListTable/hooks_api/useGetItemFilterWise'
import DiscountAssortmentTab from './components/DiscountAssortmentTab'
import { discountAssortmentFormatter } from '../../helper/discountAssortmentDataFormatter'
import mapDiscountFetchedTypeToTableData from '../../helper/DiscountDataTbleExtracter'
import { useCreateDiscountAssortment } from '../../hooks_api/useCreateDiscountAssortmentData'
import { useDiscountAssortmentDataById } from '../../hooks_api/useDiscountAssortmentDataById'
import { useDiscountMasterDataStore } from '../../store/useDiscountAssortmentManagementDataStore'
import { useDiscountAssortmentManagementStore } from '../../store/useDiscountAssortmentManagementStore'
import DiscountAssortmentTableVIewer, {
  DiscountTableData,
} from '../DiscountAssortmentTableVIewer/DiscountAssortmentVIewer'
import { useGeneratedItemsDataStore } from './components/DiscountAssortmentListTable/store/useGeneratedItemDataStore'

import GlobalViewerLoader from '@/components/GlobalViewerLoader'
import { Button } from '@/components/ui/button'

export const DiscountFormSchema = z.object({
  assortmentName: z.string().min(2).max(50),
  description: z.string().optional(),
})

function DiscountAssortmentManagementForm() {
  const queryClient = useQueryClient()
  const assortmentId = useDiscountMasterDataStore((state) => state.currentDiscountMasterId)
  const clearId = useDiscountMasterDataStore((state) => state.clearCurrentDiscountMasterId)
  const { assortmentData, isLoading } = useDiscountAssortmentDataById(assortmentId)
  const mode = useDiscountAssortmentManagementStore((state) => state.mode)
  const setMode = useDiscountAssortmentManagementStore((state) => state.setMode)
  const { createAssortment, isPending } = useCreateDiscountAssortment()
  const closeModal = useDiscountAssortmentManagementStore((state) => state.close)
  const { generatedItems } = useGetGeneratedItems()
  const selectedGeneratedItems = useGeneratedItemsDataStore((state) => state.selections)
  const clearSelections = useGeneratedItemsDataStore((state) => state.clearSelections)
  // const filteredItems=generatedItems.filter(item=>item.hsnsacCode)
  let includedCount = 0;
let excludedCount = 0;
  const assortmentDetail = generatedItems
    // Pehle, sirf un items ko le lo jin ke liye selection available hai aur default se alag hai.
    .filter((item) => {
      const status = selectedGeneratedItems[item.itemCode]
      return status && status !== 'default'
    })
    .map((item, index) => {
      // Get the selection for this item.
      const status = selectedGeneratedItems[item.itemCode] // "included" ya "excluded"
      let lineNum = 0;

      if (status === 'included') {
        includedCount += 1;
        lineNum = includedCount;
      } else if (status === 'excluded') {
        excludedCount += 1;
        lineNum = excludedCount;
      }
      return {
        assortmentID: mode === 'Create' ? 0 : assortmentId,
        itemCode: item.itemCode,
        itemName: item.itemName,
        tableID: status === 'included' ? 1 : status === 'excluded' ? 2 : 0, // agar default ho, to 0 (ya ignore kar sakte ho)
        lineNum, // as per requirement
        barcode: item.itemCode, // barcode = itemCode
        group: String(item.itemGroup), // yahan status ko hi group bana rahe hain,
        // agar tumhe koi aur transformation chahiye (jaise "included" ko "DeoGroup" mein change karna), to woh yahan karo.
      }
    })

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

  async function onSubmit(values: z.infer<typeof DiscountFormSchema>) {
    try {
      const sendedData = discountAssortmentFormatter(
        values,
        mode,
        Number(assortmentId),
        assortmentDetail
      )
      console.log(sendedData)

      await createAssortment(sendedData)
      closeModal()
      setMode('Create')
      clearSelections()
      queryClient.setQueryData(['generatedDiscountitems'], [])
      clearId()
    } catch (err: unknown) {
      if (err instanceof Error) {
        throw new Error(err.message)
      }
    }
  }

  function handleClose(){
    closeModal()
    queryClient.setQueryData(['generatedDiscountitems'], [])
    clearSelections()
    setMode('Create')
  }

  if (isLoading && mode === 'View') {
    return <GlobalViewerLoader />
  }

  if (mode === 'View') {
    if (isLoading) return <GlobalViewerLoader />
    if (!assortmentData) return <h3>No data available</h3>

    // Format data properly
    const formattedDiscountrData: DiscountTableData = Array.isArray(assortmentData)
      ? mapDiscountFetchedTypeToTableData(assortmentData[0])
      : mapDiscountFetchedTypeToTableData(assortmentData)

    return <DiscountAssortmentTableVIewer data={formattedDiscountrData} />
  }

 

  return (
    <div>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
          <DiscountAssortmentTab />
          <div className="ms-auto">
            <ul className='flex gap-3 justify-end'>
              <li>
                <Button type="submit" disabled={isPending}>
                  {isPending ? 'Submiting' : 'Submit'}
                </Button>
              </li>
              <li>
                <Button type="button" onClick={handleClose}>Cancel</Button>
              </li>
            </ul>
          </div>
        </form>
      </FormProvider>
    </div>
  )
}

export default DiscountAssortmentManagementForm
