import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import themeConfig from '../../../configs/themeConfig'
import AppBar from './AppBar'
import Navbar from './Navbar'

const drawerWidth = themeConfig.drawerWidth

export default function DashboardLayout({ children }: any) {
  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar />
      <Navbar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  )
}
