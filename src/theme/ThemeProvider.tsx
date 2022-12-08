import CssBaseline from '@mui/material/CssBaseline'
import {
  createTheme,
  ThemeProvider as MUIThemeProvider,
} from '@mui/material/styles'
import { ReactNode } from 'react'
import themeOptions from './ThemeOptions'

const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const coreThemeConfig = themeOptions()
  let theme = createTheme(coreThemeConfig)

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  )
}

export default ThemeProvider
