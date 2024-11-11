import { Outlet } from 'react-router-dom'

function GeneralSetupLayout() {
  return (
    <div className="customer-layout">
      <Outlet />
    </div>
  )
}

export default GeneralSetupLayout
