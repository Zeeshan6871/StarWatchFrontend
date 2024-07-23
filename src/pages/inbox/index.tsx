import { buttonVariants } from '@/components/custom/button'
import { Layout } from '@/components/custom/layout'
import { Search } from '@/components/search'
import ThemeSwitch from '@/components/theme-switch'
import { Button } from '@/components/ui/button'
import { Card, CardTitle } from '@/components/ui/card'
import { TooltipProvider } from '@/components/ui/tooltip'
import { UserNav } from '@/components/user-nav'
import { SideLink } from '@/data/sidelinks'
import { cn } from '@/lib/utils'
import { CheckboxIcon } from '@radix-ui/react-icons'
import { Link } from 'react-router-dom'
import { columns } from './components/columns'
import { DataTable } from './components/data-table'
import { MailNavLink } from './components/navigation'
import { mailSidelinks } from './data/MailSideLink'
import { tasks } from './data/tasks'

export default function Inbox() {
  const renderLink = ({ sub, ...rest }: SideLink) => {
    const key = `${rest.title}-${rest.href}`
    return <MailNavLink {...rest} key={key} />
  }
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
          <h1 className='mb-3 text-2xl font-bold tracking-tight'>Inbox</h1>
        </div>
        <div className='flex gap-4'>
          <Card
            className='min-w-[15vw] p-4'
            style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
          >
            <Button>+Compose</Button>
            <CardTitle>My Email</CardTitle>
            <div
              className={
                'group ml-[-5px] border-b bg-background md:border-none'
              }
            >
              <TooltipProvider delayDuration={0}>
                <nav className='grid gap-1 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2'>
                  {mailSidelinks.map(renderLink)}
                </nav>
              </TooltipProvider>
            </div>
            <CardTitle>Label</CardTitle>
            <div
              className={
                'group ml-[-5px] border-b bg-background md:border-none'
              }
            >
              <TooltipProvider delayDuration={0}>
                <nav className='grid gap-1 group-[[data-collapsed=true]]:justify-center group-[[data-collapsed=true]]:px-2'>
                  <Link
                    to={'/inbox'}
                    className={cn(
                      buttonVariants({
                        variant: 'ghost',
                        size: 'sm',
                      }),
                      'h-12 justify-between text-wrap rounded-none'
                    )}
                  >
                    <div className='flex'>
                      <CheckboxIcon className={'mr-2 text-green-600'} />
                      Primary
                    </div>
                  </Link>
                </nav>
              </TooltipProvider>
            </div>
          </Card>
          <div className='-mx-4 flex-1 overflow-auto px-4 py-1 lg:flex-row lg:space-x-12 lg:space-y-0'>
            <DataTable data={tasks} columns={columns} />
          </div>
        </div>
      </Layout.Body>
    </Layout>
  )
}
