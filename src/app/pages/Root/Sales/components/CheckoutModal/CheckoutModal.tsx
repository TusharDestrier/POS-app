import { RightArr } from '@/assets/icons'
import { DialogClose, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'

function CheckoutModal() {
  return (
    <DialogContent showCloseIcon={false} className="sm:max-w-[725px]">
      <DialogHeader>
        <DialogTitle className="flex items-center gap-2">
          <DialogClose asChild>
            <span className="cursor-pointer">
              <RightArr size="20px" />
            </span>
          </DialogClose>
          go to sales
        </DialogTitle>
      </DialogHeader>
      <div className="grid grid-cols-2 items-start">
        <div className="item">1</div>
        <div className="item">2</div>
      </div>
    </DialogContent>
  )
}

export default CheckoutModal
