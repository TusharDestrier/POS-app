import { Outlet } from 'react-router-dom'
import Header from './components/Header'
import Sidebar from './components/Sidebar/Sidebar'
import useAuthRedirection from '@/hooks/useAuthRedirection'

function RootLayout() {
  useAuthRedirection({ requireAuth: true, redirectTo: '/login' })

  return (
    <div className="app_layout ">
      <Sidebar />
      {/* overflow-y-scroll lg:overflow-hidden */}
      <main className=" overflow-y-scroll  h-screen">
        <Header />
        <Outlet />
      </main>
    </div>
  )
}

export default RootLayout
