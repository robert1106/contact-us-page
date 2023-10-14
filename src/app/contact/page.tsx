import { Metadata } from 'next'
import ContactView from '~/views/Contact'

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact Us'
}

export default function Contact() {
  return <ContactView />
}
