import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Proteção da Propriedade Rural & Impenhorabilidade | Braga & Xavier Advogados',
  description:
    'Defesa jurídica especializada contra a penhora da pequena propriedade rural familiar, colheitas, gado e maquinários agrícolas. Artigo 5º, XXVI da Constituição Federal e art. 833 do CPC.',
  alternates: {
    canonical: '/agronegocio/protecao-propriedade-rural',
  },
  openGraph: {
    title: 'Proteção da Propriedade Rural & Impenhorabilidade | Braga & Xavier Advogados',
    description:
      'A pequena propriedade rural trabalhada pela família é protegida pela Constituição contra penhoras por dívidas da atividade produtiva.',
    url: 'https://bragaexavieradvogados.com.br/agronegocio/protecao-propriedade-rural',
    images: ['/og-image.jpg'],
  },
}

export default function ProtecaoRuralLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
