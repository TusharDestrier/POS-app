import { useState } from 'react'
import { useFormContext } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { FormField } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from '@/components/ui/select'
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table'

function PromotionFormDiscountTable() {
  const { control, setValue, watch } = useFormContext()
  const discountTypes = watch("promotionParameters.discountTypes.types");

  const [expandedRows, setExpandedRows] = useState<Record<number, boolean>>({});

  const toggleExpand = (index: number) => {
    setExpandedRows((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  return (
    <div className="p-4 bg-white shadow-md rounded-md">
      <Table>
        <TableBody>
          {discountTypes.map((type, index) => {
            const isSelected = watch(`promotionParameters.discountTypes.types.${index}.isSelected`);;
            const isExpanded = expandedRows[index] || false;
            const comparison = watch(`promotionParameters.discountTypes.types.${index}.comparison`);

            return (
              <>
                <TableRow key={type.id}>
                  {/* ✅ Select Row with Radio Button */}
                  <TableCell>
                    <FormField
                      control={control}
                      name="promotionParameters.discountTypes.selectedDiscount"
                      render={({ field }) => (
                        <RadioGroup
                        className='roles-radio'
                          value={field.value}
                          onValueChange={(val) => {
                            field.onChange(val);
                            // Deselect other rows
                            discountTypes.forEach((_, i) =>
                              setValue(`promotionParameters.discountTypes.types.${i}.isSelected`, false)
                            );
                            setValue(`promotionParameters.discountTypes.types.${index}.isSelected`, true);
                          }}
                        >
                          <RadioGroupItem value={String(index)} />
                        </RadioGroup>
                      )}
                    />
                  </TableCell>

                  {/* ✅ Discount % Input */}
                  <TableCell>
                    <FormField
                      control={control}
                      name={`promotionParameters.discountTypes.types.${index}.type`}
                      render={({ field }) => (
                        <Input type="number" {...field} disabled={!isSelected} placeholder={type.label} />
                      )}
                    />
                  </TableCell>

                  {/* ✅ Discount On Dropdown */}
                  <TableCell>
                    <FormField
                      control={control}
                      name={`promotionParameters.discountTypes.types.${index}.discountOn`}
                      render={({ field }) => (
                        <Select disabled={!isSelected} onValueChange={field.onChange} value={field.value}>
                          <SelectTrigger>
                            <SelectValue placeholder="Select Discount On" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="LMRP">Lowest MRP</SelectItem>
                            <SelectItem value="HMRP">Highest MRP</SelectItem>
                            <SelectItem value="LRSP">Lowest RSP</SelectItem>
                            <SelectItem value="HRSP">Highest RSP</SelectItem>
                          </SelectContent>
                        </Select>
                      )}
                    />
                  </TableCell>

                  {/* ✅ Expand Button */}
                  <TableCell>
                    <Button type="button" size="sm" onClick={() => toggleExpand(index)}>
                      {isExpanded ? "-" : "+"}
                    </Button>
                  </TableCell>
                </TableRow>

                {/* ✅ Expanded Row with Advanced Fields */}
                {isExpanded && (
                  <TableRow>
                    <TableCell colSpan={4} className="p-4 bg-gray-100">
                      <div className="flex gap-4 items-center">
                        <span>Where</span>

                        {/* ✅ Condition Dropdown */}
                        <FormField
                          control={control}
                          name={`promotionParameters.discountTypes.types.${index}.condition`}
                          render={({ field }) => (
                            <Select disabled={!isSelected} onValueChange={field.onChange} value={field.value}>
                              <SelectTrigger>
                                <SelectValue placeholder="Select Condition" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="MRP">MRP</SelectItem>
                                <SelectItem value="RSP">RSP</SelectItem>
                                <SelectItem value="WSP">WSP</SelectItem>
                              </SelectContent>
                            </Select>
                          )}
                        />

                        {/* ✅ Comparison Dropdown */}
                        <FormField
                          control={control}
                          name={`promotionParameters.discountTypes.types.${index}.comparison`}
                          render={({ field }) => (
                            <Select
                              disabled={!isSelected}
                              onValueChange={(value) => {
                                field.onChange(value);
                                if (value !== "inBetween") {
                                  setValue(`promotionParameters.discountTypes.types.${index}.from`, "");
                                  setValue(`promotionParameters.discountTypes.types.${index}.to`, "");
                                }
                              }}
                              value={field.value}
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select Comparison" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="lesser">Less than</SelectItem>
                                <SelectItem value="greater">Greater than</SelectItem>
                                <SelectItem value="inBetween">In Between</SelectItem>
                              </SelectContent>
                            </Select>
                          )}
                        />

                        {/* ✅ From & To Inputs */}
                        {comparison === "inBetween" ? (
                          <>
                            <FormField
                              control={control}
                              name={`promotionParameters.discountTypes.types.${index}.from`}
                              render={({ field }) => (
                                <Input type="number" {...field} disabled={!isSelected} placeholder="From" />
                              )}
                            />
                            <FormField
                              control={control}
                              name={`promotionParameters.discountTypes.types.${index}.to`}
                              render={({ field }) => (
                                <Input type="number" {...field} disabled={!isSelected} placeholder="To" />
                              )}
                            />
                          </>
                        ) : comparison ? (
                          <FormField
                            control={control}
                            name={`promotionParameters.discountTypes.types.${index}.from`}
                            render={({ field }) => (
                              <Input type="number" {...field} disabled={!isSelected} placeholder="Value" />
                            )}
                          />
                        ) : null}
                      </div>
                    </TableCell>
                  </TableRow>
                )}
              </>
            );
          })}
        </TableBody>
      </Table>
    </div>
  )
}

export default PromotionFormDiscountTable;
