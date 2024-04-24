import "../globals.css"

export const metadata = {
  title: 'Lens',
  description: 'Avan'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white">{children}</body>
    </html>
  )
}
