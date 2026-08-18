import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Alongamento de Dívida Rural e Agronegócio | Braga & Xavier Advogados',
  description:
    'Advocacia especializada em crédito rural, aplicação da Súmula 298 do STJ, auditoria de CPR/CCR e defesa contra penhora de propriedade rural e maquinários.',
  alternates: {
    canonical: '/agronegocio',
  },
  openGraph: {
    title: 'Alongamento de Dívida Rural e Agronegócio | Braga & Xavier Advogados',
    description:
      'Segurança jurídica para proteger a safra, a terra e o patrimônio do produtor. Reestruturação e alongamento de crédito rural em todo o Brasil.',
    url: 'https://bragaexavieradvogados.com.br/agronegocio',
    images: ['/og-image.jpg'],
  },
}

export default function AgronegocioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
