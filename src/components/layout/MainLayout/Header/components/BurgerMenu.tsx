'use client'
import { Box, IconButton } from '@mui/material'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import MenuIcon from '~/assets/icons/menu/menu-icon.svg'
import useSidebar from '~/hooks/useModal'
import Sidebar from './Sidebar'

const BurgerMenu = () => {
  const pathname = usePathname()
  const [open, showSidebar, hideSidebar] = useSidebar()

  /**
   * His useEffect is triggered when pathname is changed in "App router",
   * close Sidebar if it is open
   */
  useEffect(() => {
    if (open) {
      hideSidebar()
    }
  }, [pathname])

  return (
    <Box sx={{ display: { xs: 'block', md: 'none' } }}>
      <IconButton
        aria-label="menu"
        sx={{ height: '24px', padding: '0 0 4px' }}
        onClick={showSidebar}
      >
        <MenuIcon />
      </IconButton>

      <Sidebar open={open} onClose={hideSidebar} />
    </Box>
  )
}

export default BurgerMenu
