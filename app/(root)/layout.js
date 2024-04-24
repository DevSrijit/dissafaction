import { Playfair_Display } from 'next/font/google'
import { Newsreader } from 'next/font/google'
import '../globals.css'

const playfair_display = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair_display',
})

export const metadata = {
  title: 'Terms & Conditions',
  description: 'Avan',
}

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className={playfair_display.variable}>
        {children}
      </body>
    </html>
  )
}