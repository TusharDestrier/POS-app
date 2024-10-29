import { RouterProvider } from 'react-router-dom'

import routes from '../routes'
import { useInit } from './hooks/useInit'

import { Toaster } from '@/components/ui/sonner'

function App() {
  useInit()

  return (
    <>
      <RouterProvider router={routes} />
      <Toaster expand={false} richColors />
    </>
  )
}

export default App
