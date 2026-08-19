'use client'

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import gsap from 'gsap'
import {
  MessageCircle,
  ArrowUpRight,
  Shield,
  FileCheck2,
  TrendingDown,
  HelpCircle,
  AlertTriangle,
  Scale,
  CheckCircle2,
} from 'lucide-react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { LeadTriageModal } from '@/components/lead-triage-modal'
import { PrivacyModal } from '@/components/privacy-modal'
import { CookieBanner } from '@/components/cookie-banner'
import { FloatingWhatsApp } from '@/components/floating-whatsapp'
import { SmoothScroll } from '@/components/smooth-scroll'
import { ScrollRevealProvider } from '@/components/scroll-reveal-provider'

export default function AlongamentoDividaRuralPage() {
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
          '#hero-alongamento-desc',
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.65, ease: 'power3.out' },
          0.3
        )
        tl.fromTo(
          '#hero-alongamento-cta',
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

  const ruralWA =
    'https://wa.me/5531971746972?text=Ol%C3%A1!%20Sou%20produtor%20rural%20e%20gostaria%20de%20orienta%C3%A7%C3%A3o%20urgente%20sobre%20Alongamento%20de%20D%C3%ADvida%20Rural%20pela%20S%C3%BAmula%20298%20STJ.'

  const requisitos = [
    {
      title: '1. Frustração de Safra ou Queda de Preço',
      desc: 'Perdas causadas por seca, excesso de chuvas, granizo, pragas ou oscilação severa das cotações de mercado.',
    },
    {
      title: '2. Comprovação da Dificuldade Momentânea',
      desc: 'Laudos agronômicos, fotos da lavoura, relatórios meteorológicos e demonstrativo do impacto financeiro.',
    },
    {
      title: '3. Requerimento Administrativo Notificado',
      desc: 'Protocolo formal perante o banco credor antes ou após o vencimento, exigindo os termos do Manual de Crédito Rural.',
    },
  ]

  const faqs = [
    {
      q: 'O banco pode se recusar a prorrogar o vencimento da minha dívida rural?',
      a: 'Não. A Súmula 298 do STJ é expressa: "O alongamento de dívida originada de crédito rural não constitui faculdade da instituição financeira, mas direito do devedor nos termos da lei". Se o banco negar, ingressamos imediatamente com ação judicial com pedido liminar.',
    },
    {
      q: 'Qual é o prazo ideal para solicitar o alongamento?',
      a: 'O ideal é formalizar o pedido antes do vencimento da parcela, mas mesmo que o débito já tenha vencido ou esteja em cobrança judicial, é plenamente viável alegar a matéria em defesa para travar penhoras e repactuar a dívida.',
    },
    {
      q: 'Quais modalidades de crédito podem ser alongadas?',
      a: 'Custeio agrícola e pecuário, financiamentos de investimento, CPRs e Cédulas de Crédito Rural (CCR) vinculadas à atividade agropecuária.',
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
                alt="Alongamento de Dívida Rural e Crédito de Safra"
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
                  <Scale className="w-3.5 h-3.5" /> Súmula 298 do STJ &bull; Manual de Crédito Rural
                </div>

                <h1
                  ref={headlineRef}
                  className="font-light text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] xl:text-[3.6rem] leading-[1.08] text-ivory text-balance tracking-tight drop-shadow-sm"
                >
                  <span className="reveal-line">
                    <span>Alongamento de dívida rural:</span>
                  </span>
                  <span className="reveal-line">
                    <span className="text-champagne font-serif italic font-normal">
                      direito legal do produtor,
                    </span>
                  </span>
                  <span className="reveal-line">
                    <span>não favor do banco.</span>
                  </span>
                </h1>

                <p
                  id="hero-alongamento-desc"
                  className="mt-5 max-w-[55ch] text-ivory/85 leading-relaxed text-sm sm:text-base font-light"
                >
                  Se você teve perdas de safra, seca ou queda nas cotações, o banco é obrigado a prorrogar o vencimento da sua dívida para manter sua produção e sua terra protegidas.
                </p>

                <div id="hero-alongamento-cta" className="mt-8 flex flex-col sm:flex-row gap-3.5">
                  <a
                    href={ruralWA}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary justify-center shadow-2xl !py-3 !px-6 !text-xs cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 text-champagne" />
                    <span>Analisar meu caso no WhatsApp</span>
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

        {/* COMO FUNCIONA A SÚMULA 298 */}
        <section className="py-16 md:py-24 bg-graphite border-b hairline">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-[5vw]">
            <div className="reveal-on-scroll max-w-3xl mb-12">
              <div className="w-12 h-0.5 bg-gold mb-4" />
              <p className="text-[.58rem] tracking-[.3em] uppercase text-gold font-normal mb-2">
                Fundamentação Jurídica Pacífica
              </p>
              <h2 className="font-light text-2xl sm:text-3xl lg:text-4xl leading-[1.12] text-ivory tracking-tight">
                O que diz a Súmula 298 do STJ e por que ela protege sua fazenda.
              </h2>
              <blockquote className="mt-5 p-4 sm:p-5 bg-forest/30 border-l-2 border-gold/60 text-sm sm:text-base text-champagne font-serif italic leading-relaxed">
                &ldquo;O alongamento de dívida originada de crédito rural não constitui faculdade da instituição financeira, mas direito do devedor nos termos da lei.&rdquo;
              </blockquote>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {requisitos.map((req, i) => (
                <div
                  key={req.title}
                  className={`reveal-on-scroll reveal-delay-${i + 1} glass p-6 border border-white/10 hover:border-gold/40 transition-colors flex flex-col justify-between`}
                >
                  <div>
                    <div className="w-8 h-8 rounded bg-forest/40 border border-gold/30 flex items-center justify-center mb-3">
                      <CheckCircle2 className="w-4 h-4 text-champagne" />
                    </div>
                    <h3 className="text-sm font-medium text-ivory mb-2">{req.title}</h3>
                    <p className="text-xs text-muted leading-relaxed font-light">{req.desc}</p>
                  </div>
                </div>
              ))}
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
                    O banco já notificou ou ajuizou execução de safra?
                  </h3>
                  <p className="text-xs sm:text-sm text-ivory/80 mt-1 font-light leading-relaxed max-w-2xl">
                    Mesmo com processo em andamento, é possível requerer liminar para travar atos de leilão, arresto de grãos e penhora de maquinários com base na quebra comprovada.
                  </p>
                </div>
              </div>
              <a
                href={ruralWA}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary !py-3 !px-6 !text-xs shrink-0 whitespace-nowrap cursor-pointer shadow-xl"
              >
                <span>Falar com Advogado Agro</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </section>

        {/* FAQ ALONGAMENTO */}
        <section className="py-16 md:py-24 bg-ink border-b hairline">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-[5vw]">
            <div className="reveal-on-scroll max-w-2xl mb-10">
              <p className="text-[.58rem] tracking-[.3em] uppercase text-gold font-normal mb-2">
                Tira-Dúvidas do Produtor
              </p>
              <h2 className="font-light text-2xl sm:text-3xl lg:text-4xl leading-[1.12] text-ivory tracking-tight">
                Perguntas Frequentes sobre Alongamento Rural.
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
              Não entregue sua colheita ou suas terras ao banco sem lutar pelo seu direito.
            </h2>
            <p className="mt-4 text-xs sm:text-sm text-ivory/80 max-w-xl font-light leading-relaxed">
              Consulte os especialistas da Braga &amp; Xavier e receba uma análise preliminar da sua cédula ou contrato de financiamento rural.
            </p>
            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <a
                href={ruralWA}
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
