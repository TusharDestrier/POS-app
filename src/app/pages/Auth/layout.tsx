
import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

import { useAuth } from '@/store/useAuth'
// import useAuthRedirection from '@/hooks/useAuthRedirection'

function AuthLayout() {
  const isAuthenticated = useAuth((state) => state.isAuthenticated)
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/dashboard'); // ✅ Redirect to Dashboard if already logged in
    }
  }, [isAuthenticated, navigate]);

  return (
    <div className="auth_layout">
      <div className="max-w-[600px] w-[95%] lg:w-full mx-auto bg-gray-50 text-gray-800 px-4 py-8">
        <Outlet />
      </div>
    </div>
  )
}

export default AuthLayout
