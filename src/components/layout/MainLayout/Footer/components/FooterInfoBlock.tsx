import { Stack } from '@mui/material'
import { ContactInformationList } from '~/components/common'
import { JoinNewsletterForm } from '~/components/forms'
import {
  COMPANY_STATIC_PAGES,
  LEGAL_STATIC_PAGES,
  QUICK_LINKS_STATIC_PAGES
} from '~/data/mock/staticPage'
import FooterItemBlock from './FooterItemBlock'
import FooterLinksBlock from './FooterLinksBlock'

const FooterInfoBlock = () => {
  return (
    <Stack direction={{ xs: 'column', lg: 'row' }} width="100%">
      <Stack
        direction="row"
        spacing={{ xs: 10, md: 5.5 }}
        justifyContent="space-between"
        margin={{ xs: '0 0 14px', md: '10px 0 0 25px' }}
      >
        <FooterItemBlock title="Reach us" maxWidth="335px">
          <ContactInformationList />
        </FooterItemBlock>

        <FooterLinksBlock title="Company" items={COMPANY_STATIC_PAGES} />
      </Stack>

      <Stack
        direction="row"
        spacing={7.5}
        justifyContent="space-between"
        margin={{ xs: '0 0 40px', md: '10px 0 0 61px' }}
      >
        <FooterLinksBlock title="Legal" items={LEGAL_STATIC_PAGES} />

        <FooterLinksBlock
          title="Quick Links"
          items={QUICK_LINKS_STATIC_PAGES}
        />
      </Stack>

      <Stack alignItems="center" marginLeft={{ xs: 0, md: '96px' }}>
        <JoinNewsletterForm />
      </Stack>
    </Stack>
  )
}

export default FooterInfoBlock
