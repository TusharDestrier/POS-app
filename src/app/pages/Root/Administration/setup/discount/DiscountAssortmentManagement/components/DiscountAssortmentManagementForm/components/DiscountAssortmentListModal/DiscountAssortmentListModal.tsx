import { useQueryClient } from '@tanstack/react-query'

import { useDiscountAssortmentManagementStore } from '../../../../store/useDiscountAssortmentManagementStore'
import DiscountAssortmentListTable from '../DiscountAssortmentListTable'
import { useGeneratedItemsDataStore } from '../DiscountAssortmentListTable/store/useGeneratedItemDataStore'

import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'


function DiscountAssortmentListModal() {
  const queryClient = useQueryClient()
  const clearSelection = useGeneratedItemsDataStore((state) => state.clearSelections)
  const isOpen = useDiscountAssortmentManagementStore((state) => state.isOpen2)
  const close = useDiscountAssortmentManagementStore((state) => state.close2)

  function closeModal() {
    close()
    queryClient.setQueryData(['generatedDiscountitems'], [])
    queryClient.setQueryData(['itemsGroupsProperties'], null)
    clearSelection()
  }

  return (
    <Dialog open={isOpen} onOpenChange={closeModal}>
      <DialogContent className="max-w-full min-h-screen h-screen overflow-auto">
        <DialogHeader>
          <DialogTitle> Assortments List</DialogTitle>
          <DiscountAssortmentListTable />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default DiscountAssortmentListModal
