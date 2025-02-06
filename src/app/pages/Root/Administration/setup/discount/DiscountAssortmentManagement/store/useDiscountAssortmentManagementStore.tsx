import { create } from 'zustand'

type DiscountAssortmentManagementStore = {
  isLoading: boolean
  setIsLoading: (loading: boolean) => void
  isOpen: boolean
  isOpen2: boolean
  mode: 'Edit' | 'Create' | 'View' | 'Delete'
  toggleOpen: () => void
  toggleOpen2: () => void
  close: () => void
  close2: () => void
  setMode: (newMode: 'Edit' | 'Create' | 'View' | 'Delete') => void
}

export const useDiscountAssortmentManagementStore = create<DiscountAssortmentManagementStore>(
  (set) => ({
    isLoading: false,
    setIsLoading: (loading) => set({ isLoading: loading }),
    isOpen: false,
    isOpen2: false,
    mode: 'Create',
    toggleOpen: () => set((state) => ({ isOpen: !state.isOpen })),
    close: () => set(() => ({ isOpen: false })),
    toggleOpen2: () => set((state) => ({ isOpen2: !state.isOpen2 })),
    close2: () => set(() => ({ isOpen2: false })),
    setMode: (newMode) => set(() => ({ mode: newMode })),
  })
)
