'use client'

import React from 'react'
import Image from 'next/image'
import { ArrowUpRight, Star, ShieldCheck } from 'lucide-react'

interface HeroProps {
  onOpenTriage: () => void
}

export function Hero({ onOpenTriage }: HeroProps) {
  return (
    <section id="inicio" className="relative min-h-[90vh] flex items-center topo-lines pt-32 pb-20">
      <div className="max-w-[1440px] mx-auto w-full px-5 md:px-[6vw]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-forest/40 border border-gold/30 mb-6">
              <ShieldCheck className="w-3.5 h-3.5 text-gold" />
              <span className="text-[0.65rem] md:text-xs tracking-[0.25em] uppercase text-gold font-medium">
                Direito Bancário &bull; Empresarial &bull; Agronegócio
              </span>
            </div>

            <h1 className="font-serif text-[clamp(2.75rem,6.5vw,6.5rem)] leading-[0.98] text-ivory text-balance font-normal">
              Estratégia jurídica para proteger patrimônio e reorganizar dívidas.
            </h1>

            <p className="mt-8 max-w-[60ch] text-muted leading-relaxed text-base md:text-lg">
              Atuação especializada em conflitos com instituições financeiras, reestruturação de
              dívidas empresariais e demandas do produtor rural (alongamento de crédito rural e
              defesa patrimonial). Atendimento em Montes Claros – MG e em todo o Brasil.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button
                onClick={onOpenTriage}
                className="btn-primary justify-center"
              >
                Solicitar análise do caso
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <a
                href="#bancario"
                className="btn-ghost justify-center"
              >
                Conhecer áreas de atuação
              </a>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-8 gap-y-2 text-xs text-muted tracking-wide">
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-gold rounded-full" aria-hidden="true" />
                Atendimento em todo o Brasil
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-gold rounded-full" aria-hidden="true" />
                Suporte para medidas de urgência e execuções
              </span>
            </div>

            {/* Prova social Google */}
            <div className="mt-10 inline-flex items-center gap-4 border-t hairline pt-5">
              <div className="flex gap-[3px]" aria-hidden="true">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 text-gold fill-current" />
                ))}
              </div>
              <p className="text-xs text-muted">
                <span className="text-ivory font-medium">5,0 no Google</span> &mdash; 37 avaliações públicas
              </p>
            </div>
          </div>

          {/* Right Column: Hero Image with next/image */}
          <div className="lg:col-span-5 relative">
            <figure className="img-zoom relative border hairline lg:mt-8 shadow-2xl">
              <div className="relative w-full h-[420px] md:h-[540px]">
                <Image
                  src="/assets/escritorio.png"
                  alt="Ambiente institucional do escritório Braga & Xavier Advogados em Montes Claros - MG"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  className="object-cover"
                />
              </div>
              <div
                className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-ink/20 pointer-events-none"
                aria-hidden="true"
              />
              <figcaption className="absolute top-5 right-5 text-[0.6rem] tracking-[0.3em] uppercase text-ivory/70 bg-ink/60 px-2 py-1 backdrop-blur-sm border border-white/10">
                Montes Claros &mdash; MG
              </figcaption>
            </figure>

            <div className="glass absolute -bottom-6 left-2 lg:-left-8 max-w-[260px] p-5 shadow-xl">
              <p className="text-[0.6rem] tracking-[0.3em] uppercase text-gold mb-1">
                Atuação Nacional
              </p>
              <p className="text-xs text-ivory/85 leading-relaxed">
                Consumidores, empresas e produtores rurais.
              </p>
            </div>

            <span
              className="v-label hidden lg:block absolute -right-10 top-20 select-none"
              aria-hidden="true"
            >
              Braga &amp; Xavier — Advogados
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}
