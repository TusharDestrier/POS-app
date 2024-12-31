import { create } from "zustand";

interface Store {
  selectedStores: {
    id: number;
    name: string;
    fromDate: string;
    toDate: string;
    isAllocated: boolean;
  }[];
  addStore: (store: { id: number; name: string }) => void;
  updateStore: (
    id: number,
    field: keyof Store["selectedStores"][0],
    value: any
  ) => void;
  removeStore: (id: number) => void;
}

export const useDiscountSelectionListStore = create<Store>((set) => ({
  selectedStores: [],

  addStore: (store) =>
    set((state) => ({
      // Avoid duplicates and add default values for new fields
      selectedStores: state.selectedStores.some((s) => s.id === store.id)
        ? state.selectedStores
        : [
            ...state.selectedStores,
            { ...store, fromDate: "", toDate: "", isAllocated: true },
          ],
    })),

  updateStore: (id, field, value) =>
    set((state) => ({
      selectedStores: state.selectedStores.map((s) =>
        s.id === id ? { ...s, [field]: value } : s
      ),
    })),

  removeStore: (id) =>
    set((state) => ({
      selectedStores: state.selectedStores.filter((store) => store.id !== id),
    })),
}));
