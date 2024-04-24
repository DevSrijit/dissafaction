import "../globals.css"

export const metadata = {
  title: 'Reward',
  description: 'Avan',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body>
      {children}
    </body>
  </html>
  )
}
