import { useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

import Header from './components/Header';
import Sidebar from './components/Sidebar/Sidebar';

import useAutoLogout from '@/app/hooks/useAutoLogout';
import useImageUploaderState from '@/components/ImageUploader/store/useImageUploader';
import { useAuth } from '@/store/useAuth';

function RootLayout() {

  useAutoLogout();
  const navigate = useNavigate();
  const isAuthenticated = useAuth((state) => state.isAuthenticated);
  const image = useImageUploaderState((state) => state.image);

  // ✅ Redirect if not authenticated
  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [isAuthenticated, navigate]);

  // 🛑 Show nothing if not authenticated (Prevent Flash of Protected Content)
  if (!isAuthenticated) return null;

  return (
    <div className="app_layout">
      {/* ✅ Sidebar for Authenticated Users */}
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
              }
            : {}
        }
      >
        {/* ✅ Header for Authenticated Users */}
        <Header />
        <Outlet />
      </main>
    </div>
  );
}

export default RootLayout;
