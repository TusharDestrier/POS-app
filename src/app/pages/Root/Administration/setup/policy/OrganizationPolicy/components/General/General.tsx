import { useFormContext } from 'react-hook-form'

import ImageUploader from '@/components/ImageUploader'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

function General() {
  const { control, setValue, watch } = useFormContext()

  const maxBillingAmt = watch('maxBillAmountSinglePOSBill', 0)

  // Condition to disable PAN field
  const isPanDisabled = Number(maxBillingAmt) <= 50000

  return (
    <div className="border p-4 border-black border-solid h-[650px] overflow-y-auto">
      <div className="space-y-4">
        <FormField
          control={control}
          name={'pendingSettlementDays'}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Pending Settlement Days</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="number"
                  id="pendingSettlementDays"
                  placeholder="Pending Settlement Day"
                  className="w-full mt-3"
                  min={1}
                  minLength={1}
                  maxLength={2}
                  max={30}
                  onChange={(e) => field.onChange(Number(e.target.value))}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="footfallEntryRequiredDaySettlement"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Footfall Entry required in Day Settlement</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  value={field.value}
                  className="flex flex-row space-x-4 roles-radio"
                >
                  <FormItem className="flex items-center space-x-2">
                    <FormControl>
                      <RadioGroupItem value="Y" />
                    </FormControl>
                    <FormLabel className="font-normal">Yes</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-2">
                    <FormControl>
                      <RadioGroupItem value="N" />
                    </FormControl>
                    <FormLabel className="font-normal">No</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="maxAllowDiscountPolicyValidationID"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Maximum Allowable Discount Policy Validation</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger className="w-full mt-3">
                    <SelectValue placeholder="Select a policy" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="1">Percentage</SelectItem>
                      <SelectItem value="2">Fixed Amt</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="maxBillAmountSinglePOSBill"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Maximum Billing Amount in a Single POS Billing</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type="number"
                  id="maxBillingAmt"
                  placeholder="Maximum Billing Amount in a Single POS Billing"
                  className="w-full mt-3"
                  onChange={(e) => {
                    const value = Number(e.target.value) // Get numeric value
                    field.onChange(e) // Update the value in the form

                    // Clear PAN field if billing amount is ≤ 50K
                    if (value <= 50000) {
                      setValue('pan', '') // Remove PAN value
                    }
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="pan"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                PAN No. Mandatory if Billing Amount Exceeds ₹50,000
                {!isPanDisabled ? <span className="text-primary">*</span> : ''}
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder="Enter PAN No."
                  disabled={isPanDisabled} // Disable PAN field if ≤ 50K
                  maxLength={10}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={control}
          name="creditCardDetailsCapturePolicyID"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Credit Card Details Capture Policy</FormLabel>
              <Select onValueChange={field.onChange} value={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Credit Card policy" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="4">4</SelectItem>
                  <SelectItem value="6">6</SelectItem>
                  <SelectItem value="16">16</SelectItem>
                </SelectContent>
              </Select>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="isCCardAuthNoEntryMandatory"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Is Credit Card Authorization No. Entry Mandatory</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  value={field.value}
                  className="flex flex-row space-x-4 roles-radio"
                >
                  <FormItem className="flex items-center space-x-2">
                    <FormControl>
                      <RadioGroupItem value="Y" />
                    </FormControl>
                    <FormLabel className="font-normal">Yes</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-2">
                    <FormControl>
                      <RadioGroupItem value="N" />
                    </FormControl>
                    <FormLabel className="font-normal">No</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="allowBackDateEntry"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Allow Backdate Entry</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  value={field.value}
                  className="flex flex-row space-x-4 roles-radio"
                >
                  <FormItem className="flex items-center space-x-2">
                    <FormControl>
                      <RadioGroupItem value="Y" />
                    </FormControl>
                    <FormLabel className="font-normal">Yes</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-2">
                    <FormControl>
                      <RadioGroupItem value="N" />
                    </FormControl>
                    <FormLabel className="font-normal">No</FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="backDateEntryDays"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Back Date Entry Days</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  type='number'
                  min={1}
                  maxLength={2}
                  max={31}
                  minLength={1}
                  id="backDateDays"
                  placeholder="Back Date Entry"
                  className="w-full mt-3"
                  onChange={(e) => field.onChange(Number(e.target.value))}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="negativestockcheckingmode"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Negative Stock Checking Mode</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger className="w-full mt-3">
                    <SelectValue placeholder="Select mode" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Mode</SelectLabel>
                      <SelectItem value="1">Stop</SelectItem>
                      <SelectItem value="2">Ignore</SelectItem>
                      <SelectItem value="3">Notify</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="form-item">
          <Label htmlFor="picture">Picture</Label>
          <ImageUploader />
        </div>
      </div>
    </div>
  )
}

export default General
