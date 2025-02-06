import { create } from 'zustand'

interface DiscountAssortmentManagementDataStoreType {
  currentDiscountMasterId: number | null // ✅ Current ID store karo
  setCurrentDiscountMasterId: (id: number) => void // ✅ ID setter
  clearCurrentDiscountMasterId: () => void // ✅ ID reset
}

export const useDiscountMasterDataStore = create<DiscountAssortmentManagementDataStoreType>(
  (set) => ({
    currentDiscountMasterId: null, // ✅ Initially null

    setCurrentDiscountMasterId: (id) => set({ currentDiscountMasterId: id }),

    clearCurrentDiscountMasterId: () => set({ currentDiscountMasterId: null }),
  })
)
