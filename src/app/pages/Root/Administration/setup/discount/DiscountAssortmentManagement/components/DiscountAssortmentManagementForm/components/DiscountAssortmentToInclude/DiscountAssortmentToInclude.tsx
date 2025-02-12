
import { useGetGeneratedItems } from '../DiscountAssortmentListTable/hooks_api/useGetItemFilterWise'
import { useGeneratedItemsDataStore } from '../DiscountAssortmentListTable/store/useGeneratedItemDataStore'

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
  const {generatedItems}=useGetGeneratedItems();
  const selectedGeneratedItems=useGeneratedItemsDataStore(state=>state.selections);
  // const filteredItems=generatedItems.filter(item=>item.hsnsacCode)


  const includedItems = generatedItems.filter(item => selectedGeneratedItems[item.itemCode] === "included");
  // State to track selected items
  // const [selectedItems, setSelectedItems] = useState<Record<string, boolean>>({})
  // const [attributeColumns, setAttributeColumns] = useState<string[]>([]) 

  // const toggleSelection = (item: any) => {
  //   const isSelected = selectedItems[item.barcode]

  //   setSelectedItems((prev) => ({
  //     ...prev,
  //     [item.barcode]: !isSelected, // Toggle selection
  //   }))

  //   if (!isSelected) {
  //     // Add dynamically generated attributes to columns
  //     const newAttributes = Object.keys(item.attributes || {})
  //     setAttributeColumns(
  //       (prevColumns) => Array.from(new Set([...prevColumns, ...newAttributes])) // Merge unique attribute keys
  //     )
  //   } else {
  //     // Remove attributes of deselected item from columns
  //     const remainingSelectedItems = Object.entries(selectedItems)
  //       .filter(([barcode, selected]) => selected && barcode !== item.barcode)
  //       .map(([barcode]) => []?.find((data) => data.barcode === barcode))

  //     const remainingAttributes = remainingSelectedItems.flatMap((item) =>
  //       Object.keys(item?.attributes || {})
  //     )

  //     setAttributeColumns(Array.from(new Set(remainingAttributes))) // Update columns dynamically
  //   }
  // }

  console.log(generatedItems);
  
  return (
    <div className="mt-5">
     
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>No.</TableHead>
            {/* <TableHead>Select</TableHead> */}
            <TableHead>Barcode</TableHead>
            <TableHead>Item Name</TableHead>
            <TableHead>Item Code</TableHead>
            {/* {attributeColumns.map((_, index) => (
              <TableHead key={index} className="text-right">
                Attribute {index + 1}
              </TableHead>
            ))} */}
          </TableRow>
        </TableHeader>
        <TableBody>
          {includedItems?.map((item,ind) => (
            <TableRow key={item.itemCode}>
              <TableCell>
                {ind+1}
              </TableCell>
              {/* <TableCell>
                <Checkbox
                  checked={!!selectedItems[item.itemCode]}
                  onCheckedChange={() => toggleSelection(item)}
                />
              </TableCell> */}
              <TableCell>{item.barCode}</TableCell>
              <TableCell>{item.itemName}</TableCell>
              <TableCell>{item.itemCode}</TableCell>
              {/* {attributeColumns.map((attr) => (
                <TableCell key={`${item.itemCode}-${attr}`} className="text-right">
                  {selectedItems[item.itemCode]
                    ? (item.attributes as Record<string, string | undefined>)[attr] || '--'
                    : '--'}
                </TableCell>
              ))} */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default DiscountAssortmentToInclude
