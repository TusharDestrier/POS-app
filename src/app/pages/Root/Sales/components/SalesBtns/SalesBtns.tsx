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
import { useNavigate } from 'react-router-dom'
// import { Input } from '@/components/ui/input'
// import { Label } from '@/components/ui/label'

function SalesBtns() {
  const navigate = useNavigate()

  return (
    <ul className="btns flex items-center gap-3 mt-3">
      <li>
        <Button>Item View</Button>
      </li>
      <li>
        <Button onClick={() => navigate('/customers')}>Customers</Button>
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
