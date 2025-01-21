// tableColumns.ts   PettyCashHead
import { CaretSortIcon, DotsHorizontalIcon } from '@radix-ui/react-icons'
import { ColumnDef } from '@tanstack/react-table'



import usePettyCashHead from '../../../../store/usePettyCashHead'
import { ExtendedPettyCashType, PettyCashStatus } from '../../data/tableData'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
// import StoreDetailModalBtn from '../../StoreDetailModal'

// import StoreDetailForm from '../../StoreDetailForm'
// import useStoreDetail from '../../../store/useStoreDetail'

export const columns: ColumnDef<ExtendedPettyCashType>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() || (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'pettyCashCode',
    header: ({ column }) => (
      <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
        PettyCash Code
        <CaretSortIcon className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => <div>{row.getValue('pettyCashCode')}</div>,
  },
  {
      accessorKey: 'status',
      header: 'Status',
      cell:  ({ row }) => {
        const status = row.getValue('status') as PettyCashStatus;
        return (
          <div
            className={`capitalize ${
              status === PettyCashStatus.ACTIVE ? 'text-green-500' : 'text-red-500'
            }`}
          >
            {status}
          </div>
        );
      },
    },
  {
    accessorKey: 'pettyCashName',
    header: ({ column }) => (
      <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
        PettyCash Name
        <CaretSortIcon className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => <div className="lowercase">{row.getValue('pettyCashName')}</div>,
  },
  {
    accessorKey: 'modeOfOperation',
    header: 'Modeof Operation',
    cell: ({ row }) => <div>{row.getValue('modeOfOperation')}</div>,
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      const PettyCashHead = row.original

      return <TableRowDropDowns PettyCashHead={PettyCashHead} />
    },
  },
]

function TableRowDropDowns({ PettyCashHead }: { PettyCashHead: ExtendedPettyCashType }) {
  const modalToggler = usePettyCashHead((state) => state.toggleOpen)
  const setModalMode = usePettyCashHead((state) => state.setMode)

  function EditModalHandler() {
    modalToggler()
    setModalMode('Edit')
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="h-8 w-8 p-0">
          <span className="sr-only">Open menu</span>
          <DotsHorizontalIcon className="h-4 w-4" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>Actions</DropdownMenuLabel>
        <DropdownMenuItem onClick={() => navigator.clipboard.writeText(String(PettyCashHead.pettyCashID))}>
          Copy Customer ID
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={EditModalHandler}>Edit Customer</DropdownMenuItem>
        <DropdownMenuItem>View Customer</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
