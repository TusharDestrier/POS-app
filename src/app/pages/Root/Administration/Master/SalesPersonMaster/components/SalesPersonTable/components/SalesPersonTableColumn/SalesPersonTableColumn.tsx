// tableColumns.ts
import { CaretSortIcon, DotsHorizontalIcon } from '@radix-ui/react-icons'
import { ColumnDef } from '@tanstack/react-table'

import useSalesPerson from '../../../../store/useSalesPerson'
import {  ExtendedSalesPersonType, SalesPersonStatus } from '../../data/tableData'

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

export const columns: ColumnDef<ExtendedSalesPersonType>[] = [
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
    accessorKey: 'fullName',
    header: ({ column }) => (
      <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
        Full Name
        <CaretSortIcon className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => <div>{row.getValue('fullName')}</div>,
  },
   {
      accessorKey: 'status',
      header: 'Status',
      cell:  ({ row }) => {
        const status = row.getValue('status') as SalesPersonStatus;
        return (
          <div
            className={`capitalize ${
              status === SalesPersonStatus.ACTIVE ? 'text-green-500' : 'text-red-500'
            }`}
          >
            {status}
          </div>
        );
      },
    },
  {
    accessorKey: 'email',
    header: ({ column }) => (
      <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
        Email
        <CaretSortIcon className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => <div className="lowercase">{row.getValue('email')}</div>,
  },
  {
    accessorKey: 'mobileNo',
    header: 'Phone Number',
    cell: ({ row }) => <div>{row.getValue('mobileNo')}</div>,
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      const salesPerson = row.original

      return <TableRowDropDowns salesPerson={salesPerson} />
    },
  },
]

function TableRowDropDowns({ salesPerson }: { salesPerson: ExtendedSalesPersonType }) {
  const modalToggler = useSalesPerson((state) => state.toggleOpen)
  const setModalMode = useSalesPerson((state) => state.setMode)

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
        <DropdownMenuItem onClick={() => navigator.clipboard.writeText(salesPerson.salesPersonID)}>
          Copy Customer ID
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={EditModalHandler}>Edit Customer</DropdownMenuItem>
        <DropdownMenuItem>View Customer</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
