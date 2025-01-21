import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'

import PaymodeMasterForm from './components/PaymodeMasterForm/PaymodeMasterForm'
import { transformFormData } from './helper/dataFormatter'
import { formSchema } from './schema/schema'

import { Button } from '@/components/ui/button'


const defaultValues = {
  paymentModeName: '', // Initialize as empty
  shortCode: '', // Initialize as empty
  paymentMethod: 'cash',
  objCondition: [
    {
      conditionId: 'ADBD',
      paymentModeID: 0,
      conditionDesc: 'Accept Denomination-Based Payments',
      isEnabled: false,
    },
    {
      conditionId: 'ARDC',
      paymentModeID: 0,
      conditionDesc: 'Allow Reference Details Capturing',
      isEnabled: false,
    },
    {
      conditionId: 'AONPB',
      paymentModeID: 0,
      conditionDesc: 'Accept Only Negative Payment Values',
      isEnabled: false,
    },
    {
      conditionId: 'RPTM',
      paymentModeID: 0,
      conditionDesc: 'Restrict Payments in This Mode',
      isEnabled: false,
    },
    {
      conditionId: 'CBPT',
      paymentModeID: 0,
      conditionDesc: 'Count-Based Payment Transfers',
      isEnabled: false,
    },
    {
      conditionId: 'RCLP',
      paymentModeID: 0,
      conditionDesc: 'Restrict Customer Loyalty Points',
      isEnabled: false,
    },
  ],
  objCurrency: [
    {
      currencyID: 'INR',
      paymentModeID: 0,
      currencyCode: 'INR',
      currencyName: 'Indian Rupees (INR)',
    },
   
  ],
  
}

export const PayModeMaster = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues,
  })

  function onSubmit(values: z.infer<typeof formSchema>) {

    const data = transformFormData(values)
    console.log('Transformed Data for API:', data)
  }

  return (
    <FormProvider {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <PaymodeMasterForm />
        <div className="text-end pb-4">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </FormProvider>
  )
}

// store specific policy -> stroe wise policy
// organization policy -> general setup
