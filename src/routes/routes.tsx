import { LoginPage } from '@/app/pages/Auth'
import AuthLayout from '@/app/pages/Auth/layout'
import ErrorPage from '@/app/pages/ErrorPage/page'
import NotFoundPage from '@/app/pages/NotFound/page'
import RoleWiseRedirection from '@/app/pages/RoleWiseRedirection'
import { AdministrationLayout } from '@/app/pages/Root/Administration/layout'
import { StoreMasterPage } from '@/app/pages/Root/Administration/StoreMaster/page'
import CustomerLayout from '@/app/pages/Root/Customer/layout'
import CustomerPage from '@/app/pages/Root/Customer/page'
import DashboardLayout from '@/app/pages/Root/Dashboard/layout'
import DashboardPage from '@/app/pages/Root/Dashboard/page'
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
        element: <RoleWiseRedirection />,
      },
      {
        path: 'dashboard',
        element: <DashboardLayout />,
        children: [
          {
            index: true,
            element: <DashboardPage />,
          },
        ],
      },
      {
        path: 'administration',
        element: <AdministrationLayout />,
        children: [
          {
            index: true,
            element: <Navigate to={'/setup'} />,
          },
          {
            path: 'setup',
            children: [
              {
                path: 'store-master',
                element: <StoreMasterPage />,
              },
              {
                path: 'customer-master',
                element: <h3>Customer mastere</h3>,
              },
              {
                path: 'paymode-master',
                element: <h3>Paymode mastere</h3>,
              },
            ],
          },
        ],
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
        path: 'customers',
        element: <CustomerLayout />,
        children: [
          {
            index: true,
            element: <CustomerPage />,
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
