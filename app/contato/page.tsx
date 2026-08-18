'use client'

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import gsap from 'gsap'
import {
  MessageCircle,
  ArrowUpRight,
  MapPin,
  Phone,
  Mail,
  Clock,
  ShieldCheck,
  Navigation,
} from 'lucide-react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { LeadTriageModal } from '@/components/lead-triage-modal'
import { PrivacyModal } from '@/components/privacy-modal'
import { CookieBanner } from '@/components/cookie-banner'
import { FloatingWhatsApp } from '@/components/floating-whatsapp'
import { SmoothScroll } from '@/components/smooth-scroll'
import { ScrollRevealProvider } from '@/components/scroll-reveal-provider'

export default function ContatoPage() {
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
          '#hero-contato-desc',
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.65, ease: 'power3.out' },
          0.3
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

  const handleOpenTriagem = (origin: string) => {
    setTriagemOpen(true)
  }

  const contatoWA =
    'https://wa.me/5531971746972?text=Ol%C3%A1!%20Conheci%20o%20Braga%20%26%20Xavier%20pelo%20site%20e%20gostaria%20de%20informa%C3%A7%C3%B5es%20de%20atendimento.'

  const contactCards = [
    {
      icon: MessageCircle,
      title: 'WhatsApp Oficial',
      info: '(31) 97174-6972',
      action: 'Chamar no WhatsApp',
      href: 'https://wa.me/5531971746972?text=Ol%C3%A1!%20Gostaria%20de%20falar%20com%20um%20advogado%20do%20Braga%20%26%20Xavier.',
      badge: 'Resposta Rápida',
    },
    {
      icon: Phone,
      title: 'Telefone / Chamadas',
      info: '(31) 97174-6972',
      action: 'Ligar agora',
      href: 'tel:+5531971746972',
      badge: 'Atendimento Direto',
    },
    {
      icon: Mail,
      title: 'E-mail Institucional',
      info: 'contato@bragaexavier.adv.br',
      action: 'Enviar e-mail',
      href: 'mailto:contato@bragaexavier.adv.br',
      badge: 'Sigilo OAB',
    },
    {
      icon: Clock,
      title: 'Horário & Plantão',
      info: 'Seg a Sex: 08h às 18h',
      action: 'Plantão 24h para Urgências',
      href: 'https://wa.me/5531971746972?text=Ol%C3%A1!%20Tenho%20uma%20urg%C3%AAncia%20jur%C3%ADdica%20(bloqueio%20ou%20prazo).',
      badge: 'Plantão 24h',
    },
  ]

  return (
    <>
      <SmoothScroll />
      <ScrollRevealProvider />

      <Header onOpenTriagem={handleOpenTriagem} />

      <main className="flex flex-col w-full overflow-x-clip bg-ink text-ivory">
        {/* HERO CONTATO */}
        <section
          ref={sectionRef}
          className="relative min-h-[100svh] lg:min-h-screen flex flex-col justify-end lg:justify-center pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20 overflow-hidden w-full bg-ink"
        >
          {/* Background cinematográfico da Sede */}
          <div
            ref={bgMediaRef}
            className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
            aria-hidden="true"
          >
            <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
              <Image
                src="/assets/recepcao.jpg"
                alt="Recepção e Atendimento Oficial Braga & Xavier Advogados"
                fill
                priority
                sizes="100vw"
                className="object-cover object-[right_center] lg:object-[right_45%] opacity-45 lg:opacity-60 filter contrast-[1.05] brightness-[0.94]"
              />
              {/* Degradê Mobile suave */}
              <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-transparent via-40% to-ink lg:hidden" />
            </div>

            {/* Degradê Superior para Header no Desktop */}
            <div className="hidden lg:block absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-ink/80 via-ink/40 to-transparent" />

            {/* Degradê Desktop Horizontal Suave */}
            <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-ink via-ink/90 via-30% lg:via-42% to-transparent" />

            {/* Linhas topográficas sutis */}
            <div className="absolute inset-0 topo-lines opacity-20 mix-blend-overlay" />

            {/* Glow Dourado Ambiental sutil */}
            <div className="absolute -top-24 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
          </div>

          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-[5vw] relative z-10 w-full">
            <div className="max-w-3xl">
              <h1
                ref={headlineRef}
                className="font-light text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] xl:text-[3.6rem] leading-[1.08] text-ivory text-balance tracking-tight drop-shadow-sm"
              >
                <span className="reveal-line overflow-hidden block">
                  <span>Fale diretamente com os</span>
                </span>
                <span className="reveal-line overflow-hidden block">
                  <span className="text-champagne font-serif italic font-normal">
                    advogados especialistas
                  </span>
                </span>
                <span className="reveal-line overflow-hidden block">
                  <span>da Braga &amp; Xavier.</span>
                </span>
              </h1>

              <p
                id="hero-contato-desc"
                className="mt-5 max-w-[55ch] text-ivory/85 leading-relaxed text-sm sm:text-base font-light"
              >
                Agende uma reunião presencial em nossa sede ou solicite atendimento por
                videoconferência com os sócios fundadores de onde você estiver.
              </p>
            </div>
          </div>
        </section>

        {/* 4 CARDS DE CONTATO */}
        <section className="py-12 md:py-16 bg-graphite border-b hairline">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-[5vw]">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {contactCards.map((card) => {
                const Icon = card.icon
                return (
                  <div
                    key={card.title}
                    className="reveal-on-scroll glass p-5 sm:p-6 border border-white/10 hover:border-gold/40 transition-colors flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <Icon className="w-5 h-5 text-gold" />
                        <span className="text-[.58rem] tracking-wider uppercase text-gold font-medium">
                          {card.badge}
                        </span>
                      </div>
                      <h3 className="text-xs uppercase tracking-wider text-muted font-normal">
                        {card.title}
                      </h3>
                      <p className="text-sm sm:text-base font-medium text-ivory mt-1 mb-4 break-all">
                        {card.info}
                      </p>
                    </div>
                    <a
                      href={card.href}
                      target={card.href.startsWith('http') ? '_blank' : undefined}
                      rel={card.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="inline-flex items-center gap-1 text-xs text-champagne link-underline font-medium"
                    >
                      <span>{card.action}</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* MAPA GOOGLE E ENDEREÇO */}
        <section className="py-16 md:py-24 bg-ink border-b hairline">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-[5vw]">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-8">
              <div className="reveal-on-scroll lg:col-span-6">
                <div className="w-12 h-0.5 bg-gold mb-4" />
                <p className="text-[.58rem] tracking-[.3em] uppercase text-gold font-normal mb-2">
                  Localização da Sede
                </p>
                <h2 className="font-light text-2xl sm:text-3xl lg:text-4xl leading-[1.12] text-ivory tracking-tight mb-4">
                  Sede em Montes Claros &mdash; MG com atuação nacional.
                </h2>
                <div className="p-4 bg-graphite border border-white/10 flex flex-col gap-2">
                  <div className="flex items-start gap-2.5">
                    <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-ivory">Endereço Oficial:</p>
                      <p className="text-xs text-muted font-light leading-relaxed mt-0.5">
                        Rua Irmã Beata, 18 &ndash; Loja 03 &ndash; Centro
                        <br />
                        Montes Claros &ndash; MG &bull; CEP 39400-110
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-4 flex flex-col sm:flex-row gap-3">
                  <a
                    href="https://www.google.com/maps/search/?api=1&query=Braga+%26+Xavier+Advogados+Montes+Claros"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary !py-2.5 !px-4 !text-xs cursor-pointer inline-flex items-center gap-2"
                  >
                    <Navigation className="w-3.5 h-3.5 text-champagne" />
                    <span>Traçar rota no Google Maps</span>
                  </a>
                  <a
                    href={contatoWA}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost !py-2.5 !px-4 !text-xs inline-flex items-center gap-2"
                  >
                    <MessageCircle className="w-3.5 h-3.5" />
                    <span>Confirmar horário por WhatsApp</span>
                  </a>
                </div>
              </div>

              <div className="reveal-on-scroll reveal-delay-1 lg:col-span-6">
                <div className="p-5 glass border border-gold/30 bg-forest/15 flex flex-col gap-3">
                  <div className="flex items-center gap-2 text-gold text-xs uppercase tracking-wider font-medium">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Atendimento com Sigilo Absoluto</span>
                  </div>
                  <p className="text-xs text-ivory/80 leading-relaxed font-light">
                    Todas as consultas, trocas de documentos e reuniões presenciais ou remotas são
                    estritamente protegidas pelo sigilo profissional da advocacia (Lei Federal nº
                    8.906/94) e pela LGPD. Seus dados e informações patrimoniais nunca serão compartilhados.
                  </p>
                </div>
              </div>
            </div>

            {/* Mapa Oficial Incorporado */}
            <div className="reveal-on-scroll w-full relative overflow-hidden border border-white/15 shadow-2xl bg-ink">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.108395165154!2d-43.8681804!3d-16.721442499999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x754adbbf9d17d99%3A0xd737545d31577788!2sBraga%20%26%20Xavier%20Advogados!5e0!3m2!1spt-BR!2sbr!4v1786974613847!5m2!1spt-BR!2sbr"
                width="100%"
                height="420"
                style={{ border: 0, display: 'block' }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="strict-origin-when-cross-origin"
                title="Localização do Escritório Braga & Xavier Advogados no Google Maps"
                className="w-full h-[340px] sm:h-[400px] md:h-[450px] filter brightness-[0.9] contrast-[1.08] hover:brightness-100 transition-all duration-500"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer
        onOpenTriagem={handleOpenTriagem}
        onOpenPrivacy={() => setPrivacyOpen(true)}
      />

      <FloatingWhatsApp onOpenTriagem={handleOpenTriagem} />
      <LeadTriageModal isOpen={triagemOpen} onClose={() => setTriagemOpen(false)} />
      <PrivacyModal isOpen={privacyOpen} onClose={() => setPrivacyOpen(false)} />
      <CookieBanner onOpenPrivacy={() => setPrivacyOpen(true)} />
    </>
  )
}
