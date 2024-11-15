import { useFormContext } from 'react-hook-form'

import useInventoryTransferRequestType from '../../store/useInventoryTransferRequestType'

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

function InventryTransferRequestDetailForm() {
  const { control } = useFormContext()
  const modalMode = useInventoryTransferRequestType((state) => state.mode)

  return (
    <div className="grid grid-cols-[0.8fr,1fr] border border-solid border-black h-[580px] overflow-y-auto">
      <div className=" ">
        <div className="border p-3 space-y-3">
          {/* Bussiness Patner Field */}
          <FormField
            control={control}
            name="storeDetail.storeCode"
            disabled={modalMode === 'Edit'} // Field is disabled in edit mode
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Bussiness Patner <span className="text-primary">*</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder="Bussiness Patner" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Document No Field */}
          <FormField
            control={control}
            name="storeDetail.storeName"
            disabled={modalMode === 'Edit'} // Field is disabled in edit mode
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Document No <span className="text-primary">*</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder="Document No" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Posting Date  Field */}
          <FormField
            control={control}
            name="storeDetail.startDate"
            disabled={modalMode === 'Edit'} // Field is disabled in edit mode
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Posting Date <span className="text-primary">*</span>
                </FormLabel>
                <FormControl>
                  <Input type="date" placeholder="Posting Date " {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Series Field */}
          <FormField
            control={control}
            name="storeDetail.startDate"
            disabled={modalMode === 'Edit'} // Field is disabled in edit mode
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                Series <span className="text-primary">*</span>
                </FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a series" />
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
          {/* Delivery Date Field */}
          <FormField
            control={control}
            name="storeDetail.closeDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Delivery Date</FormLabel>
                <FormControl>
                  <Input type="date" placeholder="Delivery Date" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Document Date */}
          <FormField
            control={control}
            name="storeDetail.closeDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Document Date</FormLabel>
                <FormControl>
                  <Input type="date" placeholder="Document Date" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          { /* From Unit */}
          <FormField
            control={control}
            name="storeDetail.startDate"
            disabled={modalMode === 'Edit'} // Field is disabled in edit mode
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                From Unit<span className="text-primary">*</span>
                </FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger>
                      <SelectValue placeholder="From Unit" />
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
          { /* To Warehouse */}
          <FormField
            control={control}
            name="storeDetail.startDate"
            disabled={modalMode === 'Edit'} // Field is disabled in edit mode
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                Form Warehouse<span className="text-primary">*</span>
                </FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger>
                      <SelectValue placeholder="From Unit" />
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
          { /* To Unit */}
          <FormField
            control={control}
            name="storeDetail.startDate"
            disabled={modalMode === 'Edit'} // Field is disabled in edit mode
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                To Unit<span className="text-primary">*</span>
                </FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger>
                      <SelectValue placeholder="TO Unit" />
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
          { /* To Warehouse */}
          <FormField
            control={control}
            name="storeDetail.startDate"
            disabled={modalMode === 'Edit'} // Field is disabled in edit mode
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                To Warehouse<span className="text-primary">*</span>
                </FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger>
                      <SelectValue placeholder="To Unit" />
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
          { /* Contact Person */}
          <FormField
            control={control}
            name="storeDetail.startDate"
            disabled={modalMode === 'Edit'} // Field is disabled in edit mode
            render={({ field }) => (
              <FormItem>
                <FormLabel>
               Contact Person<span className="text-primary">*</span>
                </FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger>
                      <SelectValue placeholder="Contact Person" />
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
          { /* Ship To */}
          <FormField
            control={control}
            name="storeDetail.startDate"
            disabled={modalMode === 'Edit'} // Field is disabled in edit mode
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                Ship To<span className="text-primary">*</span>
                </FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger>
                      <SelectValue placeholder=" Ship To" />
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
           {/* Shipping Address */}
           <FormField
            control={control}
            name="storeDetail.default"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                Shipping Address<span className="text-primary">*</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder="Shipping Address" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
           {/* User */}
           <FormField
            control={control}
            name="storeDetail.default"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                User<span className="text-primary">*</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder="User" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          { /* Process */ }
          <FormField
            control={control}
            name="storeDetail.startDate"
            disabled={modalMode === 'Edit'} // Field is disabled in edit mode
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                Process<span className="text-primary">*</span>
                </FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger>
                      <SelectValue placeholder=" Process" />
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
           {/* Job No/Production Order */}
           <FormField
            control={control}
            name="storeDetail.default"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                Job No/Production Order<span className="text-primary">*</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder="Job No/Production Order" {...field} />
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
        </div>
        <div className="border p-3 space-y-3">
          {/* GSTIN Field */}
          <FormField
            control={control}
            name="storeDetail.GSTIN"
            disabled={modalMode === 'Edit'} // Field is disabled in edit mode
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  GSTIN No <span className="text-primary">*</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder="GSTIN No" {...field} />
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

      <div className="">
        <div className="border p-3 space-y-3">
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
          {/* Store Type Field */}
          <FormField
            control={control}
            name="storeDetail.storeType"
            disabled={modalMode === 'Edit'} // Field is disabled in edit mode
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Store Type <span className="text-primary">*</span>
                </FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select Store Type"></SelectValue>
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
          {/* Category Field */}
          <FormField
            control={control}
            name="storeDetail.category"
            disabled={modalMode === 'Edit'} // Field is disabled in edit mode
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Category List" />
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
          {/* Franchise Name */}
          <FormField
            control={control}
            name="storeDetail.franchise"
            disabled={modalMode === 'Edit'} // Field is disabled in edit mode
            render={({ field }) => (
              <FormItem>
                <FormLabel>Franchise Name</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Franchise Name" />
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
          {/* Operation Type */}
          <FormField
            control={control}
            name="storeDetail.operationType"
            disabled={modalMode === 'Edit'} // Field is disabled in edit mode
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Operation Type <span className="text-primary">*</span>
                </FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Operation Type" />
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
        </div>
        <div className="border p-3 space-y-3">
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
    </div>
  )
}

export default InventryTransferRequestDetailForm
