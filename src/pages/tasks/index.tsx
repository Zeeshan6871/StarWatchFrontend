import { Layout } from '@/components/custom/layout'
import { Search } from '@/components/search'
import ThemeSwitch from '@/components/theme-switch'
import { UserNav } from '@/components/user-nav'
import { CarouselFull } from './components/CrousalFull'
import { ProductCarousal } from './components/Productcard'
// import { DataTable } from './components/data-table'
// import { tasks } from './data/tasks'
// import { columns } from './components/columns'

export default function Tasks() {
  return (
    <Layout>
      {/* ===== Top Heading ===== */}
      <Layout.Header sticky>
        <Search />
        <div className='ml-auto flex items-center space-x-4'>
          <ThemeSwitch />
          <UserNav />
        </div>
      </Layout.Header>

      <Layout.Body>
        <div className='mb-2 flex items-center justify-between space-y-2'>
          <h1 className='mb-3 text-2xl font-bold tracking-tight'>Product</h1>
        </div>
        <CarouselFull />
        <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
          <ProductCarousal />
          <ProductCarousal />
          <ProductCarousal />
        </div>
        {/* <div className='-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0'>
          <DataTable data={tasks} columns={columns} />
        </div> */}
      </Layout.Body>
    </Layout>
  )
}
