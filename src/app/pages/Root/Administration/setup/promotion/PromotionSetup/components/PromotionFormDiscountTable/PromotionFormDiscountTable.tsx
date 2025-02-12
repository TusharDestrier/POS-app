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
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table'

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

interface DiscountType {
  isSelected?: boolean | undefined
  type?: null | undefined
  discountOn?: string | undefined
  condition?: string | undefined
  comparison?: string | undefined
  from?: null | undefined
  to?: null | undefined
}

const DiscountRow = ({
  index,
  discountTypes,
}: {
  index: number
  discountTypes: DiscountType[]
}) => {
  const { control, setValue } = useFormContext()

  const selectedRow = discountTypes.findIndex((row) => row.isSelected)
  const isSelected = selectedRow === index // Check if this row is selected

  return (
    <TableRow>
     <div className=''>
        {/* Radio Button to Select Row */}
        <TableCell>
        <FormField
          control={control}
          name={`promotionParameters.discountTypes.${index}.isSelected`}
          render={({ field }) => (
            <FormItem>
              <input
                type="radio"
                checked={isSelected}
                onChange={() => {
                  // Deselect all rows first
                  discountTypes.forEach((_, i) => {
                    setValue(`promotionParameters.discountTypes.${i}.isSelected`, false)
                  })

                  // Select this row
                  setValue(`promotionParameters.discountTypes.${index}.isSelected`, true)
                }}
              />
            </FormItem>
          )}
        />
      </TableCell>

      {/* Type (Number Input) */}
      <TableCell>
        <FormField
          control={control}
          name={`promotionParameters.discountTypes.${index}.type`}
          render={({ field }) => (
            <FormItem>
              <Input
                type="number"
                placeholder="Enter Type"
                {...field}
                className='w-[50px] text-center'
                value={field.value || ''}
                onChange={(e) => field.onChange(e.target.valueAsNumber || null)}
                disabled={!isSelected} // Disable if not selected
              />
            </FormItem>
          )}
        />
      </TableCell>
      <TableCell>
        <Input value='% of discount on' className='' disabled/>
      </TableCell>

      {/* Discount On (Dropdown) */}
      <TableCell>
        <FormField
          control={control}
          name={`promotionParameters.discountTypes.${index}.discountOn`}
          render={({ field }) => (
            <FormItem>
              <Select
                onValueChange={field.onChange}
                value={field.value}
                disabled={!isSelected} // Disable if not selected
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Discount On" />
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

      {/* Expand Button */}
      <TableCell>
        <Button
          size="sm"
          variant="outline"
          onClick={() => {
            if (isSelected) {
              const condition = discountTypes[index]?.condition
              setValue(
                `promotionParameters.discountTypes.${index}.condition`,
                condition ? '' : 'MRP'
              )
            }
          }}
          disabled={!isSelected} // Disable if not selected
        >
          {discountTypes[index]?.condition ? '-' : '+'}
        </Button>
      </TableCell>

      {/* Expanded Section: Condition & Comparison */}
      {discountTypes[index]?.condition && isSelected && (
        <>
          <TableCell>Where</TableCell>

          <TableCell>
            <FormField
              control={control}
              name={`promotionParameters.discountTypes.${index}.condition`}
              render={({ field }) => (
                <FormItem>
                  <Select onValueChange={field.onChange} value={field.value} disabled={!isSelected}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Condition" />
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

          {/* Comparison (Dropdown) */}
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
                    value={field.value}
                    disabled={!isSelected}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select Comparison" />
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

          {/* Number Inputs Based on Comparison */}
          {discountTypes[index]?.comparison === 'lesser' ||
          discountTypes[index]?.comparison === 'greater' ? (
            <TableCell>
              <FormField
                control={control}
                name={`promotionParameters.discountTypes.${index}.from`}
                render={({ field }) => (
                  <FormItem className="w-20">
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Enter Value"
                        {...field}
                        value={field.value || ''}
                        onChange={(e) => field.onChange(e.target.valueAsNumber || null)}
                        disabled={!isSelected}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </TableCell>
          ) : discountTypes[index]?.comparison === 'inBetween' ? (
            <>
              <TableCell>
                <FormField
                  control={control}
                  name={`promotionParameters.discountTypes.${index}.from`}
                  render={({ field }) => (
                    <FormItem className="w-20">
                      <FormControl>
                        <Input
                          type="number"
                          placeholder="From"
                          {...field}
                          value={field.value || ''}
                          onChange={(e) => field.onChange(e.target.valueAsNumber || null)}
                          disabled={!isSelected}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </TableCell>
            </>
          ) : null}
        </>
      )}
     </div>
    
    </TableRow>
  )
}

export default PromotionFormDiscountTable
