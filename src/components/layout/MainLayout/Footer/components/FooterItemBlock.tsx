import { Stack, StackProps } from '@mui/material'
import { Text } from '~/components/base'
import { palette } from '~/theme/mui'

interface FooterItemBlockProps extends StackProps {
  title: string
}

const FooterItemBlock = ({
  title,
  children,
  ...props
}: FooterItemBlockProps) => {
  return (
    <Stack
      direction="column"
      spacing={2.4}
      color={palette.common.white}
      {...props}
    >
      <Text size={{ xs: 'body2', md: 'body1' }}>{title}</Text>

      <Stack direction="column" spacing={{ xs: 2.2, md: 3 }}>
        {children}
      </Stack>
    </Stack>
  )
}

export default FooterItemBlock
