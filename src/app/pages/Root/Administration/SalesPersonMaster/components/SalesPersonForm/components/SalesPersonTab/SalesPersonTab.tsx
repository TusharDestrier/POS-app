import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
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
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const formSchema = z.object({
  firstName: z.string().min(1, { message: 'First Name is required.' }),
  lastName: z.string().min(1, { message: 'Last Name is required.' }),
  mobileNo: z.string().min(10, { message: 'Mobile No. must be at least 10 digits.' }),
  whatsappNo: z.string().optional(),
  // email: z.string().email({ message: 'Invalid email address.' }).optional(),
  email: z.string().optional(),
  employeeId: z.string().optional(),
  allocateRole: z.string().optional(),
  allocateUser: z.string().optional(),
  inactive: z.boolean().optional(),
})

function SalesPersonTab() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      lastName: '',
      mobileNo: '',
      whatsappNo: '',
      email: '',
      employeeId: '',
      allocateRole: '',
      allocateUser: '',
      inactive: false,
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="grid grid-cols-2 gap-3">
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name <span className="text-primary">*</span></FormLabel>
              <FormControl>
                <Input placeholder="First Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last Name <span className="text-primary">*</span></FormLabel>
              <FormControl>
                <Input placeholder="Last Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="mobileNo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mobile No.<span className="text-primary">*</span></FormLabel>
              <FormControl>
                <Input placeholder="Mobile No." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="whatsappNo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>WhatsApp No.</FormLabel>
              <FormControl>
                <Input placeholder="WhatsApp No." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="employeeId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Employee ID</FormLabel>
              <FormControl>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Employee ID" />
                  </SelectTrigger>
                  <SelectContent>
                    {/* Add actual options here */}
                    <SelectItem value="emp1">EMP1</SelectItem>
                    <SelectItem value="emp2">EMP2</SelectItem>
                  </SelectContent>
                </Select>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="allocateRole"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Allocate Role</FormLabel>
              <FormControl>
                <Input placeholder="Allocate Role" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="allocateUser"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Allocate User</FormLabel>
              <FormControl>
                <Input placeholder="Allocate User" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="inactive"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center space-x-3">
              <FormControl>
                <Checkbox checked={field.value} onCheckedChange={field.onChange} />
              </FormControl>
              <FormLabel>Inactive</FormLabel>
            </FormItem>
          )}
        />

        <Button type="submit" className="col-span-2 mt-4">
          Save
        </Button>
      </form>
    </Form>
  )
}

export default SalesPersonTab
