import { create } from "zustand";

export interface PromotionStoreType {
  id: string;
  name: string;
  fromDate: string;
  toDate: string;
  allocationType: "normal" | "happy-hour";
  deallocate: boolean;
}

interface PromotionStoreSelectionListStoreType {
  promotions: PromotionStoreType[];
  isSelecting: boolean;
  selectedRowIndex: number | null;
  openSelector: (index: number) => void;
  closeSelector: () => void;
}

export const usePromotionStoreSelectionListStore = create<PromotionStoreSelectionListStoreType>((set) => ({
  promotions: [
    { id: "1", name: "Store A", fromDate: "", toDate: "", allocationType: "normal", deallocate: false },
    { id: "3", name: "Store B", fromDate: "", toDate: "", allocationType: "normal", deallocate: false },
    { id: "2", name: "Store C", fromDate: "", toDate: "", allocationType: "normal", deallocate: false },
  ],
  isSelecting: false,
  selectedRowIndex: null,
  openSelector: (index) => set({ isSelecting: true, selectedRowIndex: index }),
  closeSelector: () => set({ isSelecting: false, selectedRowIndex: null }),
}));
