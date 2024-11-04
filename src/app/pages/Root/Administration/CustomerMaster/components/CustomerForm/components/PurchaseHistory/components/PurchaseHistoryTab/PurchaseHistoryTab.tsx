import { Button } from '@/components/ui/button'
// import { Checkbox } from '@/components/ui/checkbox'
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

const billInformation = [
  {
    billNo: 'POSB/120',
    billDate: '02-05-2024',
    billAmount: '$250.00',
    paymentMethod: 'Credit Card',
  },
  {
    billNo: 'POSB/12',
    billDate: '02-06-2024',
    billAmount: '$150.00',
    paymentMethod: 'PayPal',
  },
  {
    billNo: 'POSB/189',
    billDate: '02-05-2023',
    billAmount: '$350.00',
    paymentMethod: 'Bank Transfer',
  },
  {
    billNo: 'POSB/110',
    billDate: '02-05-2014',
    billAmount: '$450.00',
    paymentMethod: 'Credit Card',
  },
  {
    billNo: 'POSB/89',
    billDate: '15-09-2024',
    billAmount: '$550.00',
    paymentMethod: 'PayPal',
  },
  {
    billNo: 'POSB/12',
    billDate: '02-05-2024',
    billAmount: '$200.00',
    paymentMethod: 'Bank Transfer',
  },
]
function DetailModel() {
  alert(3)
}
function PurchaseHistoryTab() {
  return (
    <div>
      {/* <div className="flex items-center space-x-2 m-2">
        <h1>Purchase History</h1>
        <Checkbox id="terms" />
        <label
          htmlFor="terms"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Bill Wise
        </label>
        <Checkbox id="terms" />
        <label
          htmlFor="terms"
          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Item Wise
        </label>
      </div> */}
      <div>
        <Table>
          {/* <TableCaption>A list of your recent invoices.</TableCaption> */}
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">Bill No.</TableHead>
              <TableHead>Bill Date</TableHead>
              <TableHead>Bill Amount</TableHead>
              <TableHead className="text-right">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {billInformation.map((bill) => (
              <TableRow key={bill.billNo}>
                <TableCell className="font-medium">{bill.billNo}</TableCell>
                <TableCell>{bill.billDate}</TableCell>
                <TableCell>{bill.billAmount}</TableCell>
                <TableCell className="text-right">
                  <Button onClick={DetailModel}>Details</Button>
                </TableCell>
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
    </div>
  )
}

export default PurchaseHistoryTab
