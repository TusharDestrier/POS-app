import useDiscountMasterStore from '../../../../store/useDiscountMasterStore'
import DiscountMasterAssortmentList from '../DiscountMasterAssortmentList'
import useDiscountListStore from '../DiscountMasterAssortmentListTable/store/useDiscountListStore'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'

function DiscountMasterSetupAssortmentModal() {
  const isOpen = useDiscountListStore((state) => state.isOpen)
  const close = useDiscountMasterStore((state) => state.close)
  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Discount Assormment List</DialogTitle>
        </DialogHeader>
        <DiscountMasterAssortmentList />
        <DialogFooter className=''>
          <Button type="submit" className=''>Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default DiscountMasterSetupAssortmentModal
