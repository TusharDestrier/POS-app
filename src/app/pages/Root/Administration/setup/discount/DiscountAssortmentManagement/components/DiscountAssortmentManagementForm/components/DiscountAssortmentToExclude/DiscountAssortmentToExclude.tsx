
// import SkeletonLoaderTable from '@/components/SkeletonLoaderTable'

import { Checkbox } from '@/components/ui/checkbox'
import {
  Table,
  TableBody,
  //TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

export const DiscountAssortmentToExclude = () => {
  // const {assortmentExcludedData,isLoading}=useAssortmentExcludedData();
  const assortmentExcludedData = []

  const isLoading = false

  if (isLoading) {
    // Render skeleton loader during loading state
    return (
      <div className="mt-5">
        {' '}
        <SkeletonLoaderTable rows={5} columns={5} />
      </div>
    )
  }
  if (!isLoading && !assortmentExcludedData) {
    return <h3>No data</h3>
  }
  return (
    <div className="mt-5">
      
      <Table>
        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Search</TableHead>
            <TableHead>Barcode</TableHead>
            <TableHead>Item Name</TableHead>
            <TableHead className="text-right">Group</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {assortmentExcludedData?.map((item) => (
            <TableRow key={item.barcode}>
              <TableCell className="font-medium">
                <Checkbox id="terms" />
              </TableCell>
              <TableCell>{item.barcode}</TableCell>
              <TableCell>{item.itemName}</TableCell>
              <TableCell className="text-right">{item.group}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            {/* <TableCell colSpan={3}>Total</TableCell>
        <TableCell className="text-right">$2,500.00</TableCell> */}
          </TableRow>
        </TableFooter>
      </Table>
    </div>
  )
}
