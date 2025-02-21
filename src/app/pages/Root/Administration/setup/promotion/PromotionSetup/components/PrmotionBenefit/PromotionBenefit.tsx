import { useFormContext, useWatch } from 'react-hook-form'

import { FormField, FormItem, FormLabel, FormControl, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

function PromotionBenefit() {
  const { control, setValue } = useFormContext()

  // Watch the selected benefit type to dynamically show/hide inputs
  const selectedBenefitType = useWatch({
    control,
    name: 'promotionParameters.benefitType',
  })


  return (
    <div className="">

 
      <FormField
        control={control}
        name="promotionParameters.benefitType.type"
        render={({ field }) => (
          <FormItem>
            <RadioGroup
              value={field.value || 'flatDiscount'} // Fallback to default
              
              onValueChange={(value) => {
                console.log('RadioGroup value changed to:', value) // Debugging
                field.onChange(value)
                if (value === 'flatDiscount') {
                  // Reset unnecessary fields when switching to "flatDiscount"
                  setValue('promotionParameters.benefitType.value', undefined)
                }
              }}
              className="space-y-3 roles-radio"
            >
              {/* Flat Discount */}
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="flatDiscount" id="flatDiscount" />
                <label htmlFor="flatDiscount" className="text-sm font-medium">
                  Flat Discount
                </label>
              </div>

              {/* Specific Unit from Paid From Assortment */}
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="paidSpecificUnit" id="paidSpecificUnit" />
                <label htmlFor="paidSpecificUnit" className="text-sm font-medium">
                  Specific Unit from Paid From Assortment
                </label>
              </div>

              {/* Specific Unit from Benefit Assortment */}
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="benefitSpecificUnit" id="benefitSpecificUnit" />
                <label htmlFor="benefitSpecificUnit" className="text-sm font-medium">
                  Specific Unit from Benefit Assortment
                </label>
              </div>
            </RadioGroup>
            <FormMessage />
          </FormItem>
        )}
      />

      {/* Dynamic Input Fields */}
      <div className="mt-4">
        {selectedBenefitType.type === 'paidSpecificUnit' && (
          <FormField
            control={control}
            name="promotionParameters.benefitType.value"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Specific Unit from Paid From Assortment</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="Enter Quantity" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}

        {selectedBenefitType.type === 'benefitSpecificUnit' && (
          <FormField
            control={control}
            name="promotionParameters.benefitType.value"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Specific Unit from Benefit Assortment</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="Enter Quantity" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}
      </div>
    </div>
  )
}

export default PromotionBenefit
