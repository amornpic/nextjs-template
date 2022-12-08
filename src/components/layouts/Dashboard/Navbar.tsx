import { Box, Divider, Drawer, List, Toolbar } from '@mui/material'
import { useRecoilState } from 'recoil'
import { drawerMobileOpenState } from '../../../atoms/NavbarAtom'
import themeConfig from '../../../configs/themeConfig'
import menuItems from './MenuItems'
import VerticalNavItems from './NavLink'

const drawerWidth = themeConfig.drawerWidth

export default function Navbar() {
  const [drawerMobileOpen, setDrawerMobileOpen] = useRecoilState(
    drawerMobileOpenState
  )

  const handleDrawerToggle = () => {
    console.log('onClose')

    setDrawerMobileOpen(!drawerMobileOpen)
  }

  const drawer = (
    <>
      <Toolbar />
      <Divider />
      <List>
        {menuItems().map((item, index: number) => (
          <VerticalNavItems key={index} item={item} />
        ))}
      </List>
    </>
  )

  return (
    <Box
      component="nav"
      sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      aria-label="mailbox folders"
    >
      <Drawer
        variant="temporary"
        open={drawerMobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
          },
        }}
      >
        {drawer}
      </Drawer>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: 'none', sm: 'block' },
          '& .MuiDrawer-paper': {
            boxSizing: 'border-box',
            width: drawerWidth,
          },
        }}
        open
      >
        {drawer}
      </Drawer>
    </Box>
  )
}
