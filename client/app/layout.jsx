import { Footer, Navbar } from '../components'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({children}) {
  return (
    <html lang="en">
      <Navbar />
      <body className={inter.className}>{children}</body>
      <Footer />
    </html>
  )
}
