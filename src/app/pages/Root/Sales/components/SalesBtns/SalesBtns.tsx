import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  //DialogDescription,
  //DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import CustomersTable from '../CustomersTableData'
// import { Input } from '@/components/ui/input'
// import { Label } from '@/components/ui/label'

function SalesBtns() {
  return (
    <ul className="btns flex items-center gap-3 mt-3">
      <li>
        <Button>Item View</Button>
      </li>
      <li>
        <Dialog>
          <DialogTrigger asChild>
            <Button>Customers</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[625px]">
            <DialogHeader>
              <DialogTitle>Customer Data</DialogTitle>
            </DialogHeader>
            {/* <div className="grid gap-4 py-4"></div> */}
            <CustomersTable />
          </DialogContent>
        </Dialog>
      </li>
      <li>
        <Button>Promotions</Button>
      </li>
      <li>
        <Button>Discounts</Button>
      </li>
    </ul>
  )
}

export default SalesBtns
