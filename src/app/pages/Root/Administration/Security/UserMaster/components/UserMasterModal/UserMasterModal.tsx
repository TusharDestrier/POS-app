import { useUserMasterStore } from '../../store/useUserMasterStore'
import UserMaterForm from '../UserMasterForm/UserMasterForm'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'



function UserMasterModal() {
  const mode = useUserMasterStore((state) => state.mode)
  const isOpen = useUserMasterStore((state) => state.isOpen)
  const close = useUserMasterStore((state) => state.close)
//const clearId=useDesignationMasterDataStore((state)=>state.clearCurrentDesignationMasterId)

function handleClose(){
  close();
 // clearId()
}

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-full">
        <DialogHeader>
          <DialogTitle>{mode} User Master</DialogTitle>
        </DialogHeader>
        <UserMaterForm/>
      
      </DialogContent>
    </Dialog>
  )
}

export default UserMasterModal
