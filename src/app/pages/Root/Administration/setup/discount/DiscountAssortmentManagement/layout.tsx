import { Outlet } from 'react-router-dom'

function DiscountAssortmentManagementLayout() {
  return (
    <div>
      <h4>Assortment Managements</h4>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default DiscountAssortmentManagementLayout
