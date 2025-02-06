import { ColumnDef } from '@tanstack/react-table'
import { ArrowUpDown } from 'lucide-react'

import DiscountAssortmentManagementTableColumnActions from '../DiscountAssortmentManagementTableActions'

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import { FetchedAssortmentType } from '@/types/assortment'

export const columns: ColumnDef<FetchedAssortmentType>[] = [
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
    accessorKey: 'assortmentID',
    header: 'Assortment ID',
    cell: ({ row }) => <div className="capitalize">{row.getValue('assortmentID')}</div>,
  },
  {
    accessorKey: 'assortmentName',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Assortment Name
          <ArrowUpDown className="ml-1" size={18} />
        </Button>
      )
    },
    cell: ({ row }) => <div className="capitalize ml-4">{row.getValue('assortmentName')}</div>,
  },
  {
    accessorKey: 'assortmentType',
    header: 'Assortment Type',
    cell: ({ row }) => <div className="capitalize">{row.getValue('assortmentType')}</div>,
  },

  {
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      const assortment = row.original
      return <DiscountAssortmentManagementTableColumnActions assortment={assortment} />
    },
  },
]
