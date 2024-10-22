import { createBrowserRouter, Navigate } from 'react-router-dom'
import { authRoutes } from './auth.routes'
import { appRoutes } from './app.routes'
import NotFoundPage from '@/app/pages/NotFound/page'

const routes = createBrowserRouter([
  authRoutes,
  {
    path: '/login',
    element: <Navigate to={'/auth'} />,
  },
  appRoutes,
  {
    path: '*',
    element: <NotFoundPage />,
  },
])

export default routes
