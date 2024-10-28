import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import useSalesPerson from '../../store/useSalesPerson'
import SalesPersonForm from '../SalesPersonForm'

function SalesPersonModal() {
  const isOpen = useSalesPerson((state) => state.isOpen)
  const modalMode = useSalesPerson((state) => state.mode)
  const closeModal = useSalesPerson((state) => state.close)

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
          <SalesPersonForm />
        </div>

        <DialogFooter className="bg-white h-5 sticky bottom-0 right-0"></DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default SalesPersonModal
