import { Outlet, useLocation } from 'react-router-dom'

export const AdministrationLayout = () => {
  const { pathname } = useLocation()

  const pageTitle = pathname.split('/').at(-1)

  return (
    <div className="administration-layout px-4">
      <div className="administration-header py-3 flex justify-between">
        <h3 className="page-title mb-3 capitalize">{pageTitle?.split('-').join(' ')} </h3>
      </div>
      <Outlet />
    </div>
  )
}
