import { useEffect, useState } from 'react'
import { IconChevronsLeft, IconMenu2, IconX } from '@tabler/icons-react'
import { Layout } from './custom/layout'
import { Button } from './custom/button'
import Nav from './nav'
import { cn } from '@/lib/utils'
import { SideLink } from '@/data/sidelinks'

interface SidebarProps extends React.HTMLAttributes<HTMLElement> {
  isCollapsed: boolean
  setIsCollapsed: React.Dispatch<React.SetStateAction<boolean>>
  sidelinks: SideLink[]
}

export default function Sidebar({
  className,
  isCollapsed,
  setIsCollapsed,
  sidelinks,
}: SidebarProps) {
  const [navOpened, setNavOpened] = useState(false)

  /* Make body not scrollable when navBar is opened */
  useEffect(() => {
    if (navOpened) {
      document.body.classList.add('overflow-hidden')
    } else {
      document.body.classList.remove('overflow-hidden')
    }
  }, [navOpened])

  return (
    <aside
      className={cn(
        `fixed left-0 right-0 top-0 z-50 w-full border-r-2 border-r-muted transition-[width] md:bottom-0 md:right-auto md:h-svh ${isCollapsed ? 'md:w-14' : 'md:w-48'}`,
        className
      )}
    >
      {/* Overlay in mobile */}
      <div
        onClick={() => setNavOpened(false)}
        className={`absolute inset-0 transition-[opacity] delay-100 duration-700 ${navOpened ? 'h-svh opacity-50' : 'h-0 opacity-0'} w-full bg-black md:hidden`}
      />

      <Layout fixed className={navOpened ? 'h-svh' : ''}>
        {/* Header */}
        <Layout.Header
          sticky
          className='z-50 flex justify-between px-4 py-3 shadow-sm md:px-4'
        >
          <div
            className={`flex items-center ${!isCollapsed ? 'gap-2' : ''}`}
            onClick={() => setIsCollapsed((prev) => !prev)}
          >
            <svg
              width='24'
              height='24'
              viewBox='0 0 24 24'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M12 6H20V8H12V6ZM4 16H12V18H4V16ZM20 11H4V13H20V11Z'
                fill='#202224'
              />
              <path
                d='M20 6H20.25V5.75H20V6ZM12 6V5.75H11.75V6H12ZM20 8V8.25H20.25V8H20ZM12 8H11.75V8.25H12V8ZM12 16H12.25V15.75H12V16ZM4 16V15.75H3.75V16H4ZM12 18V18.25H12.25V18H12ZM4 18H3.75V18.25H4V18ZM4 11V10.75H3.75V11H4ZM20 11H20.25V10.75H20V11ZM4 13H3.75V13.25H4V13ZM20 13V13.25H20.25V13H20ZM20 5.75H12V6.25H20V5.75ZM20.25 8V6H19.75V8H20.25ZM12 8.25H20V7.75H12V8.25ZM11.75 6V8H12.25V6H11.75ZM12 15.75H4V16.25H12V15.75ZM12.25 18V16H11.75V18H12.25ZM4 18.25H12V17.75H4V18.25ZM3.75 16V18H4.25V16H3.75ZM4 11.25H20V10.75H4V11.25ZM4.25 13V11H3.75V13H4.25ZM20 12.75H4V13.25H20V12.75ZM19.75 11V13H20.25V11H19.75Z'
                fill='white'
              />
            </svg>

            <div
              className={`flex flex-col justify-end truncate ${isCollapsed ? 'invisible w-0' : 'visible w-auto'}`}
            >
              <span className='font-medium'>StarWatch</span>
              <span className='text-xs'>Admin</span>
            </div>
          </div>

          {/* Toggle Button in mobile */}
          <Button
            variant='ghost'
            size='icon'
            className='md:hidden'
            aria-label='Toggle Navigation'
            aria-controls='sidebar-menu'
            aria-expanded={navOpened}
            onClick={() => setNavOpened((prev) => !prev)}
          >
            {navOpened ? <IconX /> : <IconMenu2 />}
          </Button>
        </Layout.Header>

        {/* Navigation links */}
        <Nav
          id='sidebar-menu'
          className={`z-40 h-full flex-1 overflow-auto ${navOpened ? 'max-h-screen' : 'max-h-0 py-0 md:max-h-screen md:py-2'}`}
          closeNav={() => setNavOpened(false)}
          isCollapsed={isCollapsed}
          links={sidelinks}
        />

        {/* Scrollbar width toggle button */}
        <Button
          onClick={() => setIsCollapsed((prev) => !prev)}
          size='icon'
          variant='outline'
          className='absolute -right-5 top-1/2 z-50 hidden rounded-full md:inline-flex'
        >
          <IconChevronsLeft
            stroke={1.5}
            className={`h-5 w-5 ${isCollapsed ? 'rotate-180' : ''}`}
          />
        </Button>
      </Layout>
    </aside>
  )
}
