import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Mayssa's Portfolio",
  description: 'Personal portfolio website',
  icons: {
    icon: '/letter-m.png', // your favicon
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}