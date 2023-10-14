import { Container } from '@mui/material'
import Footer from './Footer'
import Header from './Header'

interface MainLayoutProps {
  children: React.ReactNode
}

const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <>
      <Header />

      <Container
        component="main"
        maxWidth={false}
        sx={{
          maxWidth: '1288px',
          px: '20px'
        }}
      >
        {children}
      </Container>

      <Footer />
    </>
  )
}

export default MainLayout
