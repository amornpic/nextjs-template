import { PaletteMode } from '@mui/material'

type ThemeConfig = {
  templateName: string
  mode: PaletteMode
  drawerWidth: number
}

const themeConfig: ThemeConfig = {
  templateName: 'Nextjs Template',
  mode: 'light' /* light | dark */,
  drawerWidth: 240 /* Number in PX(Pixels) /*! Note: This is for Vertical navigation menu only */,
}

export default themeConfig
