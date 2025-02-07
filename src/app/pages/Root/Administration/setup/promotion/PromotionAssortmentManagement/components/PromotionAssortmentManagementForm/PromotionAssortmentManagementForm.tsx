// import React from 'react'

//import { useFormContext } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import AssortmentToExclude from './components/PromotionAssortmentToExclude'
import AssortmentToInclude from './components/PromotionAssortmentToInclude'
import { PromotionassortmentDataFormatter } from '../../helper/promotionassortmentDataFormatter'
import mapPromotiontFetchedTypeToTableData from '../../helper/PromotionDataTbleExtracter'
import { useCreatePromotionAssortmentData } from '../../hooks_api/useCreatePromotionAssortmentData'
import { usePromotionAssortmentDataById } from '../../hooks_api/usePromotionAssortmentDataById'
import { usePromotioAssortmentManagementDataStore } from '../../store/usePromotioAssortmentManagementDataStore'
import { usePromotionAssortmentManagementStore } from '../../store/usePromotionAssortmentManagementStore'
import PromotionAssortmentTableVIewer, {
  PromotionTableData,
} from '../PromotionAssortmentManagementTable/PromotionAssortmentTableVIewer/PromotionAssortmentTableVIewer'

import GlobalViewerLoader from '@/components/GlobalViewerLoader'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

export const PromotionFormSchema = z.object({
  assortmentName: z.string().min(2).max(50),
  description: z.string().optional(),
})

function PromotionAssortmentManagementForm() {
  const assortmentId = usePromotioAssortmentManagementDataStore(
    (state) => state.currentPromotionMasterId
  )
  const clearId = usePromotioAssortmentManagementDataStore(
    (state) => state.clearCurrentPromotionMasterId
  )
  const { assortmentData, isLoading } = usePromotionAssortmentDataById(assortmentId)
  const { createAssortment, isPending } = useCreatePromotionAssortmentData()
  const mode = usePromotionAssortmentManagementStore((state) => state.mode)
  const closeModal = usePromotionAssortmentManagementStore((state) => state.close)
  const form = useForm<z.infer<typeof PromotionFormSchema>>({
    resolver: zodResolver(PromotionFormSchema),
    defaultValues: {
      assortmentName: '',
      description: '',
    },
  })

  useEffect(() => {
    if (assortmentData && mode === 'Edit') {
      setTimeout(() => {
        form.reset({
          assortmentName: assortmentData.assortmentName || '',
          description: assortmentData.description || '',
        })
      }, 0) // Small delay
    }
  }, [mode, assortmentData])

  async function onSubmit(values: z.infer<typeof PromotionFormSchema>) {
    try {
      const sendedData = PromotionassortmentDataFormatter(values, mode, Number(assortmentId))

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
    if (isLoading) return <GlobalViewerLoader />
    if (!assortmentData) return <h3>No data available</h3>

    // Format data properly
    const formattedPromotionData: PromotionTableData = Array.isArray(assortmentData)
      ? mapPromotiontFetchedTypeToTableData(assortmentData[0])
      : mapPromotiontFetchedTypeToTableData(assortmentData)

    return <PromotionAssortmentTableVIewer data={formattedPromotionData} />
  }

  return (
    <div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
          <FormField
            control={form.control}
            name="assortmentName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Assortment Name</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="description"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Input placeholder="shadcn" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div>
            <Tabs defaultValue="account" className="">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="account">Assortment to Include</TabsTrigger>
                <TabsTrigger value="password">Assortment to Exclude</TabsTrigger>
              </TabsList>
              <TabsContent value="account">
                <AssortmentToInclude />
              </TabsContent>
              <TabsContent value="password">
                <AssortmentToExclude />
              </TabsContent>
            </Tabs>
          </div>
          <div className="float-end">
            <Button type="submit" disabled={isPending}>
              {isPending ? 'Submiting' : 'Submit'}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}

export default PromotionAssortmentManagementForm
