import {
  IconInbox,
  IconStar,
  IconSend,
  IconAlertCircle,
  IconTrash,
  IconPencil,
  IconError404,
} from '@tabler/icons-react'

export interface MailNavLink {
  title: string
  label?: string
  href: string
  icon: JSX.Element
}

export const mailSidelinks: MailNavLink[] = [
  {
    title: 'Inbox',
    label: '1253',
    href: '/inbox',
    icon: <IconInbox size={18} />,
  },
  {
    title: 'Starred',
    label: '245',
    href: '/starred',
    icon: <IconStar size={18} />,
  },
  {
    title: 'Sent',
    label: '24,532',
    href: '/sent',
    icon: <IconSend size={18} />,
  },
  {
    title: 'Draft',
    label: '09',
    href: '/draft',
    icon: <IconPencil size={18} />,
  },
  {
    title: 'Spam',
    label: '14',
    href: '/spam',
    icon: <IconError404 size={18} />,
  },
  {
    title: 'Important',
    label: '18',
    href: '/important',
    icon: <IconAlertCircle size={18} />,
  },
  {
    title: 'Bin',
    label: '9',
    href: '/bin',
    icon: <IconTrash size={18} />,
  },
]
