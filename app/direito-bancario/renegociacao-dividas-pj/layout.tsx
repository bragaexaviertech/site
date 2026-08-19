import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Reestruturação e Renegociação de Dívidas PJ | Braga & Xavier Advogados',
  description:
    'Estratégia jurídica para reestruturação de passivos bancários corporativos, liberação de travas de cartão/recebíveis, proteção de capital de giro e negociação de acordos com forte deságio.',
  alternates: {
    canonical: '/direito-bancario/renegociacao-dividas-pj',
  },
  openGraph: {
    title: 'Reestruturação de Dívidas PJ & Proteção de Caixa | Braga & Xavier Advogados',
    description:
      'Recupere o fôlego financeiro da sua empresa. Reduza o passivo bancário corporativo e proteja a operação contra exigências abusivas.',
    url: 'https://bragaexavieradvogados.com.br/direito-bancario/renegociacao-dividas-pj',
    images: ['/og-image.jpg'],
  },
}

export default function RenegociacaoPjLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
