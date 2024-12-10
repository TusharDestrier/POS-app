import { Outlet } from 'react-router-dom'

function MasterLayout() {
  return (
    <div>
      <h3>Master Layout</h3>
      <Outlet />
    </div>
  )
}

export default MasterLayout
