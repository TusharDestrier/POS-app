import { zodResolver } from '@hookform/resolvers/zod'
import { Trash } from 'lucide-react'
import { useFieldArray, useForm } from 'react-hook-form'
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
import { PettyCashschema } from '@/schema/pettyCash.scema'

const PettyCashDetailsForm = () => {
  const form = useForm<z.infer<typeof PettyCashschema>>({
    resolver: zodResolver(PettyCashschema),
    defaultValues: {
      username: '',
      test: [{ value: '' }],
    },
  })

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'test',
  })

  function onSubmit(values: z.infer<typeof PettyCashschema>) {
    console.log(values)
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="">
          <div className="form-head mb-4">
            <ul className="grid grid-cols-6 gap-3 ">
              <li className="text-sm font-semibold">Petty Cash Head</li>
              <li className="text-sm font-semibold">Limit</li>
              <li className="text-sm font-semibold">Type Of Transaction</li>
              <li className="text-sm font-semibold">Ledger</li>
              <li className="text-sm font-semibold">Sub Ledger</li>
              <li className="text-sm font-semibold">Discontinued</li>
            </ul>
          </div>
          {fields.map((item, index) => (
            <div key={item.id} className="grid grid-cols-6 gap-3 mb-3 ">
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel></FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Pettycash Head" />
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
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger>
                            <SelectValue placeholder="Select TypeOf Transaction" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="m@example.com">m@example.com</SelectItem>
                          <SelectItem value="m@google.com">m@google.com</SelectItem>
                          <SelectItem value="m@support.com">m@support.com</SelectItem>
                        </SelectContent>
                      </Select>
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
          <ul className="flex item-center gap-3 justify-end mt-8">
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
              <Button type="submit">Save</Button>
            </li>
          </ul>
        </form>
      </Form>
    </>
  )
}

export default PettyCashDetailsForm
