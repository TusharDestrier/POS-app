import { Button } from '@/components/ui/button'

function SalesBtns() {
  return (
    <ul className="btns flex items-center gap-3 mt-3">
      <li>
        <Button>Item View</Button>
      </li>
      <li>
        <Button>Customers</Button>
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
