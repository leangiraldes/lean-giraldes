import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

// -------------------------------------------------------
// FONTE — Troque por outra do Google Fonts se quiser
// -------------------------------------------------------
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

// -------------------------------------------------------
// SEO — Edite os metadados aqui
// -------------------------------------------------------
export const metadata: Metadata = {
  title: 'Lean Giraldes | Modernizando Empresas Familiares',
  description:
    'Branding, posicionamento e tecnologia para transformar negócios familiares em marcas mais fortes, modernas e confiáveis.',
  keywords: [
    'branding',
    'rebranding',
    'empresas familiares',
    'presença digital',
    'automação',
    'tecnologia',
    'posicionamento',
    'Lean Giraldes',
    'modernização empresarial',
    'negócios locais',
    'identidade visual',
    'marketing digital',
    'Presidente Prudente',
    'redesign',
    'consultoria empresarial',
  ],
  authors: [{ name: 'Lean Giraldes', url: 'https://leangiraldes.com' }],
  creator: 'Lean Giraldes',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://leangiraldes.com',
    siteName: 'Lean Giraldes',
    title: 'Lean Giraldes | Modernizando Empresas Familiares',
    description:
      'Branding, posicionamento e tecnologia para transformar negócios familiares em marcas mais fortes, modernas e confiáveis.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lean Giraldes | Modernizando Empresas Familiares',
    description:
      'Branding, posicionamento e tecnologia para transformar negócios familiares em marcas mais fortes, modernas e confiáveis.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={inter.variable} suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
