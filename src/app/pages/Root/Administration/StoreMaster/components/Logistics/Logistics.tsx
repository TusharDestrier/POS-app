import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const formSchema = z.object({
  storeName: z.string().min(2, {
    message: 'Store Name must be at least 2 characters.',
  }),

  billToAddress: z.string().optional(),
  city: z.string().optional(),
  postalCode: z.string().optional(),
  state: z.string().optional(),
  contactPerson: z.string().optional(),
  contactNo: z.string().optional(),
  emailId: z.string().optional(),
  shipToAddress: z.string().optional(),
  searching: z.string().optional(),

  default: z.string().optional(),
  defaultSale: z.string().optional(),
  defaultReturn: z.string().optional(),

  date: z.string().optional(),
  factor: z.string().optional(),
  storeType: z.string().optional(),
  category: z.string().optional(),

  operationType: z.string().optional(),
  inActive: z.string().optional(),
})

function Logistics() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      storeName: '',

      billToAddress: '',
      city: '',
      contactPerson: '',
      contactNo: '',
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
  function onSubmit(values: z.infer<typeof formSchema>) {
    // Handle the form submission here.
    console.log(values)
  }
  return (
    <Card>
      <CardHeader>
        <h3 className="heading-secondary">Logistic</h3>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-2 gap-3">
            <div className="space-y-3">
              <FormField
                control={form.control}
                name="billToAddress"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Bill To Address</FormLabel>
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
                    <FormLabel>City</FormLabel>
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
                    <FormLabel>Postal Code</FormLabel>
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
                    <FormLabel>State</FormLabel>
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
                    <FormLabel>Contact Person</FormLabel>
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
                name="emailId"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email Id</FormLabel>
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
                    <FormLabel>Ship To Address</FormLabel>
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
                    <FormLabel>City</FormLabel>
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
                    <FormLabel>Postal Code</FormLabel>
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
                    <FormLabel>State</FormLabel>
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
                    <FormLabel className="grid grid-cols-2 gap-3 text-start">
                      Sourcing W/H
                    </FormLabel>
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
            <div className="col-span-full text-end">
              <Button type="submit">Submit</Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}

export default Logistics
