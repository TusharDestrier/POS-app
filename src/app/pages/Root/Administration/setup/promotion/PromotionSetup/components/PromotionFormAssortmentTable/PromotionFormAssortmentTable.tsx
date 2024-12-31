import { Eye, PlusCircle, Trash } from 'lucide-react' // Corrected icons
import { useState } from 'react'
import { useFieldArray, useFormContext, useWatch } from 'react-hook-form'

import { Button } from '@/components/ui/button'
import { Dialog, DialogContent } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

function PromotionFormAssortmentTable() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedRowIndex, setSelectedRowIndex] = useState<number | null>(null)

  const { control, setValue, register } = useFormContext()

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'promotionParameters.buyAssortments',
  })

  // Watch the paidForCondition for dynamic behavior
  const paidForCondition = useWatch({
    control,
    name: 'promotionParameters.paidForCondition',
  })

  // Watch the entire buyAssortments array for reactivity
  const watchedAssortments =
    useWatch({
      control,
      name: 'promotionParameters.buyAssortments',
    }) || []

  const handleModalOpen = (index: number) => {
    setSelectedRowIndex(index)
    setModalOpen(true)
  }

  const handleModalClose = () => {
    setModalOpen(false)
    setSelectedRowIndex(null)
  }

  const handleAssortmentSelect = (name: string) => {
    if (selectedRowIndex !== null) {
      setValue(`promotionParameters.buyAssortments.${selectedRowIndex}.assortmentName`, name)
      setModalOpen(false) // Close modal after selection
    }
  }


  return (
    <div className="">
      <h4 className="font-bold mb-3">Buy Assortment</h4>

      <div className="overflow-x-auto">
        <Table>
          {/* Table Header */}
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px] text-center">Delete</TableHead>
              <TableHead>Assortment Name</TableHead>
              {/* Conditionally render the Unit column */}
              {paidForCondition.condition === 'buySpecificRatio' && (
                <TableHead className="w-[100px] text-center">Unit</TableHead>
              )}
              <TableHead className="w-[50px] text-center">Show</TableHead>
            </TableRow>
          </TableHeader>

          {/* Table Body */}
          <TableBody>
            {fields.map((field, index) => (
              <TableRow key={field.id}>
                {/* Delete Column */}
                <TableCell className="text-center">
                  <Trash
                    className="h-5 w-5 text-red-500 cursor-pointer"
                    onClick={() => remove(index)}
                  />
                </TableCell>

                {/* Assortment Name Column */}
                <TableCell
                  className="cursor-pointer text-blue-500"
                  onClick={() => handleModalOpen(index)}
                >
                  {watchedAssortments[index]?.assortmentName || 'Select Assortment'}
                </TableCell>

                {/* Conditionally Render Unit Column */}
                {paidForCondition.condition === 'buySpecificRatio' && (
                  <TableCell className="text-center">
                    <Input
                      type="number"
                      placeholder="Unit"
                      {...register(`promotionParameters.buyAssortments.${index}.unit`, {
                        valueAsNumber: true, // Automatically convert to number
                        setValueAs: (value) => (value === '' ? null : value), // Handle empty inputs
                      })}
                    />
                  </TableCell>
                )}

                {/* Show Column */}
                <TableCell className="text-center">
                  <Eye className="h-5 w-5 text-gray-500 cursor-pointer" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Add Row Button */}
      <div className="mt-4">
        <Button
          type="button"
          className="bg-green-500 text-white flex items-center gap-2"
          onClick={() =>
            append({
              assortmentName: '',
              ...(paidForCondition.condition === 'buySpecificRatio' && { unit: null }),
            })
          }
        >
          <PlusCircle className="h-5 w-5" />
          Add Row
        </Button>
      </div>

      {/* Assortment Modal */}
      <AssortmentModal
        isOpen={modalOpen}
        onClose={handleModalClose}
        onSelect={handleAssortmentSelect}
      />
    </div>
  )
}

const AssortmentModal = ({
  isOpen,
  onClose,
  onSelect,
}: {
  isOpen: boolean
  onClose: () => void
  onSelect: (name: string) => void
}) => {
  const assortmentList = ['Buy Two Get One', 'Buy 3 Get 2', 'Buy 5 Get 3'] // Example list

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <h3 className="font-bold mb-3">Select an Assortment</h3>
        <ul>
          {assortmentList.map((assortment, index) => (
            <li
              key={index}
              className="cursor-pointer p-2 hover:bg-gray-200"
              onClick={() => {
                onSelect(assortment) // Pass the selected assortment back
                onClose()
              }}
            >
              {assortment}
            </li>
          ))}
        </ul>
      </DialogContent>
    </Dialog>
  )
}

export default PromotionFormAssortmentTable
