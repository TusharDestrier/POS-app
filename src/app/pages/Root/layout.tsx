import { Outlet } from 'react-router-dom'

import Header from './components/Header'
import Sidebar from './components/Sidebar/Sidebar'

import useImageUploaderState from '@/components/ImageUploader/store/useImageUploader'
import useAuthRedirection from '@/hooks/useAuthRedirection'

function RootLayout() {
  useAuthRedirection({ requireAuth: true, redirectTo: '/login' })
const image=useImageUploaderState(state=>state.image);

  return (
    <div className="app_layout ">
      <Sidebar />
      <main
        className="overflow-y-scroll h-screen relative"
        style={
          image
            ? {
                backgroundImage: `url(${image})`,
                backgroundSize: "200px 200px",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                
                // opacity: 0.1, // Mimics the effect from the image tag
              }
            : {}
        }
      >
        <Header />
        <Outlet />
      </main>
    </div>
  )
}

export default RootLayout
