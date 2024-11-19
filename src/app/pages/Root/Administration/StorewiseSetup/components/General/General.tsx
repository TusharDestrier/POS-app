import { Label } from "@radix-ui/react-label"
import { useFormContext } from 'react-hook-form'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FormControl, FormField, FormItem, FormLabel,FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'


export const General = () => {
    const { control } = useFormContext()
  return (
    <Card className="border-2 border-solid border-black overflow-y-auto h-[650px]">
    <CardHeader>
      <CardTitle>General</CardTitle>
    </CardHeader>
    <CardContent className="space-y-4">
      <FormField
        control={control}
        name={'GeneralSchema.pendingSettlement'}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Pending Settlement Days</FormLabel>
            <FormControl>
              <Input
                {...field}
                id="generalSchema.pendingSettlement"
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
        name="generalSchema.footfallEntry"
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
    </CardContent>
  </Card>
  )
}
export default General