import { useState } from 'react'

import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectGroup,
  SelectItem,
  SelectValue,
} from '@/components/ui/select'
import { getFilteredDiscountAssortmentData } from './data/discountAssortmentData'

interface SelectedData {
  group: string
  attributes: Record<string, string>
}

function DiscountAssortmentSearchFilters() {
  const [attributes, setAttributes] = useState<string[]>(['Attribute1'])
  const [selectedData, setSelectedData] = useState<SelectedData>({ group: '', attributes: {} })

  const addRow = () => {
    setAttributes([...attributes, `Attribute${attributes.length + 1}`])
  }

  const handleGroupChange = (value: string) => {
    setSelectedData((prev) => ({ ...prev, group: value }))
  }

  const handleSelectChange = (attribute: string, value: string) => {
    setSelectedData((prev) => ({
      ...prev,
      attributes: { ...prev.attributes, [attribute]: value },
    }))
  }

  function saveSelection() {
    console.log('Saved Data:', selectedData);
    const filteredItems = getFilteredDiscountAssortmentData(selectedData);
    console.log('Filtered Items:', filteredItems);
    // Now update your main form state or pass this data to your result table component.
  }

  return (
    <div className="p-6 bg-white shadow-md rounded-lg w-full ">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Filter Assortment</h2>
      <div className="flex flex-col gap-2 mb-4">
        <Label className="text-sm">Group</Label>
        <Select onValueChange={handleGroupChange}>
          <SelectTrigger className="border p-2 w-full text-start">
            <SelectValue placeholder="Select a Group" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="cloth">Cloth</SelectItem>
              <SelectItem value="deos">Deos</SelectItem>
              <SelectItem value="group3">Group3</SelectItem>
              <SelectItem value="group4">Group4</SelectItem>
              <SelectItem value="group5">Group5</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      {attributes.map((attribute, index) => (
        <div key={index} className=" flex flex-col gap-2 mb-4">
          <Label className="text-sm">{attribute}</Label>
          <Select onValueChange={(value) => handleSelectChange(attribute, value)}>
            <SelectTrigger className="border p-2 w-full">
              <SelectValue placeholder="Select an Attribute" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="Size">Size</SelectItem>
                <SelectItem value="Color">Color</SelectItem>
                <SelectItem value="Material">Material</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      ))}

      <div className="flex gap-4 mt-4">
        <Button type="button" onClick={addRow} className="bg-red-500 hover:bg-red-600 text-white">
          Add Row
        </Button>
        <Button
          type="button"
          onClick={saveSelection}
          className="bg-green-500 hover:bg-green-600 text-white"
        >
          Save
        </Button>
      </div>
    </div>
  )
}

export default DiscountAssortmentSearchFilters
