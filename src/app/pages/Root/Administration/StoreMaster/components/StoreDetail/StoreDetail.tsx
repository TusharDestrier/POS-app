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
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Select } from '@radix-ui/react-select'
import { SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

// Define the form schema with all required fields
const formSchema = z.object({
  storeName: z.string().min(2, {
    message: 'Store Name must be at least 2 characters.',
  }),
  storeCode: z.string().optional(),
  storeDate: z.string().optional(),
  closeDate: z.string().optional(),
  storeSize: z.string().optional(),
  default: z.string().optional(),
  defaultSale: z.string().optional(),
  defaultReturn: z.string().optional(),
  GSTIN: z.string().optional(),
  date: z.string().optional(),
  state: z.string().optional(),
  factor: z.string().optional(),
  storeType: z.string().optional(),
  category: z.string().optional(),
  franchise: z.string().optional(),
  operationType: z.string().optional(),
  inActive: z.string().optional(),
})

function StoreDetail() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      storeName: '',
      storeCode: '',
      storeDate: '',
      closeDate: '',
      storeSize: '',
      default: '',
      defaultSale: '',
      defaultReturn: '',
      GSTIN: '',
      date: '',
      state: '',
      factor: '',
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
    <Card>
      <CardHeader>
        <h3 className="heading-secondary">Store Detail</h3>
      </CardHeader>
      <CardContent>
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
              {/* Store Date Field */}
              <FormField
                control={form.control}
                name="storeDate"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Start Date <span className="text-primary">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Start Date" {...field} />
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
                      <Input placeholder="Close Date" {...field} />
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
              <FormField
                control={form.control}
                name="GSTIN"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>GSTIN No</FormLabel>
                    <FormControl>
                      <Input placeholder="GSTIN No" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
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
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className="space-y-3">
              {/* GSTIN */}

              {/* State */}
              <FormField
                control={form.control}
                name="state"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      State <span className="text-primary">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="State" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Store Type */}
              <FormField
                control={form.control}
                name="storeType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Store Type <span className="text-primary">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Store Type" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Price List */}
              <FormField
                control={form.control}
                name="storeType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>
                      Price List <span className="text-primary">*</span>
                    </FormLabel>
                    <FormControl>
                      <Input placeholder="Price List" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Category */}
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Category</FormLabel>
                    <FormControl>
                      <Input placeholder="Category" {...field} />
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
                      <Input placeholder="Franchise Name" {...field} />
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
                      <Input placeholder="Operation Type" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              {/* Inactive */}
              <FormField
                control={form.control}
                name="inActive"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Inactive</FormLabel>
                    <FormControl>
                      <Input placeholder="Inactive" {...field} />
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

export default StoreDetail
