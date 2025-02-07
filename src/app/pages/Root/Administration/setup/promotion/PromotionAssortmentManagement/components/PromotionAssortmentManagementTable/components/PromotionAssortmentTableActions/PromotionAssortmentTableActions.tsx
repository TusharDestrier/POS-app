import { MoreHorizontal } from 'lucide-react'

import { useCreatePromotionAssortmentData } from '../../../../hooks_api/useCreatePromotionAssortmentData'
import { useFetchPromotionAssortmentDataById } from '../../../../hooks_api/usePromotionAssortmentDataById'
import { usePromotioAssortmentManagementDataStore } from '../../../../store/usePromotioAssortmentManagementDataStore'
import { usePromotionAssortmentManagementStore } from '../../../../store/usePromotionAssortmentManagementStore'

import { Button } from '@/components/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    //DropdownMenuSeparator,
    DropdownMenuTrigger,
  } from '@/components/ui/dropdown-menu'
import { FetchedAssortmentPromotionType } from '@/types/assortmentPromotion'



function PromotionAssortTableActions({
    assortment,
}: {
    assortment: FetchedAssortmentPromotionType   
}
){
    const {setCurrentPromotionMasterId}=usePromotioAssortmentManagementDataStore();
      const { FetchPromotionAssortmentDataById } = useFetchPromotionAssortmentDataById()
    const {createAssortment}=useCreatePromotionAssortmentData()
      const openModal = usePromotionAssortmentManagementStore((state) => state.toggleOpen)
      const setMode = usePromotionAssortmentManagementStore((state) => state.setMode)
    
      function editHandler() {
        openModal();
        setCurrentPromotionMasterId(assortment.assortmentID)
        setMode('Edit');
      }
      function viewHandler() {
        openModal();
        setCurrentPromotionMasterId(assortment.assortmentID)
        setMode('View');
        
      }
      async function deleteHandler() {
        setMode('Delete')
        try {
          const data = await FetchPromotionAssortmentDataById(assortment.assortmentID)
          const newData = {
            ...data,
            usedFor: 'D',
          }
          await createAssortment(newData)
          
        } catch (error: unknown) {
          if (error instanceof Error) {
            throw new Error(error.message)
          }
        }
      }
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild className="">
              <Button variant="ghost" className="h-8 w-8 p-0">
                <span className="sr-only">Open menu</span>
                <MoreHorizontal />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuLabel>Actions</DropdownMenuLabel>
              <DropdownMenuItem onClick={viewHandler}>View</DropdownMenuItem>
        <DropdownMenuItem onClick={editHandler}>Edit</DropdownMenuItem>
        <DropdownMenuItem onClick={deleteHandler}>Delete</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>  
    )
}
export default PromotionAssortTableActions