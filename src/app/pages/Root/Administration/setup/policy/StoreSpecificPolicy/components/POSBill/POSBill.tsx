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

function POSBill() {
  const { control } = useFormContext()
  return (
    <Card className="border-2 border-solid border-black overflow-y-auto h-[650px]">
      <CardHeader>
        <CardTitle>POS Bill</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex space-x-8 ml-5 gap-36">
          <div>
          <FormField
          control={control}
          name="storeID"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Store Name
              </FormLabel>
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
          </div>

          <div className="flex space-x-9">
            <div>
              {/* From Date */}
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
            </div>
            <div>
              {/* {To Date} */}
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
        </div>
        <FormField
          control={control}
          name="allowItemLevelDiscount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Allow Item Level Discount</FormLabel>
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
          name="maxAllowDiscountPercentage"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Maximum Allowable Discount Percentage</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  id="maxAllowDiscountPercentage"
                  placeholder="Maximum Allowable Discount Percentage"
                  className="w-full mt-3"
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="allowBillLevelDiscount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Allow Bill Level Discount</FormLabel>
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
          name="maxAllowDiscountAmount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Maximum Allowable Discount Amount</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  id="maxAllowDiscountAmount"
                  placeholder="Maximum Allowable Discount Amount"
                  className="w-full mt-3"
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="allowToSelectActivePromotionFromList"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Allow to Select Active Promotion from List</FormLabel>
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
          name="allowToClearAppliedPromotion"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Allow to Clear Applied Promotion</FormLabel>
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
          name="salePersonTaggingMandatory"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Sale Person Tagging Mandatory</FormLabel>
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
          name="salePersonTaggingPolicyID"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Sale Person Tagging Policy</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Tagging Policy" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="1">Item Level</SelectItem>
                  <SelectItem value="2">Bill Level</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="customerTaggingMandatory"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Customer Tagging is Mandatory</FormLabel>
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
      </CardContent>
    </Card>
  )
}

export default POSBill
