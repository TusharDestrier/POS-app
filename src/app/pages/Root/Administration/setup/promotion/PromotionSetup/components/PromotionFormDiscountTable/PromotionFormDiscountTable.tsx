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

  
   


function PromotionFormDiscountTable() {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]"><input type="radio" name="" id="" /></TableHead>
          <TableHead>X</TableHead>
          <TableCell>% of Discount on</TableCell>
          <TableCell><span>+</span></TableCell>
            <TableCell>Where</TableCell>
            <TableCell><span>+</span></TableCell>
        </TableRow>
      </TableHeader>
      <TableBody>
      <TableRow >
            <TableCell className="font-medium"><input type="radio" name="" id="" /></TableCell>
            <TableCell>X</TableCell>
            <TableCell>Rs of Discount on</TableCell>
            <TableCell><span>+</span></TableCell>
            <TableCell>Where</TableCell>
            <TableCell><span>+</span></TableCell>
          </TableRow>
      </TableBody>
      <TableFooter >
        <TableRow>
          <TableCell colSpan={4}></TableCell>
          <TableCell className="text-right">
            <Button className="mt-2">Add row</Button>
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  )
}

export default PromotionFormDiscountTable