import { zodResolver } from '@hookform/resolvers/zod'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

//import AssortmentToExclude from './components/IncentiveAssortmentToExclude'
//import AssortmentToInclude from './components/IncentiveAssortmentToInclude'
import { assortmentFormatter } from '../../helper/assortmentDataFormatter'
import mapIntentivetFetchedTypeToTableData from '../../helper/IntentiveDataTbleExtractor'
import { useIncentiveCreateAssortmentData } from '../../hooks_api/useIncentiveCreateAssortmentData'
import { useIntentiveAssortmentDataById } from '../../hooks_api/useIntentiveAssortmentDataById'
import { useIncentiveAssortmentManagementDataStore } from '../../store/useIncentiveAssortmentManagementDataStore'
import { useIncentiveAssortmentManagementStore } from '../../store/useIncentiveAssortmentManagementStore'
import IntentiveAssortmentTableVIewer from '../IncentiveAssortmentManagementTable/IntentiveAssortmentTableVIewer'
import { IntentiveTableData } from '../IncentiveAssortmentManagementTable/IntentiveAssortmentTableVIewer/IntentiveAssortmentTableVIewer'

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


export const IntensiveFormSchema = z.object({
  assortmentName: z.string().min(2).max(50),
  description: z.string().optional(),
})

function IncentiveAssortmentManagementForm() {
  const assortmentId = useIncentiveAssortmentManagementDataStore(
    (state) => state.currentIntentiveMasterId
  )
  const clearId = useIncentiveAssortmentManagementDataStore(
    (state) => state.clearCurrentIntentiveMasterId
  )
  const { assortmentData, isLoading } = useIntentiveAssortmentDataById(assortmentId)

  const { createAssortment, isPending } = useIncentiveCreateAssortmentData()
  const mode = useIncentiveAssortmentManagementStore((state) => state.mode)
  const closeModal = useIncentiveAssortmentManagementStore((state) => state.close)

  const form = useForm<z.infer<typeof IntensiveFormSchema>>({
    resolver: zodResolver(IntensiveFormSchema),
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

  async function onSubmit(values: z.infer<typeof IntensiveFormSchema>) {
    try {
      const sendedData = assortmentFormatter(values)
      console.log(sendedData)

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
    const formattedIntentiveData: IntentiveTableData = Array.isArray(assortmentData)
      ? mapIntentivetFetchedTypeToTableData(assortmentData[0])
      : mapIntentivetFetchedTypeToTableData(assortmentData)

    return <IntentiveAssortmentTableVIewer data={formattedIntentiveData} />
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
            {/* <Tabs defaultValue="account" className="">
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
            </Tabs> */}
          </div>
          <div className="float-end">
            <Button type="submit" disabled={isPending}>
              {isPending ? 'Submiting' : 'Submit'}
            </Button>
            <Button  className="btn btn-primary m-3" onClick={closeModal}>
            Cancel
          </Button>
          </div>
        </form>
      </Form>
    </div>
  )
}

export default IncentiveAssortmentManagementForm
