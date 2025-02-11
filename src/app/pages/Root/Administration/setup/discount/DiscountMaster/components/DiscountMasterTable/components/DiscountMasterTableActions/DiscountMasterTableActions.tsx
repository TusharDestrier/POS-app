import { MoreHorizontal } from 'lucide-react'



import { useCreateDiscountMaster } from '../../../../hooks_api/useCreateDiscountMasterData'
import { useFetchDiscountMasterById } from '../../../../hooks_api/useDiscountMasterDataById'
import useDiscountMasterStore from '../../../../store/useDiscountMasterStore'
import { useDiscountMasterStoreData } from '../../../../store/useDiscountMasterStoreData'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { FetchedAssortmentType } from '@/types/assortment'


function DiscountMasterTableActions({
  assortment,
}: {
  assortment: FetchedAssortmentType
}) {
  const {setCurrentDiscountSetuprId}=useDiscountMasterStoreData();
  const { fetchDiscountMasterById } = useFetchDiscountMasterById()
const {createDiscountMaster}=useCreateDiscountMaster()
  const openModal = useDiscountMasterStore((state) => state.toggleOpen)
  const setMode = useDiscountMasterStore((state) => state.setMode)

  function editHandler() {
    openModal();
    setCurrentDiscountSetuprId(assortment.assortmentID)
    setMode('Edit');
  }
  function viewHandler() {
    openModal();
    setCurrentDiscountSetuprId(assortment.assortmentID)
    setMode('View');
    
  }
  async function deleteHandler() {
    setMode('Delete')
    try {
      const data = await fetchDiscountMasterById(assortment.assortmentID)
      const newData = {
        ...data,
        usedFor: 'D',
      }
      await createDiscountMaster(newData)
      
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(error.message)
      }
    }
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <MoreHorizontal />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuItem
          onClick={() => navigator.clipboard.writeText(String(assortment.assortmentID))}
        >
          Assortment Id
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={viewHandler}>View</DropdownMenuItem>
        <DropdownMenuItem onClick={editHandler}>Edit</DropdownMenuItem>
        <DropdownMenuItem onClick={deleteHandler}>Delete</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default DiscountMasterTableActions
