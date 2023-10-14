import type { Metadata } from 'next'
import MainLayout from '~/components/layout/MainLayout'
import AppProvider from '~/providers/AppProvider'
import { CLASS_FONT } from '~/theme/mui'

export const metadata: Metadata = {
  title: 'Logo Here',
  description: 'Logo Here'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={CLASS_FONT}>
        <AppProvider>
          <MainLayout>{children}</MainLayout>
        </AppProvider>
      </body>
    </html>
  )
}
