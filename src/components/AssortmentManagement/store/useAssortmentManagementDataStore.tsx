import { create } from 'zustand'

interface AssortmentManagementDataStoreType {
  currentAssortmentId: number | null // ✅ Current ID store karo
  setCurrentAssortmentId: (id: number) => void // ✅ ID setter
  clearCurrentAssortmentId: () => void // ✅ ID reset
}

export const useAssortmentManagementDataStore = create<AssortmentManagementDataStoreType>(
  (set) => ({
    currentAssortmentId: null, // ✅ Initially null

    setCurrentAssortmentId: (id) => set({ currentAssortmentId: id }),

    clearCurrentAssortmentId: () => set({ currentAssortmentId: null }),
  })
)
