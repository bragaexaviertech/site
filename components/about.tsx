import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

export function About() {
  return (
    <section
      id="escritorio"
      className="py-20 md:py-28 scroll-mt-16 relative overflow-hidden w-full bg-ink"
    >
      {/* Background Panorâmico com Blend Escuro */}
      <div
        className="absolute inset-0 z-0 pointer-events-none overflow-hidden scale-100"
        aria-hidden="true"
      >
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[68%] h-full">
          <Image
            src="/assets/sala-reuniao.jpg"
            alt="Ambiente Institucional Braga & Xavier"
            fill
            sizes="(max-width: 1024px) 100vw, 70vw"
            className="object-cover object-center opacity-30 lg:opacity-45 filter contrast-125 brightness-75"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 via-50% lg:via-55% to-transparent" />
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-ink to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-ink to-transparent" />
        <div className="absolute inset-0 topo-lines opacity-30 mix-blend-overlay" />
      </div>

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-[5vw] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          <div
            id="escritorio-content-card"
            className="reveal-on-scroll lg:col-span-7 glass p-6 sm:p-9 md:p-10 border border-white/15 bg-ink/85 backdrop-blur-2xl shadow-2xl relative"
          >
            <div className="w-12 h-0.5 bg-gold mb-4" />
            <p className="text-[.6rem] tracking-[.3em] uppercase text-gold font-medium mb-1">
              ADVOCACIA BOUTIQUE &bull; O ESCRITÓRIO
            </p>
            <h2 className="font-light text-2xl sm:text-3xl lg:text-4xl leading-[1.12] text-ivory text-balance mt-2 tracking-tight">
              Problemas financeiros complexos exigem leitura jurídica estratégica.
            </h2>
            <p className="mt-4 text-ivory/80 leading-relaxed text-xs sm:text-sm font-light">
              O <strong className="text-ivory font-normal">Braga &amp; Xavier Advogados</strong> atua em
              situações críticas que envolvem bancos, contratos de crédito, cobranças, execuções e
              reestruturação de endividamentos. Cada caso é examinado sob medida, considerando os
              documentos, as garantias e as alternativas jurídicas aplicáveis — para pessoas físicas,
              empresas e produtores rurais em todo o Brasil.
            </p>

            <blockquote className="mt-6 p-4 sm:p-5 bg-forest/30 border-l-2 border-gold/60">
              <p className="text-sm sm:text-base md:text-lg text-champagne font-serif italic leading-relaxed">
                &ldquo;Cada operação financeira possui contexto, contrato, risco e estratégia próprios.&rdquo;
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

          {/* Card Fotográfico Complementar com Badge */}
          <div className="reveal-on-scroll reveal-delay-2 lg:col-span-5 relative hidden lg:block">
            <div className="relative overflow-hidden h-[420px] w-full border border-white/15 shadow-2xl group">
              <Image
                src="/assets/sala-reuniao.jpg"
                alt="Ambiente Institucional Braga & Xavier"
                fill
                sizes="500px"
                className="object-cover scale-100 group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />
              <div className="absolute bottom-5 left-5 right-5 glass p-4 sm:p-5 border border-gold/30 bg-ink/90 backdrop-blur-xl">
                <div className="w-8 h-0.5 bg-gold mb-2.5" />
                <p className="text-[.58rem] tracking-[.2em] uppercase text-gold font-medium mb-1">
                  RIGOR &bull; DISCRIÇÃO &bull; COMBATIVIDADE
                </p>
                <p className="text-xs text-ivory/85 font-light leading-relaxed">
                  Estrutura física e digital dedicada à defesa patrimonial e negociações de alto impacto.
                </p>
                <div className="mt-3 pt-2.5 border-t hairline flex items-center justify-between text-[.55rem] tracking-wider uppercase text-champagne font-medium">
                  <span>OAB/MG</span>
                  <span>ATUAÇÃO BRASIL</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
