
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"

import PromotionAssortTableActions from "../PromotionAssortmentTableActions/PromotionAssortmentTableActions"

import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { FetchedAssortmentPromotionType } from "@/types/assortmentPromotion"


export const columns: ColumnDef<FetchedAssortmentPromotionType>[] = [
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
    {
      id: 'actions',
      enableHiding: false,
      cell: ({ row }) => {
        const assortment = row.original
        return <PromotionAssortTableActions assortment={assortment} />
      },
    },
  ]
   