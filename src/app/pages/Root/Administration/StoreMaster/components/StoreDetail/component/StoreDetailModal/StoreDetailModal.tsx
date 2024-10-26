import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'

import StoreDetailForm from '../StoreDetailForm/StoreDetailForm'
import useStoreDetail from '../../store/useStoreDetail'

function StoreDetailModal() {
  const isOpen = useStoreDetail((state) => state.isOpen)
  const modalMode = useStoreDetail((state) => state.mode)
  const closeModal = useStoreDetail((state) => state.close)

  return (
    <Dialog open={isOpen} onOpenChange={closeModal}>
      <DialogContent className="sm:max-w-[800px] h-[30rem] overflow-y-scroll p-0">
        <DialogHeader className="p-5 border-b border-gray-50 sticky top-0 left-0 bg-white">
          <DialogTitle>
            <h3 className="text-xl capitalize">{modalMode} Store Detail</h3>
          </DialogTitle>
        </DialogHeader>
        <div className="px-6">
          {' '}
          <StoreDetailForm />
        </div>

        <DialogFooter className="bg-white h-5 sticky bottom-0 right-0"></DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default StoreDetailModal
