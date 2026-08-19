'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Building2, ShieldCheck, DollarSign, ArrowUpRight, Scale } from 'lucide-react'

interface BusinessDebtProps {
  onOpenTriagem: (origin: string) => void
}

export function BusinessDebt({ onOpenTriagem }: BusinessDebtProps) {
  return (
    <section
      id="empresarial"
      className="py-20 md:py-32 bg-graphite border-y hairline scroll-mt-16 relative overflow-hidden w-full"
    >
      {/* Background Panorâmico Cinematográfico no estilo Hero */}
      <div
        className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/assets/escritorio.webp"
            alt="Ambiente Corporativo Braga & Xavier Advogados"
            fill
            sizes="100vw"
            className="object-cover object-[left_center] lg:object-[left_25%] opacity-80 lg:opacity-90 filter contrast-[1.03] brightness-[0.96]"
          />
          {/* Degradê Mobile */}
          <div className="absolute inset-0 bg-gradient-to-b from-graphite/70 via-graphite/90 to-graphite lg:hidden" />
        </div>

        {/* Degradê Desktop que protege o card à direita e revela o escritório à esquerda */}
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-l from-graphite via-graphite/85 via-45% lg:via-52% to-transparent" />
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-graphite to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-graphite to-transparent" />
        <div className="absolute inset-0 topo-lines opacity-20 mix-blend-overlay" />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-[5vw] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Card Principal de Autoridade posicionado à direita */}
          <div
            id="empresarial-text-col"
            className="reveal-on-scroll lg:col-span-7 lg:col-start-6 xl:col-span-6 xl:col-start-7 glass p-6 sm:p-9 md:p-10 border border-white/15 bg-graphite/90 backdrop-blur-2xl shadow-2xl relative ml-auto w-full"
          >
            {/* Linha de Acento Dourado */}
            <div className="w-12 h-0.5 bg-gold mb-4" />

            {/* Tag / Eyebrow */}
            <div className="flex items-center gap-2 mb-2">
              <Building2 className="w-3.5 h-3.5 text-gold" />
              <p className="text-[.6rem] tracking-[.3em] uppercase text-gold font-medium">
                DIREITO EMPRESARIAL &bull; REESTRUTURAÇÃO DE PASSIVOS
              </p>
            </div>

            {/* Título de Alto Impacto */}
            <h2 className="font-light text-2xl sm:text-3xl lg:text-4xl leading-[1.12] text-balance text-ivory tracking-tight">
              Proteja o caixa da sua empresa antes que a dívida trave a operação.
            </h2>

            {/* Descrição Estratégica */}
            <p className="mt-4 text-ivory/80 leading-relaxed text-xs sm:text-sm font-light">
              Auditamos e renegociamos passivos corporativos para derrubar travas bancárias abusivas, preservar o capital de giro e blindar o patrimônio pessoal dos sócios avalistas.
            </p>

            {/* Cards de Soluções Corporativas */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="p-4 bg-ink/70 border border-white/10 hover:border-gold/40 transition-colors">
                <div className="flex items-center gap-2 mb-1.5">
                  <DollarSign className="w-3.5 h-3.5 text-gold" />
                  <p className="text-[.62rem] uppercase tracking-wider text-champagne font-medium">
                    Proteção de Caixa
                  </p>
                </div>
                <p className="text-xs text-muted leading-relaxed font-light">
                  Liberação de travas, suspensão de retenções automáticas e defesa do capital de giro.
                </p>
              </div>

              <div className="p-4 bg-ink/70 border border-white/10 hover:border-gold/40 transition-colors">
                <div className="flex items-center gap-2 mb-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-gold" />
                  <p className="text-[.62rem] uppercase tracking-wider text-champagne font-medium">
                    Blindagem dos Sócios
                  </p>
                </div>
                <p className="text-xs text-muted leading-relaxed font-light">
                  Defesa do patrimônio particular dos avalistas contra execuções de CCBs e garantias reais.
                </p>
              </div>
            </div>

            {/* Rodapé com Selos e CTA Direto */}
            <div className="mt-7 pt-5 border-t hairline flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3 text-[.6rem] tracking-[.18em] uppercase text-champagne font-medium">
                <span className="flex items-center gap-1.5">
                  <Scale className="w-3 h-3 text-gold" /> SIGILO EMPRESARIAL
                </span>
                <span>&bull;</span>
                <span>RESPOSTA EM ATÉ 24H</span>
              </div>

              <div className="flex items-center gap-3">
                <Link
                  href="/direito-bancario"
                  className="btn-primary !py-2.5 !px-4 !text-xs cursor-pointer justify-center"
                >
                  <span>Ver Atuação Bancária PJ</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
                <button
                  onClick={() => onOpenTriagem('empresarial')}
                  className="btn-ghost !py-2.5 !px-4 !text-xs cursor-pointer justify-center bg-ink/40"
                >
                  <span>Triagem</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
