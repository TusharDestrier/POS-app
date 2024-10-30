import { Trash } from 'lucide-react'
import { useFieldArray, useFormContext } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

const LedgersDetailsForm = () => {
  // Access form context for central form control
  const { control } = useFormContext()

  // Dynamic field management for ledger values
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'ledgers.ledgerValue',
  })

  return (
    <>
      <div className="form-head mb-4">
        <ul className="grid grid-cols-4 gap-3 ">
          <li className="text-sm font-semibold">
            Ledger Name <span className="text-primary">*</span>
          </li>
          <li className="text-sm font-semibold">Sub Ledger Name</li>
          <li className="text-sm font-semibold">Cost Centre</li>
          <li className="text-sm font-semibold">Discontinued</li>
        </ul>
      </div>

      {fields.map((item, index) => (
        <div key={item.id} className="grid grid-cols-4 gap-2 mb-3">
          <FormField
            control={control}
            name={`ledgers.ledgerValue.${index}.ledger`}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Select onValueChange={field.onChange} defaultValue={field.value || undefined}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Ledger Name" />
                    </SelectTrigger>
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
            control={control}
            name={`ledgers.ledgerValue.${index}.subLedger`}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Sub Ledger Name" />
                    </SelectTrigger>
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
            control={control}
            name={`ledgers.ledgerValue.${index}.costCentre`}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Cost Centre" />
                    </SelectTrigger>
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

          <div className="flex items-center gap-3 justify-between">
            <FormField
              control={control}
              name={`ledgers.ledgerValue.${index}.discontinue`}
              render={({ field }) => (
                <FormItem className='mx-auto'>
                  <FormControl>
                    <div className="flex items-center justify-center">
                    <Checkbox
                      id={`discontinue-${index}`}
                      {...field}
                      checked={field.value || false}
                      onCheckedChange={(checked) => field.onChange(checked)}
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

      <ul className="flex items-center gap-3 justify-end mt-5">
        <li>
          <Button type="button">Copy from Site</Button>
        </li>
        <li>
          <Button
            type="button"
            onClick={() =>
              append({
                ledger: '',
                subLedger: '',
                costCentre: '',
                discontinue: false,
              })
            }
          >
            Add Row
          </Button>
        </li>
      </ul>
    </>
  )
}

export default LedgersDetailsForm
