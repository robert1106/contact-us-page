import { CSSProperties } from '@mui/system/CSSProperties'
import { TextProps } from '~/components/base'
import { typographyVariant } from '~/theme/mui'

/**
 * Makes it easier to work with custom sizing options, and also allows you
 * to adapt to responsive size
 */

export const generateStylesBySize = (size: TextProps['size']) => {
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
