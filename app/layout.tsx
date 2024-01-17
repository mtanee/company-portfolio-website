import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import Nav2 from './components/Nav2'
import BackToTopButton from './components/Backtop'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Web3fy',
  description: 'Pioneering Web3 Solutions for Tomorrow`s Digital World',
  icons:'/2.png'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className} >
      <Nav2 /> 
      <BackToTopButton />
            <div className=' overflow-hidden'>
        {children}
        </div>
        </body>
    </html>
  )
}
