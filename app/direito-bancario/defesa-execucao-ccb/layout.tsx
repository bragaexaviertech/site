import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Defesa em Execução de CCB & Títulos Bancários (15 Dias) | Braga & Xavier Advogados',
  description:
    'Defesa técnica e urgente em Execuções de Título Extrajudicial (Cédula de Crédito Bancário - CCB). Embargos à Execução, Exceção de Pré-Executividade e suspensão de penhoras no prazo legal de 15 dias.',
  alternates: {
    canonical: '/direito-bancario/defesa-execucao-ccb',
  },
  openGraph: {
    title: 'Defesa em Execução de CCB & Títulos Bancários | Braga & Xavier Advogados',
    description:
      'Recebeu citação em execução bancária? O prazo é de 15 dias úteis para apresentar defesa e impedir o bloqueio de contas e bens.',
    url: 'https://bragaexavieradvogados.com.br/direito-bancario/defesa-execucao-ccb',
    images: ['/og-image.jpg'],
  },
}

export default function DefesaCcbLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
