import { Inter } from 'next/font/google'
import ThemeProvider from './components/ThemeProvider'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata = {
  title: 'Abdelhakim ELAKROUTI — Développeur Web Freelance à Orléans',
  description:
    'Création de sites web sur mesure : one pages, sites vitrines, systèmes de réservation et paiement. Développeur indépendant basé à Orléans.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr" className={inter.variable} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `try{const t=localStorage.getItem('theme');if(t!=='light')document.documentElement.classList.add('dark')}catch(e){document.documentElement.classList.add('dark')}`,
          }}
        />
      </head>
      <body className="font-sans">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
