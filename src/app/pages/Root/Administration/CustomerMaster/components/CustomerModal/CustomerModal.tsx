import { useCustomerMaster } from '../../store/useCustomerMaster'
import CustomerForm from '../CustomerForm'

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

function CustomerModal() {
  const isOpen = useCustomerMaster((state) => state.isOpen)
  const modalMode = useCustomerMaster((state) => state.mode)
  const closeModal = useCustomerMaster((state) => state.close)

  return (
    <Dialog open={isOpen} onOpenChange={closeModal}>
      <DialogContent className="sm:max-w-[800px]  overflow-y-scroll p-0 gap-0">
        <DialogHeader className="p-5 border-b border-gray-50 sticky top-0 left-0 bg-white">
          <DialogTitle>
            <h3 className="text-xl capitalize">{modalMode} Sales Person Master </h3>
          </DialogTitle>
        </DialogHeader>
        <div className="px-6">
          {' '}
          <CustomerForm />
        </div>

        <DialogFooter className="bg-white h-5 sticky bottom-0 right-0"></DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default CustomerModal
