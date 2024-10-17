import { LoginPage } from '@/app/pages/Auth'
import AuthLayout from '@/app/pages/Auth/layout'
import ErrorPage from '@/app/pages/ErrorPage/page'
import NotFoundPage from '@/app/pages/NotFound/page'
import RootLayout from '@/app/pages/Root/layout'
import ReportLayout from '@/app/pages/Root/Report/layout'
import ReportPage from '@/app/pages/Root/Report/page'
import SalesLayout from '@/app/pages/Root/Sales/layout'
import SalesPage from '@/app/pages/Root/Sales/page'
import SessionLayout from '@/app/pages/Root/Session/layout'
import SessionPage from '@/app/pages/Root/Session/page'
import { createBrowserRouter, Navigate } from 'react-router-dom'

const routes = createBrowserRouter([
  {
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
  },
  {
    path: '/login',
    element: <Navigate to={'/auth'} />,
  },
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Navigate to={'/billing'} />,
      },
      {
        path: 'billing',
        element: <SalesLayout />,
        children: [
          {
            index: true,
            element: <SalesPage />,
          },
        ],
      },
      {
        path: 'reports',
        element: <ReportLayout />,
        children: [
          {
            index: true,
            element: <ReportPage />,
          },
        ],
      },
      {
        path: 'sessions',
        element: <SessionLayout />,
        children: [
          {
            index: true,
            element: <SessionPage />,
          },
        ],
      },
    ],
  },
  {
    path: '*',
    element: <NotFoundPage />,
  },
])

export default routes
