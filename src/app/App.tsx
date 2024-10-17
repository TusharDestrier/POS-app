import { RouterProvider } from 'react-router-dom'
import routes from '../routes'
import { Toaster } from '@/components/ui/sonner'
import { useInit } from './hooks/useInit'

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
