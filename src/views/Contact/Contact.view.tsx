import { Stack } from '@mui/material'
import { ContactUsForm } from '~/components/forms'
import { palette } from '~/theme/mui'
import ContactWrap from './components/ContactWrap'
import InformationBlock from './components/InformationBlock'

const ContactView = () => {
  return (
    <ContactWrap>
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        spacing={{ xs: 3.1, md: 1.25 }}
        sx={{
          backgroundColor: palette.common.white,
          boxShadow: '0px 0px 60px 30px rgba(0, 0, 0, 0.03)',
          borderRadius: '10px',
          padding: { xs: '5px 5px 0', md: '10px 10px 0' }
        }}
      >
        <InformationBlock />

        <ContactUsForm />
      </Stack>
    </ContactWrap>
  )
}

export default ContactView
