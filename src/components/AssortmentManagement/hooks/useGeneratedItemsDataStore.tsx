import { create } from 'zustand'

export type SelectionStatus = 'default' | 'included' | 'excluded'

interface GeneratedItemsStore {
  selections: Record<string, SelectionStatus>
  setSelection: (itemCode: string, status: SelectionStatus) => void
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
