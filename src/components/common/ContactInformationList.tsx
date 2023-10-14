import { Box, Stack, StackProps } from '@mui/material'

import EmailIcon from '~/assets/icons/footer/email-icon.svg'
import LocationIcon from '~/assets/icons/footer/location-icon.svg'
import PhoneIcon from '~/assets/icons/footer/phone-icon.svg'
import { Text } from '~/components/base'

const reachUseList = [
  {
    icon: <PhoneIcon />,
    title: '+1012 3456 789'
  },
  {
    icon: <EmailIcon />,
    title: 'demo@gmail.com'
  },
  {
    icon: <LocationIcon />,
    title: '132 Dartmouth Street Boston, Massachusetts 02156 United States'
  }
]

export const ContactInformationList = (stackProps: StackProps) => {
  return (
    <>
      {reachUseList.map(({ title, icon }) => (
        <Stack
          key={title}
          spacing={{ xs: 1, md: 3.2 }}
          direction={{ xs: 'column', md: 'row' }}
          {...stackProps}
        >
          <Box height="24px">{icon}</Box>

          <Text size={{ xs: 'subtitle2', md: 'subtitle1' }}>{title}</Text>
        </Stack>
      ))}
    </>
  )
}
