import { useFormContext } from 'react-hook-form'

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { FormField, FormItem, FormLabel, FormControl, FormDescription, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

const PosOrder = () => {
  const { control } = useFormContext()

  return (
    <Card>
      <CardHeader>
        <CardTitle>Pos Order</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <FormField
          control={control}
          name="dueDateMandatory"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Due Date is Mandatory in POS Order</FormLabel>
              <FormControl>
                <RadioGroup {...field} className="flex items-center gap-3 w-full mt-3">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="dueDateYes" />
                    <Label htmlFor="dueDateYes">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="dueDateNo" />
                    <Label htmlFor="dueDateNo">No</Label>
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
          name="minAdvancePercentage"
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
          name="posOrderCancellationMandatory"
          render={({ field }) => (
            <FormItem>
              <FormLabel>POS Order Cancellation is Mandatory</FormLabel>
              <FormControl>
                <RadioGroup {...field} className="flex items-center gap-3 w-full mt-3">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="cancellationYes" />
                    <Label htmlFor="cancellationYes">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="cancellationNo" />
                    <Label htmlFor="cancellationNo">No</Label>
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
