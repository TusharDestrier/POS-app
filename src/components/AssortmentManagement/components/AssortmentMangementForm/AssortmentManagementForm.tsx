import { zodResolver } from '@hookform/resolvers/zod'
import { useQueryClient } from '@tanstack/react-query'
import { useEffect } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'

import AssortmentManagementTab from './components/AssortmentManagementTabs'
import { assortmentFormatter } from '../../helper/assortmentPostFormatter'
import { useGeneratedItemsDataStore } from '../../hooks/useGeneratedItemsDataStore'
import { useAssortmentDataById } from '../../hooks_api/useAssortmentDataById'
import { useCreateAssortment } from '../../hooks_api/useCreateAssortment'
import { useAssortmentManagementDataStore } from '../../store/useAssortmentManagementDataStore'
import { useAssortmentManagementStore } from '../../store/useAssortmentManagementStore'

import GlobalViewerLoader from '@/components/GlobalViewerLoader'
import { Button } from '@/components/ui/button'
import { useGetGeneratedItems } from '@/hooks_api/useGetItemFilterWise'

export const FormSchema = z.object({
  assortmentName: z.string().min(2).max(50),
  description: z.string().optional(),
  assortmentType: z.enum(['P', 'B', 'C']).optional(),
  isActive: z.boolean().optional(),
})

function AssortmentManagementForm({ type }: { type: 'P' | 'D' | 'S' }) {
  const queryClient = useQueryClient()
  const assortmentId = useAssortmentManagementDataStore((state) => state.currentAssortmentId)
  const clearId = useAssortmentManagementDataStore((state) => state.clearCurrentAssortmentId)
  const { assortmentData, isLoading } = useAssortmentDataById(assortmentId, type)
  const mode = useAssortmentManagementStore((state) => state.mode)
  const setMode = useAssortmentManagementStore((state) => state.setMode)
  const { createAssortment, isPending } = useCreateAssortment()
  const closeModal = useAssortmentManagementStore((state) => state.close)
  const { generatedItems } = useGetGeneratedItems()
  const selectedGeneratedItems = useGeneratedItemsDataStore((state) => state.selections)
  const clearSelections = useGeneratedItemsDataStore((state) => state.clearSelections)

  let includedCount = 0
  let excludedCount = 0
  const assortmentDetail = generatedItems
    .filter((item) => {
      const status = selectedGeneratedItems[item.itemCode]
      return status && status !== 'default'
    })
    .map((item) => {
      const status = selectedGeneratedItems[item.itemCode]
      let lineNum = 0

      if (status === 'included') {
        includedCount += 1
        lineNum = includedCount
      } else if (status === 'excluded') {
        excludedCount += 1
        lineNum = excludedCount
      }
      return {
        assortmentID: mode === 'Create' ? 0 : assortmentId,
        itemCode: item.itemCode,
        itemName: item.itemName,
        tableID: status === 'included' ? 1 : status === 'excluded' ? 2 : 0,
        lineNum,
        barcode: item.itemCode,
        group: String(item.itemGroup),
      }
    })

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      assortmentName: '',
      description: '',
      assortmentType:'P',
      isActive:false
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

  async function onSubmit(values: z.infer<typeof FormSchema>) {
    try {
      const sendedData = assortmentFormatter(
        values,
        mode,
        Number(assortmentId),
        assortmentDetail,
        type
      )

      await createAssortment(sendedData)
      closeModal()

      setMode('Create')
      clearSelections()
      queryClient.setQueryData(['generatedAssortmentitems'], [])
      clearId()
    } catch (err: unknown) {
      if (err instanceof Error) {
        throw new Error(err.message)
      }
    }
  }

  function handleClose() {
    closeModal()
    queryClient.setQueryData(['generatedAssortmentitems'], [])
    clearSelections()
    setMode('Create')
  }

  if (isLoading && mode === 'View') {
    return <GlobalViewerLoader />
  }

  if (mode === 'View') {
    if (isLoading) return <GlobalViewerLoader />
    if (!assortmentData) return <h3>No data available</h3>

    // // Format data properly
    // const formattedDiscountrData: DiscountTableData = Array.isArray(assortmentData)
    //   ? mapDiscountFetchedTypeToTableData(assortmentData[0])
    //   : mapDiscountFetchedTypeToTableData(assortmentData)

    return JSON.stringify(assortmentData)
  }

  return (
    <div>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
          <AssortmentManagementTab />
          <div className="ms-auto">
            <ul className="flex gap-3 justify-end">
              <li>
                <Button type="submit" disabled={isPending}>
                  {isPending ? 'Submiting' : 'Submit'}
                </Button>
              </li>
              <li>
                <Button type="button" onClick={handleClose}>
                  Cancel
                </Button>
              </li>
            </ul>
          </div>
        </form>
      </FormProvider>
    </div>
  )
}

export default AssortmentManagementForm
