'use client'

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import gsap from 'gsap'
import {
  MessageCircle,
  ArrowUpRight,
  Shield,
  HelpCircle,
  AlertTriangle,
  Scale,
  Tractor,
  Home,
  Wheat,
} from 'lucide-react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { LeadTriageModal } from '@/components/lead-triage-modal'
import { PrivacyModal } from '@/components/privacy-modal'
import { CookieBanner } from '@/components/cookie-banner'
import { FloatingWhatsApp } from '@/components/floating-whatsapp'
import { SmoothScroll } from '@/components/smooth-scroll'
import { ScrollRevealProvider } from '@/components/scroll-reveal-provider'

export default function ProtecaoPropriedadeRuralPage() {
  const [triagemOpen, setTriagemOpen] = useState(false)
  const [privacyOpen, setPrivacyOpen] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const bgMediaRef = useRef<HTMLDivElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)

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
          '#hero-protecao-desc',
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.65, ease: 'power3.out' },
          0.3
        )
        tl.fromTo(
          '#hero-protecao-cta',
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
          0.42
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

  const protecaoWA =
    'https://wa.me/5531971746972?text=Ol%C3%A1!%20Minha%20propriedade%20ou%20maquin%C3%A1rio%20agr%C3%ADcola%20est%C3%A1%20sob%20risco%20de%20penhora%20por%20d%C3%ADvida%20banc%C3%A1ria.'

  const protecoes = [
    {
      icon: Home,
      title: 'Pequena Propriedade Rural Familiar',
      desc: 'Imóveis rurais de até 4 módulos fiscais trabalhados pela família não podem ser penhorados por dívidas decorrentes de sua atividade produtiva (CF/88, art. 5º, XXVI).',
    },
    {
      icon: Tractor,
      title: 'Tratores, Colheitadeiras e Pivôs',
      desc: 'Maquinários e implementos essenciais ao cultivo e colheita são protegidos pelo art. 833 do CPC por serem instrumentos necessários ao exercício da profissão.',
    },
    {
      icon: Wheat,
      title: 'Safras em Desenvolvimento e Rebanho',
      desc: 'Medidas judiciais urgentes para cassar decisões que determinam o arresto indevido de grãos em armazéns ou cabeças de gado de cria.',
    },
  ]

  const faqs = [
    {
      q: 'A pequena propriedade pode ser penhorada se foi dada em hipoteca?',
      a: 'O STJ consolidou o entendimento de que a proteção constitucional da impenhorabilidade prevalece mesmo se o imóvel tiver sido oferecido em hipoteca para garantia de dívida decorrente da atividade agrícola da família.',
    },
    {
      q: 'Como comprovar que o imóvel é pequena propriedade familiar?',
      a: 'Comprovamos a metragem através da certidão de matrícula e do módulo fiscal do município (CAR/INCRA), associada a notas fiscais de insumos e declarações que atestem o trabalho da família na terra.',
    },
    {
      q: 'Recebi ordem de penhora ou mandado de avaliação. O que fazer?',
      a: 'O advogado deve opor imediatamente Embargos à Penhora ou Exceção de Pré-Executividade demonstrando a nulidade absoluta da constrição e requerendo o cancelamento da ordem no cartório de registro de imóveis.',
    },
  ]

  return (
    <>
      <SmoothScroll />
      <ScrollRevealProvider />

      <Header onOpenTriagem={() => setTriagemOpen(true)} />

      <main className="flex flex-col w-full overflow-x-clip bg-ink text-ivory">
        {/* HERO SECTION */}
        <section
          ref={sectionRef}
          className="relative min-h-[100svh] lg:min-h-screen flex flex-col justify-end lg:justify-center pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20 overflow-hidden w-full bg-ink"
        >
          <div
            ref={bgMediaRef}
            className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
            aria-hidden="true"
          >
            <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
              <Image
                src="/assets/hero-agronegocio-bg.webp"
                alt="Proteção da Propriedade Rural e Impenhorabilidade"
                fill
                priority
                sizes="100vw"
                className="object-cover object-[center_top] lg:object-[center_45%] opacity-90 filter contrast-[1.03] brightness-[0.96]"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-transparent via-40% to-ink lg:hidden" />
            </div>

            <div className="hidden lg:block absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-ink/80 via-ink/40 to-transparent" />
            <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-ink via-ink/85 via-30% lg:via-42% to-transparent" />
            <div className="absolute inset-0 topo-lines opacity-20 mix-blend-overlay" />
            <div className="absolute -top-24 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none ambient-glow" />
          </div>

          <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-6 md:px-[5vw] relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 xl:col-span-7 mt-[34vh] sm:mt-[40vh] lg:mt-0 relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-forest/40 border border-gold/30 text-gold text-[.6rem] uppercase tracking-widest font-medium mb-4">
                  <Scale className="w-3.5 h-3.5" /> Artigo 5º, XXVI da Constituição &bull; Artigo 833 CPC
                </div>

                <h1
                  ref={headlineRef}
                  className="font-light text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] xl:text-[3.6rem] leading-[1.08] text-ivory text-balance tracking-tight drop-shadow-sm"
                >
                  <span className="reveal-line">
                    <span>Proteção da propriedade rural:</span>
                  </span>
                  <span className="reveal-line">
                    <span className="text-champagne font-serif italic font-normal">
                      sua terra e maquinários
                    </span>
                  </span>
                  <span className="reveal-line">
                    <span>são impenhoráveis por lei.</span>
                  </span>
                </h1>

                <p
                  id="hero-protecao-desc"
                  className="mt-5 max-w-[55ch] text-ivory/85 leading-relaxed text-sm sm:text-base font-light"
                >
                  A legislação brasileira e a jurisprudência dos Tribunais Superiores resguardam a propriedade da família, tratores e colheitas contra constrições abusivas de bancos credores.
                </p>

                <div id="hero-protecao-cta" className="mt-8 flex flex-col sm:flex-row gap-3.5">
                  <a
                    href={protecaoWA}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary justify-center shadow-2xl !py-3 !px-6 !text-xs cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 text-champagne" />
                    <span>Proteger meu patrimônio no WhatsApp</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>

                  <button
                    onClick={() => setTriagemOpen(true)}
                    className="btn-ghost justify-center backdrop-blur-md bg-ink/30 !py-3 !px-6 !text-xs hover:bg-white/[0.06] cursor-pointer"
                  >
                    <span>Solicitar triagem sigilosa</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TIPOS DE PROTEÇÃO */}
        <section className="py-16 md:py-24 bg-graphite border-b hairline">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-[5vw]">
            <div className="reveal-on-scroll max-w-3xl mb-12">
              <div className="w-12 h-0.5 bg-gold mb-4" />
              <p className="text-[.58rem] tracking-[.3em] uppercase text-gold font-normal mb-2">
                Garantias Constitucionais do Campo
              </p>
              <h2 className="font-light text-2xl sm:text-3xl lg:text-4xl leading-[1.12] text-ivory tracking-tight">
                Quais bens do produtor rural não podem ser tomados por dívida.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {protecoes.map((item, i) => {
                const Icon = item.icon
                return (
                  <div
                    key={item.title}
                    className={`reveal-on-scroll reveal-delay-${i + 1} glass p-6 border border-white/10 hover:border-gold/40 transition-colors flex flex-col justify-between`}
                  >
                    <div>
                      <div className="w-10 h-10 rounded bg-forest/40 border border-gold/30 flex items-center justify-center mb-4">
                        <Icon className="w-5 h-5 text-champagne" />
                      </div>
                      <h3 className="text-sm font-medium text-ivory mb-2">{item.title}</h3>
                      <p className="text-xs text-muted leading-relaxed font-light">{item.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* ALERTA DE URGÊNCIA */}
        <section className="py-12 bg-forest/20 border-b hairline">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-[5vw]">
            <div className="reveal-on-scroll flex flex-col md:flex-row items-start md:items-center justify-between gap-5 p-5 sm:p-6 glass border border-gold/35 shadow-2xl">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gold/15 border border-gold/40 flex items-center justify-center shrink-0 mt-0.5">
                  <AlertTriangle className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="text-base sm:text-lg font-normal text-ivory">
                    Houve penhora de área, animais ou maquinários na sua fazenda?
                  </h3>
                  <p className="text-xs sm:text-sm text-ivory/80 mt-1 font-light leading-relaxed max-w-2xl">
                    A atuação técnica célere impugna o auto de penhora e impede que o banco leve seus bens produtivos a leilão judicial.
                  </p>
                </div>
              </div>
              <a
                href={protecaoWA}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary !py-3 !px-6 !text-xs shrink-0 whitespace-nowrap cursor-pointer shadow-xl"
              >
                <span>Falar com Especialista Agro</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </section>

        {/* FAQ PROTEÇÃO */}
        <section className="py-16 md:py-24 bg-ink border-b hairline">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-[5vw]">
            <div className="reveal-on-scroll max-w-2xl mb-10">
              <p className="text-[.58rem] tracking-[.3em] uppercase text-gold font-normal mb-2">
                Tira-Dúvidas Jurídico
              </p>
              <h2 className="font-light text-2xl sm:text-3xl lg:text-4xl leading-[1.12] text-ivory tracking-tight">
                Perguntas Frequentes sobre Impenhorabilidade Rural.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {faqs.map((faq) => (
                <div
                  key={faq.q}
                  className="reveal-on-scroll glass p-6 border border-white/10 flex flex-col justify-between"
                >
                  <div>
                    <HelpCircle className="w-5 h-5 text-gold mb-3" />
                    <h3 className="text-sm font-normal text-ivory mb-3">{faq.q}</h3>
                    <p className="text-xs text-muted leading-relaxed font-light">{faq.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA FINAL */}
        <section className="py-16 md:py-20 bg-forest/30 border-b hairline text-center flex flex-col items-center">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-[5vw] relative z-10 flex flex-col items-center">
            <h2 className="font-light text-2xl sm:text-3xl md:text-4xl text-ivory tracking-tight max-w-2xl text-balance">
              Garanta a segurança jurídica da sua família e da sua produção.
            </h2>
            <p className="mt-4 text-xs sm:text-sm text-ivory/80 max-w-xl font-light leading-relaxed">
              Converse diretamente com advogados especializados na defesa do produtor rural e proteja suas terras.
            </p>
            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <a
                href={protecaoWA}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary !py-3 !px-8 !text-xs cursor-pointer shadow-2xl"
              >
                <MessageCircle className="w-4 h-4 text-champagne" />
                <span>Conversar pelo WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <Link
                href="/agronegocio"
                className="btn-ghost !py-3 !px-6 !text-xs backdrop-blur-md bg-ink/50"
              >
                <span>Ver Visão Geral do Agro</span>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer
        onOpenTriagem={() => setTriagemOpen(true)}
        onOpenPrivacy={() => setPrivacyOpen(true)}
      />

      <FloatingWhatsApp onOpenTriagem={() => setTriagemOpen(true)} />
      <LeadTriageModal isOpen={triagemOpen} onClose={() => setTriagemOpen(false)} />
      <PrivacyModal isOpen={privacyOpen} onClose={() => setPrivacyOpen(false)} />
      <CookieBanner onOpenPrivacy={() => setPrivacyOpen(true)} />
    </>
  )
}
