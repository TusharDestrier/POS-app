import { create } from 'zustand'

type PromotionSetupStore = {
  isOpen: boolean
  mode: 'Edit' | 'Create' | 'View'
  step:number
  toggleOpen: () => void
  close: () => void
  setMode: (newMode: 'Edit' | 'Create' | 'View') => void
  next:()=>void,
  prev:()=>void
}

export const usePromotionSetupStore = create<PromotionSetupStore>((set) => ({
  isOpen: false,
  step:1,
  mode: 'Create',
  toggleOpen: () => set((state) => ({ isOpen: !state.isOpen })),
  close: () => set(() => ({ isOpen: false })),
  setMode: (newMode) => set(() => ({ mode: newMode })),
  next:()=>set(()=>({step:2})),
  prev:()=>set(()=>({step:1}))
}))

// export default useSalesPerson
