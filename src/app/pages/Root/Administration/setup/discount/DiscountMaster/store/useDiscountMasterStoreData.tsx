import { create } from 'zustand'


interface DiscountMasterStoreData {
  currentDiscountSetupId: number | null // ✅ Current ID store karo
  setCurrentDiscountSetuprId: (id: number) => void // ✅ ID setter
  clearCurrentDiscountSetupId: () => void // ✅ ID reset
}

export const useDiscountMasterStoreData = create<DiscountMasterStoreData>((set) => ({
    currentDiscountSetupId: null, // ✅ Initially null

  setCurrentDiscountSetuprId: (id) => set({ currentDiscountSetupId: id }),

  clearCurrentDiscountSetupId: () => set({ currentDiscountSetupId: null }),
}))
