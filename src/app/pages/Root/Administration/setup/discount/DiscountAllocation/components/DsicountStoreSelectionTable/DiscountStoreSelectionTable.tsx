
import { useDiscountAllocationStore } from "../../store/useDiscountAllocationStore";
import { useDiscountSelectionListStore } from "../DiscountStoreSelectionList/store/useDiscountSelectionList";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";


function DiscountStoreSelectionTable() {

  const openModal=useDiscountAllocationStore(state=>state.toggleOpen2);
  const selectedStores = useDiscountSelectionListStore(
    (state) => state.selectedStores
  );
  const updateStore = useDiscountSelectionListStore((state) => state.updateStore);
  const removeStore = useDiscountSelectionListStore((state) => state.removeStore);

  
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>No</TableHead>
          <TableHead>Store</TableHead>
          <TableHead>From Date</TableHead>
          <TableHead>To Date</TableHead>
          <TableHead>Deallocate</TableHead>
          <TableHead>Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {selectedStores.map((store, index) => (
          <TableRow key={store.id}>
            <TableCell>{index + 1}</TableCell>
            <TableCell>{store.name}</TableCell>
            <TableCell>
              <input
                type="date"
                value={store.fromDate}
                onChange={(e) =>
                  updateStore(store.id, "fromDate", e.target.value)
                }
              />
            </TableCell>
            <TableCell>
              <input
                type="date"
                value={store.toDate}
                onChange={(e) => updateStore(store.id, "toDate", e.target.value)}
              />
            </TableCell>
            <TableCell>
              <input
                type="checkbox"
                checked={!store.isAllocated}
                onChange={() =>
                  updateStore(store.id, "isAllocated", !store.isAllocated)
                }
              />
            </TableCell>
            <TableCell>
            <Button
                size="sm"
                variant="destructive"
                onClick={() => removeStore(store.id)}
              >
                Remove
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={6}>
            <Button onClick={openModal}>Add Store</Button>
          </TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}


export default DiscountStoreSelectionTable;
