import { useEffect } from 'react'
import { useFieldArray, useFormContext } from 'react-hook-form'
import { z } from 'zod'

//import useDiscountMasterStore from '../../../../store/useDiscountMasterStore'
import type { DiscountMasterSchema } from '../../schema'
import { useDiscountListStore } from '../DiscountMasterAssortmentListTable/store/useDiscountListStore'

import { Button } from '@/components/ui/button'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

type DiscountMasterFormType = z.infer<typeof DiscountMasterSchema>

function DiscountMasterAssortmentListTable() {
  const { control } = useFormContext<DiscountMasterFormType>() // Access React Hook Form
  const { fields, append, remove, replace } = useFieldArray({
    control,
    name: 'assortments', // Key in the form schema
  })

  const selectedAssortments = useDiscountListStore((state) => state.selectedAssortments)
  const setSelectedAssortments = useDiscountListStore((state) => state.setSelectedAssortments)
  const openModal = useDiscountListStore((state) => state.openModal)
 // const closeModal = useDiscountListStore((state) => state.closeModal) // Correct store usage

  // Preload the form state from the store
  useEffect(() => {
    replace(selectedAssortments) // Sync form state with the store
  }, [selectedAssortments, replace])

  const handleAddRow = () => {
    const newRow = { id: '', name: '' } // Empty row for new assortment
    append(newRow) // Add to form
    setSelectedAssortments([...selectedAssortments, newRow]) // Add to store
  }

  const handleDeleteRow = (index: number) => {
    const updatedAssortments = selectedAssortments.filter((_, i) => i !== index)
    remove(index) // Remove from form
    setSelectedAssortments(updatedAssortments) // Update the global store
  }

  const handleSelectItem = (index: number) => {
    openModal(index) // Open the modal to select an assortment
  }

 

  return (
    <div>
      <h4 className="mb-4 font-semibold text-lg ">Assortment Selection</h4>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>No.</TableHead>
            <TableHead>Assortment Name</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {fields.map((field, index) => (
            <TableRow key={field.id}>
              <TableCell>{index + 1}</TableCell>
              <TableCell>
                {field?.name ? (
                  field.name
                ) : (
                  <Button type="button" variant="outline" onClick={() => handleSelectItem(index)}>
                    Select
                  </Button>
                )}
              </TableCell>
              <TableCell>
                <Button type="button" variant="destructive" onClick={() => handleDeleteRow(index)}>
                  Delete
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className="mt-4 text-right">
        <Button type="button" variant="outline" onClick={handleAddRow}>
          Add Row
        </Button>
      </div>
    </div>
  )
}

export default DiscountMasterAssortmentListTable
