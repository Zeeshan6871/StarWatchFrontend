import * as React from 'react'
import {
  CaretSortIcon,
  ChevronDownIcon,
  DotsHorizontalIcon,
} from '@radix-ui/react-icons'
import {
  ColumnDef,
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

import { Button } from '@/components/ui/button'
import { Checkbox } from '@/components/ui/checkbox'
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
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

// Updated data structure
const data: Product[] = [
  {
    productName: 'Apple Watch',
    location: '6096 Marjolaine Land',
    dateTime: '12.09.2019 - 12.53 PM',
    piece: 423,
    amount: '$34.94',
    status: 'Delivered',
  },
  {
    productName: 'Samsung Galaxy',
    location: '742 Evergreen Terrace',
    dateTime: '10.10.2020 - 01.45 PM',
    piece: 512,
    amount: '$59.99',
    status: 'Processing',
  },
  {
    productName: 'Google Pixel',
    location: '1234 Elm Street',
    dateTime: '05.15.2021 - 10.30 AM',
    piece: 365,
    amount: '$49.99',
    status: 'Pending',
  },
  {
    productName: 'OnePlus 8',
    location: '5678 Maple Avenue',
    dateTime: '11.22.2021 - 09.15 AM',
    piece: 290,
    amount: '$39.99',
    status: 'Failed',
  },
  {
    productName: 'Sony Xperia',
    location: '9101 Oak Boulevard',
    dateTime: '08.18.2022 - 02.45 PM',
    piece: 410,
    amount: '$29.99',
    status: 'Delivered',
  },
  {
    productName: 'LG G8 ThinQ',
    location: '3456 Pine Lane',
    dateTime: '02.25.2020 - 11.20 AM',
    piece: 470,
    amount: '$44.99',
    status: 'Processing',
  },
  {
    productName: 'Motorola Edge',
    location: '7890 Cedar Road',
    dateTime: '04.30.2019 - 01.05 PM',
    piece: 350,
    amount: '$54.99',
    status: 'Pending',
  },
  {
    productName: 'Huawei P30',
    location: '9876 Birch Street',
    dateTime: '09.10.2020 - 03.25 PM',
    piece: 285,
    amount: '$64.99',
    status: 'Delivered',
  },
  {
    productName: 'Nokia 9 PureView',
    location: '1234 Spruce Avenue',
    dateTime: '01.14.2019 - 12.00 PM',
    piece: 395,
    amount: '$24.99',
    status: 'Failed',
  },
  {
    productName: 'HTC U12+',
    location: '5678 Fir Circle',
    dateTime: '06.22.2021 - 08.40 AM',
    piece: 325,
    amount: '$74.99',
    status: 'Delivered',
  },
  {
    productName: 'Asus ROG Phone',
    location: '9101 Redwood Drive',
    dateTime: '03.12.2020 - 07.15 PM',
    piece: 300,
    amount: '$84.99',
    status: 'Processing',
  },
  {
    productName: 'Xiaomi Mi 9',
    location: '3456 Sequoia Road',
    dateTime: '07.20.2019 - 06.25 PM',
    piece: 455,
    amount: '$94.99',
    status: 'Pending',
  },
  {
    productName: 'Oppo Reno 10x',
    location: '7890 Alder Street',
    dateTime: '10.05.2020 - 05.45 PM',
    piece: 380,
    amount: '$104.99',
    status: 'Delivered',
  },
  {
    productName: 'Realme X2 Pro',
    location: '9876 Poplar Avenue',
    dateTime: '12.16.2018 - 04.30 PM',
    piece: 420,
    amount: '$114.99',
    status: 'Failed',
  },
  {
    productName: 'Vivo Nex 3',
    location: '1234 Willow Lane',
    dateTime: '11.28.2021 - 01.50 PM',
    piece: 265,
    amount: '$124.99',
    status: 'Delivered',
  },
  {
    productName: 'ZTE Axon 10 Pro',
    location: '5678 Magnolia Road',
    dateTime: '04.08.2019 - 02.20 PM',
    piece: 435,
    amount: '$134.99',
    status: 'Processing',
  },
  {
    productName: 'Meizu 16s Pro',
    location: '9101 Cypress Street',
    dateTime: '05.18.2020 - 10.55 AM',
    piece: 395,
    amount: '$144.99',
    status: 'Pending',
  },
  {
    productName: 'Lenovo Z6 Pro',
    location: '3456 Ash Avenue',
    dateTime: '07.22.2021 - 09.35 AM',
    piece: 280,
    amount: '$154.99',
    status: 'Delivered',
  },
  {
    productName: 'Microsoft Surface Duo',
    location: '7890 Juniper Circle',
    dateTime: '08.15.2022 - 11.10 AM',
    piece: 445,
    amount: '$164.99',
    status: 'Failed',
  },
  {
    productName: 'Redmi K20 Pro',
    location: '9876 Palm Drive',
    dateTime: '09.27.2020 - 12.40 PM',
    piece: 370,
    amount: '$174.99',
    status: 'Delivered',
  },
  {
    productName: 'Honor View 20',
    location: '1234 Bamboo Street',
    dateTime: '01.19.2021 - 03.10 PM',
    piece: 430,
    amount: '$184.99',
    status: 'Processing',
  },
  {
    productName: 'Razer Phone 2',
    location: '5678 Cedar Boulevard',
    dateTime: '02.05.2020 - 01.55 PM',
    piece: 310,
    amount: '$194.99',
    status: 'Pending',
  },
  {
    productName: 'BlackBerry Key2',
    location: '9101 Vine Lane',
    dateTime: '06.14.2019 - 05.20 PM',
    piece: 385,
    amount: '$204.99',
    status: 'Delivered',
  },
  {
    productName: 'Palm Phone',
    location: '3456 Elm Court',
    dateTime: '03.22.2020 - 11.45 AM',
    piece: 450,
    amount: '$214.99',
    status: 'Failed',
  },
  {
    productName: 'Essential Phone',
    location: '7890 Pine Place',
    dateTime: '05.30.2018 - 02.35 PM',
    piece: 360,
    amount: '$224.99',
    status: 'Delivered',
  },
  {
    productName: 'Fairphone 3',
    location: '9876 Fir Road',
    dateTime: '09.11.2020 - 09.50 AM',
    piece: 400,
    amount: '$234.99',
    status: 'Processing',
  },
  {
    productName: 'CAT S61',
    location: '1234 Cedar Boulevard',
    dateTime: '12.01.2019 - 08.15 AM',
    piece: 325,
    amount: '$244.99',
    status: 'Pending',
  },
  {
    productName: 'Ulefone Armor 7',
    location: '5678 Redwood Avenue',
    dateTime: '11.09.2021 - 04.10 PM',
    piece: 415,
    amount: '$254.99',
    status: 'Delivered',
  },
  {
    productName: 'BLU G9 Pro',
    location: '9101 Maple Street',
    dateTime: '10.18.2019 - 07.25 PM',
    piece: 340,
    amount: '$264.99',
    status: 'Failed',
  },
  {
    productName: 'Alcatel 3X',
    location: '3456 Poplar Circle',
    dateTime: '08.24.2020 - 06.05 PM',
    piece: 375,
    amount: '$274.99',
    status: 'Delivered',
  },
]

export type Product = {
  productName: string
  location: string
  dateTime: string
  piece: number
  amount: string
  status: 'Pending' | 'Processing' | 'Delivered' | 'Failed'
}

// Updated columns
export const columns: ColumnDef<Product>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label='Select all'
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label='Select row'
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: 'productName',
    header: 'Product Name',
    cell: ({ row }) => (
      <div className='flex capitalize'>
        <img src='/images/image.png' alt='product' className='mr-3 h-5 w-5' />
        {row.getValue('productName')}
      </div>
    ),
  },
  {
    accessorKey: 'location',
    header: 'Location',
    cell: ({ row }) => (
      <div className='capitalize'>{row.getValue('location')}</div>
    ),
  },
  {
    accessorKey: 'dateTime',
    header: 'Date-Time',
    cell: ({ row }) => (
      <div className='text-center'>{row.getValue('dateTime')}</div>
    ),
  },
  {
    accessorKey: 'piece',
    header: 'Piece',
    cell: ({ row }) => (
      <div className='text-right font-medium'>{row.getValue('piece')}</div>
    ),
  },
  {
    accessorKey: 'amount',
    header: 'Amount',
    cell: ({ row }) => (
      <div className='text-right'>{row.getValue('amount')}</div>
    ),
  },
  {
    accessorKey: 'status',
    header: 'Status',
    cell: ({ row }) => (
      <div className='capitalize'>{row.getValue('status')}</div>
    ),
  },
  {
    header: 'Action',
    id: 'actions',
    enableHiding: false,
    cell: ({ row }) => {
      const product = row.original

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='ghost' className='h-8 w-8 p-0'>
              <span className='sr-only'>Open menu</span>
              <DotsHorizontalIcon className='h-4 w-4' />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(product.productName)}
            >
              Copy product name
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View product</DropdownMenuItem>
            <DropdownMenuItem>View product details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )
    },
  },
]

