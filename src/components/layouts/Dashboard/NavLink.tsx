import { ListItemText } from '@mui/material'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import Link from 'next/link'
import { NavLink } from './MenuItems'

interface Props {
  item: NavLink
}

const VerticalNavItems = ({ item }: Props) => {
  const ItemIcon: any = item.icon

  return (
    <Link
      passHref
      legacyBehavior
      href={item.path === undefined ? '/' : `${item.path}`}
    >
      <ListItem disablePadding>
        <ListItemButton>
          <ListItemIcon>
            <ItemIcon />
          </ListItemIcon>
          <ListItemText primary={item.title} />
        </ListItemButton>
      </ListItem>
    </Link>
  )
}

export default VerticalNavItems
