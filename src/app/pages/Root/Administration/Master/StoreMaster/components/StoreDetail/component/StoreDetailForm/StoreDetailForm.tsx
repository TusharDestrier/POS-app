import { format } from 'date-fns'
import { CalendarIcon } from 'lucide-react'
import { useFormContext } from 'react-hook-form'

import {categoryOptions, franchiseType,operationTypeOptions, franchiseOptions, stateOptions, storeTypeOptions,warehouseOptions, priceListOptions} from './data/selectOptions'

import { Button } from '@/components/ui/button'
import { Calendar } from '@/components/ui/calendar'
import { Checkbox } from '@/components/ui/checkbox'
import { FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'


function StoreDetailForm() {
  const { control, setValue, getValues,watch } = useFormContext()
  // const modalMode = useStoreMasterStore((state) => state.mode)
  const storeTypeCode = watch("storeTypeCode");
  return (
    <div className="grid grid-cols-2 border border-solid border-black h-[580px] overflow-y-auto">
      <div className="border p-3 space-y-3">
        {/* Store Code */}
        <FormField
          control={control}
          name="storeCode"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Store Code <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Input placeholder="Enter Store Code" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Store Name */}
        <FormField
          control={control}
          name="storeName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Store Name <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Input placeholder="Enter Store Name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Start Date */}
        <FormField
          control={control}
          name="startDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Start Date <span className="text-red-500">*</span>
              </FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button variant="outline" className="w-full text-left">
                      {field.value ? format(new Date(field.value), 'PPP') : 'Pick a date'}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent align="start">
                  <Calendar
                    mode="single"
                    selected={field.value ? new Date(field.value) : undefined}
                    onSelect={(date) => field.onChange(date?.toISOString() || null)}
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Close Date */}
        <FormField
          control={control}
          name="closeDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Close Date</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button variant="outline" className="w-full text-left">
                      {field.value ? format(new Date(field.value), 'PPP') : 'Pick a date'}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent align="start">
                  <Calendar
                    mode="single"
                    selected={field.value ? new Date(field.value) : undefined}
                    onSelect={(date) => field.onChange(date?.toISOString() || null)}
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Store Size */}
        <FormField
          control={control}
          name="storeSize"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Store Size <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Input type="number" placeholder="Enter Store Size" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="defaultWarehouseCode"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Default Warehouse Code <span className="text-red-500">*</span>
              </FormLabel>
              <Select
                onValueChange={(value) => {
                  const selectedOption = warehouseOptions.find((option) => option.code === value)
                  if (selectedOption) {
                    setValue('defaultWarehouseCode', selectedOption.code) // Set Code
                    setValue('defaultWarehouseName', selectedOption.name) // Set Name
                  }
                }}
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Default Warehouse" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {warehouseOptions.map((option) => (
                    <SelectItem key={option.code} value={option.code}>
                      {option.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Default Sale Warehouse Code */}
        <FormField
          control={control}
          name="defaultSaleWarehouseCode"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Default Sale Warehouse Code <span className="text-red-500">*</span>
              </FormLabel>
              <Select
                onValueChange={(value) => {
                  const selectedOption = warehouseOptions.find((option) => option.code === value)
                  if (selectedOption) {
                    setValue('defaultSaleWarehouseCode', selectedOption.code) // Set Code
                  }
                }}
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Sale Warehouse" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {warehouseOptions.map((option) => (
                    <SelectItem key={option.code} value={option.code}>
                      {option.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="defaultSaleWarehouseCode"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Default Return Warehouse Code <span className="text-red-500">*</span>
              </FormLabel>
              <Select
                onValueChange={(value) => {
                  const selectedOption = warehouseOptions.find((option) => option.code === value)
                  if (selectedOption) {
                    setValue('defaultSaleWarehouseCode', selectedOption.code) // Set Code
                  }
                }}
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Sale Warehouse" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {warehouseOptions.map((option) => (
                    <SelectItem key={option.code} value={option.code}>
                      {option.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* GSTIN */}
        <FormField
          control={control}
          name="GSTIN"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                GSTIN <span className="text-red-500">*</span>
              </FormLabel>
              <FormControl>
                <Input placeholder="Enter GSTIN" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
         <FormField
          control={control}
          name="GSTINDate"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                GSTIN Date <span className="text-red-500">*</span>
              </FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button variant="outline" className="w-full text-left">
                      {field.value ? format(new Date(field.value), 'PPP') : 'Pick a date'}
                      <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent align="start">
                  <Calendar
                    mode="single"
                    selected={field.value ? new Date(field.value) : undefined}
                    onSelect={(date) => field.onChange(date?.toISOString() || null)}
                  />
                </PopoverContent>
              </Popover>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
      <div className="border p-3 space-y-3">
        <div>
          <FormItem>
            <FormLabel>Franchise Type</FormLabel>
            <Select
              onValueChange={(selectedName) => {
                const selectedOption = franchiseType.find((option) => option.name === selectedName)
                if (selectedOption) {
                  setValue('franchiseName', selectedOption.name) // Set name
                  setValue('franchiseCode', selectedOption.code) // Set code
                }
              }}
            >
              <FormControl>
                <SelectTrigger>
                  <SelectValue placeholder="Select Franchise" />
                </SelectTrigger>
              </FormControl>
              <SelectContent>
                {franchiseType.map((option) => (
                  <SelectItem key={option.code} value={option.code}>
                    {option.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </FormItem>
        </div>
        {/* Store Size */}
        <FormField
          control={control}
          name="storeSize"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Store Size</FormLabel>
              <FormControl>
                <Input type="number" placeholder="Store Size" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="stateCode"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                State <span className="text-red-500">*</span>
              </FormLabel>
              <Select
                onValueChange={(value) => {
                  const selectedOption = stateOptions.find((option) => option.code === value)
                  if (selectedOption) {
                    setValue('stateCode', selectedOption.code) // Set State Code
                    setValue('stateName', selectedOption.name) // Set State Name
                  }
                }}
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a State" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {stateOptions.map((option) => (
                    <SelectItem key={option.code} value={option.code}>
                      {option.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Price List */}
        <FormField
          control={control}
          name="priceList"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Price List <span className="text-red-500">*</span>
              </FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Price List" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {priceListOptions.map((option) => (
                    <SelectItem key={option.code} value={option.code}>
                      {option.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="factorIfAny"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Factor (if any)</FormLabel>
              <FormControl>
                <Input placeholder="Enter Factor (if any)" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Store Type Code and Name */}
        <FormField
          control={control}
          name="storeTypeCode"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Store Type <span className="text-red-500">*</span>
              </FormLabel>
              <Select
                onValueChange={(value) => {
                  const selectedOption = storeTypeOptions.find((option) => option.code === value)
                  if (selectedOption) {
                    setValue('storeTypeCode', selectedOption.code) // Set Store Type Code
                    setValue('storeTypeName', selectedOption.name) // Set Store Type Name
                    setValue('storeCategoryCode', '') // Reset Category on Store Type Change
                    setValue('storeCategoryName', '')
                  }
                }}
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Store Type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {storeTypeOptions.map((option) => (
                    <SelectItem key={option.code} value={option.code}>
                      {option.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Store Category Code and Name (Dependent on Store Type) */}
        <FormField
          control={control}
          name="storeCategoryCode"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Store Category <span className="text-red-500">*</span>
              </FormLabel>
              <Select
                onValueChange={(value) => {
                  const storeTypeCode = getValues('storeTypeCode') as keyof typeof categoryOptions
                  const selectedOption = categoryOptions[storeTypeCode]?.find(
                    (option) => option.code === value
                  )
                  if (selectedOption) {
                    setValue('storeCategoryCode', selectedOption.code) // Set Category Code
                    setValue('storeCategoryName', selectedOption.name) // Set Category Name
                  }
                }}
                defaultValue={field.value}
                disabled={!getValues('storeTypeCode')} // Disable if no Store Type selected
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Store Category" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {(
                    categoryOptions[getValues('storeTypeCode') as keyof typeof categoryOptions] ||
                    []
                  ).map((option) => (
                    <SelectItem key={option.code} value={option.code}>
                      {option.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        {/* Franchise Code and Name (Only for Franchise-Owned Stores) */}
        {storeTypeCode === 'FOWNED' && (
          <FormField
            control={control}
            name="franchiseCode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Franchise <span className="text-red-500">*</span>
                </FormLabel>
                <Select
                  onValueChange={(value) => {
                    const selectedOption = franchiseOptions.find((option) => option.code === value)
                    if (selectedOption) {
                      setValue('franchiseCode', selectedOption.code) // Set Franchise Code
                      setValue('franchiseName', selectedOption.name) // Set Franchise Name
                    }
                  }}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select Franchise" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {franchiseOptions.map((option) => (
                      <SelectItem key={option.code} value={option.code}>
                        {option.name}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        )}

        {/* Operation Type */}
        <FormField
          control={control}
          name="operationTypeCode"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                Operation Type <span className="text-red-500">*</span>
              </FormLabel>
              <Select
                onValueChange={(value) => {
                  const selectedOption = operationTypeOptions.find(
                    (option) => option.code === value
                  )
                  if (selectedOption) {
                    setValue('operationTypeCode', selectedOption.code) // Set Operation Type Code
                    setValue('operationTypeName', selectedOption.name) // Set Operation Type Name
                  }
                }}
                defaultValue={field.value}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select Operation Type" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {operationTypeOptions.map((option) => (
                    <SelectItem key={option.code} value={option.code}>
                      {option.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="isActive"
          render={({ field }) => (
            <FormItem className="flex items-center space-x-3">
              <FormControl>
                <Checkbox
                  checked={field.value === 'Y'}
                  onCheckedChange={(checked) => field.onChange(checked ? 'Y' : 'N')}
                />
              </FormControl>
              <FormLabel>Is Active</FormLabel>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  )
}

export default StoreDetailForm
