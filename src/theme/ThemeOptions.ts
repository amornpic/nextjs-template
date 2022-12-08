import { ThemeOptions } from '@mui/material'
import themeConfig from '../configs/themeConfig'
import palette from './palette'

const themeOptions = (): ThemeOptions => {
  const mode = themeConfig.mode

  const themeConfigs = {
    palette: palette(mode),
    shape: {
      borderRadius: 6,
    },
    mixins: {
      toolbar: {
        minHeight: 64,
      },
    },
  }

  return themeConfigs
}

export default themeOptions
