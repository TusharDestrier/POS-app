
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"

import { AssortmentType } from "../../data/tableData"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export const columns: ColumnDef<AssortmentType>[] = [
    {
      id: "select",
      header: ({ table }) => (
        <Checkbox
          checked={
            table.getIsAllPageRowsSelected() ||
            (table.getIsSomePageRowsSelected() && "indeterminate")
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
      accessorKey: "assortmentID",
      header: "Assortment ID",
      cell: ({ row }) => (
        <div className="capitalize">{row.getValue("assortmentID")}</div>
      ),
    },
    {
      accessorKey: "assortmentName",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            className="mx-auto flex "
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Assortment Name
            <ArrowUpDown size={16} className="ml-1" />
          </Button>
        )
      },
      cell: ({ row }) => <div className="lowercase text-center">{row.getValue("assortmentName")}</div>,
    },
    {
      accessorKey: "description",
      header: () => <div className="text-center">Description</div>,
      cell: ({ row }) => {
          return <div className="text-center font-medium">{row.getValue("description")}</div>
      },
    },
    {
      id: "actions",
      header:() => <div className="text-left">Actions</div>,
      enableHiding: false,
      cell: () => {
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
              <DropdownMenuItem>Edit SalesPerson</DropdownMenuItem>
              <DropdownMenuItem>View SalesPerson</DropdownMenuItem>
              <DropdownMenuSeparator/>
              <DropdownMenuItem>Delete SalesPerson</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )
      },
    },
  ]
   