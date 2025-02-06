import { create } from 'zustand'

type PromotionAssortmentManagementStore = {
  isLoading: boolean
  setIsLoading: (loading: boolean) => void
  isOpen: boolean
  mode: 'Edit' | 'Create' | 'View'
  toggleOpen: () => void
  close: () => void
  setMode: (newMode: 'Edit' | 'Create' | 'View') => void
}

export const usePromotionAssortmentManagementStore = create<PromotionAssortmentManagementStore>((set) => ({
  isLoading: false,
  setIsLoading: (loading) => set({ isLoading: loading }),
  isOpen: false,
  mode: 'Create',
  toggleOpen: () => set((state) => ({ isOpen: !state.isOpen })),
  close: () => set(() => ({ isOpen: false })),
  setMode: (newMode) => set(() => ({ mode: newMode })),
}))

// export default useSalesPerson
