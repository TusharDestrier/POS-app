import { useState } from 'react'



import { Checkbox } from '@/components/ui/checkbox'
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableHead,
  TableRow,
} from '@/components/ui/table'

const DiscountAssortmentToInclude = () => {
  // const { assortmentIncludedData, isLoading } = useAssortmentIncludedData()

  // State to track selected items
  const [selectedItems, setSelectedItems] = useState<Record<string, boolean>>({})
  const [attributeColumns, setAttributeColumns] = useState<string[]>([]) // Dynamically track attribute columns

  // Handle checkbox selection
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const toggleSelection = (item: any) => {
    const isSelected = selectedItems[item.barcode]

    setSelectedItems((prev) => ({
      ...prev,
      [item.barcode]: !isSelected, // Toggle selection
    }))

    if (!isSelected) {
      // Add dynamically generated attributes to columns
      const newAttributes = Object.keys(item.attributes || {})
      setAttributeColumns(
        (prevColumns) => Array.from(new Set([...prevColumns, ...newAttributes])) // Merge unique attribute keys
      )
    } else {
      // Remove attributes of deselected item from columns
      const remainingSelectedItems = Object.entries(selectedItems)
        .filter(([barcode, selected]) => selected && barcode !== item.barcode)
        .map(([barcode]) => []?.find((data) => data.barcode === barcode))

      const remainingAttributes = remainingSelectedItems.flatMap((item) =>
        Object.keys(item?.attributes || {})
      )

      setAttributeColumns(Array.from(new Set(remainingAttributes))) // Update columns dynamically
    }
  }

  // if (isLoading) {
  //   return (
  //     <div className="mt-5">
  //       <SkeletonLoaderTable rows={5} columns={5} />
  //     </div>
  //   )
  // }

  // if (!isLoading && !assortmentIncludedData) {
  //   return <h3>No data</h3>
  // }

  return (
    <div className="mt-5">
     
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Select</TableHead>
            <TableHead>Barcode</TableHead>
            <TableHead>Item Name</TableHead>
            <TableHead>Group</TableHead>
            {attributeColumns.map((_, index) => (
              <TableHead key={index} className="text-right">
                Attribute {index + 1}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {[]?.map((item) => (
            <TableRow key={item.barcode}>
              <TableCell>
                <Checkbox
                  checked={!!selectedItems[item.barcode]}
                  onCheckedChange={() => toggleSelection(item)}
                />
              </TableCell>
              <TableCell>{item.barcode}</TableCell>
              <TableCell>{item.itemName}</TableCell>
              <TableCell>{item.group}</TableCell>
              {attributeColumns.map((attr) => (
                <TableCell key={`${item.barcode}-${attr}`} className="text-right">
                  {/* //  @ts-nocheck  */}
                  {selectedItems[item.barcode]
                    ? (item.attributes as Record<string, string | undefined>)[attr] || '--'
                    : '--'}
                </TableCell>
              ))}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default DiscountAssortmentToInclude
