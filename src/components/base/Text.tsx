/**
 * Сustomization of mui core component "Typography",
 * placed in a separate file for reuse
 */

'use client'
import { Typography, TypographyProps } from '@mui/material'
import { Variant } from '@mui/material/styles/createTypography'
import { ElementType, FC } from 'react'
import { generateStylesBySize } from '~/utils/helpers/mui.helpers'

export type ResponsiveSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export interface TextProps extends Omit<TypographyProps, 'size'> {
  component?: ElementType
  size?: Partial<Record<ResponsiveSize, Variant>> | Variant
  lineClamp?: string
}

export const Text: FC<TextProps> = ({ size, sx, ...rest }) => {
  const styles = generateStylesBySize(size)

  return <Typography sx={{ ...styles, ...sx }} {...rest} />
}
