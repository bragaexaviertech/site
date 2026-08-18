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
      className="py-20 md:py-28 bg-graphite border-y hairline scroll-mt-16 relative overflow-hidden w-full"
    >
      {/* Background Ambiental Texturizado */}
      <div
        className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute left-0 top-0 bottom-0 w-full lg:w-[50%] h-full opacity-35">
          <Image
            src="/assets/escritorio.jpg"
            alt="Ambiente Corporativo Braga & Xavier"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover object-center filter contrast-125 brightness-75"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-graphite/90 via-graphite via-45% to-graphite" />
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-graphite to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-graphite to-transparent" />
        <div className="absolute inset-0 topo-lines opacity-30 mix-blend-overlay" />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-[5vw] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Lado Esquerdo: Imagem Executiva com Badge Flutuante no estilo da referência */}
          <div className="reveal-on-scroll lg:col-span-5 relative">
            <div className="relative overflow-hidden h-[340px] sm:h-[440px] w-full border border-white/15 shadow-2xl group">
              <Image
                src="/assets/escritorio.jpg"
                alt="Banca especializada em reestruturação empresarial"
                fill
                sizes="(max-width: 1024px) 100vw, 500px"
                className="object-cover scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />

              {/* Badge Flutuante Exato no Estilo da Imagem 2 */}
              <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 glass p-4 sm:p-5 border border-gold/35 bg-ink/95 backdrop-blur-xl shadow-2xl">
                <div className="w-9 h-0.5 bg-gold mb-3" />
                <p className="text-[.6rem] tracking-[.25em] uppercase text-gold font-medium mb-1.5">
                  ATENDIMENTO DIRETO
                </p>
                <p className="text-xs sm:text-sm text-ivory font-light leading-relaxed">
                  Análise direta pelos sócios fundadores com absoluto rigor técnico e sigilo.
                </p>
                <div className="mt-3.5 pt-3 border-t hairline flex items-center justify-between text-[.58rem] tracking-[.18em] uppercase text-champagne font-medium">
                  <span>OAB/MG</span>
                  <span>ATUAÇÃO BRASIL</span>
                </div>
              </div>
            </div>
          </div>

          {/* Lado Direito: Card Principal de Autoridade no estilo nobre */}
          <div
            id="empresarial-text-col"
            className="reveal-on-scroll reveal-delay-1 lg:col-span-7 glass p-6 sm:p-9 md:p-10 border border-white/15 bg-graphite/90 backdrop-blur-2xl shadow-2xl relative"
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
              Endividamento empresarial precisa ser tratado antes de comprometer a operação.
            </h2>

            {/* Descrição Estratégica */}
            <p className="mt-4 text-ivory/80 leading-relaxed text-xs sm:text-sm font-light">
              O <strong className="text-ivory font-normal">Braga &amp; Xavier Advogados</strong> atua na auditoria,
              revisão e renegociação estratégica de passivos bancários corporativos, construindo alternativas que
              resguardam o fluxo de caixa, protegem os bens dos sócios avalistas e restabelecem a sustentabilidade financeira da empresa.
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
                  Liberação de travas bancárias, suspensão de retenções automáticas de recebíveis e preservação de capital de giro.
                </p>
              </div>

              <div className="p-4 bg-ink/70 border border-white/10 hover:border-gold/40 transition-colors">
                <div className="flex items-center gap-2 mb-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-gold" />
                  <p className="text-[.62rem] uppercase tracking-wider text-champagne font-medium">
                    Defesa Patrimonial
                  </p>
                </div>
                <p className="text-xs text-muted leading-relaxed font-light">
                  Blindagem do patrimônio pessoal dos sócios e avalistas contra penhoras e execuções de CCBs e garantias reais.
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

