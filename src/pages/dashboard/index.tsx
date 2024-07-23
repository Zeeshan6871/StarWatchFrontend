import { Layout } from '@/components/custom/layout'
import { Search } from '@/components/search'
import ThemeSwitch from '@/components/theme-switch'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { UserNav } from '@/components/user-nav'
import { Component } from './components/chart'
import { DataTableDemo } from './components/demotable'
import { FeaturedProduct } from './components/featuredProduct'
import { RevenueChart } from './components/revenueChart'
import { SalesAnalytics } from './components/salesAnalytics'

export default function Dashboard() {
  return (
    <Layout>
      {/* ===== Top Heading ===== */}
      <Layout.Header>
        {/* <TopNav links={topNav} /> */}
        <Search />
        <div className='ml-auto flex items-center space-x-4'>
          <ThemeSwitch />
          <UserNav />
        </div>
      </Layout.Header>

      {/* ===== Main ===== */}
      <Layout.Body>
        <div className='mb-2 flex items-center justify-between space-y-2'>
          <h1 className='mb-3 text-2xl font-bold tracking-tight'>Dashboard</h1>
        </div>
        <Tabs
          orientation='vertical'
          defaultValue='overview'
          className='space-y-4'
        >
          <div className='w-full overflow-x-auto pb-2'>
            <TabsList>
              <TabsTrigger value='overview'>Overview</TabsTrigger>
              <TabsTrigger value='analytics'>Analytics</TabsTrigger>
              <TabsTrigger value='reports'>Reports</TabsTrigger>
              <TabsTrigger value='notifications'>Notifications</TabsTrigger>
            </TabsList>
          </div>
          <TabsContent value='overview' className='space-y-4'>
            <div className='grid gap-4 sm:grid-cols-2 lg:grid-cols-4'>
              <Card>
                <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                  <CardTitle className='text-sm font-medium'>
                    <div className='mb-4'>Total User</div>
                    <div className='text-2xl font-bold'>40,689</div>
                  </CardTitle>
                  <svg
                    width='60'
                    height='60'
                    viewBox='0 0 60 60'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      opacity='0.21'
                      fill-rule='evenodd'
                      clip-rule='evenodd'
                      d='M0 30V37C0 49.7025 10.2975 60 23 60H30H37C49.7025 60 60 49.7025 60 37V30V23C60 10.2975 49.7025 0 37 0H30H23C10.2975 0 0 10.2975 0 23V30Z'
                      fill='#8280FF'
                    />
                    <path
                      opacity='0.587821'
                      fill-rule='evenodd'
                      clip-rule='evenodd'
                      d='M20.6667 23.3333C20.6667 26.2789 23.0546 28.6667 26.0001 28.6667C28.9456 28.6667 31.3334 26.2789 31.3334 23.3333C31.3334 20.3878 28.9456 18 26.0001 18C23.0546 18 20.6667 20.3878 20.6667 23.3333ZM34.0001 28.6667C34.0001 30.8758 35.7909 32.6667 38.0001 32.6667C40.2092 32.6667 42.0001 30.8758 42.0001 28.6667C42.0001 26.4575 40.2092 24.6667 38.0001 24.6667C35.7909 24.6667 34.0001 26.4575 34.0001 28.6667Z'
                      fill='#8280FF'
                    />
                    <path
                      fill-rule='evenodd'
                      clip-rule='evenodd'
                      d='M25.9778 31.3333C19.6826 31.3333 14.5177 34.5687 14.0009 40.9323C13.9727 41.2789 14.6356 42 14.97 42H36.9956C37.9972 42 38.0128 41.194 37.9972 40.9333C37.6065 34.3909 32.3616 31.3333 25.9778 31.3333ZM45.2746 42L40.1333 42C40.1333 38.9988 39.1417 36.2291 37.4683 34.0008C42.0103 34.0505 45.7189 36.3469 45.998 41.2C46.0092 41.3955 45.998 42 45.2746 42Z'
                      fill='#8280FF'
                    />
                  </svg>
                </CardHeader>
                <CardContent>
                  <p className='text-xs text-muted-foreground'>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <svg
                        width='20'
                        height='1rem'
                        viewBox='0 0 20 12'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M14 0L16.29 2.29L11.41 7.17L7.41 3.17L0 10.59L1.41 12L7.41 6L11.41 10L17.71 3.71L20 6V0H14Z'
                          fill='#00B69B'
                        />
                      </svg>
                      <span>
                        <span style={{ color: '#00B69B' }}>8.5%</span>
                        {' Up from yesterday'}
                      </span>
                    </div>
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                  <CardTitle className='text-sm font-medium'>
                    <div className='mb-4'>Total Order</div>
                    <div className='text-2xl font-bold'>10,293</div>
                  </CardTitle>
                  <svg
                    width='60'
                    height='60'
                    viewBox='0 0 60 60'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      opacity='0.21'
                      fill-rule='evenodd'
                      clip-rule='evenodd'
                      d='M0 30V37C0 49.7025 10.2975 60 23 60H30H37C49.7025 60 60 49.7025 60 37V30V23C60 10.2975 49.7025 0 37 0H30H23C10.2975 0 0 10.2975 0 23V30Z'
                      fill='#FEC53D'
                    />
                    <path
                      fill-rule='evenodd'
                      clip-rule='evenodd'
                      d='M15 24.3165L27.9005 31.7646C28.0394 31.8448 28.1851 31.9027 28.3333 31.9395V46.3847L15.9201 39.0385C15.3498 38.701 15 38.0876 15 37.4249V24.3165ZM45 24.1185V37.4249C45 38.0876 44.6502 38.701 44.0799 39.0385L31.6667 46.3847V31.8129C31.6969 31.7978 31.7269 31.7817 31.7566 31.7646L45 24.1185Z'
                      fill='#FEC53D'
                    />
                    <path
                      opacity='0.499209'
                      fill-rule='evenodd'
                      clip-rule='evenodd'
                      d='M15.4053 20.7014C15.5628 20.5024 15.7617 20.3343 15.9936 20.2108L29.1186 13.2201C29.6696 12.9266 30.3305 12.9266 30.8815 13.2201L44.0065 20.2108C44.1852 20.306 44.3444 20.4277 44.4801 20.5697L30.0899 28.8778C29.9953 28.9325 29.9081 28.995 29.8286 29.064C29.7491 28.995 29.6618 28.9325 29.5672 28.8778L15.4053 20.7014Z'
                      fill='#FEC53D'
                    />
                  </svg>
                </CardHeader>
                <CardContent>
                  <p className='text-xs text-muted-foreground'>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <svg
                        width='20'
                        height='1rem'
                        viewBox='0 0 20 12'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M14 0L16.29 2.29L11.41 7.17L7.41 3.17L0 10.59L1.41 12L7.41 6L11.41 10L17.71 3.71L20 6V0H14Z'
                          fill='#00B69B'
                        />
                      </svg>
                      <span>
                        <span style={{ color: '#00B69B' }}>1.3%</span>
                        {' Up from past week'}
                      </span>
                    </div>
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                  <CardTitle className='text-sm font-medium'>
                    <div className='mb-4'>Total Sales</div>
                    <div className='text-2xl font-bold'>$89,000</div>
                  </CardTitle>
                  <svg
                    width='60'
                    height='60'
                    viewBox='0 0 60 60'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      opacity='0.21'
                      fill-rule='evenodd'
                      clip-rule='evenodd'
                      d='M0 30V37C0 49.7025 10.2975 60 23 60H30H37C49.7025 60 60 49.7025 60 37V30V23C60 10.2975 49.7025 0 37 0H30H23C10.2975 0 0 10.2975 0 23V30Z'
                      fill='#4AD991'
                    />
                    <path
                      d='M19.1111 40.8889H42.4444C43.3036 40.8889 44 41.5853 44 42.4444C44 43.3036 43.3036 44 42.4444 44H17.5556C16.6964 44 16 43.3036 16 42.4444V17.5556C16 16.6964 16.6964 16 17.5556 16C18.4147 16 19.1111 16.6964 19.1111 17.5556V40.8889Z'
                      fill='#4AD991'
                    />
                    <path
                      opacity='0.5'
                      d='M24.9126 34.175C24.325 34.8018 23.3406 34.8335 22.7138 34.2459C22.0871 33.6584 22.0553 32.6739 22.6429 32.0472L28.4762 25.825C29.0445 25.2188 29.9888 25.1663 30.6208 25.7056L35.2248 29.6344L41.2235 22.0361C41.7558 21.3618 42.734 21.2467 43.4083 21.7791C44.0826 22.3114 44.1977 23.2896 43.6653 23.9639L36.6653 32.8305C36.1186 33.5231 35.1059 33.6227 34.4347 33.0499L29.7306 29.0358L24.9126 34.175Z'
                      fill='#4AD991'
                    />
                  </svg>
                </CardHeader>
                <CardContent>
                  <p className='text-xs text-muted-foreground'>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <svg
                        width='20'
                        height='12'
                        viewBox='0 0 20 12'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M14 12L16.29 9.71L11.41 4.83L7.41 8.83L0 1.41L1.41 0L7.41 6L11.41 2L17.71 8.29L20 6V12H14Z'
                          fill='#F93C65'
                        />
                      </svg>

                      <span>
                        <span style={{ color: '#F93C65' }}>4.3%</span>
                        {' Down from yesterday'}
                      </span>
                    </div>
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className='flex flex-row items-center justify-between space-y-0 pb-2'>
                  <CardTitle className='text-sm font-medium'>
                    <div className='mb-4'>Total Pending</div>
                    <div className='text-2xl font-bold'>2,040</div>
                  </CardTitle>
                  <svg
                    width='60'
                    height='60'
                    viewBox='0 0 60 60'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      opacity='0.3'
                      fill-rule='evenodd'
                      clip-rule='evenodd'
                      d='M0 30V37C0 49.7025 10.2975 60 23 60H30H37C49.7025 60 60 49.7025 60 37V30V23C60 10.2975 49.7025 0 37 0H30H23C10.2975 0 0 10.2975 0 23V30Z'
                      fill='#FF9066'
                    />
                    <path
                      opacity='0.78'
                      fill-rule='evenodd'
                      clip-rule='evenodd'
                      d='M28.6312 23.8089C28.6512 23.5484 28.8684 23.3472 29.1297 23.3472H29.5475C29.8044 23.3472 30.0195 23.5418 30.045 23.7974L30.6667 30.0139L35.0814 32.5366C35.2372 32.6256 35.3333 32.7913 35.3333 32.9707V33.3592C35.3333 33.6889 35.0199 33.9284 34.7018 33.8416L28.3987 32.1226C28.1673 32.0595 28.0133 31.841 28.0317 31.6019L28.6312 23.8089Z'
                      fill='#FF9066'
                    />
                    <path
                      opacity='0.901274'
                      fill-rule='evenodd'
                      clip-rule='evenodd'
                      d='M22.7218 14.9844C22.4577 14.6697 21.9477 14.7901 21.8524 15.1898L20.2189 22.0379C20.1412 22.3636 20.3993 22.6721 20.7336 22.6531L27.7783 22.2539C28.1892 22.2306 28.3976 21.7486 28.133 21.4333L26.3316 19.2865C27.4965 18.8884 28.7317 18.6805 30 18.6805C36.2592 18.6805 41.3333 23.7546 41.3333 30.0139C41.3333 36.2731 36.2592 41.3472 30 41.3472C23.7408 41.3472 18.6667 36.2731 18.6667 30.0139C18.6667 28.9631 18.809 27.934 19.0864 26.9448L16.5188 26.2246C16.1808 27.4298 16 28.7007 16 30.0139C16 37.7459 22.268 44.0139 30 44.0139C37.732 44.0139 44 37.7459 44 30.0139C44 22.2819 37.732 16.0139 30 16.0139C28.0551 16.0139 26.2029 16.4104 24.5197 17.1271L22.7218 14.9844Z'
                      fill='#FF9066'
                    />
                  </svg>
                </CardHeader>
                <CardContent>
                  <p className='text-xs text-muted-foreground'>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <svg
                        width='20'
                        height='1rem'
                        viewBox='0 0 20 12'
                        fill='none'
                        xmlns='http://www.w3.org/2000/svg'
                      >
                        <path
                          d='M14 0L16.29 2.29L11.41 7.17L7.41 3.17L0 10.59L1.41 12L7.41 6L11.41 10L17.71 3.71L20 6V0H14Z'
                          fill='#00B69B'
                        />
                      </svg>
                      <span>
                        <span style={{ color: '#00B69B' }}>1.8%</span>
                        {' Up from yesterday'}
                      </span>
                    </div>
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className='grid grid-cols-1 gap-4'>
              <Card className='col-span-1 lg:col-span-4'>
                <Component />
              </Card>
              <Card className='col-span-1 lg:col-span-3'>
                <CardHeader>
                  <CardTitle>Deals Details</CardTitle>
                </CardHeader>
                <CardContent>
                  {/* <RecentSales /> */}
                  <DataTableDemo />
                </CardContent>
              </Card>
              <Card className='col-span-1 lg:col-span-3'>
                {/* <RecentSales /> */}
                <RevenueChart />
              </Card>
            </div>
            <div className='grid gap-4 sm:grid-cols-1 lg:grid-cols-3'>
              <Card className='flex-col'>
                <CardHeader>
                  <CardTitle>Customers</CardTitle>
                </CardHeader>
                <CardContent className='m-auto'>
                  <div className='m-auto w-fit'>
                    <svg
                      width='161'
                      height='161'
                      viewBox='0 0 161 161'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        opacity='0.463123'
                        fill-rule='evenodd'
                        clip-rule='evenodd'
                        d='M80.5 153.502C120.818 153.502 153.502 120.818 153.502 80.5C153.502 40.1821 120.818 7.49805 80.5 7.49805C40.1821 7.49805 7.49805 40.1821 7.49805 80.5C7.49805 120.818 40.1821 153.502 80.5 153.502Z'
                        stroke='#C0D2F0'
                        stroke-width='15'
                      />
                      <path
                        fill-rule='evenodd'
                        clip-rule='evenodd'
                        d='M80.5 7.49806C120.818 7.49806 153.502 40.1821 153.502 80.5C153.502 120.818 120.818 153.502 80.5 153.502C40.1821 153.502 7.49805 120.818 7.49805 80.5C7.49805 40.1821 40.1821 7.49806 80.5 7.49806Z'
                        stroke='#4880FF'
                        stroke-width='15'
                        stroke-linecap='round'
                        stroke-dasharray='350 10000'
                      />
                    </svg>
                  </div>
                </CardContent>
                <CardFooter className='flex justify-around text-center'>
                  <CardContent>
                    <CardTitle className='text-2xl'>34,249</CardTitle>
                    <CardDescription
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px',
                        flexWrap: 'nowrap',
                      }}
                    >
                      <div>
                        <svg
                          width='12'
                          height='12'
                          viewBox='0 0 12 12'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            fill-rule='evenodd'
                            clip-rule='evenodd'
                            d='M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12Z'
                            fill='#4880FF'
                          />
                        </svg>
                      </div>
                      <div>New Customer</div>
                    </CardDescription>
                  </CardContent>
                  <CardContent>
                    <CardTitle className='text-2xl'>1420</CardTitle>
                    <CardDescription
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px',
                        flexWrap: 'nowrap',
                      }}
                    >
                      <div>
                        <svg
                          width='12'
                          height='12'
                          viewBox='0 0 12 12'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                        >
                          <path
                            fill-rule='evenodd'
                            clip-rule='evenodd'
                            d='M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12Z'
                            fill='#C0D2F0'
                          />
                        </svg>
                      </div>
                      <div>Repeated</div>
                    </CardDescription>
                  </CardContent>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader className='flex items-center gap-2 space-y-0 py-5 sm:flex-row'>
                  <CardTitle>Featured Product</CardTitle>
                </CardHeader>
                <FeaturedProduct />
              </Card>
              <SalesAnalytics />
            </div>
          </TabsContent>
        </Tabs>
      </Layout.Body>
    </Layout>
  )
}

// const topNav = [
//   {
//     title: 'Overview',
//     href: 'dashboard/overview',
//     isActive: true,
//   },
//   {
//     title: 'Customers',
//     href: 'dashboard/customers',
//     isActive: false,
//   },
//   {
//     title: 'Products',
//     href: 'dashboard/products',
//     isActive: false,
//   },
//   {
//     title: 'Settings',
//     href: 'dashboard/settings',
//     isActive: false,
//   },
// ]
