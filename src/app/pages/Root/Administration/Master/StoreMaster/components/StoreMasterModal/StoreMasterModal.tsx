import useStoreMasterStore from '../../store/useStoreMasterStore'
import StoreMasterForm from '../StoreMasterForm'

import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogHeader,
} from '@/components/ui/dialog'

function StoreMasterModal() {
  const isOpen = useStoreMasterStore((state) => state.isOpen)
 const modalMode = useStoreMasterStore((state) => state.mode)
  const closeModal = useStoreMasterStore((state) => state.close)

  return (
    <Dialog open={isOpen} onOpenChange={closeModal}>
      <DialogContent className="w-full max-w-full  h-screen overflow-y-scroll p-0 flex flex-col gap-0">
        <DialogHeader className="p-5 border-b border-gray-50 sticky top-0 left-0 bg-white">
          <DialogTitle>
            <h3 className="text-xl capitalize">{modalMode} Store Detail</h3>
          </DialogTitle>
          
          
        </DialogHeader>
        
        {/* <div className='sticky top-0 left-0 after:h-full after:w-full after:bg-black/30 after:absolute after:top-0 after:left-0 mb-4'>
          <h3 className='text-4xl capitalize z-30 absolute translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%] text-white font-semibold p-5 text-center '>Store Master</h3>
        <img src="/Pay_mode.jpg" alt=""  className='h-[200px] w-full mx-auto object-cover  '/>
        </div> */}
        <div className="px-6">
          {' '}
          <StoreMasterForm />
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default StoreMasterModal
