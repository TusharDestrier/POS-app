import { Outlet } from 'react-router-dom'

function PettyCashHeadLayout() {
  return (
    <div className="m-3 p-3 text-center">
      <div className="content">
        <Outlet />
      </div>
    </div>
  )
}

export default PettyCashHeadLayout