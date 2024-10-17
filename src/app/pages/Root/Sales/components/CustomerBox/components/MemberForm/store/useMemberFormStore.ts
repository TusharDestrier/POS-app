import { create } from 'zustand'

const useMemberFormStore = create((set) => ({
  // State variables to track modal visibility
  isCustomerCreateModalOpen: false,
  isCustomerHistoryModalOpen: false,

  // Action to open/close the customer create modal
  setCustomerCreateModalOpen: (isOpen: boolean) => set({ isCustomerCreateModalOpen: isOpen }),

  // Action to open/close the customer history modal
  setCustomerHistoryModalOpen: (isOpen: boolean) => set({ isCustomerHistoryModalOpen: isOpen }),
}))

export default useMemberFormStore
