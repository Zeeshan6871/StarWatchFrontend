import { buttonVariants } from '@/components/custom/button'
import { SideLink } from '@/data/sidelinks'
import { cn } from '@/lib/utils'
import { Link } from 'react-router-dom'

interface NavLinkProps extends SideLink {}

export function MailNavLink({ title, icon, label, href }: NavLinkProps) {
  return (
    <Link
      to={href}
      //  to={href}
      // onClick={closeNav}
      className={cn(
        buttonVariants({
          variant: 'ghost',
          size: 'sm',
        }),
        'h-12 justify-between text-wrap rounded-none'
        // checkActiveNav(href) &&
        //   'border-l-4 border-l-blue-400 text-blue-400 transition-all',
        // subLink && 'h-10 w-full border-l border-l-blue-500 px-2'
      )}
      // aria-current={checkActiveNav(href) ? 'page' : undefined}
    >
      <div className='flex'>
        <div className={'mr-2 '}>{icon}</div>
        {title}
      </div>
      {label && (
        <div className='ml-2 rounded-lg  px-1 text-[0.625rem] text-muted-foreground'>
          {label}
        </div>
      )}
    </Link>
  )
}
