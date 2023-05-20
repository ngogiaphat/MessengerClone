import './globals.css'
import { Inter } from 'next/font/google'
const inter = Inter({subsets: ['latin']})
export const metadata = {
  title: 'Messenger Make By Me',
  description: 'Messenger Make By Next.js',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang = "en">
      <body className = {inter.className}>{children}</body>
    </html>
  )
}