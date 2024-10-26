import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

import usePettyCashDetails from '../../store/usePettyCashDetails'
import PettyCashDetailsForm from '../PettyCashDetailForm'

function PettyCashDetailModel() {
  const isOpen = usePettyCashDetails((state) => state.isOpen)
  const modalMode = usePettyCashDetails((state) => state.mode)
  const closeModal = usePettyCashDetails((state) => state.close)

  return (
    <Dialog open={isOpen} onOpenChange={closeModal}>
      <DialogContent className="sm:max-w-[800px] h-[30rem] overflow-y-scroll p-0">
        <DialogHeader className="p-5 border-b border-gray-50 sticky top-0 left-0 bg-white">
          <DialogTitle>
            <h3 className="text-xl capitalize">{modalMode} Petty Cah</h3>
          </DialogTitle>
        </DialogHeader>
        <div className="px-6">
          {' '}
          <PettyCashDetailsForm />
        </div>

        <DialogFooter className="bg-white h-5 sticky bottom-0 right-0"></DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default PettyCashDetailModel
