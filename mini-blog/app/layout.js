import { Navigation } from './components/Navigation'

export default function RootLayout ({ children }) {
  return (
    <html>
      <head>
        <title>Seag es un organoide</title>
      </head>
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
