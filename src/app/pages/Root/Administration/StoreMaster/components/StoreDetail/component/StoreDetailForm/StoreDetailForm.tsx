import { useFormContext } from 'react-hook-form'

import { Checkbox } from '@/components/ui/checkbox'
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

function StoreDetailForm() {
  const { control } = useFormContext()
  let isEditMode = false;
  let isCreateMode = false;

  return (
    <div className="grid grid-cols-[0.8fr,1fr] border border-solid border-black h-[580px] overflow-y-auto">
      <div className=' '>
        <div className='border p-3 space-y-3'>
          {/* Store Code Field */}
          <FormField
            control={control}
            name="storeDetail.storeCode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Store Code <span className="text-primary">*</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder="Store Code" {...field} disabled={!isEditMode || !isCreateMode} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Store Name Field */}
          <FormField
            control={control}
            name="storeDetail.storeName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Store Name <span className="text-primary">*</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder="Store name" {...field} disabled={!isEditMode }/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Store Size Field */}
          <FormField
            control={control}
            name="storeDetail.storeSize"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Store Size</FormLabel>
                <FormControl>
                  <Input placeholder="Store Size" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className='border p-3 space-y-3'>
          {/* Default Warehouse */}
          <FormField
            control={control}
            name="storeDetail.default"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Default W/H <span className="text-primary">*</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder="Default W/H" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Default Sale W/H */}
          <FormField
            control={control}
            name="storeDetail.defaultSale"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Default Sale W/H <span className="text-primary">*</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder="Default Sale W/H" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Default Return W/H */}
          <FormField
            control={control}
            name="storeDetail.defaultReturn"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Default Return W/H <span className="text-primary">*</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder="Default Return W/H" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Inactive Checkbox */}
          <FormField
            control={control}
            name="storeDetail.inActive"
            render={({ field }) => (
              <FormItem style={{ marginTop: '20px' }} className="flex items-center gap-3 ">
                <FormControl>
                  <Checkbox {...field} />
                </FormControl>
                <FormLabel>Inactive</FormLabel>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </div>

      <div className=''>
        <div className='border p-3 space-y-3'>
          {/* Store Type Field */}
          <FormField
            control={control}
            name="storeDetail.storeType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Store Type <span className="text-primary">*</span>
                </FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select Store Type" ></SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Type</SelectLabel>
                        <SelectItem value="retail">Retail</SelectItem>
                        <SelectItem value="wholesale">Wholesale</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Price List Field */}
          <FormField
            control={control}
            name="storeDetail.priceList"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Price List <span className="text-primary">*</span>
                </FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Price List" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Store </SelectLabel>
                        <SelectItem value="kolkata">Kolkata</SelectItem>
                        <SelectItem value="pune">Pune</SelectItem>
                        <SelectItem value="hydrabad">Hyderabad</SelectItem>
                        <SelectItem value="bengaluru">Bengaluru</SelectItem>
                        <SelectItem value="mumbai">Mumbai</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Factor If Any Field */}
          <FormField
            control={control}
            name="storeDetail.factorIfAny"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Factor If Any</FormLabel>
                <FormControl>
                  <Input type="text" placeholder="Factor" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className='border p-3 space-y-3'>
          {/* Start Date Field */}
          <FormField
            control={control}
            name="storeDetail.startDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Start Date <span className="text-primary">*</span>
                </FormLabel>
                <FormControl>
                  <Input type="date" placeholder="Start Date" {...field} disabled={!isEditMode }/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Close Date Field */}
          <FormField
            control={control}
            name="storeDetail.closeDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Close Date</FormLabel>
                <FormControl>
                  <Input type="date" placeholder="Close Date" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* GSTIN Field */}
          <FormField
            control={control}
            name="storeDetail.GSTIN"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  GSTIN No <span className="text-primary">*</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder="GSTIN No" {...field} disabled={!isEditMode } />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* State Field */}
          <FormField
            control={control}
            name="storeDetail.state"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  State <span className="text-primary">*</span>
                </FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a state" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>State</SelectLabel>
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
      </div>
    </div>
  )
}

export default StoreDetailForm
