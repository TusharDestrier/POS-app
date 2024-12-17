import { useFormContext } from 'react-hook-form'

//import GrpoRequestFromTable from '../GrpoRequestFromTable'

import { usePromotionSetupStore } from '../../store/usePromotionSetupStore'

import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
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

function PromotionSetupDetailForm() {
  const { control } = useFormContext()
  const modalMode = usePromotionSetupStore((state) => state.mode)

  return (
    <div className="h-screen overflow-y-auto">
      <div className=" border border-solid border-black h-[400px] overflow-y-auto p-3 grid gap-4 grid-rows-3 items-center">
        {/*Promotion Id Field */}
        <FormField
          control={control}
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
          control={control}
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
          control={control}
          name="storeDetail.storeName"
          disabled={modalMode === 'Edit'} // Field is disabled in edit mode
          render={({ field }) => (
            <FormItem>
              <FormLabel>
              Details <span className="text-primary">*</span>
              </FormLabel>
              <FormControl>
              <Textarea placeholder="Type your message here." {...field}/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        /> 

        {/* Applied On  Field */}
        <FormField
          control={control}
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
                      <SelectItem value="wb">West Bengal</SelectItem>
                      <SelectItem value="karnataka">Karnataka</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className="border border-solid border-black h-[400px] overflow-y-auto p-3 grid gap-4 grid-rows-3 items-center">
       {/* <GrpoRequestFromTable/> */}
       <h1>Promotion Type</h1>
       
      </div>
    </div>
  )
}

export default PromotionSetupDetailForm
