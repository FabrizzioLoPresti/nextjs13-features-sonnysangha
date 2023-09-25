import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Navbar from '@/components/navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Next.js 13 | Features | Sonny Sangha',
  description:
    'Next.js 13 is here! Learn about the new features and how to use them in your projects.',
  keywords:
    'next.js, nextjs, next, react, sonny sangha, sonny, sangha, sonny sangha nextjs, sonny sangha next.js, sonny sangha next'
}

export default function RootLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
