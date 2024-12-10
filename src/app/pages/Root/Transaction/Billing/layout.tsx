import { Outlet } from 'react-router-dom'

export const BillingLayout = () => {
  return (
    <div className='p-5'>
      <h3>Billing</h3>
      <div>
        <Outlet />
      </div>
    </div>
  )
}
