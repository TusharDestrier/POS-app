import { useState } from "react";

import { useDiscountListStore } from "../DiscountMasterAssortmentListTable/store/useDiscountListStore";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const allAssortments = [
  { id: "1", name: "Assortment 1" },
  { id: "2", name: "Assortment 2" },
  { id: "3", name: "Assortment 3" },
  { id: "4", name: "Assortment 4" },
  { id: "5", name: "Assortment 5" },
];

function DiscountMasterAssortmentList() {
  const [searchQuery, setSearchQuery] = useState("");
  const addSelectedAssortment = useDiscountListStore((state) => state.addSelectedAssortment);
  const closeModal = useDiscountListStore((state) => state.closeModal);

  const filteredAssortments = allAssortments.filter((item) =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAdd = (assortment: {
    id: string;
    name: string;
}) => {
    addSelectedAssortment(assortment);
    closeModal();
  };

  return (
    <div className="space-y-4">
      <Input
        placeholder="Search Assortments"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="mb-4"
      />

      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>ID</TableHead>
              <TableHead>Assortment Name</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredAssortments.length > 0 ? (
              filteredAssortments.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>{item.id}</TableCell>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>
                    <Button
                      type="button"
                      onClick={() => handleAdd(item)}
                      variant="outline"
                    >
                      Add
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={3} className="text-center">
                  No assortments found.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default DiscountMasterAssortmentList;