export function DataTableDemo() {
  const [sorting, setSorting] = React.useState<SortingState>([])
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    []
  )
  const [columnVisibility, setColumnVisibility] =
    React.useState<VisibilityState>({})
  const [rowSelection, setRowSelection] = React.useState({})

  const table = useReactTable({
    data,
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

  return (
    <div className='w-full'>
      <div className='flex items-center py-4'>
        <Input
          placeholder='Filter product...'
          value={
            (table.getColumn('productName')?.getFilterValue() as string) ?? ''
          }
          onChange={(event) =>
            table.getColumn('productName')?.setFilterValue(event.target.value)
          }
          className='max-w-sm'
        />
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant='outline' className='ml-auto'>
              Columns <ChevronDownIcon className='ml-2 h-4 w-4' />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end'>
            {table
              .getAllColumns()
              .filter((column) => column.getCanHide())
              .map((column) => {
                return (
                  <DropdownMenuCheckboxItem
                    key={column.id}
                    className='capitalize'
                    checked={column.getIsVisible()}
                    onCheckedChange={(value) =>
                      column.toggleVisibility(!!value)
                    }
                  >
                    {column.id}
                  </DropdownMenuCheckboxItem>
                )
              })}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className='overflow-x-auto rounded-md border'>
        <Table className='min-w-full'>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  )
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className='h-24 text-center'
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className='flex flex-col items-center justify-end space-x-2 py-4 sm:flex-row'>
        <div className='flex-1 text-sm text-muted-foreground'>
          {table.getFilteredSelectedRowModel().rows.length} of{' '}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className='space-x-2'>
          <Button
            variant='outline'
            size='sm'
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant='outline'
            size='sm'
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  )
}
