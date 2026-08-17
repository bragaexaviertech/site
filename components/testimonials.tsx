import React from 'react'
import { Star } from 'lucide-react'

export function Testimonials() {
  const reviews = [
    {
      quote: 'Muito competente, atenciosos, prestativos, super recomendo.',
      author: 'Cliente atendido',
      source: 'Avaliação pública no Google',
    },
    {
      quote: 'Dois excelentes profissionais, resolveram minha vida contra uma cobrança indevida!',
      author: 'Produtor rural',
      source: 'Avaliação pública no Google',
    },
    {
      quote: 'Excelente escritório! Atendimento sério, transparente e com estratégia jurídica de verdade.',
      author: 'Empresário',
      source: 'Avaliação pública no Google',
    },
  ]

  return (
    <section id="avaliacoes" className="py-20 md:py-32 scroll-mt-24">
      <div className="max-w-[1440px] mx-auto px-5 md:px-[6vw]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Left Column: Google Score Badge */}
          <div className="lg:col-span-5">
            <p className="text-[0.65rem] tracking-[0.35em] uppercase text-gold mb-4">Avaliações</p>
            <h2 className="font-serif text-[clamp(2.2rem,4.5vw,4.5rem)] leading-[1.02] text-balance font-normal text-ivory">
              Confiança construída caso a caso.
            </h2>

            <div className="glass p-8 mt-10 max-w-sm border border-gold/30 shadow-xl">
              <div className="flex gap-[3px] mb-4" aria-hidden="true">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-gold fill-current" />
                ))}
              </div>
              <p className="font-serif text-4xl text-ivory">
                5,0 <span className="text-lg text-muted font-sans font-normal">no Google</span>
              </p>
              <p className="mt-2 text-xs text-muted">37 avaliações públicas verificadas</p>
              <p className="mt-6 text-[0.6rem] tracking-[0.25em] uppercase text-muted/70 border-t hairline pt-4">
                Índice de 100% de satisfação
              </p>
            </div>
          </div>

          {/* Right Column: Quotes */}
          <div className="lg:col-span-6 lg:col-start-7 flex flex-col gap-4 lg:pt-14">
            {reviews.map((review, idx) => (
              <blockquote
                key={idx}
                className={`glass p-8 md:p-10 border border-white/10 ${
                  idx === 1 ? 'lg:ml-8' : ''
                }`}
              >
                <p className="font-serif text-xl md:text-2xl italic leading-snug text-ivory/90 text-pretty">
                  &ldquo;{review.quote}&rdquo;
                </p>
                <footer className="mt-4 flex items-center justify-between text-[0.65rem] tracking-[0.2em] uppercase text-muted/70">
                  <span>{review.author}</span>
                  <span>{review.source}</span>
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
