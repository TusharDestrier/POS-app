import { usePromotionAssortmentManagementStore } from '../../store/usePromotionAssortmentManagementStore'
import PromotionAssortmentManagementForm from '../PromotionAssortmentManagementForm'

import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'


function PromotionAssortmentManagementModal() {
  const isOpen = usePromotionAssortmentManagementStore((state) => state.isOpen)
  const closeModal = usePromotionAssortmentManagementStore((state) => state.close)
  const mode = usePromotionAssortmentManagementStore((state) => state.mode)
  return (
    <Dialog open={isOpen} onOpenChange={closeModal}>
      <DialogContent className="max-w-full min-h-screen h-screen overflow-auto">
        <DialogHeader>
          <DialogTitle>{mode} Assortment</DialogTitle>
          <PromotionAssortmentManagementForm />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default PromotionAssortmentManagementModal
