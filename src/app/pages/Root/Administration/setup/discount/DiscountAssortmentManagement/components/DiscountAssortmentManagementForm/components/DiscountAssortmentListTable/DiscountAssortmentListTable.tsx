import { useQueryClient } from '@tanstack/react-query'
import React from 'react'


import DiscountAssortmentSearchFilters from '../DiscountAssortmentSearchFilters'
import { useGetGeneratedItems } from './hooks_api/useGetItemFilterWise'
import { useGeneratedItemsDataStore } from './store/useGeneratedItemDataStore'
import { useDiscountAssortmentManagementStore } from '../../../../store/useDiscountAssortmentManagementStore'

import { Button } from '@/components/ui/button'
import { ItemFilterType } from '@/types/item'




function DiscountAssortmentListTable() {
  const queryClient=useQueryClient();

  const { generatedItems } = useGetGeneratedItems()
  const selections = useGeneratedItemsDataStore((state) => state.selections)
  const setSelection = useGeneratedItemsDataStore((state) => state.setSelection)
  const clearSelection = useGeneratedItemsDataStore((state) => state.clearSelections)
  const close = useDiscountAssortmentManagementStore((state) => state.close2)
console.log(selections);
console.log(generatedItems);

  const columnsToDisplay: (keyof ItemFilterType)[] = [
    'itemCode',
    'barCode',
    'itemName',
    'itemGroup',
    'hsnsacCode',
  ]

  function closeModal() {
    close()
    queryClient.setQueryData(['generatedDiscountitems'], [])
    queryClient.setQueryData(['itemsGroupsProperties'], null)
    clearSelection()
  }
  return (
    <div className="discountAssortmentTable mt-2">
      <DiscountAssortmentSearchFilters />
      <div className="mt-8">
        <h3 className="text-md font-semibold mb-2">Generated Items</h3>
        {generatedItems && generatedItems.length > 0 ? (
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse border">
              <thead>
                <tr>
                  {columnsToDisplay.map((col) => (
                    <th key={col} className="px-4 py-2 border text-center">
                      {col}
                    </th>
                  ))}
                  {/* Extra header for the dropdown column */}
                  <th className="px-4 py-2 border text-center">Selection</th>
                </tr>
              </thead>
              <tbody>
                {generatedItems.map((item) => (
                  <tr key={item.itemCode}>
                    {columnsToDisplay.map((col) => (
                      <td key={col} className="px-4 py-2 border text-center">
                        {item[col] as React.ReactNode}
                      </td>
                    ))}
                    {/* Dropdown column */}
                    <td className="px-4 py-2 border text-center">
                      <select
                        value={selections[item.itemCode] || 'default'}
                        onChange={(e) =>
                          setSelection(
                            item.itemCode,
                            e.target.value as 'default' | 'included' | 'excluded'
                          )
                        }
                        className="p-1 border rounded"
                      >
                        <option value="default">Default</option>
                        <option value="included">Included</option>
                        <option value="excluded">Excluded</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <p>No generated items available.</p>
        )}
        <div className='p-4  flex justify-end gap-3'>
        <Button type='button' onClick={closeModal}>Close</Button>
        <Button type='button' onClick={close}>Save</Button>
        </div>
      </div>

    </div>
  )
}

export default DiscountAssortmentListTable
