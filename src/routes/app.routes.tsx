import ErrorPage from '@/app/pages/ErrorPage/page'
import RoleWiseRedirection from '@/app/pages/RoleWiseRedirection'
import { AdministrationLayout } from '@/app/pages/Root/Administration/layout'
import { PayModeMasterPage } from '@/app/pages/Root/Administration/PayModeMaster/page'
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
import { Navigate } from 'react-router-dom'

export const appRoutes = {
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
              element: <CustomerLayout />,
              children: [
                {
                  index: true,
                  element: <CustomerPage />,
                },
              ],
            },
            {
              path: 'paymode-master',
              element: <PayModeMasterPage />,
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
        {
          path: 'customers',
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
}
