import { SvgIconComponent } from '@mui/icons-material'
import MailIcon from '@mui/icons-material/Mail'
import InboxIcon from '@mui/icons-material/MoveToInbox'

export type NavLink = {
  title: string
  path: string
  icon?: SvgIconComponent
}

export type MenuItemsType = NavLink[]

const menuItems = (): MenuItemsType => {
  return [
    {
      title: 'Dashboard',
      icon: MailIcon,
      path: '/dashboard',
    },
    {
      title: 'Account Settings',
      icon: InboxIcon,
      path: '/account-settings',
    },
    {
      title: 'Login',
      icon: MailIcon,
      path: '/login',
    },
  ]
}

export default menuItems
