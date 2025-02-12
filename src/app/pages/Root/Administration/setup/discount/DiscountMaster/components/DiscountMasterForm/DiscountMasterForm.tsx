import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'

import DiscountMasterFormSetup from './components/DiscountMasterFormSetup'
import DiscountMasterSetupAssortmentModal from './components/DiscountMasterSetupAssortmentModal'
import { DiscountMasterSchema } from './schema'
import discountMasterPostFormatter from '../../helper/discountMasterPostFormatter'
import { useCreateDiscountMaster } from '../../hooks_api/useCreateDiscountMasterData'

import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'


function DiscountMasterForm() {
  const { createDiscountMaster, isPending } = useCreateDiscountMaster()
  const formMethods = useForm<z.infer<typeof DiscountMasterSchema>>({
    resolver: zodResolver(DiscountMasterSchema),
    defaultValues: {
      name: 'name',
      discountType: 'G',
      discountBase: 'P',
      appliedOn: 'L',
      employeeDiscount: 'N',
      percentage: 3,
      maximumDiscount: 2,
      minimumBilling: 2,
      otpRequired: false,
      allowToChange: false,
      inactive: false,
      assortments: [{ id: '', name: '' }],
    },
  })

  async function onSubmit(values: z.infer<typeof DiscountMasterSchema>) {
    try {
      const data = discountMasterPostFormatter(values)
      await createDiscountMaster(data)
      console.log(data)
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(error.message)
      }
    }
  }
  return (
    <div>
      <FormProvider {...formMethods}>
        <form onSubmit={formMethods.handleSubmit(onSubmit)} className="">
          <Tabs defaultValue="setup" className="w-full  ">
            <TabsList className="grid grid-cols-2 gap-4 mb-6">
              <TabsTrigger value="setup">Setup</TabsTrigger>
              <TabsTrigger value="terms">terms</TabsTrigger>
            </TabsList>
            <TabsContent value="setup">
              <DiscountMasterFormSetup />
            </TabsContent>
            <TabsContent value="terms">Change your terms here.</TabsContent>
          </Tabs>
          <DiscountMasterSetupAssortmentModal />
          <div className="text-right pb-10">
            <Button type="submit" disabled={isPending}>
              {isPending ? 'Submitting' : 'Submit'}
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  )
}

export default DiscountMasterForm
