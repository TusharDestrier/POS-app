import { useFormContext } from 'react-hook-form'



import { Checkbox } from '@/components/ui/checkbox'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'


function PromotionForm1() {

  const formMethods = useFormContext();

  return (
    <div className="overflow-y-auto">
    <div className="border border-solid border-black p-3 grid gap-3 items-center">
      {/* Promotion ID */}
      <FormField
        control={formMethods.control}
        name="promotionId"
        render={({ field }) => (
          <FormItem>
            <FormLabel>
              Promotion ID <span className="text-primary">*</span>
            </FormLabel>
            <FormControl>
              <Input type="text" placeholder="Promotion ID" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      {/* Promotion Name */}
      <FormField
        control={formMethods.control}
        name="promotionName"
        render={({ field }) => (
          <FormItem>
            <FormLabel>
              Promotion Name <span className="text-primary">*</span>
            </FormLabel>
            <FormControl>
              <Input type="text" placeholder="Promotion Name" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      {/* Details */}
      <FormField
        control={formMethods.control}
        name="details"
        render={({ field }) => (
          <FormItem>
            <FormLabel>
              Details <span className="text-primary">*</span>
            </FormLabel>
            <FormControl>
              <Textarea placeholder="Details about the promotion" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      {/* Applied On */}
      <FormField
        control={formMethods.control}
        name="appliedOn"
        render={({ field }) => (
          <FormItem>
            <FormLabel>
              Applied On <span className="text-primary">*</span>
            </FormLabel>
            <FormControl>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger>
                  <SelectValue placeholder="Applied On" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="eachItem">Applied on Each Item</SelectItem>
                  <SelectItem value="billValue">Applied on Bill Value</SelectItem>
                </SelectContent>
              </Select>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      {/* Promotion Type */}
     <FormField
  control={formMethods.control}
  name="promotionType"
  render={({ field }) => (
    <FormItem>
      <FormLabel>
        Promotion Type <span className="text-primary">*</span>
      </FormLabel>
      <RadioGroup
        value={field.value} // Bind the current value
        onValueChange={field.onChange} // Update the value on change
        className="mb-5 roles-radio"
      >
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="freequantityBenefit" id="r1" />
          <label htmlFor="r1">Free Quantity Benefit</label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="quantityslabBenefit" id="r2" />
          <label htmlFor="r2">Quantity Slab Benefit</label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="billvalueslabBenefit" id="r3" />
          <label htmlFor="r3">Bill Value Slab Benefit</label>
        </div>
      </RadioGroup>
      <FormMessage />
    </FormItem>
  )}
/>

<FormField
  control={formMethods.control}
  name="inactive"
  render={({ field }) => (
    <FormItem>
      <div className="flex items-center space-x-2">
        <Checkbox
          checked={field.value}
          onCheckedChange={(value) => field.onChange(value)}
          id="inactiveCheckbox"
        />
        <label
          htmlFor="inactiveCheckbox"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed"
        >
          Inactive
        </label>
      </div>
      <FormMessage />
    </FormItem>
  )}
/>
    </div>
  </div>
  )
}

export default PromotionForm1