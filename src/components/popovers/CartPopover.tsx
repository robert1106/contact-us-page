'use client'
import { IconButton, Popover, Stack, Theme, useMediaQuery } from '@mui/material'
import CartDarkIcon from '~/assets/icons/menu/cart-dark-icon.svg'
import CartLightIcon from '~/assets/icons/menu/cart-light-icon.svg'
import { Text } from '~/components/base'
import usePopover from '~/hooks/usePopover'
import { palette } from '~/theme/mui'

export const CartPopover = () => {
  const { open, anchorEl, showPopover, hidePopover } = usePopover()
  const isMobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))

  return (
    <>
      <IconButton
        onClick={showPopover}
        sx={{ cursor: 'pointer', height: '32px', p: 0 }}
      >
        {isMobile ? <CartLightIcon /> : <CartDarkIcon />}
      </IconButton>

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={hidePopover}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left'
        }}
      >
        <Stack p={2} sx={{ backgroundColor: palette.common.white }}>
          <Text>Your purchases</Text>
        </Stack>
      </Popover>
    </>
  )
}
