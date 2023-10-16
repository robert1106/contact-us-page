import { Box, Stack, StackProps } from '@mui/material'

import { Text } from '~/components/base'
import { reachUseList } from '~/data/mock/reachUseList'

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
