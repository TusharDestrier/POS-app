import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import { toast } from 'sonner'

import SalesPersonTab from './components/SalesPersonTab'
import StoreAllocationTab from './components/StoreAllocationTab'
import { salesPersonFormatter } from '../../helper/SalesPersonFormatter'
import { useCreateSalesPerson } from '../../hooks_api/useCreateSalesPerson'
import { SalesPersonFormSchema } from '../../schemas/SalesPersonForm.schema'
import useSalesPerson from '../../store/useSalesPerson'

import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'




function SalesPersonForm() {
  const { createSalesPerson, isLoading, error } = useCreateSalesPerson()
  const closeModal = useSalesPerson((state) => state.close)

  const formMethods = useForm({
    resolver: zodResolver(SalesPersonFormSchema),
    defaultValues: {
      salesPerson: {
        firstName: 'Tushar',
        lastName: 'dutta',
        mobileNo: '9831112344',
        whatsappNo: '3242324242',
        // email: z.string().email({ message: 'Invalid email address.' }).optional(),
        email: 'tfegegr@gmail.com',
        employeeId: 'emp1',
        allocateRole: 'admin',
        allocateUser: '',
        inactive: false,
      }, // Initialize with appropriate default values if necessary
      storeAllocation: {
        allocations: [
          {
            storeName: 'store1',
            storeCode: '221',
            startDate: new Date(),
            endDate: new Date(),
            transferred: false,
          },
        ],
      },
    },
  })

  const onSubmit = formMethods.handleSubmit(
    async (data) => {
      // console.log('Form Data Submitted: ',) // Logs if submission is successful
      const transformData = salesPersonFormatter(data)
      try {
        await createSalesPerson(transformData)
        closeModal() // ✅ Success pe modal close
        toast.success('Customer Created', {
          style: {
            backgroundColor: '#e3ffea',
            color: '#3ed665',
          },
        })
      } catch (err: any) {
        toast.error(err.message, {
          style: {
            backgroundColor: '#f7edeb',
            color: '#ff6242',
          },
        }) // Server se aayi specific error ya generic error
      }
    },

    (errors) => {
      console.log('Validation Errors: ', errors) // Logs validation errors, if any
    }
  )

  return (
    // <div className="border p-4 border-black border-solid h-[430px] overflow-y-auto">
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
          <Button type="submit" className="btn btn-primary" disabled={isLoading}>
            {isLoading ? 'Submitting...' : 'Submit'}
          </Button>
        </div>
        {error && <p className="text-end">{error}</p>}
      </form>
    </FormProvider>
  )
}

export default SalesPersonForm
