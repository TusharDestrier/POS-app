import { zodResolver } from '@hookform/resolvers/zod'
import { format } from 'date-fns'
import { Trash } from 'lucide-react'
import { useForm, useFieldArray } from 'react-hook-form'
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const formSchema = z.object({
  allocations: z.array(
    z.object({
      storeName: z.string().min(1, { message: 'Store Name is required.' }),
      storeCode: z.string().optional(),
      startDate: z.date({ required_error: 'Start Date is required.' }),
      endDate: z.date().optional(),
      transferred: z.boolean().optional(),
    })
  ),
})

function StoreAllocationTab() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      allocations: [
        {
          storeName: '',
          storeCode: '',
          startDate: new Date(),
          endDate: new Date(),
          transferred: false,
        },
      ],
    },
  })

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'allocations',
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className=" items-center">
          {fields.map((field, index) => (
            <div className="grid grid-cols-5 items-center gap-3" key={field.id}>
              {/* Store Name */}
              <FormField
                control={form.control}
                name={`allocations.${index}.storeName`}
                render={({ field }) => (
                  <FormItem className="col-span-1">
                    <FormLabel>Store Name *</FormLabel>
                    <FormControl>
                      <Select onValueChange={field.onChange} defaultValue={field.value}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Store" />
                        </SelectTrigger>
                        <SelectContent>
                          {/* Add actual store name options here */}
                          <SelectItem value="store1">Store 1</SelectItem>
                          <SelectItem value="store2">Store 2</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Store Code */}
              <FormField
                control={form.control}
                name={`allocations.${index}.storeCode`}
                render={({ field }) => (
                  <FormItem className="col-span-1">
                    <FormLabel>Store Code</FormLabel>
                    <FormControl>
                      <Input placeholder="Store Code" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Start Date */}
              <FormField
                control={form.control}
                name={`allocations.${index}.startDate`}
                render={({ field }) => (
                  <FormItem className="col-span-1">
                    <FormLabel>Start Date *</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button variant="outline" className="w-full">
                            {field.value ? format(field.value, 'yyyy-MM-dd') : 'Pick a date'}
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

              {/* End Date */}
              <FormField
                control={form.control}
                name={`allocations.${index}.endDate`}
                render={({ field }) => (
                  <FormItem className="col-span-1 w-full">
                    <FormLabel>End Date</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button variant="outline" className="w-full">
                            {field.value ? format(field.value, 'yyyy-MM-dd') : 'Pick a date'}
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

              {/* Transferred */}
              <div className="flex items-center gap-3 mt-auto">
                <FormField
                  control={form.control}
                  name={`allocations.${index}.transferred`}
                  render={({ field }) => (
                    <FormItem className="flex items-center col-span-1">
                      <FormControl>
                        <Checkbox checked={field.value} onCheckedChange={field.onChange} />
                      </FormControl>
                      <FormLabel className="ml-2">Transferred</FormLabel>
                    </FormItem>
                  )}
                />
                <Button
                  type="button"
                  size={'icon'}
                  variant="destructive"
                  onClick={() => remove(index)}
                >
                  <Trash size={14} />
                </Button>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-end gap-3">
          <Button
            type="button"
            onClick={() =>
              append({
                storeName: '',
                storeCode: '',
                startDate: new Date(),
                endDate: new Date(),
                transferred: false,
              })
            }
            className="mt-4"
          >
            Add Row
          </Button>

          <Button type="submit" className="mt-4">
            Save
          </Button>
        </div>
      </form>
    </Form>
  )
}

export default StoreAllocationTab
