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


const GoodsReceiptReturn = () => {
  const { control } = useFormContext()

  return (
    <Card className='border-2 border-solid border-black h-[600px]'>
      <CardHeader>
        <CardTitle>Goods Receipt Return</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <FormField
          control={control}
          name="GoodsRecRet.excessGoodsReceiptTolerance"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Excess Goods Receipt Tolerance Percentage</FormLabel>
              <FormControl>
                <Input {...field} id="egr" placeholder="Excess Goods Receipt Tolerance Percentage" className="w-full mt-3" />
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="GoodsRecRet.shortGoodsReceiptTolerance"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Short Goods Receipt Tolerance Percentage</FormLabel>
              <FormControl>
                <Input {...field} id="sgr" placeholder="Short Goods Receipt Tolerance Percentage" className="w-full mt-3" />
              </FormControl>
              <FormDescription />
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="GoodsRecRet.allowReceiveDamagedGoods"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Allow to Receive Damaged Goods</FormLabel>
              <FormControl>
                <RadioGroup {...field} className="flex items-center gap-3 w-full mt-3">
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="allowDamagedYes" />
                    <Label htmlFor="allowDamagedYes">Yes</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="allowDamagedNo" />
                    <Label htmlFor="allowDamagedNo">No</Label>
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

export default GoodsReceiptReturn
