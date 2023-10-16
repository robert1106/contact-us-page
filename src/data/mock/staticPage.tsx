import {
  PATH_ABOUT,
  PATH_BLOG,
  PATH_CONTACT
} from '~/utils/constants/paths.constants'

export const COMPANY_STATIC_PAGES: StaticPageModel[] = [
  {
    title: 'About',
    slug: PATH_ABOUT
  },
  {
    title: 'Contact',
    slug: PATH_CONTACT
  },
  {
    title: 'Blogs',
    slug: PATH_BLOG
  }
]

export const LEGAL_STATIC_PAGES: StaticPageModel[] = [
  {
    title: 'Privacy Policy',
    slug: '/privacy-policy'
  },
  {
    title: 'Terms & Services',
    slug: '/terms-services'
  },
  {
    title: 'Terms of Use',
    slug: '/terms-of-use'
  },
  {
    title: 'Refund Policy',
    slug: '/refund-policy'
  }
]

export const QUICK_LINKS_STATIC_PAGES: StaticPageModel[] = [
  {
    title: 'Techlabz Keybox',
    slug: '/techlabz-keybox'
  },
  {
    title: 'Downloads',
    slug: '/downloads'
  },
  {
    title: 'Forum',
    slug: '/forum'
  }
]
