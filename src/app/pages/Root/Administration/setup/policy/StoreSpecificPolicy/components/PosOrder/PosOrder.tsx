// eslint-disable-next-line import/order
//import { Label } from '@radix-ui/react-dropdown-menu'
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
import { FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
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
//import { cn } from '@/lib/utils' // Verify this path matches your project structure


const PosOrder = () => {
  const { control } = useFormContext()

  return (
    <Card className='border-2 border-solid border-black overflow-y-auto h-[650px]'>
      <CardHeader>
        <CardTitle>Pos Order</CardTitle>
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

          <div className='flex space-x-9'>
            <div>
               {/* From Date */}
            <FormField
              control={control}
              name="fromDate"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>From Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button variant ="outline" className="w-full text-left">
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
                        <Button variant ="outline" className="w-full text-left">
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
          name="dueDateMandatoryInPOSOrder"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Due Date is Mandatory in POS Order</FormLabel>
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
              <FormDescription />
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="minPercentageOfAdvanceDuringPOSOrder"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Minimum Percentage of Advance during POS Order</FormLabel>
              <FormControl>
                <Input {...field} id="minPercentageOfAdvanceDuringPOSOrder" placeholder="Minimum Percentage of Advance during POS Order" className="w-full mt-3" />
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="posOrderCancellationIsMandatory"
          render={({ field }) => (
            <FormItem>
              <FormLabel>POS Order Cancellation is Mandatory</FormLabel>
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
              <FormDescription />
              <FormMessage />
            </FormItem>
          )}
        />
      </CardContent>
    </Card>
  )
}

export default PosOrder
