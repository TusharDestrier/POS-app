import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'

import DiscountMasterFormSetup from './components/DiscountMasterFormSetup'
import DiscountMasterSetupAssortmentModal from './components/DiscountMasterSetupAssortmentModal'
import { DiscountMasterSchema } from './schema'

import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'

function DiscountMasterForm() {
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

  function onSubmit(values: z.infer<typeof DiscountMasterSchema>) {
    console.log(values)
  }
  return (
    <div>
      <FormProvider {...formMethods}>
        <form onSubmit={formMethods.handleSubmit(onSubmit)} className="">
          <Tabs defaultValue="setup" className="w-full  ">
            <TabsList className='grid grid-cols-2 gap-4 mb-6'>
              <TabsTrigger value="setup">Setup</TabsTrigger>
              <TabsTrigger value="terms">terms</TabsTrigger>
            </TabsList>
            <TabsContent value="setup">
              <DiscountMasterFormSetup />
            </TabsContent>
            <TabsContent value="terms">Change your terms here.</TabsContent>
          </Tabs>
          <DiscountMasterSetupAssortmentModal />
          <div className='text-right pb-10'>
            <Button type="submit">Submit</Button>
          </div>
        </form>
      </FormProvider>
    </div>
  )
}

export default DiscountMasterForm
