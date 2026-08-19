import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Auditoria e Revisão de CPR e CCR | Braga & Xavier Advogados',
  description:
    'Auditoria contábil e jurídica em Cédulas de Produto Rural (Física e Financeira) e Cédulas de Crédito Rural. Expurgo de juros abusivos, encargos ilegais e vendas casadas.',
  alternates: {
    canonical: '/agronegocio/auditoria-cpr-ccr',
  },
  openGraph: {
    title: 'Auditoria e Revisão de CPR e CCR | Braga & Xavier Advogados',
    description:
      'Perícia técnica em contratos e cédulas do agronegócio. Identifique ilegalidades e reduza o saldo devedor cobrado por bancos e tradings.',
    url: 'https://bragaexavieradvogados.com.br/agronegocio/auditoria-cpr-ccr',
    images: ['/og-image.jpg'],
  },
}

export default function AuditoriaCprLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
