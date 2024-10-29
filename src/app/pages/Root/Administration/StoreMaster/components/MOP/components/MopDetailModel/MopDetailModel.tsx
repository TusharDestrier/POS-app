
import useMopDetails from '../../store/useMopDetails'
import MopDetailForm from '../MopDetailForm'

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

function MopDetailModal() {
  const isOpen = useMopDetails((state) => state.isOpen)
  const modalMode = useMopDetails((state) => state.mode)
  const closeModal = useMopDetails((state) => state.close)

  return (
    <Dialog open={isOpen} onOpenChange={closeModal}>
      <DialogContent className="sm:max-w-[900px] overflow-y-scroll p-0">
        <DialogHeader className="p-5 border-b border-gray-50 sticky top-0 left-0 bg-white">
          <DialogTitle>
            <h3 className="text-xl capitalize">{modalMode} Mop</h3>
          </DialogTitle>
        </DialogHeader>
        <div className="px-6">
          {' '}
          <MopDetailForm />
        </div>

        <DialogFooter className="bg-white h-5 sticky bottom-0 right-0"></DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default MopDetailModal
