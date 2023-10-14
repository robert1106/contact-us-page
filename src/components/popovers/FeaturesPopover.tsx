'use client'
import { Popover, Stack } from '@mui/material'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import { Text } from '~/components/base'
import { MenuLink } from '~/components/common'
import usePopover from '~/hooks/usePopover'
import { fonts, palette } from '~/theme/mui'
import {
  PATH_ABOUT,
  PATH_BLOG,
  PATH_CONTACT,
  PATH_SHOP
} from '~/utils/constants/paths'

export const FeaturesPopover = () => {
  const pathname = usePathname()
  const { open, anchorEl, showPopover, hidePopover } = usePopover()

  useEffect(() => {
    hidePopover()
  }, [pathname])

  return (
    <>
      <Text
        onClick={showPopover}
        size={{ xs: 'h4', md: 'subtitle1' }}
        sx={{
          position: 'relative',
          padding: '0 13px 0 1px',
          cursor: 'pointer',
          fontFamily: fonts.roboto,

          '&:hover': {
            textDecoration: 'underline'
          },

          '&::after': {
            position: 'absolute',
            content: '""',
            top: '9px',
            right: { xs: '-6px', md: '-9px' },
            backgroundImage: {
              xs: 'url(/static/arrow-light.svg)',
              md: 'url(/static/arrow.svg)'
            },
            backgroundRepeat: 'no-repeat',
            width: '15px',
            height: '10px'
          }
        }}
      >
        Features
      </Text>

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={hidePopover}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
      >
        <Stack spacing={2} p={2} sx={{ backgroundColor: palette.common.white }}>
          <MenuLink href="/">Home</MenuLink>
          <MenuLink href={PATH_BLOG}>Blog</MenuLink>
          <MenuLink href={PATH_SHOP}>Shop</MenuLink>
          <MenuLink href={PATH_ABOUT}>About</MenuLink>
          <MenuLink href={PATH_CONTACT}>Contact</MenuLink>
        </Stack>
      </Popover>
    </>
  )
}
