
import { useDiscountSelectionListStore } from "./store/useDiscountSelectionList";

import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

function DiscountStoreSelectionList() {
  const selectedStores = useDiscountSelectionListStore(
    (state) => state.selectedStores
  );
  const addStore = useDiscountSelectionListStore((state) => state.addStore);
  const removeStore = useDiscountSelectionListStore((state) => state.removeStore);

  const stores = [
    { id: 1, name: "Store A" },
    { id: 2, name: "Store B" },
    { id: 3, name: "Store C" },
    // Add more stores
  ];

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>No</TableHead>
          <TableHead>Store Name</TableHead>
          <TableHead>Action</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {stores.map((store, index) => (
          <TableRow key={store.id}>
            <TableCell>{index + 1}</TableCell>
            <TableCell>{store.name}</TableCell>
            <TableCell>
              <Button
                variant={
                  selectedStores.some((s) => s.id === store.id)
                    ? "destructive"
                    : "outline"
                }
                onClick={() =>
                  selectedStores.some((s) => s.id === store.id)
                    ? removeStore(store.id)
                    : addStore(store)
                }
              >
                {selectedStores.some((s) => s.id === store.id)
                  ? "Unselect"
                  : "Select"}
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}


export default DiscountStoreSelectionList;
