/**
 * Creating a global theme for Mui Components
 */

'use client'
import { createTheme } from '@mui/material/styles'
import components from './components'
import palette from './palette'
import typography from './typography'

export const theme = createTheme({
  components,
  typography,
  palette
})
