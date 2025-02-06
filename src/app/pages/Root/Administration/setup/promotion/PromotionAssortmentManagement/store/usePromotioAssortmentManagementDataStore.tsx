import { create } from 'zustand'

interface PromotionAssortmentManagementDataStoreType {
  currentPromotionMasterId: number | null // ✅ Current ID store karo
  setCurrentPromotionMasterId: (id: number) => void // ✅ ID setter
  clearCurrentPromotionMasterId: () => void // ✅ ID reset
}

export const usePromotioAssortmentManagementDataStore = create<PromotionAssortmentManagementDataStoreType>(
  (set) => ({
    currentPromotionMasterId: null, // ✅ Initially null

    setCurrentPromotionMasterId: (id) => set({ currentPromotionMasterId: id }),

    clearCurrentPromotionMasterId: () => set({ currentPromotionMasterId: null }),
  })
)
