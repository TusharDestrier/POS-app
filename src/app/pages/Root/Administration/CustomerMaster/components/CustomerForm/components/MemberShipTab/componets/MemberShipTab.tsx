import { zodResolver } from '@hookform/resolvers/zod'
import { format } from 'date-fns'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const formSchema = z.object({
  customerCategory: z.string().nonempty({ message: 'Customer Category is required.' }),
  membershipCategory: z.string().nonempty({ message: 'Membership Category is required.' }),
  membershipNo: z.string().optional(),
  validTill: z.date().optional(),
})

function MemberShipTab() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      customerCategory: '',
      membershipCategory: '',
      membershipNo: '',
      validTill: undefined,
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-2 gap-4">
          {/* Customer Category */}
          <FormField
            control={form.control}
            name="customerCategory"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Customer Category</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Customer Category" />
                    </SelectTrigger>
                    <SelectContent>
                      {/* Add options here */}
                      <SelectItem value="regular">Regular</SelectItem>
                      <SelectItem value="premium">Premium</SelectItem>
                      <SelectItem value="vip">VIP</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Membership Category */}
          <FormField
            control={form.control}
            name="membershipCategory"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Membership Category</FormLabel>
                <FormControl>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Membership Category" />
                    </SelectTrigger>
                    <SelectContent>
                      {/* Add options here */}
                      <SelectItem value="basic">Basic</SelectItem>
                      <SelectItem value="silver">Silver</SelectItem>
                      <SelectItem value="gold">Gold</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Membership No. */}
          <FormField
            control={form.control}
            name="membershipNo"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Membership No.</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Membership No." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Valid Till */}
          <FormField
            control={form.control}
            name="validTill"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Valid Till</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button variant="outline" className="w-full">
                        {field.value ? format(field.value, 'yyyy-MM-dd') : 'Select Date'}
                      </Button>
                    </FormControl>
                  </PopoverTrigger>
                  <PopoverContent>
                    <Calendar selected={field.value} onSelect={field.onChange} />
                  </PopoverContent>
                </Popover>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
      </form>
    </Form>
  )
}

export default MemberShipTab
