import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'

import SalesPersonTab from './components/SalesPersonTab'
import StoreAllocationTab from './components/StoreAllocationTab'
import { SalesPersonFormSchema } from '../../schemas/SalesPersonForm.schema'

import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

function SalesPersonForm() {

  const formMethods = useForm({
    resolver: zodResolver(SalesPersonFormSchema),
    defaultValues: {
      salesPerson: {}, // Initialize with appropriate default values if necessary
      storeAllocation: {
        allocations: [
          {
            storeName: '',
            storeCode: '',
            startDate: new Date(),
            endDate: new Date(),
            transferred: false,
          },
        ],
      },
    },
    
  })

  const onSubmit = formMethods.handleSubmit(
    (data) => {
      console.log('Form Data Submitted: ', data) // Logs if submission is successful
    },
    (errors) => {
      console.log('Validation Errors: ', errors) // Logs validation errors, if any
    }
  )

  return (
    <FormProvider {...formMethods}>
      <form
        onSubmit={(e) => {
          e.preventDefault() // Ensure default form submission behavior is prevented
          onSubmit() // Trigger submission
        }}
      >
        <Tabs defaultValue="salesPerson" className="">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="salesPerson">Sales Person</TabsTrigger>
            <TabsTrigger value="storeAllocation">Store Allocation</TabsTrigger>
          </TabsList>
          <TabsContent value="salesPerson">
            <div>
              <h3 className="heading-secondary mb-3 mt-3">Sales Person</h3>
              <SalesPersonTab />
            </div>
          </TabsContent>
          <TabsContent value="storeAllocation">
            <h3 className="heading-secondary mb-3 mt-3">Store Allocation</h3>

            <StoreAllocationTab />
          </TabsContent>
        </Tabs>

        <div className="h-[60px] sticky bottom-0 right-0 flex justify-end items-center">
          <Button type='submit'>Submit</Button>
        </div>
      </form>
    </FormProvider>
  )
}

export default SalesPersonForm
