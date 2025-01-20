import { create } from 'zustand'

type CustomerMasterStoreType = {
  isOpen: boolean
  mode: 'Edit' | 'Create' | 'View' | 'Delete'
  toggleOpen: () => void
  close: () => void
  setMode: (newMode: 'Edit' | 'Create' | 'View' | 'Delete') => void
}

export const useCustomerMaster = create<CustomerMasterStoreType>((set) => ({
  isOpen: false,
  mode: 'Create',
  toggleOpen: () => set((state) => ({ isOpen: !state.isOpen })),
  close: () => set(() => ({ isOpen: false })),
  setMode: (newMode) => set(() => ({ mode: newMode })),
}))

// export default useSalesPerson
