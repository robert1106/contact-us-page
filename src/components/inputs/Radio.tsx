'use client'
import { Radio as MuiRadio, RadioProps } from '@mui/material'
import { FC } from 'react'
import CheckedIcon from '~/assets/icons/radio-checked-icon.svg'
import Icon from '~/assets/icons/radio-icon.svg'

export const Radio: FC<RadioProps> = (props) => {
  return <MuiRadio checkedIcon={<CheckedIcon />} icon={<Icon />} {...props} />
}
