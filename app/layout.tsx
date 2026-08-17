import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Plus_Jakarta_Sans } from 'next/font/google'
import './globals.css'

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
  display: 'swap',
})

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-jakarta',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Braga & Xavier Advogados | Direito Bancário, Dívidas Empresariais e Agronegócio',
  description:
    'Sociedade de advogados especializada em conflitos bancários, defesa em execuções, reestruturação de dívidas empresariais e assessoria jurídica ao produtor rural (alongamento de dívidas e crédito rural). Atendimento em Montes Claros - MG e em todo o Brasil.',
  metadataBase: new URL('https://bragaexavieradvogados.com.br'),
  alternates: {
    canonical: '/',
  },
  keywords: [
    'Braga e Xavier Advogados',
    'Direito Bancário Montes Claros',
    'Advogado Dívidas Bancárias',
    'Alongamento de Dívida Rural',
    'Crédito Rural Advogado',
    'Revisão Contratual Bancária',
    'Defesa Execução de Título Extrajudicial',
    'Reestruturação de Dívidas Empresariais',
    'Direito do Agronegócio Minas Gerais',
  ],
  authors: [{ name: 'Braga & Xavier Advogados' }],
  creator: 'Braga & Xavier Advogados',
  publisher: 'Braga & Xavier Advogados',
  openGraph: {
    title: 'Braga & Xavier Advogados | Direito Bancário e Agronegócio',
    description:
      'Estratégia jurídica para proteger patrimônio e reorganizar dívidas. Especialistas em conflitos com bancos, dívidas empresariais e demandas do produtor rural.',
    url: 'https://bragaexavieradvogados.com.br',
    siteName: 'Braga & Xavier Advogados',
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Braga & Xavier Advogados | Direito Bancário e Agronegócio',
    description:
      'Estratégia jurídica especializada para proteção patrimonial, renegociação de dívidas e crédito rural.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/icon-light-32x32.png', media: '(prefers-color-scheme: light)' },
      { url: '/icon-dark-32x32.png', media: '(prefers-color-scheme: dark)' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0A0A0C',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  name: 'Braga & Xavier Advogados',
  description:
    'Escritório de advocacia especializado em Direito Bancário, Reestruturação de Dívidas Empresariais e Direito Rural/Agronegócio.',
  url: 'https://bragaexavieradvogados.com.br',
  telephone: '+55-31-97174-6972',
  priceRange: '$$$',
  image: 'https://bragaexavieradvogados.com.br/assets/escritorio.png',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'R. Irmã Beata, 18 – Lj 03 – Centro',
    addressLocality: 'Montes Claros',
    addressRegion: 'MG',
    postalCode: '39400-110',
    addressCountry: 'BR',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: -16.7267,
    longitude: -43.8644,
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
  ],
  areaServed: [
    {
      '@type': 'Country',
      name: 'Brasil',
    },
    {
      '@type': 'State',
      name: 'Minas Gerais',
    },
  ],
  sameAs: [
    'https://instagram.com/bragaexavier',
  ],
  knowsAbout: [
    'Direito Bancário',
    'Defesa em Execuções Bancárias',
    'Revisão Contratual',
    'Alongamento de Dívida Rural (Súmula 298 STJ)',
    'Crédito Rural e CPR',
    'Reestruturação de Passivo Empresarial',
    'Proteção Patrimonial',
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${cormorant.variable} ${jakarta.variable} dark`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-ink text-ivory font-sans antialiased selection:bg-forest selection:text-ivory min-h-screen">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
