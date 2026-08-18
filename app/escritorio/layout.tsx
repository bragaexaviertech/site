import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'O Escritório & Sócios Fundadores | Braga & Xavier Advogados',
  description:
    'Conheça a Braga & Xavier Advogados: boutique jurídica em Montes Claros – MG com atendimento direto e artesanal pelos sócios fundadores e atuação em todo o Brasil.',
  alternates: {
    canonical: '/escritorio',
  },
  openGraph: {
    title: 'O Escritório & Sócios Fundadores | Braga & Xavier Advogados',
    description:
      'Rigor técnico, independência e atendimento direto pelos fundadores. Conheça a sede e o corpo jurídico da Braga & Xavier.',
    url: 'https://bragaexavieradvogados.com.br/escritorio',
    images: ['/og-image.jpg'],
  },
}

export default function EscritorioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
