/**
 * The usePopover hook is used to handle the states of the Popover component.
 */

'use client'
import { useState } from 'react'

const usePopover = () => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null)

  const showPopover = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const hidePopover = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)

  return { open, anchorEl, showPopover, hidePopover }
}

export default usePopover
