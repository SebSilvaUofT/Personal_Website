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
  title: 'Sebastian Silva - Biomedical Engineer',
  description: 'Portfolio of Sebastian Silva, MASc in Biomedical Engineering with expertise in wearable device design and research.',
  metadataBase: new URL('https://sebastiansilva.com'),
  openGraph: {
    title: 'Sebastian Silva - Biomedical Engineering',
    description: 'Portfolio of Sebastian Silva, MASc in Biomedical Engineering with expertise in wearable device design and research.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sebastian Silva - Biomedical Engineering',
    description: 'Portfolio of Sebastian Silva, MASc in Biomedical Engineering with expertise in wearable device design and research.',
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
