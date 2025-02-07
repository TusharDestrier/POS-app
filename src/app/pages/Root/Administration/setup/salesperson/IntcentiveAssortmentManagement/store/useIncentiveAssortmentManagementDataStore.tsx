import { create } from 'zustand'

interface IntentiveAssortmentManagementDataStoreType {
  currentIntentiveMasterId: number | null // ✅ Current ID store karo
  setCurrentIntentiveMasterId: (id: number) => void // ✅ ID setter
  clearCurrentIntentiveMasterId: () => void // ✅ ID reset
}

export const useIncentiveAssortmentManagementDataStore = create<IntentiveAssortmentManagementDataStoreType>(
  (set) => ({
    currentIntentiveMasterId: null, // ✅ Initially null

    setCurrentIntentiveMasterId: (id) => set({ currentIntentiveMasterId: id }),

    clearCurrentIntentiveMasterId: () => set({ currentIntentiveMasterId: null }),
  })
)
