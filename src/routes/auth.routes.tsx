import { LoginPage } from '@/app/pages/Auth'
import AuthLayout from '@/app/pages/Auth/layout'
import { Navigate } from 'react-router-dom'

export const authRoutes = {
  path: '/auth',
  element: <AuthLayout />,
  children: [
    {
      index: true,
      element: <Navigate to={'/auth/login'} />,
    },

    {
      path: 'login',
      element: <LoginPage />,
    },
  ],
}
