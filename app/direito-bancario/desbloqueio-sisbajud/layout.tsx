import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Desbloqueio Urgente de Contas (Sisbajud / Teimosinha) | Braga & Xavier Advogados',
  description:
    'Plantão jurídico para liberação emergencial de contas bancárias, folha de pagamento, capital de giro e proventos salariais bloqueados via Sisbajud e repetição automática (teimosinha).',
  alternates: {
    canonical: '/direito-bancario/desbloqueio-sisbajud',
  },
  openGraph: {
    title: 'Desbloqueio Urgente de Contas (Sisbajud) | Braga & Xavier Advogados',
    description:
      'Teve sua conta ou capital de giro bloqueado pela Justiça? Atuação ágil para demonstrar impenhorabilidade e restabelecer o fluxo financeiro.',
    url: 'https://bragaexavieradvogados.com.br/direito-bancario/desbloqueio-sisbajud',
    images: ['/og-image.jpg'],
  },
}

export default function DesbloqueioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
