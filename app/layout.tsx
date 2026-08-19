import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Plus_Jakarta_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { Preloader } from '@/components/preloader'
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

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_PROJECT_PRODUCTION_URL ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}` : null) ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : 'https://bragaexavier.vercel.app')

export const metadata: Metadata = {
  title: 'Braga & Xavier Advogados | Direito Bancário, Empresarial e Agronegócio',
  description:
    'Braga & Xavier Advogados — Advocacia estratégica especializada em proteção patrimonial, conflitos bancários, reestruturação de dívidas empresariais e agronegócio em todo o Brasil.',
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: '/',
  },
  keywords: [
    'Braga e Xavier Advogados',
    'Direito Bancário Montes Claros',
    'Advogado Dívidas Bancárias',
    'Alongamento de Dívida Rural',
    'Crédito Rural Advogado',
    'Súmula 298 STJ',
    'Revisão Contratual Bancária',
    'Defesa Execução de Título Extrajudicial',
    'Reestruturação de Dívidas Empresariais',
    'Direito do Agronegócio Minas Gerais',
  ],
  authors: [{ name: 'Braga & Xavier Advogados' }],
  creator: 'Braga & Xavier Advogados',
  publisher: 'Braga & Xavier Advogados',
  openGraph: {
    title: 'Braga & Xavier Advogados | Advocacia Estratégica',
    description:
      'Defesa estratégica na proteção do patrimônio e reorganização de dívidas bancárias, empresariais e rurais. Atendimento direto pelos fundadores.',
    url: siteUrl,
    siteName: 'Braga & Xavier Advogados',
    locale: 'pt_BR',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        secureUrl: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        type: 'image/jpeg',
        alt: 'Braga & Xavier Advogados — Sócios Fundadores',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Braga & Xavier Advogados | Advocacia Estratégica',
    description:
      'Defesa estratégica na proteção do patrimônio e reorganização de dívidas bancárias, empresariais e rurais.',
    images: [`${siteUrl}/og-image.jpg`],
  },
  icons: {
    icon: [
      { url: '/logo-BX.png', type: 'image/png' },
    ],
    apple: '/logo-BX.png',
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
  '@graph': [
    {
      '@type': 'LegalService',
      '@id': `${siteUrl}/#organization`,
      name: 'Braga & Xavier Advogados',
      alternateName: 'Braga e Xavier Advocacia',
      url: siteUrl,
      logo: `${siteUrl}/logo-BX.png`,
      image: `${siteUrl}/og-image.jpg`,
      description:
        'Boutique jurídica especializada em Direito Bancário, Reestruturação de Dívidas Empresariais, Direito Rural e Agronegócio.',
      telephone: '+55-31-97174-6972',
      email: 'contato@bragaexavier.adv.br',
      address: {
        '@type': 'PostalAddress',
        streetAddress: 'R. Irmã Beata, 18 – Lj 03, Centro',
        addressLocality: 'Montes Claros',
        addressRegion: 'MG',
        postalCode: '39400-110',
        addressCountry: 'BR',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: -16.7267,
        longitude: -43.8656,
      },
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        opens: '08:00',
        closes: '18:00',
      },
      sameAs: ['https://instagram.com/bragaexavier'],
      priceRange: '$$$',
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5.0',
        reviewCount: '37',
      },
    },
    {
      '@type': 'FAQPage',
      '@id': 'https://bragaexavieradvogados.com.br/#faq',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'Como funciona o direito de alongamento da dívida rural pela Súmula 298 do STJ?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'O alongamento de dívidas originadas de crédito rural é um direito subjetivo do produtor rural assegurado por lei (Manual de Crédito Rural e Súmula 298 do STJ), e não uma mera faculdade da instituição financeira, desde que comprovada a incapacidade temporária de pagamento decorrente de frustração de safra, intempéries climáticas ou adversidades de mercado.',
          },
        },
        {
          '@type': 'Question',
          name: 'Recebi uma notificação de Execução de Título ou Penhora. O que fazer?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Ao receber uma citação em execução, os prazos processuais para defesa (como Embargos à Execução ou Exceção de Pré-Executividade) são exíguos. É crucial submeter o contrato, a planilha de cálculo e os atos de penhora imediatamente a uma análise jurídica especializada para impugnar juros abusivos, nulidades de garantias e proteger o patrimônio da família ou da empresa.',
          },
        },
        {
          '@type': 'Question',
          name: 'O escritório atende clientes fora de Montes Claros ou em outros estados?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sim. A Braga & Xavier Advogados possui sede física em Montes Claros - MG e opera de forma 100% digital e integrada em todos os Tribunais de Justiça e Tribunais Federais do Brasil, oferecendo atendimento direto e videoconferências com os sócios.',
          },
        },
        {
          '@type': 'Question',
          name: 'Como funciona o sigilo e a análise preliminar dos documentos?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Todas as informações e documentos enviados ao escritório são protegidos por rigoroso sigilo profissional, resguardados pelo Estatuto da Advocacia (Lei Federal 8.906/94) e pela LGPD. A análise inicial tem como objetivo diagnosticar as vulnerabilidades da cobrança e desenhar a estratégia viável.',
          },
        },
        {
          '@type': 'Question',
          name: 'Quais documentos são necessários para a primeira análise jurídica?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Geralmente, são solicitados: cópia do contrato bancário ou cédula (CCB, CPR, CCR), extratos da operação, demonstrativo da evolução do débito ou cópia do processo de cobrança judicial/execução, caso já exista.',
          },
        },
      ],
    },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${jakarta.variable} ${cormorant.variable} bg-[#0A0A0C]`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-ink text-ivory antialiased selection:bg-forest selection:text-ivory max-w-full overflow-x-clip">
        <Preloader />
        {children}
        <Analytics />
      </body>
    </html>
  )
}
