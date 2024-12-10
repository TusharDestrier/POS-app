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

function MopDetailForm() {
  // Central form control access
  const { control } = useFormContext()

  // Field array to manage dynamic rows in mopValues
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'mop.mopValues', // Ensure this matches combined schema path exactly
  })

  return (
    < div className='border p-4 border-black border-solid h-[580px] overflow-y-auto'>
      <div className="form-head mb-4 ">
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
        <div key={item.id} className="grid grid-cols-6 gap-3 mb-3 m-3">
          <FormField
            control={control}
            name={`mop.mopValues.${index}.payMode`}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Select onValueChange={field.onChange} defaultValue={field.value || undefined}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Paymode Name" />
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
            name={`mop.mopValues.${index}.paymentCode`}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input placeholder="Payment Code" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name={`mop.mopValues.${index}.crossStore`}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <div className="flex items-center mt-2 m-14">
                    <Checkbox
                      id={`crossStore-${index}`}
                      checked={field.value || false}
                      onCheckedChange={field.onChange}
                    />
                  </div>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name={`mop.mopValues.${index}.ledgers`}
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
            name={`mop.mopValues.${index}.subLedger`}
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

          <div className="grid grid-cols-4 gap-3 mb-3 m-3">
            <FormField
              control={control}
              name={`mop.mopValues.${index}.discontinue`}
              render={({ field }) => (
                <FormItem className='ms-auto me-auto'>
                  <FormControl>
                    <div className="flex items-center justify-center">
                      <Checkbox
                        id={`discontinue-${index}`}
                        checked={field.value || false}
                        onCheckedChange={(checked) => field.onChange(checked)}
                        className=""
                      />
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
              <div className="grid grid-cols-4 gap-3 mb-3">
            <Button size="icon" type="button" onClick={() => remove(index)}>
              <Trash size="15" />
            </Button>
            </div>
          </div>
        </div>
      ))}

      <ul className="flex items-center gap-3 justify-end mt-4">
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
                crossStore: false,
                discontinue: false,
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

export default MopDetailForm
