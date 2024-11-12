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
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

function POSBill() {
  const { control } = useFormContext()
  return (
    <Card className='border-2 border-solid border-black'>
      <CardHeader>
        <CardTitle>POS Bill</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <FormField
          control={control}
          name="allowItemLevelDiscount"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Allow Item Level Discount</FormLabel>
              <FormControl>
                <RadioGroup {...field} className="flex items-center gap-3 w-full mt-3">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="yesItemDiscount" />
                    <Label htmlFor="yesItemDiscount">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="noItemDiscount" />
                    <Label htmlFor="noItemDiscount">No</Label>
                  </div>
                </RadioGroup>
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
                    <RadioGroupItem value="yes" id="yesBillDiscount" />
                    <Label htmlFor="yesBillDiscount">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="noBillDiscount" />
                    <Label htmlFor="noBillDiscount">No</Label>
                  </div>
                </RadioGroup>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="maxAllowableDisPer"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Maximum Allowable Discount Percentage</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  id="maxAllowableDisPer"
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
          name="maxAllowableDisAmt"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Maximum Allowable Discount Amount</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  id="maxAllowableDisAmt"
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
          name="selectActivePromotion"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Allow to Select Active Promotion from List</FormLabel>
              <FormControl>
                <RadioGroup {...field} className="flex items-center gap-3 w-full mt-3">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="yesActivePromotion" />
                    <Label htmlFor="yesActivePromotion">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="noActivePromotion" />
                    <Label htmlFor="noActivePromotion">No</Label>
                  </div>
                </RadioGroup>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="clearAppliedPromotion"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Allow to Clear Applied Promotion</FormLabel>
              <FormControl>
                <RadioGroup {...field} className="flex items-center gap-3 w-full mt-3">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="yesClearPromotion" />
                    <Label htmlFor="yesClearPromotion">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="noClearPromotion" />
                    <Label htmlFor="noClearPromotion">No</Label>
                  </div>
                </RadioGroup>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="salePersonTagging"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Sale Person Tagging Mandatory</FormLabel>
              <FormControl>
                <RadioGroup {...field} className="flex items-center gap-3 w-full mt-3">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="yesSaleTagging" />
                    <Label htmlFor="yesSaleTagging">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="noSaleTagging" />
                    <Label htmlFor="noSaleTagging">No</Label>
                  </div>
                </RadioGroup>
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="salePersonTaggingPolicy"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Sale Person Tagging Policy</FormLabel>
              <FormControl>
                <Select {...field}>
                  <SelectTrigger className="w-full mt-3">
                    <SelectValue placeholder="Select level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="itemLevel">Item Level</SelectItem>
                      <SelectItem value="billLevel">Bill Level</SelectItem>
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
          name="customerTagging"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Customer Tagging is Mandatory</FormLabel>
              <FormControl>
                <RadioGroup {...field} className="flex items-center gap-3 w-full mt-3">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="yesCustomerTagging" />
                    <Label htmlFor="yesCustomerTagging">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="noCustomerTagging" />
                    <Label htmlFor="noCustomerTagging">No</Label>
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
