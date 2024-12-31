import { useState } from 'react'
import { useFieldArray, useFormContext, useWatch } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { FormField, FormItem, FormControl, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select'
import { Table, TableBody, TableCell, TableHead, TableRow } from '@/components/ui/table'

function PromotionFormDiscountTable() {
  const { control } = useFormContext()
  const { fields, append } = useFieldArray({
    control,
    name: 'promotionParameters.discountTypes',
  })

  const discountTypes = useWatch({
    control,
    name: 'promotionParameters.discountTypes',
  })

  return (
    <div>
      <Table className="w-full">
        <TableBody>
          {fields.map((field, index) => (
            <DiscountRow key={field.id} index={index} discountTypes={discountTypes} />
          ))}
        </TableBody>
      </Table>
      <div className="mt-4">
        <Button
          onClick={() =>
            append({
              type: '',
              discountOn: '',
              condition: '',
              comparison: '',
              from: null,
              to: null,
            })
          }
        >
          Add Discount Type
        </Button>
      </div>
    </div>
  )
}

export default PromotionFormDiscountTable

interface DiscountType {
  type: string
  discountOn: string
  condition: string
  comparison: string
  from?: number | null
  to?: number | null
}

const DiscountRow = ({
  index,
  discountTypes,
}: {
  index: number
  discountTypes: DiscountType[]
}) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const { control,setValue   } = useFormContext()

  const currentDiscountType = discountTypes?.[index]

  return (
    <TableRow>
      <TableHead>
        <FormField
          control={control}
          name={`promotionParameters.discountTypes.${index}.type`}
          render={({ field }) => (
            <FormItem>
              <input
                type="checkbox"
                checked={!!field.value}
                onChange={(e) => field.onChange(e.target.checked ? 'X' : undefined)} // Default to "X"
              />
            </FormItem>
          )}
        />
      </TableHead>
      <TableCell>{currentDiscountType?.type || 'Type'}</TableCell>
      <TableCell>
        <FormField
          control={control}
          name={`promotionParameters.discountTypes.${index}.discountOn`}
          render={({ field }) => (
            <FormItem>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="LMRP">Lowest MRP</SelectItem>
                  <SelectItem value="HMRP">Highest MRP</SelectItem>
                  <SelectItem value="LRSP">Lowest RSP</SelectItem>
                  <SelectItem value="HRSP">Highest RSP</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
      </TableCell>
      <TableCell>
        <Button size="sm" variant="outline" onClick={() => setIsExpanded((prev) => !prev)}>
          +
        </Button>
      </TableCell>
      {isExpanded && (
        <>
          <TableCell>Where</TableCell>
          <TableCell>
            <FormField
              control={control}
              name={`promotionParameters.discountTypes.${index}.condition`}
              render={({ field }) => (
                <FormItem>
                  <Select onValueChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="MRP">MRP</SelectItem>
                      <SelectItem value="RSP">RSP</SelectItem>
                      <SelectItem value="WSP">WSP</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </TableCell>
          <TableCell>
            <FormField
              control={control}
              name={`promotionParameters.discountTypes.${index}.comparison`}
              render={({ field }) => (
                <FormItem>
                  <Select
                    onValueChange={(value) => {
                      field.onChange(value)
                      if (value !== 'inBetween') {
                        setValue(`promotionParameters.discountTypes.${index}.from`, null)
                        setValue(`promotionParameters.discountTypes.${index}.to`, null)
                      }
                    }}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="lesser">Less than</SelectItem>
                      <SelectItem value="greater">Greater than</SelectItem>
                      <SelectItem value="inBetween">In Between</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </TableCell>
          {currentDiscountType?.comparison === 'inBetween' && (
            <>
              <TableCell>
                <FormField
                  control={control}
                  name={`promotionParameters.discountTypes.${index}.from`}
                  render={({ field }) => (
                    <FormItem className='w-20'>
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="From"
                          {...field}
                          value={field.value || ''}
                          onChange={(e) => field.onChange(e.target.valueAsNumber || null)}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </TableCell>
              <TableCell>
                <FormField
                  control={control}
                  name={`promotionParameters.discountTypes.${index}.to`}
                  render={({ field }) => (
                    <FormItem className='w-20'>
                      <FormControl >
                        <Input
                          type="number"
                          placeholder="To"
                          
                          {...field}
                          value={field.value || ''} // Ensure empty string for undefined/null
                          onChange={(e) => field.onChange(e.target.valueAsNumber || null)} // Parse as number
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </TableCell>
            </>
          )}
        </>
      )}
    </TableRow>
  )
}
