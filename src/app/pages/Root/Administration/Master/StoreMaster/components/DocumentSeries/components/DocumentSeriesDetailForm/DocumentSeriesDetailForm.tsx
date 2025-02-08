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
    name: 'objSeries', // Adjusted path for combined schema
  })

  return (
    <div className="border p-4 border-black border-solid h-[580px] overflow-y-auto">
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
            name={`objSeries.${index}.transactionType`}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Transaction Type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">sale</SelectItem>
                      <SelectItem value="2">Purchase</SelectItem>
                      <SelectItem value="3">Return</SelectItem>
                      <SelectItem value="4">Transfer</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name={`objSeries.${index}.seriesName`}
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
            name={`objSeries.${index}.prefix`}
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
            name={`objSeries.${index}.noOfDigit`}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    type="number" // Ensures only numbers can be typed
                    placeholder="No of Digits"
                    value={field.value || ''} // Handles initial null/undefined values
                    onChange={(e) => {
                      const value = e.target.value
                      field.onChange(value !== '' ? Number(value) : undefined) // Convert to number or undefined
                    }}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name={`objSeries.${index}.suffix`}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Suffix" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid grid-cols-4 gap-3 mb-3 ">
            <FormField
              control={control}
              name={`objPettyCash.${index}.discontinue`}
              render={({ field }) => (
                <FormItem className="ms-auto me-auto">
                  <FormControl>
                    <div className="flex items-center mt-2">
                      <Checkbox
                        id={`discontinue-${index}`}
                        checked={field.value === 'Y'} // Treat 'Y' as checked
                        onCheckedChange={(checked) => field.onChange(checked ? 'Y' : 'N')} // Map true/false to 'Y'/'N'
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
                seriesName: '',
                prefix: '',
                noOfDigit: '',
                suffix: '',
                checkbox: 'N',
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
