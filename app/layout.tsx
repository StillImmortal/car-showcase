import Providers from '@/utils/Providers'
import './globals.css'
import { Inter } from 'next/font/google'
import { Navbar, Footer } from '@/components'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Drive Hub',
  description: 'Discover the best cars in the world.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href={"/images/logo-sm.svg"} />
      </head>
      <body className={`${inter.className} relative bg-[#111111]`}>
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
