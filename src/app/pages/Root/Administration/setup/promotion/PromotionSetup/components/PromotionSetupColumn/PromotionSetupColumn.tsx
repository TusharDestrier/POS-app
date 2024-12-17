// tableColumns.ts
import { CaretSortIcon, DotsHorizontalIcon } from '@radix-ui/react-icons'
import { ColumnDef } from '@tanstack/react-table'

import { Customer } from '../../data/data'
import { usePromotionSetupStore } from '../../store/usePromotionSetupStore'

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

export const columns: ColumnDef<Customer>[] = [
  {
    id: 'select',
    accessorKey: 'PromotionName',
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
    accessorKey: 'PromotionName',
    header: ({ column }) => (
      <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
        Promotion Name
        <CaretSortIcon className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => <div>{row.getValue('PromotionName')}</div>,
  },
  {
    accessorKey: 'CreatedOn',
    header: ({ column }) => (
      <Button variant="ghost" onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}>
        Created On
        <CaretSortIcon className="ml-2 h-4 w-4" />
      </Button>
    ),
    cell: ({ row }) => <div className="lowercase">{row.getValue('CreatedOn')}</div>,
  },
  {
    accessorKey: 'Priority',
    header: 'Priority',
    cell: ({ row }) => <div>{row.getValue('Priority')}</div>,
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => <div className="capitalize">{row.getValue('status')}</div>,
  },
  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      const customer = row.original

      return <TableRowDropDowns customer={customer} />
    },
  },
]

function TableRowDropDowns({ customer }: { customer: Customer }) {
  const modalToggler = usePromotionSetupStore((state) => state.toggleOpen)
  const setModalMode = usePromotionSetupStore((state) => state.setMode)

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
        <DropdownMenuItem onClick={() => navigator.clipboard.writeText(customer.id)}>
          Copy Customer ID
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={EditModalHandler}>Edit Customer</DropdownMenuItem>
        <DropdownMenuItem>View Customer</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
