import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, Scale, Shield, Landmark } from 'lucide-react'

export function About() {
  return (
    <section
      id="escritorio"
      className="py-20 md:py-32 scroll-mt-16 relative overflow-hidden w-full bg-ink"
    >
      {/* Background Panorâmico Cinematográfico no estilo Hero */}
      <div
        className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/assets/sala-reuniao.webp"
            alt="Ambiente Institucional Braga & Xavier Advogados"
            fill
            sizes="100vw"
            className="object-cover object-[right_center] lg:object-[right_35%] opacity-80 lg:opacity-90 filter contrast-[1.03] brightness-[0.96]"
          />
          {/* Degradê Mobile */}
          <div className="absolute inset-0 bg-gradient-to-b from-ink/70 via-ink/90 to-ink lg:hidden" />
        </div>

        {/* Degradê Desktop Horizontal que protege o card à esquerda e revela a sala à direita */}
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-ink via-ink/85 via-45% lg:via-52% to-transparent" />
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-ink to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-ink to-transparent" />
        <div className="absolute inset-0 topo-lines opacity-20 mix-blend-overlay" />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-[5vw] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div
            id="escritorio-content-card"
            className="reveal-on-scroll lg:col-span-7 xl:col-span-6 glass p-6 sm:p-9 md:p-10 border border-white/15 bg-ink/90 backdrop-blur-2xl shadow-2xl relative"
          >
            <div className="w-12 h-0.5 bg-gold mb-4" />
            <p className="text-[.6rem] tracking-[.3em] uppercase text-gold font-medium mb-1 flex items-center gap-2">
              <Landmark className="w-3.5 h-3.5" /> ADVOCACIA BOUTIQUE &bull; O ESCRITÓRIO
            </p>
            <h2 className="font-light text-2xl sm:text-3xl lg:text-4xl leading-[1.12] text-ivory text-balance mt-2 tracking-tight">
              Problemas financeiros complexos exigem estratégia jurídica sob medida.
            </h2>
            <p className="mt-4 text-ivory/80 leading-relaxed text-xs sm:text-sm font-light">
              O <strong className="text-ivory font-normal">Braga &amp; Xavier Advogados</strong> atua em situações críticas contra bancos, execuções de títulos e renegociação de dívidas. Cada caso é examinado de forma artesanal pelos sócios fundadores, desenhando soluções que resguardam o patrimônio e a atividade de pessoas físicas, empresas e produtores rurais em todo o Brasil.
            </p>

            <blockquote className="mt-6 p-4 sm:p-5 bg-forest/30 border-l-2 border-gold/60">
              <p className="text-sm sm:text-base md:text-lg text-champagne font-serif italic leading-relaxed">
                &ldquo;Quem enfrenta o sistema financeiro precisa de estratégia técnica antes de qualquer negociação.&rdquo;
              </p>
              <footer className="mt-2 text-[.58rem] tracking-[.2em] uppercase text-gold/80 font-normal">
                Boutique Jurídica Braga &amp; Xavier
              </footer>
            </blockquote>

            <div className="mt-6 pt-4 border-t hairline flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 text-[.6rem] tracking-[.18em] uppercase text-champagne font-medium">
              <span>MONTES CLAROS &bull; MG &bull; ATUAÇÃO NACIONAL</span>
              <Link
                href="/escritorio"
                className="inline-flex items-center gap-1 text-gold hover:text-champagne transition-colors underline font-normal cursor-pointer"
              >
                <span>Conhecer o Escritório &amp; Sócios</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
