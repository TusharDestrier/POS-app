import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
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
import { logisticsScema } from '@/schema/logistics.schema'

function LogisticDetailForm() {
  const form = useForm<z.infer<typeof logisticsScema>>({
    resolver: zodResolver(logisticsScema),
    defaultValues: {
      // storeName: '',

      billToAddress: '',
      city: '',
      contactPerson: '',
      contactNo: '',
      alcontactNo: '',
      emailId: '',
      shipToAddress: '',
      searching: '',
      postalCode: '',
      state: '',
      default: '',
      defaultSale: '',
      defaultReturn: '',

      date: '',
      factor: '',
      storeType: '',
      category: '',

      operationType: '',
      inActive: '',
    },
  })
  function onSubmit(values: z.infer<typeof logisticsScema>) {
    // Handle the form submission here.
    console.log(values)
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-2 gap-3">
        <div className="space-y-3">
          <FormField
            control={form.control}
            name="billToAddress"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Bill To Address <span className="text-primary">*</span>
                </FormLabel>
                <FormControl>
                  <textarea
                    className="w-full mt-5 p-5"
                    placeholder="Type your address here."
                    {...field}
                  />
                  {/* <Input placeholder="Bill To Address" {...field} /> */}
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  City <span className="text-primary">*</span>
                </FormLabel>
                <FormControl>
                  <Select {...field}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a city" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>City </SelectLabel>
                        <SelectItem value="kolkata">Kolkata</SelectItem>
                        <SelectItem value="pune">Pune</SelectItem>
                        <SelectItem value="hydrabad">Hydrabad</SelectItem>
                        <SelectItem value="bengaluru">Bengaluru</SelectItem>
                        <SelectItem value="mumbai">Mumbai</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  {/* <Input placeholder="City" {...field} /> */}
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="postalCode"
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
          <FormField
            control={form.control}
            name="state"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  State <span className="text-primary">*</span>
                </FormLabel>
                <FormControl>
                  <Select {...field}>
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
                  {/* <Input placeholder="State" {...field} /> */}
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="contactPerson"
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
          <FormField
            control={form.control}
            name="contactNo"
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
          <FormField
            control={form.control}
            name="alcontactNo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Alternative Contact No.</FormLabel>
                <FormControl>
                  <Input placeholder="Contact No." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="emailId"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Email Id <span className="required">*</span>
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
          <FormField
            control={form.control}
            name="shipToAddress"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Ship To Address <span className="text-primary">*</span>
                </FormLabel>
                <FormControl>
                  <textarea
                    className="w-full mt-5 p-5"
                    placeholder="Type your address here."
                    {...field}
                  />
                  {/* <Input placeholder="Ship To Address" {...field} /> */}
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  City <span className="text-primary">*</span>
                </FormLabel>
                <FormControl>
                  <Select {...field}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a city" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>City</SelectLabel>
                        <SelectItem value="kolkata">Kolkata</SelectItem>
                        <SelectItem value="pune">Pune</SelectItem>
                        <SelectItem value="hydrabad">Hydrabad</SelectItem>
                        <SelectItem value="bengaluru">Bengaluru</SelectItem>
                        <SelectItem value="mumbai">Mumbai</SelectItem>
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                  {/* <Input placeholder="City" {...field} /> */}
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="postalCode"
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
          <FormField
            control={form.control}
            name="state"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  State <span className="text-primary">*</span>
                </FormLabel>
                <FormControl>
                  <Select {...field}>
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
                  {/* <Input placeholder="State" {...field} /> */}
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="searching"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="grid grid-cols-2 gap-3 text-start">Sourcing W/H</FormLabel>
                <FormControl>
                  {/* <textarea
                  className="w-full mt-5 p-5"
                  placeholder="Type your message here."
                  {...field}
                /> */}
                  <Input placeholder="State" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        {/* Submit Button */}
        <div className="col-span-full text-end">{/* <Button type="submit">Save</Button> */}</div>
      </form>
    </Form>
  )
}

export default LogisticDetailForm
