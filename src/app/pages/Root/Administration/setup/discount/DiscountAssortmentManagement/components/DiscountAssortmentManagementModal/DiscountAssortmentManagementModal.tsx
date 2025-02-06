import { useDiscountAssortmentManagementStore } from '../../store/useDiscountAssortmentManagementStore'
import DiscountAssortmentManagementForm from '../DiscountAssortmentManagementForm'

import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'

function DiscountAssortmentManagementModal() {
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
