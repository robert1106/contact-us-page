'use client'
import { IconButton, Stack, SwipeableDrawer } from '@mui/material'
import CloseIcon from '~/assets/icons/menu/close-icon.svg'
import { Logo } from '~/components/common'
import { palette } from '~/theme/mui'
import Menu from './Menu'

interface SidebarProps {
  open: boolean
  onClose: () => void
}

const Sidebar = ({ open, onClose }: SidebarProps) => {
  return (
    <SwipeableDrawer
      anchor="right"
      open={open}
      onClose={onClose}
      onOpen={onClose}
      PaperProps={{
        sx: {
          width: '100%',
          overflow: 'auto',
          backgroundColor: palette.common.black,
          height: '100%',
          px: '20px',
          pb: '30px'
        }
      }}
    >
      <Stack
        direction="row"
        sx={{ py: '28px', mb: { xs: '25px', md: '30px' } }}
        alignItems="center"
        justifyContent="space-between"
      >
        <Logo color={palette.common.white} />

        <IconButton onClick={onClose} sx={{ height: '24px', p: 0 }}>
          <CloseIcon />
        </IconButton>
      </Stack>

      <Menu />
    </SwipeableDrawer>
  )
}

export default Sidebar
