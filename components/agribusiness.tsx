'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Sprout, FileCheck2, Landmark, Scale, ArrowUpRight } from 'lucide-react'

interface AgribusinessProps {
  onOpenTriagem: (origin: string) => void
}

export function Agribusiness({ onOpenTriagem }: AgribusinessProps) {
  return (
    <section
      id="agronegocio"
      className="py-16 md:py-24 bg-surface border-y hairline scroll-mt-16 relative overflow-hidden w-full"
    >
      {/* Background Panorâmico com Blend Escuro */}
      <div
        className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[65%] h-full">
          <Image
            src="/assets/agronegocio.webp"
            alt="Operações de Crédito Rural e Agronegócio"
            fill
            sizes="(max-width: 1024px) 100vw, 70vw"
            className="object-cover object-[center_30%] opacity-20 lg:opacity-35 filter contrast-125 brightness-75"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/90 via-50% lg:via-55% to-transparent" />
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-surface to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-surface to-transparent" />
        <div className="absolute inset-0 topo-lines opacity-30 mix-blend-overlay" />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-[5vw] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Coluna Texto */}
          <div
            id="agro-text-col"
            className="reveal-on-scroll lg:col-span-6 xl:col-span-5 glass p-6 sm:p-8 md:p-10 border border-white/15 bg-surface/90 backdrop-blur-2xl shadow-2xl relative"
          >
            <div className="w-10 h-0.5 bg-gold mb-3.5" />
            <p className="text-[.6rem] tracking-[.3em] uppercase text-gold font-medium mb-1.5 flex items-center gap-2">
              <Sprout className="w-3.5 h-3.5 text-gold" /> DIREITO RURAL &bull; CRÉDITO &amp; SAFRA
            </p>
            <h2 className="font-light text-2xl sm:text-3xl lg:text-4xl leading-[1.12] text-balance text-ivory tracking-tight">
              Alongar a dívida rural é direito do produtor, não favor do banco.
            </h2>
            <p className="mt-3.5 text-ivory/80 leading-relaxed text-xs sm:text-sm max-w-[52ch] font-light">
              Em caso de frustração de safra, seca ou oscilação de mercado, a Súmula 298 do STJ e o Manual de Crédito Rural asseguram a prorrogação do vencimento para manter a terra e a produção protegidas.
            </p>
            <div className="mt-5 pt-3 border-t hairline flex items-center justify-between text-[.58rem] tracking-[.18em] uppercase text-champagne font-medium">
              <span>SÚMULA 298 STJ</span>
              <span>PROTEÇÃO DA PRODUÇÃO</span>
            </div>
            <div className="mt-5 flex flex-col sm:flex-row gap-3">
              <Link
                href="/agronegocio"
                className="btn-primary cursor-pointer justify-center !py-2.5 !px-4 !text-xs"
              >
                <span>Conhecer atuação no Agro</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
              <button
                onClick={() => onOpenTriagem('agro')}
                className="btn-ghost cursor-pointer justify-center !py-2.5 !px-4 !text-xs bg-surface/50"
              >
                <span>Falar com especialista</span>
              </button>
            </div>
          </div>

          {/* Coluna Cards de Atuação */}
          <div
            id="agro-cards-col"
            className="lg:col-span-6 xl:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            <div className="reveal-on-scroll agro-card glass p-4 border border-white/10 hover:border-gold/40 transition-colors">
              <div className="flex items-center gap-2 mb-1.5">
                <FileCheck2 className="w-3.5 h-3.5 text-gold" />
                <p className="text-[.6rem] tracking-[.2em] uppercase text-gold font-medium">
                  Alongamento Rural
                </p>
              </div>
              <p className="text-xs text-ivory/85 leading-relaxed font-light">
                Prorrogação compulsória de prazos com base no MCR e Súmula 298 do STJ.
              </p>
            </div>

            <div className="reveal-on-scroll reveal-delay-1 agro-card glass p-4 border border-white/10 hover:border-gold/40 transition-colors sm:translate-y-2">
              <div className="flex items-center gap-2 mb-1.5">
                <Landmark className="w-3.5 h-3.5 text-gold" />
                <p className="text-[.6rem] tracking-[.2em] uppercase text-gold font-medium">
                  Auditoria de Cédulas
                </p>
              </div>
              <p className="text-xs text-ivory/85 leading-relaxed font-light">
                Expurgo de juros abusivos e vendas casadas em CPRs e contratos de custeio.
              </p>
            </div>

            <div className="reveal-on-scroll reveal-delay-2 agro-card glass p-4 border border-white/10 hover:border-gold/40 transition-colors">
              <div className="flex items-center gap-2 mb-1.5">
                <Scale className="w-3.5 h-3.5 text-gold" />
                <p className="text-[.6rem] tracking-[.2em] uppercase text-gold font-medium">
                  Defesa da Terra
                </p>
              </div>
              <p className="text-xs text-ivory/85 leading-relaxed font-light">
                Impenhorabilidade da propriedade rural, safras, silos e maquinários.
              </p>
            </div>

            <div className="reveal-on-scroll reveal-delay-3 agro-card glass p-4 border border-white/10 hover:border-gold/40 transition-colors sm:translate-y-2">
              <div className="flex items-center gap-2 mb-1.5">
                <Sprout className="w-3.5 h-3.5 text-gold" />
                <p className="text-[.6rem] tracking-[.2em] uppercase text-gold font-medium">
                  Assessoria Contínua
                </p>
              </div>
              <p className="text-xs text-ivory/85 leading-relaxed font-light">
                Suporte jurídico preventivo e contencioso para produtores e cooperativas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
