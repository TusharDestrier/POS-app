// StoreDetailTable.tsx

import { ChevronDownIcon } from '@radix-ui/react-icons'
import {
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  PaginationState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'
import * as React from 'react'

import { useStoreMasterData } from '../../hooks_api/useStoreMasterData'
import useStoreMasterStore from '../../store/useStoreMasterStore'
import StoreMasterModal from '../StoreMasterModal'
import columns from '../StoreMasterTableColumns'

//import { usePettyCashData } from '../../hooks_api/usePettyCashData'

import SkeletonLoaderTable from '@/components/SkeletonLoaderTable'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'

function StoreMasterTable() {
  const { storemasterData, isLoading, error } = useStoreMasterData()
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})
  const [pagination, setPagination] = React.useState<PaginationState>({
    pageIndex: 0,
    pageSize: 5, // Set the page size as desired
  })
const globalLoading=useStoreMasterStore(state=>state.isLoading);
  const modalToggler = useStoreMasterStore((state) => state.toggleOpen)
  const setModalMode = useStoreMasterStore((state) => state.setMode)

  const columnData = React.useMemo(() => {
    const dataArray = Array.isArray(storemasterData)
      ? storemasterData
      : storemasterData
        ? [storemasterData]
        : []

    return dataArray.map((item) => ({
      storeID: String(item.storeID),
      storeName: item.storeName,
      email: item.email,
      isActive: item?.isActive,
      contactNumber: String(item.contactNumber),
    }))
  }, [storemasterData])

  const table = useReactTable({
    data: columnData ?? [],
    columns,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
      pagination,
    },
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onPaginationChange: setPagination, // Add this line
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(), // Ensure this is included
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
  })

  function createModalHandler() {
    modalToggler()
    setModalMode('Create')
  }
  if (isLoading || globalLoading) {
    return <SkeletonLoaderTable />
  }

  if (error) {
    return <h3 className="text-center">{error}</h3>
  }

  return (
    <>
      <div className="w-full">
        <div className="flex items-center py-4">
          <Input
            placeholder="Filter emails..."
            value={(table.getColumn('storeName')?.getFilterValue() as string) ?? ''}
            onChange={(event) => table.getColumn('storeName')?.setFilterValue(event.target.value)}
            className="max-w-sm"
          />
          <ul className="flex items-center gap-3 ms-auto">
            <li>
              <Button onClick={createModalHandler}>Add</Button>
            </li>
            <li>
              <Button variant={'outline'}>Export</Button>
            </li>
            <li>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" className="">
                    Columns <ChevronDownIcon className="ml-2 h-4 w-4" />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  {table
                    .getAllColumns()
                    .filter((column) => column.getCanHide())
                    .map((column) => {
                      return (
                        <DropdownMenuCheckboxItem
                          key={column.id}
                          className="capitalize"
                          checked={column.getIsVisible()}
                          onCheckedChange={(value) => column.toggleVisibility(!!value)}
                        >
                          {column.id}
                        </DropdownMenuCheckboxItem>
                      )
                    })}
                </DropdownMenuContent>
              </DropdownMenu>
            </li>
          </ul>
        </div>
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map((headerGroup) => (
                <TableRow key={headerGroup.id}>
                  {headerGroup.headers.map((header) => {
                    return (
                      <TableHead key={header.id}>
                        {header.isPlaceholder
                          ? null
                          : flexRender(header.column.columnDef.header, header.getContext())}
                      </TableHead>
                    )
                  })}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows?.length ? (
                table.getRowModel().rows.map((row) => (
                  <TableRow key={row.id} data-state={row.getIsSelected() && 'selected'}>
                    {row.getVisibleCells().map((cell) => (
                      <TableCell key={cell.id}>
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </TableCell>
                    ))}
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={columns.length} className="h-24 text-center">
                    No results.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <div className="flex items-center justify-between py-4">
          <div className="flex-1 text-sm text-muted-foreground">
            {table.getFilteredSelectedRowModel().rows.length} of{' '}
            {table.getFilteredRowModel().rows.length} row(s) selected.
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-muted-foreground">
              Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
            </span>
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.previousPage()}
              disabled={!table.getCanPreviousPage()}
            >
              Previous
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => table.nextPage()}
              disabled={!table.getCanNextPage()}
            >
              Next
            </Button>
          </div>
        </div>
      </div>
      <StoreMasterModal />
    </>
  )
}

export default StoreMasterTable
