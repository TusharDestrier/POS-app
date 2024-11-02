import { Trash } from 'lucide-react'
import { useFieldArray, useFormContext } from 'react-hook-form'

import { Button } from '@/components/ui/button'
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

function LogisticDetailForm() {
  // Central form control access from StoreMasterTab
  const { control } = useFormContext()

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'logistics.sourcingWH', // This should match your schema path
  })

  return (
    <div className="grid grid-cols-2 gap-3">
      <div className="space-y-3">
        {/* Bill To Address Field */}
        <FormField
          control={control}
          name="logistics.billToAddress"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Bill To Address <span className="text-primary">*</span>
              </FormLabel>
              <FormControl>
                <Textarea
                  className="w-full mt-5 p-5"
                  placeholder="Type your address here."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* City Field */}
        <FormField
          control={control}
          name="logistics.city"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                City <span className="text-primary">*</span>
              </FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a city" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>City</SelectLabel>
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

        {/* Postal Code Field */}
        <FormField
          control={control}
          name="logistics.postalCode"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Postal Code <span className="text-primary">*</span>
              </FormLabel>
              <FormControl>
                <Input placeholder="Postal Code" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* State Field */}
        <FormField
          control={control}
          name="logistics.state"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                State <span className="text-primary">*</span>
              </FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger className="w-full">
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

        {/* Contact Person Field */}
        <FormField
          control={control}
          name="logistics.contactPerson"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Contact Person <span className="text-primary">*</span>
              </FormLabel>
              <FormControl>
                <Input placeholder="Contact Person" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Contact No Field */}
        <FormField
          control={control}
          name="logistics.contactNo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contact No.</FormLabel>
              <FormControl>
                <Input placeholder="Contact No." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Alternative Contact No Field */}
        <FormField
          control={control}
          name="logistics.alcontactNo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Alternative Contact No.</FormLabel>
              <FormControl>
                <Input placeholder="Alternative Contact No." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Email ID Field */}
        <FormField
          control={control}
          name="logistics.emailId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Email Id <span className="text-primary">*</span>
              </FormLabel>
              <FormControl>
                <Input placeholder="Email Id" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className="space-y-3">
        {/* Ship To Address Field */}
        <FormField
          control={control}
          name="logistics.shipToAddress"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Ship To Address <span className="text-primary">*</span>
              </FormLabel>
              <FormControl>
                <Textarea
                  className="w-full mt-5 p-5"
                  placeholder="Type your address here."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* City Field */}
        <FormField
          control={control}
          name="logistics.cityTo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                City <span className="text-primary">*</span>
              </FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a city" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>City</SelectLabel>
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

        {/* Postal Code Field */}
        <FormField
          control={control}
          name="logistics.postalCodeTo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Postal Code <span className="text-primary">*</span>
              </FormLabel>
              <FormControl>
                <Input placeholder="Postal Code" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* State Field */}
        <FormField
          control={control}
          name="logistics.stateTo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                State <span className="text-primary">*</span>
              </FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger className="w-full">
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

        {/* Sourcing W/H Fields */}
        <div className="form-head mb-4">
          <FormLabel>Sourcing W/H</FormLabel>
          <div className='flex items-center mb-3'>
            <div className='text-center flex-1'>
              <h3 className='heading-secondary'>Warehouse</h3>
            </div>
            <div className='flex-1 text-center'>
              <h3 className='heading-secondary'>Transit Days</h3>
            </div>
          </div>
          {fields.map((item, index) => (
            <div key={item.id} className="">
              {/* Warehouse Field */}
              <div className='grid grid-cols-[1fr,1fr,50px] gap-3 items-center mb-3'>
                <FormField
                  control={control}
                  name={`logistics.sourcingWH.${index}.warehouse`}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select a state" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Warehouse</SelectLabel>
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

                {/* Transit Days Field */}
                <FormField
                  control={control}
                  name={`logistics.sourcingWH.${index}.transitDays`}
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input placeholder="Transit Days" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div>
                  <Button type="button" size={'icon'}  onClick={() => remove(index)} className="">
                    <Trash  size={'14'}/>
                  </Button>
                </div>
              </div>

              {/* Remove Button */}
            </div>
          ))}

          {/* Add New Row Button */}
          <Button
            type="button"
            onClick={
              () => append({ warehouse: '', transitDays: '' }) // Add a new row with empty values
            }
            className="mt-4"
          >
            Add Row
          </Button>
        </div>
      </div>
    </div>
  )
}

export default LogisticDetailForm
