import { useEffect } from 'react';

import { useAuth } from '@/store/useAuth';

const useAutoLogout = () => {
  const logout = useAuth((state) => state.logout);

  useEffect(() => {
    // ✅ Logout only on Tab Close (Ignore Reload)
    const handleTabClose = (event: BeforeUnloadEvent) => {
      // Check if the user is closing the tab (not reloading)
      if (!event.currentTarget?.performance?.navigation) return;

      const navigationType = (performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming).type;

      if (navigationType === "navigate") {
        logout();  // ✅ Logout only on tab close
      }
    };

    window.addEventListener('beforeunload', handleTabClose);

    // ✅ Auto Logout on Inactivity (1 min)
    let inactivityTimer: NodeJS.Timeout;

    const resetInactivityTimer = () => {
      clearTimeout(inactivityTimer);
      inactivityTimer = setTimeout(() => {
        logout();
      }, 1 * 60 * 10000); // 1 minute
    };

    // 🖱️ User Activity Events
    window.addEventListener('mousemove', resetInactivityTimer);
    window.addEventListener('keydown', resetInactivityTimer);
    window.addEventListener('scroll', resetInactivityTimer);
    window.addEventListener('click', resetInactivityTimer);

    // Start timer on load
    resetInactivityTimer();

    return () => {
      window.removeEventListener('beforeunload', handleTabClose);
      window.removeEventListener('mousemove', resetInactivityTimer);
      window.removeEventListener('keydown', resetInactivityTimer);
      window.removeEventListener('scroll', resetInactivityTimer);
      window.removeEventListener('click', resetInactivityTimer);
      clearTimeout(inactivityTimer);
    };
  }, [logout]);
};

export default useAutoLogout;
