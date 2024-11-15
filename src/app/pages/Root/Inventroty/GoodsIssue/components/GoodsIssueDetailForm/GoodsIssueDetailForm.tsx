import { useFormContext } from 'react-hook-form'

import useGoodsIssueType from '../../store/useGoodsIssueType'
import GoodsIssueFormTable from '../GoodsIssueFormTable/GoodsIssueFormTable'

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


function GoodsIssueDetailForm() {
  const { control } = useFormContext()
  const modalMode = useGoodsIssueType((state) => state.mode)

  return (
    <div className="h-screen overflow-y-auto">
      <div className=" border border-solid border-black h-[400px] overflow-y-auto p-3 grid gap-4 grid-cols-3 items-center">
        {/* Bussiness Patner Field */}
        <FormField
          control={control}
          name="storeDetail.storeCode"
          disabled={modalMode === 'Edit'} // Field is disabled in edit mode
          render={({ field }) => (
            <FormItem>
              <FormLabel>
              Company <span className="text-primary">*</span>
              </FormLabel>
              <FormControl>
                <Input placeholder="Company" {...field} />
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
        {/* From Unit */}
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
        {/* To Warehouse */}
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
        {/* To Unit */}
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
        {/* To Warehouse */}
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
        {/* Contact Person */}
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
        {/* Ship To */}
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
        {/* Process */}
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
      </div>
      <div className='mt-4  border border-solid border-black'>
        <GoodsIssueFormTable />
      </div>
    </div>
  )
}

export default GoodsIssueDetailForm
