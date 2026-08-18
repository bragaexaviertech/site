import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contato & Localização da Sede | Braga & Xavier Advogados',
  description:
    'Fale diretamente com os advogados especialistas da Braga & Xavier. Sede em Montes Claros – MG (R. Irmã Beata, 18, Centro) e plantão 24h para urgências judiciais.',
  alternates: {
    canonical: '/contato',
  },
  openGraph: {
    title: 'Contato & Localização da Sede | Braga & Xavier Advogados',
    description:
      'Fale diretamente com os advogados fundadores. Agende sua reunião presencial ou videoconferência com total sigilo.',
    url: 'https://bragaexavieradvogados.com.br/contato',
    images: ['/og-image.jpg'],
  },
}

export default function ContatoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
