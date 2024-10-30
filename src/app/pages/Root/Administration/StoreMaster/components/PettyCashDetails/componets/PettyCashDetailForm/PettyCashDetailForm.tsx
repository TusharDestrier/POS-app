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

const PettyCashDetailsForm = () => {
  // Access central form control through useFormContext
  const { control } = useFormContext()

  // Manage dynamic field rows for petty cash values
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'pettyCash.pettycashValues', // Adjusted path to match combined schema
  })

  return (
    <>
      <div className="form-head mb-4">
        <ul className="grid grid-cols-6 gap-3">
          <li className="text-sm font-semibold">
            Petty Cash Head <span className="text-primary">*</span>
          </li>
          <li className="text-sm font-semibold">Limit</li>
          <li className="text-sm font-semibold">
            TypeOf Transaction <span className="text-primary">*</span>
          </li>
          <li className="text-sm font-semibold">
            Ledger <span className="text-primary">*</span>
          </li>
          <li className="text-sm font-semibold">Sub Ledger</li>
          <li className="text-sm font-semibold">Discontinued</li>
        </ul>
      </div>

      {fields.map((item, index) => (
        <div key={item.id} className="grid grid-cols-6 gap-3 mb-3">
          <FormField
            control={control}
            name={`pettyCash.pettycashValues.${index}.pettycahHead`}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Pettycash Head" />
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
            name={`pettyCash.pettycashValues.${index}.limit`}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Limit" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name={`pettyCash.pettycashValues.${index}.typeofTransaction`}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select TypeOf Transaction" />
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
            name={`pettyCash.pettycashValues.${index}.ledger`}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
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
            name={`pettyCash.pettycashValues.${index}.subLedger`}
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

          <div className="flex items-center gap-3">
            <FormField
              control={control}
              name={`pettyCash.pettycashValues.${index}.discontinue`}
              render={({ field }) => (
                <FormItem>
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

      <ul className="flex item-center gap-3 justify-end mt-4">
        <li>
          <Button type="button">Copy from Site</Button>
        </li>
        <li>
          <Button
            type="button"
            onClick={() =>
              append({
                pettycahHead: '',
                limit: '',
                typeofTransaction: '',
                ledger: '',
                subLedger: '',
                discontinue: '',
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

export default PettyCashDetailsForm
