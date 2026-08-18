import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Defesa em Execução Bancária e Dívidas Empresariais | Braga & Xavier Advogados',
  description:
    'Defesa combativa contra execuções de títulos (CCB), desbloqueio urgente de contas via Sisbajud, auditoria de juros abusivos e proteção patrimonial dos sócios.',
  alternates: {
    canonical: '/direito-bancario',
  },
  openGraph: {
    title: 'Defesa em Execução Bancária e Dívidas Empresariais | Braga & Xavier Advogados',
    description:
      'Defesa estratégica contra execuções bancárias, bloqueios e juros abusivos. Atuação rápida e proteção do caixa empresarial.',
    url: 'https://bragaexavieradvogados.com.br/direito-bancario',
    images: ['/og-image.jpg'],
  },
}

export default function DireitoBancarioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
