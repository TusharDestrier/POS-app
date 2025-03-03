import { useNavigate } from 'react-router-dom'

import { Button } from '@/components/ui/button'
import { useCustomerMaster } from '@/app/pages/Root/Administration/Master/CustomerMaster/store/useCustomerMaster'

// import { Input } from '@/components/ui/input'

function SalesBtns() {
  const navigate = useNavigate()
const openModal=useCustomerMaster(state=>state.toggleOpen)
  return (
    <ul className="btns flex items-center gap-3 mt-3">
      <li>
        <Button>Item View</Button>
      </li>
      <li>
        <Button onClick={() => {
          navigate('/administration/master/customer-master')
          openModal();

        }}>Customers</Button>
      </li>
      <li>
        <Button onClick={() => {
          navigate('/administration/setup/promotion/promotion-setup')

        }}>Promotions</Button>
      </li>
      <li>
        <Button onClick={() => {
          navigate('/administration/setup/discount/discount-setup')

        }}>Discounts</Button>
      </li>
    </ul>
  )
}

export default SalesBtns
