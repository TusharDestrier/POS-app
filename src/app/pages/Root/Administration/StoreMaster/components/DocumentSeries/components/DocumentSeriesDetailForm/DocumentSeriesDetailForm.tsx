import { Trash } from 'lucide-react'
import { useFormContext, useFieldArray } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const DocumentSeriesDetailForm = () => {
  // Access form context for central form control
  const { control } = useFormContext()

  // Dynamic field management for document values
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'documentSeries.documentValues', // Adjusted path for combined schema
  })

  return (
    < div className='border p-4 border-black border-solid h-[580px] overflow-y-auto'>
      <div className="form-head mb-4 ">
        <ul className="grid grid-cols-6 gap-3">
          <li className="text-sm font-semibold">
            Transaction Type <span className="text-primary">*</span>
          </li>
          <li className="text-sm font-semibold">
            Series Name <span className="text-primary">*</span>
          </li>
          <li className="text-sm font-semibold">Prefix</li>
          <li className="text-sm font-semibold">
            No. of Digits <span className="text-primary">*</span>
          </li>
          <li className="text-sm font-semibold">Suffix</li>
          <li className="text-sm font-semibold">Discontinued</li>
        </ul>
      </div>

      {fields.map((item, index) => (
        <div key={item.id} className="grid grid-cols-6 gap-3 mb-3">
          <FormField
            control={control}
            name={`documentSeries.documentValues.${index}.transactionType`}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Transaction Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cash">Cash</SelectItem>
                      <SelectItem value="creditCard">Credit Card</SelectItem>
                      <SelectItem value="debitCard">Debit Card</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name={`documentSeries.documentValues.${index}.seriesname`}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Series Name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name={`documentSeries.documentValues.${index}.prefix`}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Prefix" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name={`documentSeries.documentValues.${index}.noOfDigits`}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="No of Digits" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name={`documentSeries.documentValues.${index}.suffix`}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Suffix" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="flex items-center gap-3 justify-between">
            <FormField
              control={control}
              name={`documentSeries.documentValues.${index}.checkbox`}
              render={({ field }) => (
                <FormItem className="mx-auto">
                  <FormControl>
                    <div className="flex items-center justify-center">
                      <Checkbox
                        id={`checkbox-${index}`}
                        {...field}
                        onCheckedChange={(checked) => field.onChange(checked)}
                        checked={field.value || false}
                      />
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

      <ul className="flex item-center gap-3 justify-end mt-5">
        <li>
          <Button type="button">Copy from Site</Button>
        </li>
        <li>
          <Button
            type="button"
            onClick={() =>
              append({
                transactionType: '',
                seriesname: '',
                prefix: '',
                noOfDigits: '',
                suffix: '',
                checkbox: false,
              })
            }
          >
            Add Row
          </Button>
        </li>
      </ul>
    </div>
  )
}

export default DocumentSeriesDetailForm
