import { MoreHorizontal } from 'lucide-react'

import { useIncentiveCreateAssortmentData } from '../../../../hooks_api/useIncentiveCreateAssortmentData'
import { useFetchIntentiveAssortmentDataById } from '../../../../hooks_api/useIntentiveAssortmentDataById'
import { useIncentiveAssortmentManagementDataStore } from '../../../../store/useIncentiveAssortmentManagementDataStore'
import { useIncentiveAssortmentManagementStore } from '../../../../store/useIncentiveAssortmentManagementStore'

import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  //DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { FetchedAssortmentIncentiveType } from '@/types/assortmentIncentive'

function IncentiveAssortmentTableActions({
  assortment,
}: {
  assortment: FetchedAssortmentIncentiveType
}) {
  const { setCurrentIntentiveMasterId } = useIncentiveAssortmentManagementDataStore()
  const { FetchIntentiveAssortmentDataById } = useFetchIntentiveAssortmentDataById()
  const { createAssortment } = useIncentiveCreateAssortmentData()
  const openModal = useIncentiveAssortmentManagementStore((state) => state.toggleOpen)
  const setMode = useIncentiveAssortmentManagementStore((state) => state.setMode)

  function editHandler() {
    openModal()
    setCurrentIntentiveMasterId(assortment.assortmentID)
    setMode('Edit')
  }
  function viewHandler() {
    openModal()
    setCurrentIntentiveMasterId(assortment.assortmentID)
    setMode('View')
  }
  async function deleteHandler() {
    setMode('Delete')
    try {
      const data = await FetchIntentiveAssortmentDataById(assortment.assortmentID)
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
export default IncentiveAssortmentTableActions
