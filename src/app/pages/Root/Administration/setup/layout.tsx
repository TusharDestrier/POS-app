import { Outlet } from 'react-router-dom'

function SectupLayout() {
  return (
    <div className='relative z-50'>

      <Outlet />
    </div>
  )
}

export default SectupLayout
