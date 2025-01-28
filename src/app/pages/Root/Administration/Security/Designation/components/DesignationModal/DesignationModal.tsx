import { useDesignationMasterDataStore } from '../../store/useDesignationDataStore'
import { useDesignationStore } from '../../store/userDesignation'
import DesignationForm from '../DesignationForm'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'



function DesignationModal() {
  const mode = useDesignationStore((state) => state.mode)
  const isOpen = useDesignationStore((state) => state.isOpen)
  const close = useDesignationStore((state) => state.close)
const clearId=useDesignationMasterDataStore((state)=>state.clearCurrentDesignationMasterId)

function handleClose(){
  close();
  clearId()
}

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{mode} Designation Master</DialogTitle>
        </DialogHeader>
        <DesignationForm/>
      
      </DialogContent>
    </Dialog>
  )
}

export default DesignationModal
