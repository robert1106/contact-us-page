import { AppBar, Box, Container, Toolbar } from '@mui/material'
import { Logo } from '~/components/common'

import { BurgerMenu, Menu } from './components'

interface HeaderProps {}

const Header = ({}: HeaderProps) => {
  return (
    <AppBar position="static">
      <Toolbar
        variant="dense"
        sx={{
          display: 'flex',
          py: { xs: '28px', md: '40px' },
          px: { xs: 0 }
        }}
      >
        <Container
          maxWidth={false}
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            maxWidth: '1288px',
            px: '20px'
          }}
        >
          <Logo />

          <Box display={{ xs: 'none', md: 'block' }}>
            <Menu />
          </Box>

          <BurgerMenu />
        </Container>
      </Toolbar>
    </AppBar>
  )
}

export default Header
