import { Button } from '@/components/ui/button'
import { Outlet } from 'react-router-dom'

function CustomerLayout() {
  return (
    <div className="sales-layout px-4 ">
      <div className="sales-header py-3 flex justify-between">
        <h3 className="page-title">Customer </h3>
        <ul className="nav-btns flex gap-3 items-center">
          <li>
            <Button variant={'outline'}>Exchange</Button>
          </li>
          <li>
            <Button>Export </Button>
          </li>
          <li>
            <Button>Credit Memo</Button>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  )
}

export default CustomerLayout