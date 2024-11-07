import { create } from 'zustand'

type PettyCashHeadType = {
  isOpen: boolean
  mode: 'Edit' | 'Create' | 'View'
  toggleOpen: () => void
  close: () => void
  setMode: (newMode: 'Edit' | 'Create' | 'View') => void
}

export const usePettyCashHead = create<PettyCashHeadType>((set) => ({
  isOpen: false,
  mode: 'Create',
  toggleOpen: () => set((state) => ({ isOpen: !state.isOpen })),
  close: () => set(() => ({ isOpen: false })),
  setMode: (newMode) => set(() => ({ mode: newMode })),
}))

export default usePettyCashHead
