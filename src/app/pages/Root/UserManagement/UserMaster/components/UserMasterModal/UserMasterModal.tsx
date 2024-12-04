import { useUserMasterStore } from '../../store/useUserMasterStore'
import UserMasterForm from '../UserMasterForm'

import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'


function UserMasterModal() {
  const mode = useUserMasterStore((state) => state.mode)
  const isOpen = useUserMasterStore((state) => state.isOpen)
  const close = useUserMasterStore((state) => state.close)
  return (
    <Dialog open={isOpen} onOpenChange={close}>
      <DialogContent className="max-w-full h-screen block rounded-none overflow-y-scroll">
        <DialogHeader className='mb-8'>
          <DialogTitle>{mode} User Master</DialogTitle>
        </DialogHeader>
        <UserMasterForm />
      </DialogContent>
    </Dialog>
  )
}

export default UserMasterModal
