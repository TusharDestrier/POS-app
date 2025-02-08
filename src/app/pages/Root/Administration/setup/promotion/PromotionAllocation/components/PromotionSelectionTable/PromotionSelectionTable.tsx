import { useFieldArray, useFormContext } from 'react-hook-form'

import { usePromotionAllocationStore } from '../../store/usePromotionAllocationStore'
import { usePromotionSelectionListStore } from '../PromotionSelectionList/store/usePromotionSelctionListStore'

import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

function PromotionSelectionTable() {
  const { control, register } = useFormContext()
  const { fields, append, remove } = useFieldArray({
    control,
    name: 'selectedPromotions',
  })

  const openModal = usePromotionAllocationStore((state) => state.toggleOpen)
  const openSelector = usePromotionSelectionListStore((state) => state.openSelector)
  const addRow = () => {
    append({ id: '', name: '' })
  }

  const removeRow = (index:number) => {
    remove(index);
    usePromotionSelectionListStore.getState().addSelectedPromotion(index, undefined); // Clear promotion
  };



  return (
    <div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>No</TableHead>
            <TableHead>Id</TableHead>
            <TableHead>Promotion</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {fields.map((field, index) => (
            <TableRow key={field.id}>
              <TableCell className="font-medium">{index + 1}</TableCell>
              <TableCell>
                <input
                  {...register(`selectedPromotions.${index}.id`)}
                  placeholder="Enter ID"
                  disabled
                  className="border rounded p-1 w-[30px] text-center"
                  readOnly
                />
              </TableCell>
              <TableCell>
                {field?.name  ? (
                  <input
                    {...register(`selectedPromotions.${index}.name`)}
                    className="border rounded p-1 w-[150px]"
                    disabled
                    readOnly
                  />
                ) : (
                  <Button
                  type='button'
                    onClick={() => {
                      openSelector(index)
                      openModal()
                    }}
                    className="text-white"
                  >
                    Select
                  </Button>
                )}
              </TableCell>
              <TableCell className="text-right">
                <button type="button" onClick={() => removeRow(index)} className="text-red-600">
                  Remove
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Button type='button' className="mt-4" onClick={addRow}>
        Add Promotions
      </Button>
    </div>
  )
}

export default PromotionSelectionTable
