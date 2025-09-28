import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import AnimatedHeader from '@/components/animated-header'
import { SiteFooter } from '@/components/site-footer'
import { ThemeProvider } from '@/components/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Muhammad Aslan - Web Developer & WordPress Specialist',
  description: 'Professional web developer specializing in modern web applications, WordPress development, and digital solutions.',
  keywords: ['web developer', 'wordpress', 'nextjs', 'react', 'typescript'],
  authors: [{ name: 'Muhammad Aslan' }],
  creator: 'Muhammad Aslan',
  icons: {
    icon: '/images/Fav-icon copy.png',
    shortcut: '/images/Fav-icon copy.png',
    apple: '/images/Fav-icon copy.png',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://muhammadaslan.dev',
    title: 'Muhammad Aslan - Web Developer & WordPress Specialist',
    description: 'Professional web developer specializing in modern web applications, WordPress development, and digital solutions.',
    siteName: 'Muhammad Aslan Portfolio',
    images: ['/images/Fav-icon copy.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Muhammad Aslan - Web Developer & WordPress Specialist',
    description: 'Professional web developer specializing in modern web applications, WordPress development, and digital solutions.',
    images: ['/images/Fav-icon copy.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col">
            <AnimatedHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}