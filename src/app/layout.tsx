import type { Metadata } from 'next'
import MainLayout from '~/components/layout/MainLayout'
import AppProvider from '~/containers/AppProvider'
import { CLASS_FONT } from '~/theme/mui'

/**
 * Next.js has a Metadata API that can be used to define your application
 * metadata (e.g. meta and link tags inside your HTML head element) for
 * improved SEO and web shareability.
 */

export const metadata: Metadata = {
  title: 'Logo Here',
  description: 'Logo Here'
}

/**
 * The root layout is defined at the top level of the app directory and applies
 * to all routes. This layout enables you to modify the initial HTML returned
 * from the server.
 */

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
