import {
  IconCalendar,
  IconCube,
  IconFileAnalytics,
  IconHeart,
  IconLayoutDashboard,
  IconMessage,
  IconPaperclip,
  IconSettings,
  IconStack2,
  IconTableFilled,
} from '@tabler/icons-react'

export interface NavLink {
  title: string
  label?: string
  href: string
  icon: JSX.Element
}

export interface SideLink extends NavLink {
  sub?: NavLink[]
}

export const sidelinks: SideLink[] = [
  {
    title: 'Dashboard',
    label: '',
    href: '/',
    icon: <IconLayoutDashboard size={18} />,
  },
  {
    title: 'Products',
    label: '3',
    href: '/product',
    icon: <IconCube size={18} />,
  },
  {
    title: 'Message',
    label: '',
    href: '/inbox',
    icon: <IconMessage size={18} />,
  },
  {
    title: 'Favourites',
    label: '9',
    href: '/apps',
    icon: <IconHeart size={18} />,
  },
  // {
  //   title: 'Authentication',
  //   label: '',
  //   href: '',
  //   icon: <IconUserShield size={18} />,
  //   sub: [
  //     {
  //       title: 'Sign In (email + password)',
  //       label: '',
  //       href: '/sign-in',
  //       icon: <IconHexagonNumber1 size={18} />,
  //     },
  //     {
  //       title: 'Sign In (Box)',
  //       label: '',
  //       href: '/sign-in-2',
  //       icon: <IconHexagonNumber2 size={18} />,
  //     },
  //     {
  //       title: 'Sign Up',
  //       label: '',
  //       href: '/sign-up',
  //       icon: <IconHexagonNumber3 size={18} />,
  //     },
  //     {
  //       title: 'Forgot Password',
  //       label: '',
  //       href: '/forgot-password',
  //       icon: <IconHexagonNumber4 size={18} />,
  //     },
  //     {
  //       title: 'OTP',
  //       label: '',
  //       href: '/otp',
  //       icon: <IconHexagonNumber5 size={18} />,
  //     },
  //   ],
  // },
  {
    title: 'Order List',
    label: '',
    href: '/users',
    icon: <IconStack2 size={18} />,
  },
  // {
  //   title: 'Requests',
  //   label: '10',
  //   href: '/requests',
  //   icon: <IconRouteAltLeft size={18} />,
  //   sub: [
  //     {
  //       title: 'Trucks',
  //       label: '9',
  //       href: '/trucks',
  //       icon: <IconTruck size={18} />,
  //     },
  //     {
  //       title: 'Cargos',
  //       label: '',
  //       href: '/cargos',
  //       icon: <IconBoxSeam size={18} />,
  //     },
  //   ],
  // },
  {
    title: 'Product Stock',
    label: '',
    href: '/analysis',
    icon: <IconTableFilled size={18} />,
  },
  {
    title: 'File manager',
    label: '',
    href: '/extra-components',
    icon: <IconFileAnalytics size={18} />,
  },
  // {
  //   title: 'Calender',
  //   label: '',
  //   href: '',
  //   icon: <IconCalendar size={18} />,
  //   sub: [
  //     {
  //       title: 'Not Found',
  //       label: '',
  //       href: '/404',
  //       icon: <IconError404 size={18} />,
  //     },
  //     {
  //       title: 'Internal Server Error',
  //       label: '',
  //       href: '/500',
  //       icon: <IconServerOff size={18} />,
  //     },
  //     {
  //       title: 'Maintenance Error',
  //       label: '',
  //       href: '/503',
  //       icon: <IconBarrierBlock size={18} />,
  //     },
  //     {
  //       title: 'Unauthorised Error',
  //       label: '',
  //       href: '/401',
  //       icon: <IconLock size={18} />,
  //     },
  //   ],
  // },
  {
    title: 'Calender',
    label: '',
    href: '/settings',
    icon: <IconCalendar size={18} />,
  },
  {
    title: 'Todo',
    label: '',
    href: '/settings',
    icon: <IconPaperclip size={18} />,
  },
  {
    title: 'Settings',
    label: '',
    href: '/settings',
    icon: <IconSettings size={18} />,
  },
]
