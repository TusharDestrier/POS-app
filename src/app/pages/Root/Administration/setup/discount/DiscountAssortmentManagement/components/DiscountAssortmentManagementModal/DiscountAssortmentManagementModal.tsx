import { useQueryClient } from '@tanstack/react-query'

import { useDiscountAssortmentManagementStore } from '../../store/useDiscountAssortmentManagementStore'
import DiscountAssortmentManagementForm from '../DiscountAssortmentManagementForm'
import { useGeneratedItemsDataStore } from '../DiscountAssortmentManagementForm/components/DiscountAssortmentListTable/store/useGeneratedItemDataStore'

import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'




function DiscountAssortmentManagementModal() {
  const queryClient=useQueryClient();

  const clearSelections =useGeneratedItemsDataStore(state=>state.clearSelections)
  const isOpen = useDiscountAssortmentManagementStore((state) => state.isOpen)
  const closeModal = useDiscountAssortmentManagementStore((state) => state.close)
  const mode = useDiscountAssortmentManagementStore((state) => state.mode)
  const setMode = useDiscountAssortmentManagementStore((state) => state.setMode)
  return (
    <Dialog
      open={isOpen}
      onOpenChange={() => {
        closeModal()
        setMode('Create')
        clearSelections();
        queryClient.setQueryData(['generatedDiscountitems'], []);
      }}
    >
      <DialogContent className="max-w-full min-h-screen h-screen overflow-auto">
        <DialogHeader>
          <DialogTitle>{mode} Assortment</DialogTitle>
          <DiscountAssortmentManagementForm />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default DiscountAssortmentManagementModal
