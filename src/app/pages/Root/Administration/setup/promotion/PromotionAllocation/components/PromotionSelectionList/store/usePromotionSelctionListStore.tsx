import { create } from "zustand";

export interface Promotion {
  id: string;
  name: string;
}

interface PromotionSelectionListStore {
  promotions: Promotion[];
  selectedPromotions: Promotion[];
  isSelecting: boolean;
  selectedRowIndex: number | null;
  openSelector: (index: number) => void;
  closeSelector: () => void;
  addSelectedPromotion: (index: number, promotion: Promotion) => void;
}

export const usePromotionSelectionListStore = create<PromotionSelectionListStore>((set) => ({
  promotions: [
    { id: "1", name: "Promotion A" },
    { id: "2", name: "Promotion B" },
    { id: "3", name: "Promotion C" },
  ],
  selectedPromotions: [],
  isSelecting: false,
  selectedRowIndex: null,
  openSelector: (index) => set({ isSelecting: true, selectedRowIndex: index }),
  closeSelector: () => set({ isSelecting: false, selectedRowIndex: null }),
  addSelectedPromotion: (index, promotion) =>
    set((state) => {
      const updated = [...state.selectedPromotions];
      updated[index] = promotion;
      return {
        selectedPromotions: updated.filter((item) => item !== undefined),
      };
    }),
  
}));
