import React from 'react'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { InstagramIcon } from '@/components/icons'

export function InstagramFeed() {
  const posts = [
    {
      id: 1,
      title: 'Decisões Estratégicas',
      category: 'Direito Bancário',
      date: 'Análise Recente',
      img: '/assets/escritorio.jpg',
    },
    {
      id: 2,
      title: 'Alongamento de Dívida Rural',
      category: 'Crédito Rural',
      date: 'Jurisprudência',
      img: '/assets/agronegocio.png',
    },
    {
      id: 3,
      title: 'Reestruturação Empresarial',
      category: 'Defesa de Caixa',
      date: 'Artigo Técnico',
      img: '/assets/sala-reuniao.jpg',
    },
  ]

  return (
    <section id="conteudo-section" className="py-16 md:py-24 bg-ink border-b hairline scroll-mt-16 w-full">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-[5vw]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div id="ig-text-col" className="reveal-on-scroll lg:col-span-4">
            <p className="text-[.58rem] tracking-[.3em] uppercase text-gold font-normal mb-1.5">
              Conteúdo &bull; @bragaexavier
            </p>
            <h2 className="font-light text-xl sm:text-2xl lg:text-3xl leading-[1.15] text-balance text-ivory tracking-tight">
              Informação jurídica como instrumento de estratégia.
            </h2>
            <p className="mt-3.5 text-muted leading-relaxed text-xs font-light">
              No Instagram <strong className="text-champagne font-normal">@bragaexavier</strong>,
              compartilhamos análises práticas sobre jurisprudência bancária, crédito rural,
              proteção de patrimônio e decisões recentes dos Tribunais.
            </p>
            <a
              href="https://instagram.com/bragaexavier"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost mt-5"
            >
              <span>Acompanhar @bragaexavier</span>
              <InstagramIcon className="w-3.5 h-3.5" />
            </a>
          </div>

          <div
            id="ig-cards-col"
            className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-3.5 w-full"
          >
            <a
              href="https://instagram.com/bragaexavier"
              target="_blank"
              rel="noopener noreferrer"
              className="reveal-on-scroll ig-card glass p-4 border border-white/10 flex flex-col justify-between min-h-[180px] group hover:border-gold/40 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between text-muted text-[.55rem] mb-2.5">
                  <span className="text-gold uppercase tracking-wider font-medium">Direito Rural</span>
                  <InstagramIcon className="w-3.5 h-3.5 text-muted group-hover:text-gold transition-colors" />
                </div>
                <h4 className="text-xs text-ivory leading-snug font-normal group-hover:text-gold transition-colors">
                  Súmula 298 STJ: Quando o banco é obrigado a prorrogar a dívida de safra?
                </h4>
              </div>
              <span className="text-[.55rem] tracking-[.15em] uppercase text-muted/60 group-hover:text-champagne transition-colors mt-3">
                Ler no Instagram &rarr;
              </span>
            </a>

            <a
              href="https://instagram.com/bragaexavier"
              target="_blank"
              rel="noopener noreferrer"
              className="reveal-on-scroll reveal-delay-1 ig-card glass p-4 border border-white/10 flex flex-col justify-between min-h-[180px] group hover:border-gold/40 transition-colors sm:translate-y-2"
            >
              <div>
                <div className="flex items-center justify-between text-muted text-[.55rem] mb-2.5">
                  <span className="text-gold uppercase tracking-wider font-medium">Bancário PJ</span>
                  <InstagramIcon className="w-3.5 h-3.5 text-muted group-hover:text-gold transition-colors" />
                </div>
                <h4 className="text-xs text-ivory leading-snug font-normal group-hover:text-gold transition-colors">
                  Execução de CCB e penhora de patrimônio dos sócios: Como se defender?
                </h4>
              </div>
              <span className="text-[.55rem] tracking-[.15em] uppercase text-muted/60 group-hover:text-champagne transition-colors mt-3">
                Ler no Instagram &rarr;
              </span>
            </a>

            <a
              href="https://instagram.com/bragaexavier"
              target="_blank"
              rel="noopener noreferrer"
              className="reveal-on-scroll reveal-delay-2 ig-card glass p-4 border border-white/10 flex flex-col justify-between min-h-[180px] group hover:border-gold/40 transition-colors"
            >
              <div>
                <div className="flex items-center justify-between text-muted text-[.55rem] mb-2.5">
                  <span className="text-gold uppercase tracking-wider font-medium">Defesa</span>
                  <InstagramIcon className="w-3.5 h-3.5 text-muted group-hover:text-gold transition-colors" />
                </div>
                <h4 className="text-xs text-ivory leading-snug font-normal group-hover:text-gold transition-colors">
                  Bem de Família e Pequena Propriedade Rural: A blindagem contra penhoras.
                </h4>
              </div>
              <span className="text-[.55rem] tracking-[.15em] uppercase text-muted/60 group-hover:text-champagne transition-colors mt-3">
                Ler no Instagram &rarr;
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
