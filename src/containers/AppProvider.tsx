/**
 * This file stores all the application providers
 */

import { ReactNode } from 'react'
import ThemeRegistry from '~/containers/ThemeRegistry'

interface AppProviderProps {
  children: ReactNode
}

const AppProvider = ({ children }: AppProviderProps) => {
  return <ThemeRegistry options={{ key: 'mui' }}>{children}</ThemeRegistry>
}

export default AppProvider
