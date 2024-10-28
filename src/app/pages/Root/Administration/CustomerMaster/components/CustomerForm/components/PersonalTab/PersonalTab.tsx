import { zodResolver } from '@hookform/resolvers/zod'
import { format } from 'date-fns'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
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
import { Popover, PopoverTrigger, PopoverContent } from '@/components/ui/popover'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'

const formSchema = z.object({
  mobileNo: z.string().min(10, { message: 'Mobile No. must be at least 10 digits.' }),
  firstName: z.string().min(1, { message: 'First Name is required.' }),
  middleName: z.string().optional(),
  lastName: z.string().min(1, { message: 'Last Name is required.' }),
  gender: z.enum(['male', 'female'], { message: 'Gender is required.' }),
  dateOfBirth: z.date({ required_error: 'Date of Birth is required.' }),
  anniversaryDate: z.date().optional(),
  profession: z.string().optional(),
  spouseName: z.string().optional(),
  isEmployee: z.boolean().optional(),
  panNo: z.string().optional(),
  gstNo: z.string().optional(),
  gstDate: z.date().optional(),
})

function PersonalTab() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      mobileNo: '',
      firstName: '',
      middleName: '',
      lastName: '',
      gender: 'male',
      dateOfBirth: undefined,
      anniversaryDate: undefined,
      profession: '',
      spouseName: '',
      isEmployee: false,
      panNo: '',
      gstNo: '',
      gstDate: undefined,
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="mobileNo"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Mobile No.</FormLabel>
              <FormControl>
                <Input placeholder="Enter Mobile No." {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex space-x-4">
          <FormField
            control={form.control}
            name="firstName"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>First Name</FormLabel>
                <FormControl>
                  <Input placeholder="First Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="middleName"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Middle Name</FormLabel>
                <FormControl>
                  <Input placeholder="Middle Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lastName"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Last Name</FormLabel>
                <FormControl>
                  <Input placeholder="Last Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <div className="grid grid-cols-2 gap-3 items-center">
          <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Gender</FormLabel>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex space-x-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="male" id="male" />
                    <FormLabel htmlFor="male">Male</FormLabel>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="female" id="female" />
                    <FormLabel htmlFor="female">Female</FormLabel>
                  </div>
                </RadioGroup>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="isEmployee"
            render={({ field }) => (
              <FormItem className="flex items-center gap-3">
                <FormLabel>Is Employee</FormLabel>
                <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="flex space-x-4">
          <FormField
            control={form.control}
            name="dateOfBirth"
            render={({ field }) => (
              <FormItem className="flex-1 flex gap-3 items-center">
                <FormLabel>Date of Birth</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button variant="outline" className="w-40">
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
          <FormField
            control={form.control}
            name="anniversaryDate"
            render={({ field }) => (
              <FormItem className="flex-1 flex gap-3 items-center">
                <FormLabel>Anniversary Date</FormLabel>
                <Popover>
                  <PopoverTrigger asChild>
                    <FormControl>
                      <Button variant="outline" className="w-40">
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
        <div className="grid grid-cols-2 gap-3 ">
          <FormField
            control={form.control}
            name="profession"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Profession</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Profession" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="spouseName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Spouse Name</FormLabel>
                <FormControl>
                  <Input placeholder="Enter Spouse Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="space-y-3 ">
          <h3 className="text-lg font-semibold">Statutory Information</h3>

          <div className="flex gap-3 items-center">
            <FormField
              control={form.control}
              name="panNo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>PAN No.</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter PAN No." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="gstNo"
              render={({ field }) => (
                <FormItem className="flex-1">
                  <FormLabel>GST No.</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter GST No." {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="gstDate"
              render={({ field }) => (
                <FormItem className="flex-1 flex  flex-col">
                  <FormLabel>Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button variant="outline">
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
        </div>
        <div className="text-end ">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </Form>
  )
}

export default PersonalTab
