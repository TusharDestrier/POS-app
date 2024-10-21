import { Outlet } from 'react-router-dom'

export const AdministrationLayout = () => {
  return (
    <div className="administration-layout px-4 ">
      <div className="administration-header py-3 flex justify-between">
        <h3 className="page-title mb-3">Administration </h3>
      </div>
      <Outlet />
    </div>
  )
}
