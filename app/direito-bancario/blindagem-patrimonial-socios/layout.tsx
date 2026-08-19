import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Blindagem Patrimonial de Sócios & Avalistas | Braga & Xavier Advogados',
  description:
    'Defesa jurídica do patrimônio pessoal dos sócios, fiadores e avalistas contra dívidas contraídas pela pessoa jurídica. Proteção de bem de família (Lei nº 8.009/90) e combate à desconsideração abusiva da personalidade jurídica.',
  alternates: {
    canonical: '/direito-bancario/blindagem-patrimonial-socios',
  },
  openGraph: {
    title: 'Blindagem Patrimonial de Sócios & Avalistas | Braga & Xavier Advogados',
    description:
      'Proteja seu patrimônio pessoal, imóvel residencial e investimentos contra cobranças bancárias direcionadas à sua empresa.',
    url: 'https://bragaexavieradvogados.com.br/direito-bancario/blindagem-patrimonial-socios',
    images: ['/og-image.jpg'],
  },
}

export default function BlindagemSociosLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
