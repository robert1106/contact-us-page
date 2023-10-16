import {
  CSSProperties,
  TypographyOptions,
  Variant
} from '@mui/material/styles/createTypography'
/**
 * Automatically self-host any Google Font. Fonts are included
 * in the deployment and served from the same domain as your deployment.
 * No requests are sent to Google by the browser.
 */
import { Inter, Manrope, Poppins, Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: ['400', '700'],
  variable: '--font-roboto',
  subsets: ['latin'],
  display: 'swap'
})

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  variable: '--font-poppins',
  subsets: ['latin'],
  display: 'swap'
})

const manrope = Manrope({
  weight: ['500'],
  variable: '--font-manrope',
  subsets: ['latin'],
  display: 'swap'
})

const inter = Inter({
  weight: ['800'],
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap'
})

export const CLASS_FONT = `${roboto.variable} ${poppins.variable} ${manrope.variable} ${inter.variable}`

export const fonts = {
  poppins: 'var(--font-poppins)',
  roboto: 'var(--font-roboto)',
  manrope: 'var(--font-manrope)',
  inter: 'var(--font-inter)'
}

export const typographyVariant: Record<Variant, CSSProperties> = {
  h1: {
    fontFamily: fonts.poppins,
    fontSize: '40px',
    lineHeight: '40px',
    fontWeight: 700
  },
  h2: {
    fontFamily: fonts.poppins,
    fontSize: '24px',
    lineHeight: '24px',
    fontWeight: 600
  },
  h3: {
    fontFamily: fonts.poppins,
    fontSize: '18px',
    lineHeight: '18px',
    fontWeight: 500
  },
  h4: {
    fontFamily: fonts.poppins,
    fontSize: '14px',
    lineHeight: '21px',
    fontWeight: 400
  },
  h5: {
    fontFamily: fonts.poppins,
    fontSize: '18px',
    lineHeight: '18px',
    fontWeight: 400
  },
  h6: {
    fontFamily: fonts.poppins,
    fontSize: '11px',
    lineHeight: '11px',
    fontWeight: 400
  },
  body1: {
    fontFamily: fonts.poppins,
    fontSize: '18px',
    lineHeight: '26px',
    fontWeight: 600
  },
  body2: {
    fontFamily: fonts.poppins,
    fontSize: '16px',
    lineHeight: '26px',
    fontWeight: 600
  },
  subtitle1: {
    fontFamily: fonts.poppins,
    fontSize: '16px',
    lineHeight: '24px',
    fontWeight: 400
  },
  subtitle2: {
    fontFamily: fonts.poppins,
    fontSize: '12px',
    lineHeight: '20px',
    fontWeight: 400
  },
  button: {
    fontFamily: fonts.manrope,
    fontWeight: 500,
    fontSize: '13px',
    lineHeight: '19px'
  },
  caption: {
    fontFamily: fonts.poppins,
    fontSize: '28px',
    lineHeight: '28px',
    fontWeight: 600
  },
  overline: {
    fontFamily: fonts.poppins,
    fontSize: '20px',
    lineHeight: '20px',
    fontWeight: 600
  }
}

const typography: TypographyOptions = {
  fontFamily: fonts.poppins,
  ...typographyVariant
}

export default typography
