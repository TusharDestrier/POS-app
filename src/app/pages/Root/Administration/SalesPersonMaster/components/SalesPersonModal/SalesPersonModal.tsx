import useSalesPerson from '../../store/useSalesPerson'
import SalesPersonForm from '../SalesPersonForm'

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

function SalesPersonModal() {
  const isOpen = useSalesPerson((state) => state.isOpen)
  const modalMode = useSalesPerson((state) => state.mode)
  const closeModal = useSalesPerson((state) => state.close)

  return (
    <Dialog open={isOpen} onOpenChange={closeModal}>
      <DialogContent className="sm:max-w-[1000px] max-h-[30rem] min-h-[30rem] h-[30rem] overflow-y-scroll p-0 flex flex-col gap-0">
        <DialogHeader className="p-5 border-b border-gray-50 sticky top-0 left-0 bg-white">
          <DialogTitle>
            <h3 className="text-xl capitalize">{modalMode} Sales Person Master </h3>
          </DialogTitle>
        </DialogHeader>
        <div className="px-6">
          {' '}
          <SalesPersonForm />
        </div>

        <DialogFooter className="bg-white h-5 sticky bottom-0 right-0"></DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default SalesPersonModal
