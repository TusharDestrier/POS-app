import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { Input } from '@/components/ui/input'
import { z } from 'zod'
import { Button } from '@/components/ui/button'
import { Select } from '@radix-ui/react-select'
import {
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Checkbox } from '@/components/ui/checkbox'

// Define the form schema with all required fields
const formSchema = z.object({
  storeName: z.string().min(2, {
    message: 'Store Name must be at least 2 characters.',
  }),
  storeCode: z.string().optional(),
  startDate: z.string().optional(),
  closeDate: z.string().optional(),
  storeSize: z.string().optional(),
  default: z.string().optional(),
  defaultSale: z.string().optional(),
  defaultReturn: z.string().optional(),
  GSTIN: z.string().optional(),
  date: z.string().optional(),
  state: z.string().optional(),
  factor: z.string().optional(),
  priceList: z.string().optional(),
  factorIfAny: z.string().optional(),
  storeType: z.string().optional(),
  category: z.string().optional(),
  franchise: z.string().optional(),
  operationType: z.string().optional(),
  inActive: z.string().optional(),
})

function StoreDetailForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      storeName: '',
      storeCode: '',
      startDate: '',
      closeDate: '',
      storeSize: '',
      default: '',
      defaultSale: '',
      defaultReturn: '',
      GSTIN: '',
      date: '',
      state: '',
      factor: '',
      priceList: '',
      factorIfAny: '',
      storeType: '',
      category: '',
      franchise: '',
      operationType: '',
      inActive: '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    // Handle the form submission here.
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-2 gap-3">
        <div className="space-y-3">
          {/* Store Name Field */}
          <FormField
            control={form.control}
            name="storeName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Store Name <span className="text-primary">*</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder="Store name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Store Code Field */}
          <FormField
            control={form.control}
            name="storeCode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Store Code <span className="text-primary">*</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder="Store Code" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Start Date Field */}
          <FormField
            control={form.control}
            name="startDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Start Date <span className="text-primary">*</span>
                </FormLabel>
                <FormControl>
                  <Input type="date" placeholder="Start Date" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* Close Date Field */}
          <FormField
            control={form.control}
            name="closeDate"
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
          {/* Store Size Field */}
          <FormField
            control={form.control}
            name="storeSize"
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
            control={form.control}
            name="default"
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
            control={form.control}
            name="defaultSale"
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
            control={form.control}
            name="defaultReturn"
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
          {/* GSTIN Field */}
          <FormField
            control={form.control}
            name="GSTIN"
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
          {/* Date Field */}
          <FormField
            control={form.control}
            name="date"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Date</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Date" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="date">date</SelectItem>
                    <SelectItem value="date1">date1</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          {/* State Field */}
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
        </div>

        <div className="space-y-3">
          {/* GSTIN */}
          {/* Store Type */}
          {/* Price List Field */}
          <FormField
            control={form.control}
            name="priceList"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Price List <span className="text-primary">*</span>
                </FormLabel>
                <FormControl>
                  <Select {...field}>
                    <SelectTrigger>
                      <SelectValue placeholder="Price List" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Store </SelectLabel>
                        <SelectItem value="kolkata">Kolkata</SelectItem>
                        <SelectItem value="pune">Pune</SelectItem>
                        <SelectItem value="hydrabad">Hydrabad</SelectItem>
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
            control={form.control}
            name="factorIfAny"
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
            control={form.control}
            name="storeType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Store Type <span className="text-primary">*</span>
                </FormLabel>
                <FormControl>
                  <Select {...field}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Store" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Store </SelectLabel>
                        <SelectItem value="kolkata">Kolkata</SelectItem>
                        <SelectItem value="pune">Pune</SelectItem>
                        <SelectItem value="hydrabad">Hydrabad</SelectItem>
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
          {/* Category Field*/}
          <FormField
            control={form.control}
            name="category"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Category</FormLabel>
                <FormControl>
                  <Select {...field}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select Category" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Category </SelectLabel>
                        <SelectItem value="kolkata">Kolkata</SelectItem>
                        <SelectItem value="pune">Pune</SelectItem>
                        <SelectItem value="hydrabad">Hydrabad</SelectItem>
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
            control={form.control}
            name="franchise"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Franchise Name</FormLabel>
                <FormControl>
                  <Select {...field}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select Franchise" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Franchise </SelectLabel>
                        <SelectItem value="kolkata">Kolkata</SelectItem>
                        <SelectItem value="pune">Pune</SelectItem>
                        <SelectItem value="hydrabad">Hydrabad</SelectItem>
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
            control={form.control}
            name="operationType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Operation Type <span className="text-primary">*</span>
                </FormLabel>
                <FormControl>
                  <Select {...field}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select Operation Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectGroup>
                        <SelectLabel>Operation Type </SelectLabel>
                        <SelectItem value="kolkata">Kolkata</SelectItem>
                        <SelectItem value="pune">Pune</SelectItem>
                        <SelectItem value="hydrabad">Hydrabad</SelectItem>
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
          {/* Inactive Field*/}
          <FormField
            control={form.control}
            name="inActive"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Inactive</FormLabel>
                <FormControl>
                  <Checkbox className="m-4" id="terms" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {/* Submit Button */}
        <div className="col-span-full p-5 text-end sticky bottom-0 right-0 w-full bg-white z-20">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </Form>
  )
}

export default StoreDetailForm
