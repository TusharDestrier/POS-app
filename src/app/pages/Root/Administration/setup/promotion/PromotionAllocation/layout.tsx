import { Outlet } from 'react-router-dom'

function PromotionAllocationLayout() {
  return (
    <div>
      <h4>Promotion Allocation</h4>
      <main>
        <Outlet />
      </main>
    </div>
  )
}

export default PromotionAllocationLayout
