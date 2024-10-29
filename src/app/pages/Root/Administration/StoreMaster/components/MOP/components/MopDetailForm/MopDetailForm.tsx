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
import { Mopschema } from '@/schema/mop.schema'

function MopDetailForm() {
  const form = useForm<z.infer<typeof Mopschema>>({
    resolver: zodResolver(Mopschema),
    defaultValues: {
      mopValues: [
        {
          payMode: '',
          ledgers: '',
          subLedger: '',
          paymentCode: '',
          crossStore: '',
          discontinue: '',
        },
      ],
    },
  })

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'mopValues',
  })

  function onSubmit(values: z.infer<typeof Mopschema>) {
    console.log(values)
  }

  return (
    <>
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
        <div className="form-head mb-4">
          <ul className="grid grid-cols-6 gap-3">
            <li className="text-sm font-semibold">
              Paymode Name <span className="text-primary">*</span>
            </li>
            <li className="text-sm font-semibold">Paymode Code</li>
            <li className="text-sm font-semibold">Cross Store Usage</li>
            <li className="text-sm font-semibold">
              Ledger <span className="text-primary">*</span>
            </li>
            <li className="text-sm font-semibold">Sub Ledger</li>
            <li className="text-sm font-semibold">Discontinued</li>
          </ul>
        </div>
        {fields.map((item, index) => (
          <div key={item.id} className="grid grid-cols-6 gap-3">
            <FormField
              control={form.control}
              name={`mopValues.${index}.payMode`} // Dynamic field name
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
              name={`mopValues.${index}.paymentCode`} // Dynamic field name
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
              name={`mopValues.${index}.crossStore`} // Dynamic field name
              render={({ field }) => (
                <FormItem>
                  <FormLabel></FormLabel>
                  <FormControl>
                    <div className="flex items-center space-x-2 m-9">
                      <Checkbox id={`crossStore-${index}`} {...field} />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name={`mopValues.${index}.ledgers`} // Dynamic field name
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
              name={`mopValues.${index}.subLedger`} // Dynamic field name
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
                name={`mopValues.${index}.discontinue`} // Dynamic field name
                render={({ field }) => (
                  <FormItem>
                    <FormLabel></FormLabel>
                    <FormControl>
                      <div className="flex items-center space-x-2 m-9">
                        <Checkbox id={`discontinue-${index}`} {...field} />
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button size="icon" type="button" onClick={() => remove(index)}>
                <Trash size="15" />
              </Button>
            </div>
          </div>
        ))}
        <ul className="flex items-center gap-3 justify-end mt-5">
          <li>
            <Button type="button">Copy from Site</Button>
          </li>
          <li>
            <Button
              type="button"
              onClick={() =>
                append({
                  payMode: '',
                  ledgers: '',
                  subLedger: '',
                  paymentCode: '',
                  crossStore: '',
                  discontinue: '',
                })
              }
            >
              Add Row
            </Button>
          </li>
          <li>
            <Button type="submit">Save</Button>
          </li>
        </ul>
      </form>
    </Form>
  </>
  
  )
}

export default MopDetailForm
