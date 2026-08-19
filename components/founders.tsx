import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export function Founders() {
  return (
    <section
      id="autoridade"
      className="py-20 md:py-28 bg-graphite border-y hairline relative overflow-hidden w-full"
    >
      {/* Background Editorial com Sangria e Blend Escuro */}
      <div
        className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/assets/socios-aperto-maos.webp"
            alt="Sócios Fundadores Dr. Braga e Dr. Xavier"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 100vw"
            className="object-cover object-[15%_top] lg:object-[8%_center] opacity-60 lg:opacity-100 filter contrast-[1.03] brightness-[1.02]"
          />
        </div>

        {/* Degradê Desktop Recuado: Protege o card à direita sem cobrir os sócios à esquerda */}
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-l from-graphite via-graphite/95 via-28% lg:via-32% to-transparent" />
        {/* Degradê Mobile */}
        <div className="lg:hidden absolute inset-0 bg-gradient-to-b from-graphite/80 via-graphite/90 to-graphite" />
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-graphite to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-graphite to-transparent" />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-[5vw] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div
            id="portrait-text-col"
            className="reveal-on-scroll lg:col-span-5 lg:col-start-8 xl:col-span-5 xl:col-start-8 glass p-6 sm:p-8 md:p-9 border border-white/15 bg-graphite/95 backdrop-blur-2xl shadow-2xl relative w-full"
          >
            <div className="w-12 h-0.5 bg-gold mb-4" />
            <p className="text-[.62rem] tracking-[.3em] uppercase text-gold font-medium mb-1.5">
              SÓCIOS FUNDADORES &bull; BOUTIQUE JURÍDICA
            </p>
            <h2 className="font-light text-2xl sm:text-3xl lg:text-4xl leading-[1.12] text-balance text-ivory tracking-tight">
              Advocacia combativa, técnica e personalizada.
            </h2>
            <p className="mt-4 text-ivory/80 leading-relaxed text-xs sm:text-sm font-light">
              A banca <strong className="text-ivory font-normal">Braga &amp; Xavier</strong> combina independência ética e combatividade técnica na defesa exclusiva de devedores.
            </p>
            <p className="mt-2.5 text-ivory/80 leading-relaxed text-xs sm:text-sm font-light">
              Aqui o seu caso não é terceirizado: a elaboração das teses, defesas de urgência e negociações com os bancos são conduzidas pessoalmente pelos fundadores.
            </p>

            <div className="mt-6 border-t hairline pt-4 flex flex-col gap-2.5 text-[.68rem] text-champagne font-medium uppercase tracking-wider">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <span>Direito Bancário &bull; Reestruturação PJ &bull; Agronegócio</span>
                <Link
                  href="/escritorio"
                  className="inline-flex items-center gap-1 text-gold hover:text-champagne transition-colors underline font-normal cursor-pointer"
                >
                  <span>Perfil dos Sócios</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
              <span className="text-muted lowercase tracking-normal text-xs font-light">
                Montes Claros — MG &bull; Atuação em todo o Brasil
              </span>
              <div className="mt-2 pt-2 border-t hairline flex items-center justify-between text-gold/90 text-[.6rem] tracking-[.18em] uppercase font-medium">
                <span>100% DEFESA DO DEVEDOR</span>
                <span>NÃO ATUAMOS PARA BANCOS</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
