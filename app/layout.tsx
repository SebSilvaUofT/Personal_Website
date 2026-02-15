import React from "react"
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins'
});

export const metadata: Metadata = {
  title: 'Sebastian Silva - Biomedical Engineering',
  description: 'Portfolio of Sebastian Silva, MASc in Biomedical Engineering with expertise in wearable device design and research.',
  metadataBase: new URL('https://seabass.vercel.app'),
  icons: {
    icon: '/headshot-circle.png',
    apple: '/headshot-circle.png',
  },
  openGraph: {
    title: 'Sebastian Silva - Biomedical Engineering',
    description: 'Portfolio of Sebastian Silva, MASc in Biomedical Engineering with expertise in wearable device design and research.',
    type: 'website',
    images: [
      {
        url: '/linkedinheadshot.JPG',
        width: 1200,
        height: 630,
        alt: 'Sebastian Silva - MASc Biomedical Engineering',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sebastian Silva - Biomedical Engineering',
    description: 'Portfolio of Sebastian Silva, MASc in Biomedical Engineering with expertise in wearable device design and research.',
    images: ['/linkedinheadshot.JPG'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${poppins.className} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
