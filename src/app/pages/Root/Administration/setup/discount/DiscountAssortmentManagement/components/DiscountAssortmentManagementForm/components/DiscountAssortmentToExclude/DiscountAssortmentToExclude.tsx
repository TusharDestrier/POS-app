import { useGetGeneratedItems } from '../DiscountAssortmentListTable/hooks_api/useGetItemFilterWise'
import { useGeneratedItemsDataStore } from '../DiscountAssortmentListTable/store/useGeneratedItemDataStore'

import { Checkbox } from '@/components/ui/checkbox'
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export const DiscountAssortmentToExclude = () => {
  const { generatedItems } = useGetGeneratedItems()
  const selectedGeneratedItems = useGeneratedItemsDataStore((state) => state.selections)
  // const filteredItems=generatedItems.filter(item=>item.hsnsacCode)

  const excludedItems = generatedItems.filter(
    (item) => selectedGeneratedItems[item.itemCode] === 'excluded'
  )

  return (
    <div className="mt-5">
      <Table>
        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
        <TableHeader>
          <TableRow>
            <TableHead>No.</TableHead>
            <TableHead>Barcode</TableHead>
            <TableHead>Item Name</TableHead>
            <TableHead className="text-right">Item Code</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {excludedItems?.map((item,ind) => (
            <TableRow key={item.barCode}>
               <TableCell className="font-medium">
                {ind +1}
              </TableCell>
            
              <TableCell>{item.barCode}</TableCell>
              <TableCell>{item.itemName}</TableCell>
              <TableCell className="text-right">{item.itemCode}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow></TableRow>
        </TableFooter>
      </Table>
    </div>
  )
}
