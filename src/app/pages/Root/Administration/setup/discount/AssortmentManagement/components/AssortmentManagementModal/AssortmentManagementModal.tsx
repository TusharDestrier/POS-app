import { useDiscountAssortmentManagementStore } from '../../store/useDiscountAssortmentManagementStore'
import AssortmentManagementForm from '../AssortmentManagementForm'

import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'


function AssortmentManagementModal() {
  const isOpen = useDiscountAssortmentManagementStore((state) => state.isOpen)
  const closeModal = useDiscountAssortmentManagementStore((state) => state.close)
  const mode = useDiscountAssortmentManagementStore((state) => state.mode)
  return (
    <Dialog open={isOpen} onOpenChange={closeModal}>
      <DialogContent className="max-w-full min-h-screen h-screen overflow-auto">
        <DialogHeader>
          <DialogTitle>{mode} Assortment</DialogTitle>
          <AssortmentManagementForm />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default AssortmentManagementModal
