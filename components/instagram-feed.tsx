import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import { InstagramIcon } from '@/components/icons'

export function InstagramFeed() {
  const cards = [
    { title: 'Bancário', desc: 'Revisão Contratual' },
    { title: 'Dívidas', desc: 'Renegociação com Deságio' },
    { title: 'Crédito', desc: 'Defesa em Execuções' },
    { title: 'Rural', desc: 'Alongamento MCR' },
    { title: 'Agro', desc: 'Súmula 298 STJ' },
  ]

  return (
    <section className="py-20 md:py-32 bg-graphite border-y hairline">
      <div className="max-w-[1440px] mx-auto px-5 md:px-[6vw]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column */}
          <div className="lg:col-span-5">
            <p className="text-[0.65rem] tracking-[0.35em] uppercase text-gold mb-4">Conteúdo</p>
            <h2 className="font-serif text-[clamp(2.2rem,4vw,4.2rem)] leading-[1.05] text-balance font-normal text-ivory">
              Informação também faz parte da estratégia.
            </h2>
            <p className="mt-6 text-muted leading-relaxed max-w-[55ch] text-base">
              No Instagram <strong className="text-champagne font-medium">@bragaexavier</strong>,
              o escritório compartilha análises jurídicas atualizadas sobre Direito Bancário,
              crédito rural, decisões recentes dos tribunais e orientações para proteger o seu
              patrimônio.
            </p>
            <a
              href="https://instagram.com/bragaexavier"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost mt-8"
            >
              Acompanhar no Instagram
              <InstagramIcon className="w-4 h-4 text-gold" />
            </a>
          </div>

          {/* Right Column: Grid */}
          <div className="lg:col-span-6 lg:col-start-7 grid grid-cols-2 sm:grid-cols-3 gap-3">
            {cards.map((card, idx) => (
              <div
                key={idx}
                className={`aspect-square glass flex flex-col justify-between p-5 border border-white/10 ${
                  idx === 1 || idx === 4 ? 'sm:mt-4' : ''
                }`}
              >
                <span className="text-[0.6rem] tracking-[0.2em] uppercase text-gold">
                  {card.title}
                </span>
                <p className="text-xs text-ivory/80 leading-snug">{card.desc}</p>
              </div>
            ))}
            <a
              href="https://instagram.com/bragaexavier"
              target="_blank"
              rel="noopener noreferrer"
              className="aspect-square glass flex flex-col items-center justify-center p-5 border border-gold/30 hover:border-gold transition-colors group"
            >
              <InstagramIcon className="w-6 h-6 text-gold group-hover:scale-110 transition-transform mb-2" />
              <span className="text-[0.65rem] tracking-[0.2em] uppercase text-champagne text-center flex items-center gap-1">
                @bragaexavier
                <ArrowUpRight className="w-3 h-3" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
