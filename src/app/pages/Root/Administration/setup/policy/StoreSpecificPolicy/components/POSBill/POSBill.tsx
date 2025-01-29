import { useFormContext } from 'react-hook-form'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
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
                        id="generalSchema.fromDate"
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
          name="allowItemLevelDiscount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Allow Item Level Discount</FormLabel>
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
              <FormMessage />
            </FormItem>
          )}
        />
      </CardContent>
    </Card>
  )
}

export default POSBill
