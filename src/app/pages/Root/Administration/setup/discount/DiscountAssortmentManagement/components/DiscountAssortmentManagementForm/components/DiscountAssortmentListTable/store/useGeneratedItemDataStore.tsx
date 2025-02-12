import { create } from 'zustand'

export type SelectionStatus = 'default' | 'included' | 'excluded'

interface GeneratedItemsStore {
  // Store item selections, key is itemCode and value is status
  selections: Record<string, SelectionStatus>
  // Function to set/update a selection
  setSelection: (itemCode: string, status: SelectionStatus) => void
  // Function to remove a selection (if needed)
  removeSelection: (itemCode: string) => void
  clearSelections: () => void
}

export const useGeneratedItemsDataStore = create<GeneratedItemsStore>((set) => ({
  selections: {},
  setSelection: (itemCode, status) =>
    set((state) => ({
      selections: {
        ...state.selections,
        [itemCode]: status,
      },
    })),
  removeSelection: (itemCode) =>
    set((state) => {
      const newSelections = { ...state.selections }
      delete newSelections[itemCode]
      return { selections: newSelections }
    }),
  clearSelections: () => {
    set((state) => {
      return (state.selections = {})
    })
  },
}))
