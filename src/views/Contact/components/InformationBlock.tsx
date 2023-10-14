import { Stack } from '@mui/material'
import { Text } from '~/components/base'
import { ContactInformationList } from '~/components/common'
import { palette } from '~/theme/mui'
import MediaListBlock from './MediaListBlock'

const InformationBlock = () => {
  return (
    <Stack>
      <Stack
        sx={{
          height: { xs: '397px', md: '100%' },
          width: { xs: '100%', md: '492px' },
          padding: { xs: '20px 25px 25px', md: '49px 50px 36px 41px' },
          mb: { xs: '5px', md: '10px' },
          borderRadius: '10px 10px 0',
          justifyContent: 'space-between',
          alignItems: { xs: 'center', md: 'start' },
          backgroundColor: palette.common.black,
          backgroundImage: 'url(/static/contact-background.svg)',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'bottom right',
          backgroundSize: 'contain'
        }}
      >
        <Stack
          spacing={{ xs: 1.75, md: 14.4 }}
          textAlign={{ xs: 'center', md: 'start' }}
        >
          <Stack>
            <Text
              size={{ xs: 'overline', md: 'caption' }}
              color={palette.common.white}
              mb="15px"
            >
              Contact Information
            </Text>

            <Text
              size={{ xs: 'h6', md: 'h5' }}
              color={palette.subtitle.outlined}
            >
              Say something to start a live chat!
            </Text>
          </Stack>

          <Stack
            spacing={{ xs: 2, md: 6.3 }}
            sx={{ color: palette.common.white }}
          >
            <ContactInformationList
              alignItems={{ xs: 'center', md: 'start' }}
            />
          </Stack>
        </Stack>

        <MediaListBlock />
      </Stack>
    </Stack>
  )
}

export default InformationBlock
