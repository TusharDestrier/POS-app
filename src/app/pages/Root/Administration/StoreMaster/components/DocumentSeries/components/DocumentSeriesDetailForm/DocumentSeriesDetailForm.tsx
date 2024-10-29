import { Button } from '@/components/ui/button'
//import { Card, CardContent, CardHeader } from '@/components/ui/card'
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
import { DocuemntSeriesschema } from '@/schema/documentSeries.schema'
import { zodResolver } from '@hookform/resolvers/zod'
import { Trash } from 'lucide-react'
import { useFieldArray, useForm } from 'react-hook-form'
import { z } from 'zod'

const DocumentSeriesDetailForm = () => {
  const form = useForm<z.infer<typeof DocuemntSeriesschema>>({
    resolver: zodResolver(DocuemntSeriesschema),
    defaultValues: {
      transactionType: '',
      seriesname: '',
      prefix: '',
      noOfDigits: '',
      suffix: '',
      checkbox: '',
      test: [{ value: '' }],
    },
  })

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: 'test',
  })

  function onSubmit(values: z.infer<typeof DocuemntSeriesschema>) {
    console.log(values)
  }
  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-3">
          <div className="form-head mb-4">
            <ul className="grid grid-cols-6 gap-3 ">
              <li className="text-sm font-semibold">Transaction Type</li>
              <li className="text-sm font-semibold">Series Name</li>
              <li className="text-sm font-semibold">Prefix</li>
              <li className="text-sm font-semibold">No. of Digits</li>
              <li className="text-sm font-semibold">Suffix</li>
              <li className="text-sm font-semibold">Discontinued</li>
            </ul>
          </div>
          {fields.map((item, index) => (
            <div key={item.id} className="grid grid-cols-6 gap-3 mb-3 ">
              <FormField
                control={form.control}
                name="transactionType"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel></FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select Transaction Type" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="cash">Cash</SelectItem>
                        <SelectItem value="creditCard">Crdit Card</SelectItem>
                        <SelectItem value="debitCard">Debit Card</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="seriesname"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel></FormLabel>
                    <FormControl>
                      <Input placeholder="Series Name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="prefix"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel></FormLabel>
                    <FormControl>
                      <Input placeholder="Prefix" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="noOfDigits"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel></FormLabel>
                    <Input placeholder="No of Digits" {...field} />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="suffix"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel></FormLabel>
                    <Input placeholder="Suffix" {...field} />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className="flex items-center gap-3">
                <FormField
                  control={form.control}
                  name="checkbox"
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
              <Button type="submit">Save</Button>
            </li>
          </ul>
        </form>
      </Form>
    </>
  )
}

export default DocumentSeriesDetailForm
