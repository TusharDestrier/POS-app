import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'

import DiscountMasterFormSetup from './components/DiscountMasterFormSetup'
import DiscountMasterSetupAssortmentModal from './components/DiscountMasterSetupAssortmentModal'
import { DiscountMasterSchema } from './schema'
import { useDiscountMasterDataStore } from '../../../DiscountAssortmentManagement/store/useDiscountAssortmentManagementDataStore'
import discountMasterPostFormatter from '../../helper/discountMasterPostFormatter'
import {  useCreateDiscountMaster } from '../../hooks_api/useCreateDiscountMasterData'
import { useDiscountMasterData } from '../../hooks_api/useDiscountMasterData'
import { useDiscountMasterDataById } from '../../hooks_api/useDiscountMasterDataById'
import useDiscountMasterStore from '../../store/useDiscountMasterStore'

import GlobalViewerLoader from '@/components/GlobalViewerLoader'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'



function DiscountMasterForm() {

  const mode = useDiscountMasterStore((state) => state.mode)
   const clearId = useDiscountMasterDataStore((state) => state.clearCurrentDiscountMasterId)
    const DiscountMasterhId = useDiscountMasterDataStore((state) => state.currentDiscountMasterId)
  
   const { DiscountMaster, isLoading } = useDiscountMasterDataById(Number(DiscountMasterhId) || null)
   // const customerID = useDiscountMasterDataStore((state) => state.currentDiscountMasterId)
    const {
       // customerData,
        isLoading: customerLoading,
        error: customerError,
      } = useDiscountMasterData()
  const { createDiscountMaster, error, isPending } = useCreateDiscountMaster()

        const closeModal = useDiscountMasterStore((state) => state.close)
      

       if (customerLoading && mode === 'View') {
          return <GlobalViewerLoader />
        }

        if (mode === 'View' && !isLoading) {
          return (
            <h3>
              {/* <PettyCashViewer data={pettyCash} /> */}
            </h3>
          )
        }
      if (customerError && mode === 'View') {
        return <h3>Sorry there is some problem</h3>
      }

  const formMethods = useForm<z.infer<typeof DiscountMasterSchema>>({
    resolver: zodResolver(DiscountMasterSchema),
    defaultValues: {
      name: 'name',
      discountType: 'General',
      discountBase: 'Percentage',
      appliedOn: 'Bill Level',
      employeeDiscount: 'N',
      percentage:3,
      maximumDiscount:2,
      minimumBilling:2,
      otpRequired: false,
      allowToChange: false,
      inactive: false,
      assortments: [{ id: '', name: '' }],
    },
  })

  const onSubmit = formMethods.handleSubmit(async (data) => {
     // console.log('Form Data Submitted: ',) // Logs if submission is successful
     const transformData = discountMasterPostFormatter(Number(DiscountMaster?.discountID), data)
     try {
       await createDiscountMaster(transformData)
       closeModal()
       clearId()
       //z console.log(transformData);
     } catch (err: unknown) {
       if (err instanceof Error) {
         throw new Error(err.message)
       }
     }
   })

  // function onSubmit(values: z.infer<typeof DiscountMasterSchema>) {
  //   const data= discountMasterPostFormatter(values);
  //   console.log(data)
  // }
  return (
    <div>
      <FormProvider {...formMethods}>
        <form onSubmit={(e) => {
          e.preventDefault() // Ensure default form submission behavior is prevented
          onSubmit() // Trigger submission
        }}>
          <Tabs defaultValue="setup" className="w-full  ">
            <TabsList className='grid grid-cols-2 gap-4 mb-6'>
              <TabsTrigger value="setup">Setup</TabsTrigger>
              <TabsTrigger value="terms">Terms</TabsTrigger>
            </TabsList>
            <TabsContent value="setup">
              <DiscountMasterFormSetup />
            </TabsContent>
            <TabsContent value="terms">Change your terms here.</TabsContent>
          </Tabs>
          <DiscountMasterSetupAssortmentModal />
          <div className="h-[60px] sticky bottom-0 right-0 flex justify-end items-center">
          <Button type="submit" className="btn btn-primary" disabled={isPending}>
            {isPending ? 'Submitting...' : 'Submit'}
          </Button>
        </div>
        {error && <p className="text-end">{error.message}</p>}
        </form>
      </FormProvider>
    </div>
  )
}

export default DiscountMasterForm
