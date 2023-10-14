'use client'
import { Typography, TypographyProps } from '@mui/material'
import { Variant } from '@mui/material/styles/createTypography'
import { CSSProperties } from '@mui/system/CSSProperties'
import { ElementType, FC } from 'react'

import { typographyVariant } from '~/theme/mui'

export type ResponsiveSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl'

export interface TextProps extends Omit<TypographyProps, 'size'> {
  component?: ElementType
  size?: Partial<Record<ResponsiveSize, Variant>> | Variant
  lineClamp?: string
}

const generateStyles = (size: TextProps['size']) => {
  if (!size) return {}

  if (typeof size === 'object') {
    const genStyles = Object.entries(size).reduce(
      (acc, [key, value]) => {
        return {
          fontSize: {
            ...acc.fontSize,
            [key]: typographyVariant[value].fontSize
          },
          lineHeight: {
            ...acc.lineHeight,
            [key]: typographyVariant[value].lineHeight
          },
          fontFamily: {
            ...acc.fontFamily,
            [key]: typographyVariant[value].fontFamily
          },
          fontWeight: {
            ...acc.fontWeight,
            [key]: typographyVariant[value].fontWeight
          }
        }
      },
      { fontSize: {}, lineHeight: {}, fontFamily: {}, fontWeight: {} }
    )

    return genStyles
  }

  return typographyVariant[size] as CSSProperties
}

export const Text: FC<TextProps> = ({ size, sx, ...rest }) => {
  const styles = generateStyles(size)

  return <Typography sx={{ ...styles, ...sx }} {...rest} />
}
