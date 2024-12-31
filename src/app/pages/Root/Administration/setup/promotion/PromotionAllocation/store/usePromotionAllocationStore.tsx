import { create } from 'zustand'

type PromotionAlllocationStoreType = {
  isOpen: boolean
  mode: 'Edit' | 'Create' | 'View'
  toggleOpen: () => void
  close: () => void
  setMode: (newMode: 'Edit' | 'Create' | 'View') => void
}

export const usePromotionAllocationStore = create<PromotionAlllocationStoreType>((set) => ({
  isOpen: false,
  mode: 'Create',
  toggleOpen: () => set((state) => ({ isOpen: !state.isOpen })),
  close: () => set(() => ({ isOpen: false })),
  setMode: (newMode) => set(() => ({ mode: newMode })),
}))

// export default useSalesPerson
