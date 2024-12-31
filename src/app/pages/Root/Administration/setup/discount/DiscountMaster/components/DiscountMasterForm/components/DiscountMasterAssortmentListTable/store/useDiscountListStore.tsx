import { create } from "zustand";

type Assortment = {
  id: string;
  name: string;
};

type DiscountListType = {
  isOpen: boolean;
  currentRow: number | null;
  selectedAssortments: Assortment[];
  openModal: (rowIndex: number) => void;
  closeModal: () => void;
  addSelectedAssortment: (assortment: Assortment) => void;
  deleteSelectedAssortment: (rowIndex: number) => void;
  setSelectedAssortments: (assortments: Assortment[]) => void; // Add this
};

export const useDiscountListStore = create<DiscountListType>((set) => ({
    isOpen: false,
    currentRow: null,
    selectedAssortments: [], // Store only selected assortments
    openModal: (rowIndex) =>
      set(() => ({
        isOpen: true,
        currentRow: rowIndex,
      })),
    closeModal: () =>
      set(() => ({
        isOpen: false,
        currentRow: null,
      })),
    addSelectedAssortment: (assortment) =>
      set((state) => {
        const updatedAssortments = [...state.selectedAssortments];
        if (state.currentRow !== null) {
          updatedAssortments[state.currentRow] = assortment; // Update the current row
        }
        return { selectedAssortments: updatedAssortments };
      }),
    deleteSelectedAssortment: (rowIndex) =>
      set((state) => ({
        selectedAssortments: state.selectedAssortments.filter((_, index) => index !== rowIndex),
      })),
    setSelectedAssortments: (assortments) =>
      set(() => ({
        selectedAssortments: assortments, // Overwrite the entire array
      })),
  }));

export default useDiscountListStore;
