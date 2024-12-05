import {  useFormContext } from 'react-hook-form'


import ImageUploader from '@/components/ImageUploader'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {  RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const General = () => {
  const { control } = useFormContext()

  return (
 
        <div className="border p-4 border-black border-solid h-[650px] overflow-y-auto">
          <div className="space-y-4">
            <FormField
              control={control}
              name={'GeneralSchema.pendingSettlement'}
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Pending Settlement Days</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      id="pendingSettlement"
                      placeholder="Pending Settlement Day"
                      className="w-full mt-3"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="GeneralSchema.footfallEntry"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Footfall Entry required in Day Settlement</FormLabel>
                  <FormControl>
                    <RadioGroup {...field} className="flex items-center gap-3">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="default" id="r1" />
                        <Label htmlFor="r1">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="comfortable" id="r2" />
                        <Label htmlFor="r2">No</Label>
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="GeneralSchema.maxAllowable"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Maximum Allowable Discount Policy Validation</FormLabel>
                  <FormControl>
                    <Select {...field}>
                      <SelectTrigger className="w-full mt-3">
                        <SelectValue placeholder="Select a policy" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Fruits</SelectLabel>
                          <SelectItem value="apple">Apple</SelectItem>
                          <SelectItem value="banana">Banana</SelectItem>
                          <SelectItem value="blueberry">Blueberry</SelectItem>
                          <SelectItem value="grapes">Grapes</SelectItem>
                          <SelectItem value="pineapple">Pineapple</SelectItem>
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
              name="GeneralSchema.maxBillingAmt"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Maximum Billing Amount in a Single POS Billing</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      id="maxBillingAmt"
                      placeholder="Maximum Billing Amount in a Single POS Billing"
                      className="w-full mt-3"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="GeneralSchema.panNo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    PAN No. Mandatory if Billing Amount Exceeds{' '}
                    <span className="text-primary">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input placeholder="Enter PAN No." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control} 
              name="generalSchema.creditCardDetails"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Credit Card Details Capture Policy</FormLabel>
                  <FormControl>
                    <Select {...field}>
                      <SelectTrigger className="w-full mt-3">
                        <SelectValue placeholder="Select credit Card Option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Fruits</SelectLabel>
                          <SelectItem value="apple">Apple</SelectItem>
                          <SelectItem value="banana">Banana</SelectItem>
                          <SelectItem value="blueberry">Blueberry</SelectItem>
                          <SelectItem value="grapes">Grapes</SelectItem>
                          <SelectItem value="pineapple">Pineapple</SelectItem>
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
              name="generalSchema.crcardAutho"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Is Credit Card Authorization No. Entry Mandatory</FormLabel>
                  <FormControl>
                    <RadioGroup {...field} className="flex items-center gap-3 mt-3">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="default" id="r3" />
                        <Label htmlFor="r3">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="comfortable" id="r4" />
                        <Label htmlFor="r4">No</Label>
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="generalSchema.backDateEntry"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Allow Backdate Entry</FormLabel>
                  <FormControl>
                    <RadioGroup {...field} className="flex items-center gap-3 w-full mt-3">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="default" id="r5" />
                        <Label htmlFor="r5">Yes</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="comfortable" id="r6" />
                        <Label htmlFor="r6">No</Label>
                      </div>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={control}
              name="generalSchema.backDateDays"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Back Date Entry Days</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      id="backDateDays"
                      placeholder="Back Date Entry"
                      className="w-full mt-3"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={control}
              name="generalSchema.stockCheck"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Credit Card Details Capture Policy</FormLabel>
                  <FormControl>
                    <Select {...field}>
                      <SelectTrigger className="w-full mt-3">
                        <SelectValue placeholder="Select credit Card Option" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Fruits</SelectLabel>
                          <SelectItem value="apple">Apple</SelectItem>
                          <SelectItem value="banana">Banana</SelectItem>
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
