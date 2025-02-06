import { useDiscountAssortmentManagementStore } from '../../../../store/useDiscountAssortmentManagementStore'
import DiscountAssortmentListTable from '../DiscountAssortmentListTable'

import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'

function DiscountAssortmentListModal() {
  const isOpen = useDiscountAssortmentManagementStore((state) => state.isOpen2)
  const closeModal = useDiscountAssortmentManagementStore((state) => state.close2)
  //   const mode = useDiscountAssortmentManagementStore((state) => state.mode)

  
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
