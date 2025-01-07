import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'

import { PettyCashHeadSchema } from '../../schemas/PettyCashHeadSchema'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { Textarea } from '@/components/ui/textarea'

function PettyCashHeadForm() {
  const formMethods = useForm<z.infer<typeof PettyCashHeadSchema>>({
    resolver: zodResolver(PettyCashHeadSchema),
    defaultValues: {
      inActive: false, // Set default value here
    },
  });

  const onSubmit = formMethods.handleSubmit(
    (data) => {
      console.log('Form Data Submitted: ', data); // Logs if submission is successful
    },
    (errors) => {
      console.log('Validation Errors: ', errors); // Logs validation errors, if any
    }
  );

  return (
    <FormProvider {...formMethods}>
      <form
        onSubmit={(e) => {
          e.preventDefault(); // Ensure default form submission behavior is prevented
          onSubmit(); // Trigger submission
        }}
      >
        <div className="border p-4 border-black border-solid h-[650px] overflow-y-auto">
          <div className="space-y-4">
            <FormField
              control={formMethods.control}
              name="pettycashCode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Petty Cash Code <span className="text-primary">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Petty Cash Code " {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={formMethods.control}
              name="pettycashHead"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Petty Cash Head <span className="text-primary">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Petty Cash Head " {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={formMethods.control}
              name="modeOfOperation"
              render={({ field }) => (
                <FormItem className="flex items-start space-x-4 flex-col gap-3">
                  <FormLabel className="mt-2">Mode of Operation</FormLabel>
                  <FormControl>
                    <RadioGroup
                      value={field.value}
                      onValueChange={(value) => field.onChange(value)}
                      className="flex items-center space-x-4 roles-radio"
                    >
                      <div className="flex items-center space-x-1">
                        <RadioGroupItem value="payment" id="r1" />
                        <Label htmlFor="r1">Payment</Label>
                      </div>
                      <div className="flex items-center space-x-1">
                        <RadioGroupItem value="receipt" id="r2" />
                        <Label htmlFor="r2">Receipt</Label>
                      </div>
                      <div className="flex items-center space-x-1">
                        <RadioGroupItem value="both" id="r3" />
                        <Label htmlFor="r3">Both</Label>
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={formMethods.control}
              name="limit"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Limit</FormLabel>
                  <FormControl>
                    <Input placeholder="Limit" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={formMethods.control}
              name="remarks"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Remarks</FormLabel>
                  <FormControl>
                    <Textarea placeholder="Type your message here." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            {/* Inactive Checkbox */}
            <FormField
              control={formMethods.control}
              name="inActive"
              render={({ field }) => (
                <FormItem style={{ marginTop: '20px' }} className="flex items-center gap-3 ">
                  <FormLabel>Inactive</FormLabel>
                  <FormControl>
                    <Checkbox
                      checked={!!field.value}
                      onCheckedChange={(value) => field.onChange(value)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <div className="h-[60px] sticky bottom-0 right-0 flex justify-end items-center">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </FormProvider>
  );
}

export default PettyCashHeadForm;

