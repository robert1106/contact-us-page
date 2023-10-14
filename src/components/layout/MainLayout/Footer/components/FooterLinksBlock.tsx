import Link from 'next/link'
import { Text } from '~/components/base'
import FooterItemBlock from './FooterItemBlock'

interface FooterLinksBlockProps {
  title: string
  items: StaticPageModel[]
}

const FooterLinksBlock = ({ title, items }: FooterLinksBlockProps) => {
  return (
    <FooterItemBlock title={title}>
      {items.map((item) => (
        <Link
          key={item.title}
          prefetch={false}
          href={item.slug}
          style={{
            color: 'inherit',
            textDecoration: 'none'
          }}
        >
          <Text
            size={{ xs: 'subtitle2', md: 'subtitle1' }}
            sx={{
              '&:hover': {
                textDecoration: 'underline'
              }
            }}
          >
            {item.title}
          </Text>
        </Link>
      ))}
    </FooterItemBlock>
  )
}

export default FooterLinksBlock
