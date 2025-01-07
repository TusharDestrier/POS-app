import { create } from "zustand";

export interface PromotionStoreType {
  id: string;
  name: string;
  fromDate: string;
  toDate: string;
  allocationType: 'normal' | 'happy-hour';
  deallocate: boolean;
}

interface PromotionStoreSelectionListStoreType {
  promotions: PromotionStoreType[];
  selectedPromotions: PromotionStoreType[];
  isSelecting: boolean;
  selectedRowIndex: number | null;
  openSelector: (index: number) => void;
  closeSelector: () => void;
  addSelectedPromotion: (index: number, promotion: PromotionStoreType) => void;
}

export const usePromotionStoreSelectionListStore = create<PromotionStoreSelectionListStoreType>((set) => ({
  promotions: [
    { id: "1", name: "Promotion A",fromDate:"",toDate:"",allocationType:"normal",deallocate:false },
    { id: "3", name: "Promotion B",fromDate:"",toDate:"",allocationType:"normal",deallocate:false },
    { id: "2", name: "Promotion C",fromDate:"",toDate:"",allocationType:"normal",deallocate:false },
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
            selectedPromotions: updated,
        };
    }),
  
}));
