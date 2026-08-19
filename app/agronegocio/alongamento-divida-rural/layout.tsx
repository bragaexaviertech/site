import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Alongamento de Dívida Rural (Súmula 298 STJ) | Braga & Xavier Advogados',
  description:
    'Direito à prorrogação compulsória de dívidas de crédito rural decorrentes de frustração de safra, seca ou queda de preços de mercado. Aplicação da Súmula 298 do STJ e Manual de Crédito Rural.',
  alternates: {
    canonical: '/agronegocio/alongamento-divida-rural',
  },
  openGraph: {
    title: 'Alongamento de Dívida Rural (Súmula 298 STJ) | Braga & Xavier Advogados',
    description:
      'O alongamento de crédito rural é um direito subjetivo do produtor assegurado por lei, e não favor do banco. Proteja sua safra e sua terra.',
    url: 'https://bragaexavieradvogados.com.br/agronegocio/alongamento-divida-rural',
    images: ['/og-image.jpg'],
  },
}

export default function AlongamentoLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
