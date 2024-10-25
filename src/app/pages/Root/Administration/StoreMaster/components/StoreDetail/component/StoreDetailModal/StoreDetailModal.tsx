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

function StoreDetailModalBtn() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Create</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[800px] h-[30rem] overflow-y-scroll p-0">
        <DialogHeader className="p-5 border-b border-gray-50 sticky top-0 left-0 bg-white">
          <DialogTitle>
            <h3 className="text-xl">Store Detail</h3>
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

export default StoreDetailModalBtn
