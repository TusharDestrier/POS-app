import { MoreHorizontal } from 'lucide-react'

import { useCreateDiscountAssortment } from '../../../../hooks_api/useCreateDiscountAssortmentData'
import { useFetchDiscountAssortmentDataById } from '../../../../hooks_api/useDiscountAssortmentDataById'
import { useDiscountMasterDataStore } from '../../../../store/useDiscountAssortmentManagementDataStore'
import { useDiscountAssortmentManagementStore } from '../../../../store/useDiscountAssortmentManagementStore'

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


function DiscountAssortmentManagementTableColumnActions({
  assortment,
}: {
  assortment: FetchedAssortmentType
}) {
  const {setCurrentDiscountMasterId}=useDiscountMasterDataStore();
  const { fetchDiscountAssortmentDataById } = useFetchDiscountAssortmentDataById()
const {createAssortment}=useCreateDiscountAssortment()
  const openModal = useDiscountAssortmentManagementStore((state) => state.toggleOpen)
  const setMode = useDiscountAssortmentManagementStore((state) => state.setMode)

  function editHandler() {
    openModal();
    setCurrentDiscountMasterId(assortment.assortmentID)
    setMode('Edit');
  }
  function viewHandler() {
    openModal();
    setCurrentDiscountMasterId(assortment.assortmentID)
    setMode('View');
    
  }
  async function deleteHandler() {
    setMode('Delete')
    try {
      const data = await fetchDiscountAssortmentDataById(assortment.assortmentID)
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

export default DiscountAssortmentManagementTableColumnActions
