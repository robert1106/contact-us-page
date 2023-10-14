import { Box, Container, Divider } from '@mui/material'
import { Logo } from '~/components/common'
import { palette } from '~/theme/mui'
import FooterInfoBlock from './components/FooterInfoBlock'

const Footer = () => {
  return (
    <Box
      sx={{
        pt: { xs: '26px', md: '89px' },
        pb: { xs: '49px', md: '66px' },
        backgroundColor: palette.common.black
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          maxWidth: '1335px',
          px: '20px'
        }}
      >
        <Logo color={palette.common.white} fontSize="36px" />

        <Divider
          sx={{
            mt: { xs: '30px', md: '54px' },
            mb: { xs: '30px', md: '20px' }
          }}
        />

        <FooterInfoBlock />
      </Container>
    </Box>
  )
}

export default Footer
