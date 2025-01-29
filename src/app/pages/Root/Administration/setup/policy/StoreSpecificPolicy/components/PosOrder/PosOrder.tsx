import { useFormContext } from 'react-hook-form'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from '@/components/ui/form'
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
              <FormField
                control={control}
                name="fromDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>From Date</FormLabel>
                    <FormControl>
                      <Input
                        type="date"
                        {...field}
                        id="fromDate"
                        placeholder="From Date"
                        className="w-full mt-3"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div>
              <FormField
                control={control}
                name="toDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>To Date</FormLabel>
                    <FormControl>
                      <Input
                        type="date"
                        {...field}
                        id="generalSchema.toDate"
                        placeholder="To Date"
                        className="w-full mt-3"
                      />
                    </FormControl>
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
                <RadioGroup {...field} className="flex items-center gap-3 w-full mt-3">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Y" id="Y" />
                    <Label htmlFor="Y">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="N" id="N" />
                    <Label htmlFor="N">No</Label>
                  </div>
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
                <Input {...field} id="mpa" placeholder="Minimum Percentage of Advance during POS Order" className="w-full mt-3" />
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
                <RadioGroup {...field} className="flex items-center gap-3 w-full mt-3 roles-radio">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="Y" id="Y" />
                    <Label htmlFor="Y">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="N" id="N" />
                    <Label htmlFor="N">No</Label>
                  </div>
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
