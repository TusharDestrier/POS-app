import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
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
import { zodResolver } from '@hookform/resolvers/zod'
import { Trash } from 'lucide-react'
import { useFieldArray, useForm } from 'react-hook-form'
import { z } from 'zod'

const formSchema = z.object({
  username: z.string().min(2, {
    message: 'Username must be at least 2 characters.',
  }),
  test: z.array(
    z.object({
      value: z.string().min(1, { message: 'Field is required' }),
    })
  ),
})

function MOP() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      test: [{ value: '' }],
    },
  })

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'test',
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <Card>
      <CardHeader>
        <h3 className="heading-secondary">Store Detail</h3>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
            <div className="form-head">
              <ul className="grid grid-cols-6 gap-3 ">
                <li className="text-sm font-semibold">Paymode Name</li>
                <li className="text-sm font-semibold">Paymode Code</li>
                <li className="text-sm font-semibold">Cross Store Usage</li>
                <li className="text-sm font-semibold">Ledger</li>
                <li className="text-sm font-semibold">Sub Ledger</li>
                <li className="text-sm font-semibold">Discontinued</li>
              </ul>
            </div>
            {fields.map((item, index) => (
              <div key={item.id} className="grid grid-cols-6 gap-3 ">
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel></FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select Paymode Name" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="m@example.com">m@example.com</SelectItem>
                          <SelectItem value="m@google.com">m@google.com</SelectItem>
                          <SelectItem value="m@support.com">m@support.com</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel></FormLabel>
                      <FormControl>
                        <Input placeholder="Payment Code" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel></FormLabel>
                      <FormControl>
                        <div className="flex items-center space-x-2 m-9">
                          <Checkbox id="terms" {...field} />
                          {/* <label
                            htmlFor="terms"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Accept terms and conditions
                          </label> */}
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel></FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select Ledger Name" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="m@example.com">m@example.com</SelectItem>
                          <SelectItem value="m@google.com">m@google.com</SelectItem>
                          <SelectItem value="m@support.com">m@support.com</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="username"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel></FormLabel>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select Sub Ledger Name" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="m@example.com">m@example.com</SelectItem>
                          <SelectItem value="m@google.com">m@google.com</SelectItem>
                          <SelectItem value="m@support.com">m@support.com</SelectItem>
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="flex items-center gap-3">
                  <FormField
                    control={form.control}
                    name="username"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel></FormLabel>
                        <FormControl>
                          <div className="flex items-center space-x-2 m-9">
                            <Checkbox id="terms" {...field} />
                            {/* <label
                            htmlFor="terms"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          >
                            Accept terms and conditions
                          </label> */}
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button size={'icon'} type="button" onClick={() => remove(index)}>
                    <Trash size={'15'} />
                  </Button>
                </div>
              </div>
            ))}
            <ul className="flex item-center gap-3 justify-end mt-5">
              <li>
                <Button type="button">Copy from Site</Button>
              </li>
              <li>
                <Button type="button" onClick={() => append({ value: '' })}>
                  Add Row
                </Button>
              </li>
              <li>
                {' '}
                <Button type="submit">Submit</Button>
              </li>
            </ul>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}

export default MOP
