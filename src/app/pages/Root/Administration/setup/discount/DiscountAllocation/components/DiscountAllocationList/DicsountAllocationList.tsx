import React, { useState } from 'react';

import { useDiscountAllocationList } from './store/useDiscountAllocationList';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

function DicsountAllocationList() {
  const selectedItems = useDiscountAllocationList(state=>state.selectedItems);
  const addItem = useDiscountAllocationList(state=>state.addItem);
  const removeItem = useDiscountAllocationList(state=>state.removeItem);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // Dummy data
  const items = [
    { id: 1, name: 'Assortment 1' },
    { id: 2, name: 'Assortment 2' },
    { id: 3, name: 'Assortment 3' },
    { id: 4, name: 'Assortment 4' },
    { id: 5, name: 'Assortment 5' },
    { id: 6, name: 'Assortment 6' },
    { id: 7, name: 'Assortment 7' },
    { id: 8, name: 'Assortment 8' },
    { id: 9, name: 'Assortment 9' },
    { id: 10, name: 'Assortment 10' },
  ];

  // Filter items based on search term
  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedItems = filteredItems.slice(startIndex, startIndex + itemsPerPage);
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  // Handlers
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
    setCurrentPage(1); // Reset to the first page
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const isSelected = (id: number) => selectedItems.some((item) => item.id === id);

  return (
    <div>
      {/* Search Input */}
      <Input
        type="text"
        placeholder="Search items..."
        value={searchTerm}
        onChange={handleSearch}
        className="mb-4"
      />

      {/* Table */}
      <Table className="w-full">
        <TableHeader>
          <TableRow>
            <TableHead className="w-[50px]">No</TableHead>
            <TableHead>Item</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedItems.map((item, index) => (
            <TableRow key={item.id}>
              <TableCell>{startIndex + index + 1}</TableCell>
              <TableCell>{item.name}</TableCell>
              <TableCell>
                {isSelected(item.id) ? (
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => removeItem(item)}
                  >
                    Unselect
                  </Button>
                ) : (
                  <Button size="sm" onClick={() => addItem(item)}>
                    Select
                  </Button>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Pagination Controls */}
      <div className="flex justify-between items-center mt-4">
        <Button
          size="sm"
          variant="outline"
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Previous
        </Button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <Button
          size="sm"
          variant="outline"
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </Button>
      </div>
    </div>
  );
}

export default DicsountAllocationList;
