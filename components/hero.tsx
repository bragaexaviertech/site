'use client'

import React, { useEffect, useRef } from 'react'
import Image from 'next/image'
import { ArrowUpRight, Star } from 'lucide-react'
import gsap from 'gsap'

interface HeroProps {
  onOpenTriagem: (origin: string) => void
}

export function Hero({ onOpenTriagem }: HeroProps) {
  const sectionRef = useRef<HTMLElement>(null)
  const bgMediaRef = useRef<HTMLDivElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)
  const textColRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion) return

    const runHeroAnimation = () => {
      const ctx = gsap.context(() => {
        const tl = gsap.timeline()

        if (bgMediaRef.current) {
          tl.fromTo(
            bgMediaRef.current,
            { opacity: 0, scale: 1.05 },
            { opacity: 1, scale: 1, duration: 1.1, ease: 'power2.out' },
            0
          )
        }

        if (headlineRef.current) {
          const lines = headlineRef.current.querySelectorAll('.reveal-line > span')
          tl.fromTo(
            lines,
            { yPercent: 115, opacity: 0 },
            { yPercent: 0, opacity: 1, duration: 0.9, stagger: 0.09, ease: 'power4.out' },
            0.05
          )
        }

        tl.fromTo(
          '#hero-desc',
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.65, ease: 'power3.out' },
          0.3
        )
        tl.fromTo(
          '#hero-cta',
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
          0.42
        )
        tl.fromTo(
          '#hero-proof',
          { opacity: 0, y: 12 },
          { opacity: 1, y: 0, duration: 0.55, ease: 'power3.out' },
          0.52
        )
        tl.fromTo(
          '#hero-floating-badge',
          { opacity: 0, y: 24, scale: 0.96 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.75,
            ease: 'power3.out',
            onComplete: () => {
              // Movimento flutuante sutil e contínuo
              gsap.to('#hero-floating-badge', {
                y: -6,
                duration: 3.2,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut',
              })
            },
          },
          0.58
        )
      }, sectionRef)

      return ctx
    }

    let ctx: gsap.Context | undefined

    if (typeof window !== 'undefined' && window.__BX_PRELOADER_DONE__) {
      ctx = runHeroAnimation()
    } else {
      const handler = () => {
        ctx = runHeroAnimation()
      }
      window.addEventListener('bx:preloader-done', handler, { once: true })
      return () => {
        window.removeEventListener('bx:preloader-done', handler)
        ctx?.revert()
      }
    }

    return () => ctx?.revert()
  }, [])

  return (
    <section
      ref={sectionRef}
      id="inicio"
      className="relative min-h-[100svh] lg:min-h-screen flex flex-col justify-end lg:justify-center pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20 overflow-hidden w-full bg-ink"
    >
      {/* Background Cinematográfico dos Sócios Fundadores */}
      <div
        ref={bgMediaRef}
        className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        {/* Imagem dos Sócios: Ampla à direita no desktop e topo no mobile sem cobrir o Dr. Braga */}
        <div className="absolute top-0 inset-x-0 h-[48vh] sm:h-[54vh] lg:h-full lg:inset-auto lg:right-0 lg:w-[72%] xl:w-[70%] pointer-events-none overflow-hidden">
          <Image
            src="/assets/equipe-escritorio.jpg"
            alt="Sócios Fundadores Dr. Braga e Dr. Xavier Advogados"
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 75vw"
            className="object-cover object-[center_top] lg:object-[right_20%] opacity-95 filter contrast-[1.03] brightness-[0.98]"
          />
          {/* Degradê Mobile que funde suavemente a foto dos sócios com o fundo escuro */}
          <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-transparent via-40% to-ink lg:hidden" />
        </div>

        {/* Degradê Superior para Header no Desktop */}
        <div className="hidden lg:block absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-ink/80 via-ink/40 to-transparent" />

        {/* Degradê Desktop Horizontal Recuado: Protege o texto à esquerda sem cobrir o Dr. Braga */}
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-ink via-ink/90 via-25% lg:via-30% to-transparent" />

        {/* Linhas topográficas sutis no fundo */}
        <div className="absolute inset-0 topo-lines opacity-20 mix-blend-overlay" />

        {/* Glow Dourado Ambiental sutil */}
        <div className="absolute -top-24 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none ambient-glow" />
      </div>

      <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-6 md:px-[5vw] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Coluna de Texto Principal (inicia abaixo da foto no mobile e à esquerda no desktop) */}
          <div
            ref={textColRef}
            id="hero-text-col"
            className="lg:col-span-8 xl:col-span-7 mt-[34vh] sm:mt-[40vh] lg:mt-0 relative z-10"
          >
            <h1
              ref={headlineRef}
              id="hero-headline"
              className="font-light text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] xl:text-[3.6rem] leading-[1.08] text-ivory text-balance tracking-tight drop-shadow-sm"
            >
              <span className="reveal-line">
                <span>Estratégia jurídica</span>
              </span>
              <span className="reveal-line">
                <span>para proteger patrimônio</span>
              </span>
              <span className="reveal-line">
                <span className="text-champagne font-serif italic text-[1.12em] tracking-normal font-normal">
                  e reorganizar dívidas.
                </span>
              </span>
            </h1>

            <p
              id="hero-desc"
              className="mt-5 max-w-[50ch] text-ivory/85 leading-relaxed text-sm sm:text-base font-light drop-shadow"
            >
              Defesa combativa contra cobranças bancárias abusivas, execuções de dívidas e bloqueios patrimoniais — para empresas e produtores rurais em todo o Brasil.
            </p>

            <div id="hero-cta" className="mt-7 sm:mt-8 flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => onOpenTriagem('hero')}
                className="btn-primary justify-center shadow-2xl !py-3 !px-6 !text-xs cursor-pointer"
              >
                <span>Falar com um advogado</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
              <a
                href="#bancario"
                className="btn-ghost justify-center backdrop-blur-md bg-ink/30 !py-3 !px-6 !text-xs hover:bg-white/[0.06] cursor-pointer"
              >
                <span>Conhecer áreas de atuação</span>
              </a>
            </div>

            <div
              id="hero-proof"
              className="mt-7 sm:mt-8 inline-flex items-center gap-3 border-t hairline pt-4"
            >
              <div className="flex gap-[3px]" aria-hidden="true">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 text-gold fill-current" />
                ))}
              </div>
              <a
                href="#avaliacoes"
                className="text-xs text-muted font-light hover:text-ivory transition-colors"
              >
                <span className="text-ivory font-normal">5,0 no Google</span> — 37 avaliações públicas verificadas
              </a>
            </div>
          </div>

          {/* Card Flutuante de Credencial / Selo Lateral em Desktop */}
          <div className="hidden lg:flex lg:col-span-4 xl:col-span-5 justify-end">
            <div
              id="hero-floating-badge"
              className="glass p-5 border border-white/15 max-w-[280px] bg-ink/85 backdrop-blur-xl shadow-2xl relative"
            >
              <div className="w-8 h-0.5 bg-gold mb-3" />
              <p className="text-[.6rem] tracking-[.25em] uppercase text-gold font-medium mb-1">
                Atendimento Direto
              </p>
              <p className="text-xs text-ivory leading-relaxed font-light">
                Análise direta pelos sócios fundadores. Rigor técnico, independência e sigilo absoluto.
              </p>
              <div className="mt-4 pt-3 border-t hairline flex items-center justify-between text-[.58rem] text-champagne/80 font-normal uppercase tracking-wider">
                <span>OAB/MG</span>
                <span>Atuação Brasil</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

