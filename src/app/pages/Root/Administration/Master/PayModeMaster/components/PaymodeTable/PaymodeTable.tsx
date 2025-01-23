import {
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table'
import { ChevronDown } from 'lucide-react'
import * as React from 'react'

import { usePaymodeMasterData } from '../../hooks_api/usePaymodeMasterData'
import { usePaymodeMaster } from '../../store/usePaymodeMaster'
import PaymodeModal from '../PaymodeModal/PaymodeModal'
import columns from './components/PaymodeColumn'
import { usePaymodeMasterDataStore } from '../../store/usePaymentMethodStore'

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


export type PaymodeTableType = {
  paymentModeID: number | string
  shortCode: string
  isActive: 'Y' | 'N'
  availablePaymentmethod: string
}

function PaymodeTable() {
  const { paymodeMasterData, isLoading, error } = usePaymodeMasterData()
  const openModal = usePaymodeMaster((state) => state.toggleOpen)
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([])
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})
  const clearID = usePaymodeMasterDataStore((state) => state.clearCurrentPaymodeMasterId)
  const setMode=usePaymodeMaster((state)=>state.setMode)
  const table = useReactTable({
    data: paymodeMasterData || [],
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  })

  if (isLoading) {
    return <SkeletonLoaderTable />
  }

  if (error) {
    return <div>{error}</div>
  }

  function handleOpenModal() {
    openModal()
    setMode('Create')
    clearID()
  }

  
  return (
    <div className="w-full">
      <div className="flex items-center py-4 justify-between">
        <Input
          placeholder="Filter PaymentModeName..."
          value={(table.getColumn('paymentModeName')?.getFilterValue() as string) ?? ''}
          onChange={(event) =>
            table.getColumn('paymentModeName')?.setFilterValue(event.target.value)
          }
          className="max-w-sm"
        />
        <ul className="inline-flex items-center space-x-2 ">
          <li>
            <Button onClick={handleOpenModal}>Add</Button>
          </li>
          <li>
            <Button variant={'outline'}>Export</Button>
          </li>
          <li>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="ml-auto">
                  Columns <ChevronDown />
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
      <div className="flex items-center justify-end space-x-2 py-4">
        <div className="flex-1 text-sm text-muted-foreground">
          {table.getFilteredSelectedRowModel().rows.length} of{' '}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className="space-x-2">
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
      <PaymodeModal />
    </div>
  )
}

export default PaymodeTable
