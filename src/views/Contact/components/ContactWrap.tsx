import { Stack } from '@mui/material'
import { Text } from '~/components/base'
import { palette } from '~/theme/mui'

interface ContactWrapProps {
  children: React.ReactNode
}

const ContactWrap = ({ children }: ContactWrapProps) => {
  return (
    <Stack
      spacing={{ xs: 2.5, md: 6.8 }}
      sx={{
        width: '100%',
        padding: { xs: '19px 0 50px', md: '43px 23px 50px' }
      }}
    >
      <Stack
        spacing={{ xs: 2, md: 3.1 }}
        alignItems="center"
        textAlign="center"
      >
        <Text size={{ xs: 'h2', md: 'h1' }} color={palette.common.black}>
          Contact Us
        </Text>
        <Text
          size={{ xs: 'h4', md: 'h3' }}
          color={palette.subtitle.secondary}
          px="65px"
        >
          Any question or remarks? Just write us a message!
        </Text>
      </Stack>

      {children}
    </Stack>
  )
}

export default ContactWrap
