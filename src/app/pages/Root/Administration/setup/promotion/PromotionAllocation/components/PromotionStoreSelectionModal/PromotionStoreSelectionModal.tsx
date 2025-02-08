import { usePromotionAllocationStore } from "../../store/usePromotionAllocationStore"

import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
  } from "@/components/ui/dialog"
import PromotionStoreSelectionList from "../PromotionStoreSelectionList/PromotionStoreSelectionList";



function PromotionStoreSelectionModal() {

    const isOpen=usePromotionAllocationStore(state=>state.isOpen2);
    const closeModal=usePromotionAllocationStore(state=>state.close2);
  return (
    <Dialog open={isOpen} onOpenChange={closeModal}>
      
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Store Selection</DialogTitle>
         
        </DialogHeader>
       <PromotionStoreSelectionList/>
       
     {/* <PromotionSelectionList/> */}
      </DialogContent>
    </Dialog>
  )
}

export default PromotionStoreSelectionModal