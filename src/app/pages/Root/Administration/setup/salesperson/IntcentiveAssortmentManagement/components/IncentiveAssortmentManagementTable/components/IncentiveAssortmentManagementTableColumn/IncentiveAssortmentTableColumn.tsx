
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"


import IncentiveAssortmentTableActions from "../IncentiveAssortmentTableActions"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
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
      id: 'actions',
      enableHiding: false,
      cell: ({ row }) => {
        const assortment = row.original
        return <IncentiveAssortmentTableActions assortment={assortment} />
      },
    },
  ]
   