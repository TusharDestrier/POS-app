import { useRoleDefination } from '../../store/useRoleDefination'
import RoleDefinationForm from '../RoleDefinationForm'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'



function RoleDefinationModal() {
  const mode = useRoleDefination((state) => state.mode)
  const isOpen = useRoleDefination((state) => state.isOpen)
  const close = useRoleDefination((state) => state.close)
 //const clearId=useDesignationMasterDataStore((state)=>state.clearCurrentDesignationMasterId)

function handleClose(){
  close();
 // clearId()
}

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[825px]">
        <DialogHeader>
          <DialogTitle>{mode} Role Defination</DialogTitle>
        </DialogHeader>
        <RoleDefinationForm/>
      
      </DialogContent>
    </Dialog>
  )
}

export default RoleDefinationModal
