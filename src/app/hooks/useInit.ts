import useFullScreen from '@/hooks/useFullScreen'
import useAuth from '@/store/useAuth'
import { useEffect } from 'react'

export function useInit() {
  const initUser = useAuth((state) => state.initializeUser)

  useFullScreen()

  useEffect(() => {
    initUser() // This ensures that user data is rehydrated on page reload
  }, [initUser])
}
