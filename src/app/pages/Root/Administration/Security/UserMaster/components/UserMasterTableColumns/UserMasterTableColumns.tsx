

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"



export type Payment = {
    id: string
    useName: string
    createdOn: string
    role: string
    active: string
    status: 'pending' | 'processing' | 'success' | 'failed'
  }
  
  export const columns: ColumnDef<Payment>[] = [
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
      accessorKey: 'useName',
      header: 'User Name',
      cell: ({ row }) => <div className="capitalize">{row.getValue('useName')}</div>,
    },
    {
      accessorKey: 'createdOn',
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            Created On
            <ArrowUpDown className="ms-1" size={18} />
          </Button>
        )
      },
      cell: ({ row }) => <div className="lowercase">{row.getValue('createdOn')}</div>,
    },
    {
      accessorKey: 'role',
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
          >
            Role
            <ArrowUpDown className="ms-1" size={18} />
          </Button>
        )
      },
      cell: ({ row }) => <div className="lowercase">{row.getValue('role')}</div>,
    },
    {
      accessorKey: 'active',
      header: 'Active',
      cell: ({ row }) => <div className="capitalize">{row.getValue('active')}</div>,
    },
    {
      id: 'actions',
      enableHiding: false,
      cell: ({ row }) => {
        const payment = row.original
  
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
              <DropdownMenuItem onClick={() => navigator.clipboard.writeText(payment.id)}>
                Copy User Master ID
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>View User Master</DropdownMenuItem>
              <DropdownMenuItem>Delete User Master details</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )
      },
    },
  ]