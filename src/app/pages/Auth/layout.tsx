import { Outlet } from 'react-router-dom'

import useAuthRedirection from '@/hooks/useAuthRedirection'

function AuthLayout() {
  useAuthRedirection({ requireAuth: false, redirectTo: '/' })

  return (
    <div className="auth_layout">
      <div className="max-w-[600px] w-[95%] lg:w-full mx-auto bg-gray-50 text-gray-800 px-4 py-8">
        <Outlet />
      </div>
    </div>
  )
}

export default AuthLayout
