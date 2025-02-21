import { Eye, PlusCircle, Trash } from 'lucide-react' // Corrected icons
import { useState } from 'react'
import { useFieldArray, useFormContext, useWatch } from 'react-hook-form'

import { useAssortmentData } from '@/components/AssortmentManagement/hooks_api/useAssortmentData'
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
import { FetchedAssortmentType } from '@/types/assortment'

function PromotionFormAssortmentTable() {
  const [modalOpen, setModalOpen] = useState(false)
  const [selectedRowIndex, setSelectedRowIndex] = useState<number | null>(null)

  const { control, setValue, register } = useFormContext()

  const { fields, append, remove } = useFieldArray({
    control,
    name: 'promotionParameters.buyAssortments',
  })

  // Watch values for reactivity
  const paidForCondition = useWatch({
    control,
    name: 'promotionParameters.paidForCondition',
  })

  const watchedAssortments =
    useWatch({
      control,
      name: 'promotionParameters.buyAssortments',
    }) || []

  // Open Modal for Assortment Selection
  const handleModalOpen = (index: number) => {
    setSelectedRowIndex(index)
    setModalOpen(true)
  }

  // Close Modal
  const handleModalClose = () => {
    setModalOpen(false)
    setSelectedRowIndex(null)
  }

  // When user selects an Assortment
  const handleAssortmentSelect = (selectedAssortment: FetchedAssortmentType) => {
    console.log(selectedAssortment.assortmentID);
    
    if (selectedRowIndex !== null) {
      setValue(`promotionParameters.buyAssortments.${selectedRowIndex}`, {
        assortmentID: String(selectedAssortment.assortmentID), // ✅ Store ID
        assortmentName: selectedAssortment.assortmentName,
        unit: paidForCondition.condition === "buySpecificRatio" ? null : undefined, // ✅ Ensure unit resets correctly
      });
      setModalOpen(false);
    }
  };
  

  return (
    <div className="">
      <h4 className="font-bold mb-3">Buy Assortment</h4>

      <div className="overflow-x-auto">
        <Table>
          {/* Table Header */}
          <TableHeader>
            <TableRow>
              <TableHead className="w-[50px] text-center">No.</TableHead>
              <TableHead>Assortment Name</TableHead>
              {paidForCondition.condition === 'buySpecificRatio' && (
                <TableHead className="w-[100px] text-center">Unit</TableHead>
              )}
              <TableHead className="w-[50px] text-center">Show</TableHead>
              <TableHead className="w-[50px] text-center">Delete</TableHead>
            </TableRow>
          </TableHeader>

          {/* Table Body */}
          <TableBody>
            {fields.map((field, index) => (
              <TableRow key={field.id}>
                <TableCell className="text-center">{index + 1}</TableCell>

                {/* Assortment Name (Clickable) */}
                <TableCell
                  className="cursor-pointer text-blue-500"
                  onClick={() => handleModalOpen(index)}
                >
                  {watchedAssortments[index]?.assortmentName || 'Select Assortment'}
                </TableCell>

                {/* Conditionally Render Unit Column */}
                {/* Conditionally Render Unit Column */}
                {paidForCondition.condition === 'buySpecificRatio' && (
                  <TableCell className="text-center">
                    <Input
                      type="number"
                      placeholder="Unit"
                      {...register(`promotionParameters.buyAssortments.${index}.unit`, {
                        valueAsNumber: true,
                      })}
                      disabled={paidForCondition.condition !== 'buySpecificRatio'} // ✅ Fix: Disable when not needed
                    />
                  </TableCell>
                )}

                {/* Show Column - Only Show if Assortment is Selected */}
                <TableCell className="text-center">
                  <Eye className="h-5 w-5 text-gray-500 cursor-pointer" />
                </TableCell>

                {/* Delete */}
                <TableCell className="text-center">
                  <Trash
                    className="h-5 w-5 text-red-500 cursor-pointer"
                    onClick={() => remove(index)}
                  />
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
          Add Assortment
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
  onSelect: (assortment: FetchedAssortmentType) => void // Select whole object
}) => {
  const { assortmentData, isLoading } = useAssortmentData('P') // Fetch API data

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <h3 className="font-bold mb-3">Select an Assortment</h3>

        {/* Loader */}
        {isLoading ? (
          <p>Loading Assortments...</p>
        ) : (
          <ul>
            {assortmentData?.map((assortment) => (
              <li
                key={assortment.assortmentID}
                className="cursor-pointer p-2 hover:bg-gray-200"
                onClick={() => {
                  onSelect(assortment) // Select full object
                  onClose()
                }}
              >
                {assortment.assortmentName}
              </li>
            ))}
          </ul>
        )}
      </DialogContent>
    </Dialog>
  )
}

export default PromotionFormAssortmentTable
