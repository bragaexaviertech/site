'use client'

import React from 'react'
import { ArrowUpRight, MessageCircle } from 'lucide-react'

interface CTASectionProps {
  onOpenTriage: () => void
}

export function CTASection({ onOpenTriage }: CTASectionProps) {
  return (
    <>
      {/* Intermediate Banner */}
      <section className="py-20 md:py-28 bg-graphite border-y hairline topo-lines">
        <div className="max-w-[1440px] mx-auto px-5 md:px-[6vw]">
          <div className="max-w-4xl">
            <p className="text-[0.65rem] tracking-[0.35em] uppercase text-gold mb-4">
              Análise do Caso
            </p>
            <h2 className="font-serif text-[clamp(2.2rem,4.5vw,4.5rem)] leading-[1.02] text-balance font-normal text-ivory">
              Quanto antes o cenário é compreendido, melhores podem ser as decisões jurídicas.
            </h2>
            <p className="mt-6 text-muted leading-relaxed max-w-[60ch] text-base md:text-lg">
              Converse com o Braga &amp; Xavier Advogados e apresente sua situação para avaliação
              técnica e sigilosa.
            </p>
            <button
              onClick={onOpenTriage}
              className="btn-primary mt-8"
            >
              Solicitar análise do caso
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Final Grand CTA */}
      <section className="relative min-h-[70vh] flex items-center bg-forest overflow-hidden">
        <div className="absolute inset-0 topo-lines opacity-60" aria-hidden="true" />
        <div className="relative max-w-[1440px] mx-auto w-full px-5 md:px-[6vw] py-24 text-center">
          <h2 className="font-serif text-[clamp(2.5rem,5.5vw,6rem)] leading-[0.98] max-w-4xl mx-auto text-ivory text-balance font-normal">
            Seu caso merece estratégia antes de qualquer decisão.
          </h2>
          <p className="mt-6 text-ivory/80 text-base md:text-xl max-w-2xl mx-auto">
            Fale diretamente com os advogados especialistas do Braga &amp; Xavier.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onOpenTriage}
              className="inline-flex items-center gap-3 bg-ink text-ivory border border-gold/40 px-8 py-4 text-xs tracking-[0.14em] uppercase hover:border-gold transition-colors font-medium cursor-pointer shadow-2xl"
            >
              <MessageCircle className="w-5 h-5 text-champagne" />
              Conversar pelo WhatsApp
            </button>
          </div>

          <p className="mt-8 font-serif text-2xl md:text-3xl text-champagne">
            (31) 97174-6972
          </p>
          <p className="mt-2 text-xs tracking-wider uppercase text-ivory/60">
            Atendimento em Montes Claros e em todo o Brasil
          </p>
        </div>
      </section>
    </>
  )
}
