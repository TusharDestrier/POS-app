// eslint-disable-next-line import/order
import { format } from 'date-fns'

import { CalendarIcon } from 'lucide-react'
import { useFormContext } from 'react-hook-form'

// import { Button } from '@/components/ui/button'

//import useGoodsIssueType from '@/app/pages/Root/Inventroty/GoodsIssue/store/useGoodsIssueType'

import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
  Card,
  CardContent,
  //CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
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
import { cn } from '@/lib/utils' // Verify this path matches your project structure

const General = () => {
  const { control } = useFormContext()

  return (
    <Card className="border-2 border-solid border-black overflow-y-auto h-[650px]">
      <CardHeader>
        <CardTitle> General</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <div className="grid grid-cols-3  gap-4">
            <FormField
              control={control}
              name="storeID"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Store Name</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Store Name" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Store</SelectLabel>
                        <SelectItem value="1">Apple</SelectItem>
                        <SelectItem value="2">Banana</SelectItem>
                        <SelectItem value="3">Blueberry</SelectItem>
                        <SelectItem value="4">Grapes</SelectItem>
                        <SelectItem value="5">Pineapple</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
             <FormField
              control={control}
              name="fromDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Start Date <span className="text-red-500">*</span>
                  </FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button variant="outline" className="w-full text-left">
                          {field.value ? format(new Date(field.value), 'PPP') : 'Pick a date'}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent align="start">
                      <Calendar
                        mode="single"
                        selected={field.value ? new Date(field.value) : undefined}
                        onSelect={(date) => field.onChange(date?.toISOString() || null)}
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Close Date */}
            <FormField
              control={control}
              name="toDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Close Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button variant="outline" className="w-full text-left">
                          {field.value ? format(new Date(field.value), 'PPP') : 'Pick a date'}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent align="start">
                      <Calendar
                        mode="single"
                        selected={field.value ? new Date(field.value) : undefined}
                        onSelect={(date) => field.onChange(date?.toISOString() || null)}
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

         
        </div>
        <FormField
          control={control}
          name={'pendingSettlementDays'}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Pending Settlement Days</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  id="pendingSettlementDays"
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
          name="footfallEntryRequiredInDaySettlement"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Footfall Entry Required In Day Settlement </FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-row space-y-1 roles-radio"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="Y" />
                    </FormControl>
                    <FormLabel className="font-normal">Yes</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="N" />
                    </FormControl>
                    <FormLabel className="font-normal">N</FormLabel>
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
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a Discount Policy" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="1">One</SelectItem>
                  <SelectItem value="2">Two</SelectItem>
                  <SelectItem value="3">Three</SelectItem>
                </SelectContent>
              </Select>
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
                  id="maxBillAmountSinglePOSBill"
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
          name="pan"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                PAN No. Mandatory if Billing Amount Exceeds<span className="text-primary">*</span>
              </FormLabel>
              <FormControl>
                <Input {...field} id="panNo" placeholder="Pan No" className="w-full mt-3" />
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
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a card capture policy" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="1">One</SelectItem>
                  <SelectItem value="2">Two</SelectItem>
                  <SelectItem value="3">Three</SelectItem>
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
            <FormItem className="space-y-3">
              <FormLabel>Is Credit Card Authorization No. Entry Mandatory </FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-row space-y-1 roles-radio"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="Y" />
                    </FormControl>
                    <FormLabel className="font-normal">Yes</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="N" />
                    </FormControl>
                    <FormLabel className="font-normal">N</FormLabel>
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
            <FormItem className="space-y-3">
              <FormLabel>Allow Backdate Entry </FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-row space-y-1 roles-radio"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="Y" />
                    </FormControl>
                    <FormLabel className="font-normal">Yes</FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="N" />
                    </FormControl>
                    <FormLabel className="font-normal">N</FormLabel>
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
                  id="backDateEntryDays"
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
          name="negativeStockCheckingModeID"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Negative Stock Checking Mode</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Checking Mode" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="1">Stop</SelectItem>
                  <SelectItem value="2">Ignore</SelectItem>
                  <SelectItem value="3">Notify</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
      </CardContent>
    </Card>
  )
}
export default General
