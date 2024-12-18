import { useFormContext } from 'react-hook-form'


import { usePromotionSetupStore } from '../../store/usePromotionSetupStore'

import { Checkbox } from '@/components/ui/checkbox'
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
import { Textarea } from '@/components/ui/textarea'


function PromotionForm1() {

  const formMethods=useFormContext();
const modalMode=usePromotionSetupStore(state=>state.mode);
  return (
    <div className=" overflow-y-auto">
    <div className=" border border-solid border-black  overflow-y-auto p-3 grid gap-3 items-center">
      {/*Promotion Id Field */}
      <FormField
        control={formMethods.control}
        name="storeDetail.storeCode"
        disabled={modalMode === 'Edit'} // Field is disabled in edit mode
        render={({ field }) => (
          <FormItem>
            <FormLabel>
              Promotion ID <span className="text-primary">*</span>
            </FormLabel>
            <FormControl>
              <Input type="text" placeholder=" Promotion ID " {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      {/* Promotion Name */}
      <FormField
        control={formMethods.control}
        name="storeDetail.storeName"
        disabled={modalMode === 'Edit'} // Field is disabled in edit mode
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
      {/*Details Field */}
      <FormField
        control={formMethods.control}
        name="storeDetail.storeName"
        disabled={modalMode === 'Edit'} // Field is disabled in edit mode
        render={({ field }) => (
          <FormItem>
            <FormLabel>
              Details <span className="text-primary">*</span>
            </FormLabel>
            <FormControl>
              <Textarea placeholder="Type your message here." {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      {/* Applied On  Field */}
      <FormField
        control={formMethods.control}
        name="storeDetail.startDate"
        disabled={modalMode === 'Edit'} // Field is disabled in edit mode
        render={({ field }) => (
          <FormItem>
            <FormLabel>
              Applied On <span className="text-primary">*</span>
            </FormLabel>
            <FormControl>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger>
                  <SelectValue placeholder="Applied On " />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Applied On </SelectLabel>
                    <SelectItem value="eachItem">Applied on Each Item</SelectItem>
                    <SelectItem value="billValue">Applied on Bill Value</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
    <div className="border border-solid border-black overflow-y-auto p-3 grid grid-cols-2 items-center">

      <div className="border-3 ">
        <h4 className="font-bold mb-2">Promotion Type</h4>
        <RadioGroup className="mb-5" defaultValue="comfortable">
          <div className="flex items-center space-x-2">
            <Label htmlFor="r1">Free Quantity Benefit</Label>
            <RadioGroupItem value="freequantityBenefit" id="r1" />
          </div>
          <div className="flex items-center space-x-2">
            <Label htmlFor="r2">Quantity Slab Benefit</Label>
            <RadioGroupItem value="quantityslabBenefit" id="r2" />
          </div>
          <div className="flex items-center space-x-2">
            <Label htmlFor="r3">Bill Value Slab Benefit</Label>
            <RadioGroupItem value="billvalueslabBenefit" id="r3" />
          </div>
        </RadioGroup>
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Inactive
          </label>
        </div>
      </div>
    </div>
  </div>
  )
}

export default PromotionForm1