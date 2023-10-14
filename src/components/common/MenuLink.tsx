'use client'
import Link, { LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'
import { Text } from '~/components/base'
import { fonts } from '~/theme/mui'

interface MenuLincProps extends LinkProps {
  children: React.ReactNode
}

export const MenuLink = ({ children, ...props }: MenuLincProps) => {
  const pathname = usePathname()
  const isActive = pathname === props.href

  return (
    <Link
      style={{
        fontSize: 'inherit',
        color: 'inherit',
        textDecoration: 'none'
      }}
      {...props}
    >
      <Text
        size={{ xs: 'h4', md: 'subtitle1' }}
        sx={{
          fontWeight: isActive ? '600' : '400',
          fontFamily: fonts.roboto,

          '&:hover': {
            textDecoration: 'underline'
          }
        }}
      >
        {children}
      </Text>
    </Link>
  )
}
