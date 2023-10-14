import { Text, TextProps } from '~/components/base'
import { fonts, palette } from '~/theme/mui'

export const Logo = (props: TextProps) => {
  return (
    <Text
      color={palette.common.black}
      fontFamily={fonts.inter}
      fontWeight={800}
      fontSize={{ xs: '18px', md: '24px' }}
      {...props}
    >
      Logo Here
    </Text>
  )
}
