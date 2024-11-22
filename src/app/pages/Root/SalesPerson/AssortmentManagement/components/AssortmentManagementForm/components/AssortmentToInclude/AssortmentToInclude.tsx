import { useAssortmentIncludedData } from './hook/useAssortmentIncludedData'

import SkeletonLoaderTable from '@/components/SkeletonLoaderTable'
import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Table,
  TableBody,
  // TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

// const invoices = [
//   {
//     invoice: 'INV001',
//     paymentStatus: 'Paid',
//     totalAmount: '$250.00',
//     paymentMethod: 'Credit Card',
//   },
//   {
//     invoice: 'INV002',
//     paymentStatus: 'Pending',
//     totalAmount: '$150.00',
//     paymentMethod: 'PayPal',
//   },
//   {
//     invoice: 'INV003',
//     paymentStatus: 'Unpaid',
//     totalAmount: '$350.00',
//     paymentMethod: 'Bank Transfer',
//   },
//   {
//     invoice: 'INV004',
//     paymentStatus: 'Paid',
//     totalAmount: '$450.00',
//     paymentMethod: 'Credit Card',
//   },
//   {
//     invoice: 'INV005',
//     paymentStatus: 'Paid',
//     totalAmount: '$550.00',
//     paymentMethod: 'PayPal',
//   },
//   {
//     invoice: 'INV006',
//     paymentStatus: 'Pending',
//     totalAmount: '$200.00',
//     paymentMethod: 'Bank Transfer',
//   },
//   {
//     invoice: 'INV007',
//     paymentStatus: 'Unpaid',
//     totalAmount: '$300.00',
//     paymentMethod: 'Credit Card',
//   },
// ]

const AssortmentToInclude = () => {
  const {assortmentIncludedData,isLoading}=useAssortmentIncludedData();
  if (isLoading) {
    // Render skeleton loader during loading state
    return<div className='mt-5'> <SkeletonLoaderTable rows={5} columns={5} /></div>;
  }
  if(!isLoading && !assortmentIncludedData){
    return <h3>No data</h3>
  }
  return (
    <div className="">
      <div className="flex gap-6 w-full m-3">
        <div className="w-[300px]">
          <Select>
            <SelectTrigger className="">
              <SelectValue placeholder="Select a Name" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Names</SelectLabel>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div className="ml-auto flex mr-3 gap-4">
          <Button>Show Items</Button>
          <Button>Copy Assortment</Button>
        </div>
      </div>
      <Table>
        {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Search</TableHead>
            <TableHead>Barcode</TableHead>
            <TableHead>Item Name</TableHead>
            <TableHead className="text-right">Group</TableHead>
            <TableHead className="text-right">Attribute 1</TableHead>
            <TableHead className="text-right">Attribute 2</TableHead>
            <TableHead className="text-right">Attribute 3</TableHead>
            <TableHead className="text-right">Attribute 4</TableHead>
            <TableHead className="text-right">Attribute 5</TableHead>
            <TableHead className="text-right">Attribute 6</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {assortmentIncludedData?.map((item) => (
            <TableRow key={item.barcode}>
              <TableCell className="font-medium">
                <Checkbox id="terms" />
              </TableCell>
              <TableCell>{item.barcode}</TableCell>
              <TableCell>{item.itemName}</TableCell>
              <TableCell className="text-right">{item.attributes.stock}</TableCell>
              <TableCell className="text-right">{item.attributes.discount}</TableCell>
              <TableCell className="text-right">{item.attributes.price}</TableCell>
              <TableCell className="text-right">{item.itemName}</TableCell>
              <TableCell className="text-right">{item.itemName}</TableCell>
              <TableCell className="text-right">{item.attributes.brand}</TableCell>
              <TableCell className="text-right">{item.attributes.qty}</TableCell>
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
export default AssortmentToInclude
