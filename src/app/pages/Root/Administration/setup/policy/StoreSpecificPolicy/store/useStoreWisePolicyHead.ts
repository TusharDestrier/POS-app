import {create}  from 'zustand'

type StoreWisePolicyHeadType = {
    isLoading: boolean
    setIsLoading: (loading: boolean) => void
    isOpen: boolean
    mode: 'Edit' | 'Create' | 'View' | 'Delete'
    toggleOpen: () => void
    close: () => void
    setMode: (newMode: 'Edit' | 'Create' | 'View' | 'Delete') => void
}
export const useStoreWisePolicyHead = create<StoreWisePolicyHeadType>((set) => ({
    isLoading: false,
    setIsLoading: (loading) => set({ isLoading: loading }),
    isOpen: false,
    mode: 'Create',
    toggleOpen: () => set((state) => ({ isOpen: !state.isOpen })),
    close: () => set(() => ({ isOpen: false })),
    setMode: (newMode) => set(() => ({ mode: newMode })),

}))
export default useStoreWisePolicyHead