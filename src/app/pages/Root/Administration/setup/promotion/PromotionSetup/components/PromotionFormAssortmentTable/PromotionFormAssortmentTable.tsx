import { Button } from "@/components/ui/button"
import {
    Table,
    TableBody,
    TableCell,
    TableFooter,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
import { Delete, Eye, Plus, Trash } from "lucide-react"

  const invoices = [
    {
      id: "INV001",
      AssortmentName: "Assortment 1",
      showItem: "",
      addItem: "Credit Card",
    },
    {
      id: "INV002",
      AssortmentName: "Assortment 2",
      showItem: "",
      addItem: "PayPal",
    },
   
  ]
   


function PromotionFormAssortmentTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Delete</TableHead>
          <TableHead>Assortment Name</TableHead>
          <TableHead>Show Item</TableHead>
          <TableHead className="text-right">Add Item</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {invoices.map((invoice) => (
          <TableRow key={invoice.id}>
            <TableCell className="font-medium"><Button size={'icon'}><Trash size={16}/></Button></TableCell>
            <TableCell>{invoice.AssortmentName}</TableCell>
            <TableCell><Button size={'icon'}><Eye size={16}/></Button></TableCell>
            <TableCell className="text-right"><Button size={'icon'}><Plus size={'15'}/></Button></TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter >
        <TableRow>
          <TableCell colSpan={3}></TableCell>
          <TableCell className="text-right">
            <Button className="mt-2">Add row</Button>
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}

export default PromotionFormAssortmentTable