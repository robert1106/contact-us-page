import { Stack } from '@mui/material'
import { MenuLink } from '~/components/common'
import {
  CartPopover,
  FeaturesPopover,
  UserPopover
} from '~/components/popovers'
import { palette } from '~/theme/mui'
import {
  PATH_ABOUT,
  PATH_BLOG,
  PATH_CONTACT,
  PATH_SHOP
} from '~/utils/constants/paths'

const Menu = () => {
  return (
    <Stack
      spacing={{ xs: 2, md: 7.5 }}
      direction={{ xs: 'column', md: 'row' }}
      justifyContent="space-between"
      sx={{
        height: '100%',
        fontSize: { xs: '14px', md: '16px' },
        color: { xs: palette.common.white, md: palette.text.primary }
      }}
    >
      <Stack
        spacing={{ xs: 3.15, md: 5.88 }}
        paddingLeft={{ xs: '3px', md: 0 }}
        direction={{ xs: 'column', md: 'row' }}
        alignItems={{ xs: 'start', md: 'center' }}
      >
        <MenuLink href="/">Home</MenuLink>
        <FeaturesPopover />
        <MenuLink href={PATH_BLOG}>Blog</MenuLink>
        <MenuLink href={PATH_SHOP}>Shop</MenuLink>
        <MenuLink href={PATH_ABOUT}>About</MenuLink>
        <MenuLink href={PATH_CONTACT}>Contact</MenuLink>
      </Stack>

      <Stack spacing={4.5} direction="row" justifyContent="center">
        <UserPopover />
        <CartPopover />
      </Stack>
    </Stack>
  )
}

export default Menu
