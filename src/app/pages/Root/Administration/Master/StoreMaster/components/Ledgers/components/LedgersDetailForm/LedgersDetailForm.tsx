import { Trash } from 'lucide-react'
import { useEffect } from 'react'
import { useFieldArray, useFormContext } from 'react-hook-form'

import { useStoreMasterById } from '../../../../hooks_api/useFetchStoreMasterById'
import { useStoreMasterDataStore } from '../../../../store/useStoreMasterDataStore'
import useStoreMasterStore from '../../../../store/useStoreMasterStore'

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
   const { control, setValue,watch } = useFormContext()
    const mode = useStoreMasterStore((state) => state.mode)
    const storeId = useStoreMasterDataStore((state) => state.currentStoreMasterId)
    const { storeMaster } = useStoreMasterById(Number(storeId))
  
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'objLedger',
  })

  const ledgerOptions = [
    { code: 'LEDGER001', name: 'Ledger 1' },
    { code: 'LEDGER002', name: 'Ledger 2' },
  ]

  const subLedgerOptions = [
    { code: 'SUBLEDGER001', name: 'SubLedger 1', parentLedgerCode: 'LEDGER001' },
    { code: 'SUBLEDGER002', name: 'SubLedger 2', parentLedgerCode: 'LEDGER002' },
  ]

  const costCenterOptions = [
    { code: 'COST001', name: 'Cost Center 1' },
    { code: 'COST002', name: 'Cost Center 2' },
  ]

   // Populate existing data in edit mode
    useEffect(() => {
      if (mode === 'Edit' && storeMaster?.objLedger) {
        setValue('objLedger', storeMaster.objLedger)
      }
    }, [mode, storeMaster, setValue])

  return (
    <div className="border p-4 border-black border-solid h-[580px] overflow-y-auto">
      <div className="form-head mb-4">
        <ul className="grid grid-cols-4 gap-3 ">
          <li className="text-sm font-semibold">Ledger Name *</li>
          <li className="text-sm font-semibold">Sub Ledger Name</li>
          <li className="text-sm font-semibold">Cost Centre</li>
          <li className="text-sm font-semibold">Discontinued</li>
        </ul>
      </div>

      {fields.map((item, index) => (
        <div key={item.id} className="grid grid-cols-4 gap-5 mb-3">
          <FormField
            control={control}
            name={`objLedger.${index}.ledgerName`}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Select
                    onValueChange={(value) => {
                      const selectedLedger = ledgerOptions.find((ledger) => ledger.name === value)
                      field.onChange(selectedLedger?.name || '')
                      setValue(`objLedger.${index}.ledgerCode`, selectedLedger?.code || '')
                      setValue(`objLedger.${index}.subLedgerName`, '')
                      setValue(`objLedger.${index}.subLedgerCode`, '')
                    }}
                    value={field.value || ''}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select Ledger" />
                    </SelectTrigger>
                    <SelectContent>
                      {ledgerOptions.map((ledger) => (
                        <SelectItem key={ledger.code} value={ledger.name}>
                          {ledger.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name={`objLedger.${index}.subLedgerName`}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Select
                    onValueChange={(value) => {
                      const selectedSubLedger = subLedgerOptions.find(
                        (subLedger) =>
                          subLedger.name === value &&
                          subLedger.parentLedgerCode === watch(`objLedger.${index}.ledgerCode`)
                      )
                      field.onChange(selectedSubLedger?.name || '')
                      setValue(`objLedger.${index}.subLedgerCode`, selectedSubLedger?.code || '')
                    }}
                    value={field.value || ''}
                    disabled={!watch(`objLedger.${index}.ledgerCode`)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select SubLedger" />
                    </SelectTrigger>
                    <SelectContent>
                      {subLedgerOptions
                        .filter(
                          (subLedger) =>
                            subLedger.parentLedgerCode === watch(`objLedger.${index}.ledgerCode`)
                        )
                        .map((subLedger) => (
                          <SelectItem key={subLedger.code} value={subLedger.name}>
                            {subLedger.name}
                          </SelectItem>
                        ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={control}
            name={`objLedger.${index}.costCenterName`}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Select
                    onValueChange={(value) => {
                      const selectedCostCenter = costCenterOptions.find(
                        (costCenter) => costCenter.name === value
                      )
                      field.onChange(selectedCostCenter?.name || '')
                      setValue(`objLedger.${index}.costCenterCode`, selectedCostCenter?.code || '')
                    }}
                    value={field.value || ''}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select Cost Center" />
                    </SelectTrigger>
                    <SelectContent>
                      {costCenterOptions.map((costCenter) => (
                        <SelectItem key={costCenter.code} value={costCenter.name}>
                          {costCenter.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className='flex gap-5'>
            <FormField
              control={control}
              name={`objLedger.${index}.discontinue`}
              render={({ field }) => (
                <FormItem className="flex items-center justify-center">
                  <FormControl>
                    <Checkbox
                      checked={field.value === 'Y'}
                      onCheckedChange={(checked) => field.onChange(checked ? 'Y' : 'N')}
                    />
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
                ledgerName: '',
                ledgerCode: '',
                subLedgerName: '',
                subLedgerCode: '',
                costCenterName: '',
                costCenterCode: '',
                discontinue: 'N',
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

export default LedgersDetailsForm
