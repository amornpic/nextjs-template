import MenuIcon from '@mui/icons-material/Menu'
import {
  AppBar as AppBarMUI,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material'
import { useSetRecoilState } from 'recoil'
import { drawerMobileOpenState } from '../../../atoms/NavbarAtom'
import themeConfig from '../../../configs/themeConfig'

const drawerWidth = themeConfig.drawerWidth

export default function AppBar() {
  const setDrawerMobileOpen = useSetRecoilState(drawerMobileOpenState)

  const handleDrawerToggle = () => {
    // setDrawerMobileOpen(!drawerMobileOpen)
    setDrawerMobileOpen((oldDrawerMobileOpen) => {
      return !oldDrawerMobileOpen
    })
  }

  return (
    <AppBarMUI
      position="fixed"
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { sm: `${drawerWidth}px` },
      }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ mr: 2, display: { sm: 'none' } }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          {themeConfig.templateName}
        </Typography>
      </Toolbar>
    </AppBarMUI>
  )
}
