
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown, MoreHorizontal } from "lucide-react"


import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { FetchedAssortmentIncentiveType } from "@/types/assortmentIncentive"

export const columns: ColumnDef<FetchedAssortmentIncentiveType>[] = [
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
      header: "Assortment Id",
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
      accessorKey: "assortmentType",
      header: () => <div className="text-center">Assortment Type</div>,
      cell: ({ row }) => {
          return <div className="text-center font-medium">{row.getValue("assortmentType")}</div>
      },
    },
    // {
    //   accessorKey: "creationDate",
    //   header: () => <div className="text-center">Creation Date</div>,
    //   cell: ({ row }) => {
       
    //     return <div className="text-center font-medium">{row.getValue("creationDate")}</div>
    //   },
    // },
    // {
    //   accessorKey: "salesGenerated",
    //   header: () => <div className="text-center">Sales Generated</div>,
    //   cell: ({ row }) => {
   
    //     return <div className="text-center font-medium">{row.getValue("salesGenerated")}</div>
    //   },
    // },
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
              <DropdownMenuItem>Edit Assortment</DropdownMenuItem>
              <DropdownMenuItem>View Assortment</DropdownMenuItem>
              <DropdownMenuSeparator/>
              <DropdownMenuItem>Delete Assortment</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        )
      },
    },
  ]
   