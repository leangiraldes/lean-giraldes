import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { SITE, CONTACT } from '@/lib/config'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const description =
  'Branding, posicionamento e tecnologia para transformar negócios familiares em marcas mais fortes, modernas e confiáveis.'

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),

  title: {
    default: `${SITE.name} | Modernizando Empresas Familiares`,
    template: `%s | ${SITE.name}`,
  },
  description,
  keywords: [
    'branding', 'rebranding', 'empresas familiares', 'presença digital',
    'automação', 'tecnologia', 'posicionamento', 'Lean Giraldes',
    'modernização empresarial', 'negócios locais', 'identidade visual',
    'consultoria empresarial', 'Presidente Prudente',
  ],
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,

  alternates: { canonical: '/' },

  // Favicon e ícone da aba — usa o logo real da marca
  icons: {
    icon: [
      { url: '/images/logo.png', type: 'image/png' },
    ],
    apple: '/images/logo.png',
    shortcut: '/images/logo.png',
  },

  openGraph: {
    type: 'website',
    locale: SITE.locale,
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} | Modernizando Empresas Familiares`,
    description,
    images: [{ url: '/images/logo.png', width: 1000, height: 1000, alt: 'Lean Giraldes' }],
  },

  twitter: {
    card: 'summary_large_image',
    title: `${SITE.name} | Modernizando Empresas Familiares`,
    description,
    images: ['/images/logo.png'],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={inter.variable} suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <a
          href="#conteudo-principal"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[200] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-blue-600 focus:text-white focus:text-sm focus:font-medium"
        >
          Ir para o conteúdo principal
        </a>
        {children}
      </body>
    </html>
  )
}
