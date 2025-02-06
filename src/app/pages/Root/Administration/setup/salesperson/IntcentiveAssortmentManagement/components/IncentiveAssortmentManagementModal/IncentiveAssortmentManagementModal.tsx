import {  useIncentiveAssortmentManagementStore } from '../../store/useIncentiveAssortmentManagementStore'
import IncentiveAssortmentManagementForm from '../IncentiveAssortmentManagementForm'

import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'


function IncentiveAssortmentManagementModal() {
  const isOpen = useIncentiveAssortmentManagementStore((state) => state.isOpen)
  const closeModal = useIncentiveAssortmentManagementStore((state) => state.close)
  const mode = useIncentiveAssortmentManagementStore((state) => state.mode)
  return (
    <Dialog open={isOpen} onOpenChange={closeModal}>
      <DialogContent className="max-w-full min-h-screen h-screen overflow-auto">
        <DialogHeader>
          <DialogTitle>{mode} Assortment</DialogTitle>
          <IncentiveAssortmentManagementForm />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  )
}

export default IncentiveAssortmentManagementModal
