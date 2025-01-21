import { useFormContext } from 'react-hook-form'

import PaymentMethods from '../PaymentMethod'
import PaymodeConditions from '../PaymodeConditions'
import SupportedCurrencies from '../SupportedCurrencies'

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'

function PaymodeMasterForm() {
  const form = useFormContext()

  return (

      <div className="items pe-4 space-y-5 border-e border-solid p-5 relative z-30 ">
        <div className="grid grid-cols-2 gap-7">
          <div className="space-y-4">
            <FormField
              control={form.control}
              name="paymentModeName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Payment Mode</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter Payment Mode" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="shortCode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Short Code</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter Short Code" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div>{/* Placeholder for Image or Additional Content */}</div>
        </div>

        <div className="grid grid-cols-2 items-start">
          <PaymentMethods />
          <PaymodeConditions />
        </div>
        <SupportedCurrencies />
      </div>
      
    
  )
}

export default PaymodeMasterForm
