'use client'

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import gsap from 'gsap'
import {
  MessageCircle,
  ArrowUpRight,
  Shield,
  Award,
  Users,
  MapPin,
  CheckCircle2,
  Building,
} from 'lucide-react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { StructureGallery } from '@/components/structure-gallery'
import { LeadTriageModal } from '@/components/lead-triage-modal'
import { PrivacyModal } from '@/components/privacy-modal'
import { CookieBanner } from '@/components/cookie-banner'
import { FloatingWhatsApp } from '@/components/floating-whatsapp'
import { SmoothScroll } from '@/components/smooth-scroll'
import { ScrollRevealProvider } from '@/components/scroll-reveal-provider'

export default function EscritorioPage() {
  const [triagemOpen, setTriagemOpen] = useState(false)
  const [privacyOpen, setPrivacyOpen] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)
  const bgMediaRef = useRef<HTMLDivElement>(null)
  const headlineRef = useRef<HTMLHeadingElement>(null)

  useEffect(() => {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reducedMotion) return

    const ctx = gsap.context(() => {
      const tl = gsap.timeline()

      if (bgMediaRef.current) {
        tl.fromTo(
          bgMediaRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.8, ease: 'power2.out' },
          0
        )
      }

      if (headlineRef.current) {
        const lines = headlineRef.current.querySelectorAll('.reveal-line > span')
        tl.fromTo(
          lines,
          { yPercent: 110, opacity: 0 },
          { yPercent: 0, opacity: 1, duration: 0.85, stagger: 0.08, ease: 'power4.out' },
          0.15
        )
      }

      tl.fromTo(
        '#hero-escritorio-desc',
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
        0.35
      )
      tl.fromTo(
        '#hero-escritorio-cta',
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' },
        0.45
      )
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  const handleOpenTriagem = (origin: string) => {
    setTriagemOpen(true)
  }

  const escritorioWA =
    'https://wa.me/5531971746972?text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20reuni%C3%A3o%20com%20os%20s%C3%B3cios%20fundadores%20do%20Braga%20%26%20Xavier.'

  const pilares = [
    {
      title: 'Atendimento Direto pelos Sócios',
      desc: 'No Braga & Xavier, seu caso não é delegado a advogados juniores ou estagiários. A estratégia, redação das peças e negociações são conduzidas pessoalmente pelos fundadores.',
    },
    {
      title: '100% Defesa do Devedor',
      desc: 'Independência ética inegociável: não atuamos para bancos ou instituições financeiras. Nossa dedicação é exclusiva a empresários e produtores rurais.',
    },
    {
      title: 'Atuação Nacional Digital',
      desc: 'Com sede em Montes Claros – MG e infraestrutura de ponta, atuamos em processos 100% eletrônicos perante qualquer Tribunal de Justiça, TRF, STJ e STF no Brasil.',
    },
    {
      title: 'Sigilo e Rigor Técnico',
      desc: 'Proteção absoluta de informações comerciais e dados patrimoniais sensíveis, com estratégias fundamentadas na jurisprudência mais recente.',
    },
  ]

  return (
    <>
      <SmoothScroll />
      <ScrollRevealProvider />

      <Header onOpenTriagem={handleOpenTriagem} />

      <main className="flex flex-col w-full overflow-x-clip bg-ink text-ivory">
        {/* HERO ESCRITÓRIO */}
        <section
          ref={sectionRef}
          className="relative min-h-[100svh] lg:min-h-screen flex flex-col justify-end lg:justify-center pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20 overflow-hidden w-full bg-ink"
        >
          {/* Background cinematográfico da Sede Braga & Xavier */}
          <div
            ref={bgMediaRef}
            className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
            aria-hidden="true"
          >
            {/* Imagem de Fundo Completa sem cortes */}
            <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
              <Image
                src="/assets/escritorio.jpg"
                alt="Sede Oficial Braga & Xavier Advogados"
                fill
                priority
                sizes="100vw"
                className="object-cover object-[center_35%] opacity-45 filter contrast-[1.05] brightness-[0.92]"
              />
              {/* Degradê Mobile suave */}
              <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-transparent via-40% to-ink lg:hidden" />
            </div>

            {/* Degradê Superior para Header no Desktop */}
            <div className="hidden lg:block absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-ink/80 via-ink/40 to-transparent" />

            {/* Degradê Desktop Horizontal Suave e Contínuo */}
            <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-ink via-ink/90 via-30% lg:via-42% to-transparent" />

            {/* Linhas topográficas sutis */}
            <div className="absolute inset-0 topo-lines opacity-20 mix-blend-overlay" />

            {/* Glow Dourado Ambiental sutil */}
            <div className="absolute -top-24 right-1/4 w-96 h-96 bg-gold/10 rounded-full blur-3xl pointer-events-none" />
          </div>

          <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-6 md:px-[5vw] relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-8 xl:col-span-7 mt-[34vh] sm:mt-[40vh] lg:mt-0 relative z-10">
                <h1
                  ref={headlineRef}
                  className="font-light text-3xl sm:text-4xl md:text-5xl lg:text-[3.2rem] xl:text-[3.6rem] leading-[1.08] text-ivory text-balance tracking-tight drop-shadow-sm"
                >
                  <span className="reveal-line">
                    <span>Rigor técnico, independência</span>
                  </span>
                  <span className="reveal-line">
                    <span className="text-champagne font-serif italic font-normal">
                      e atendimento direto
                    </span>
                  </span>
                  <span className="reveal-line">
                    <span>pelos fundadores.</span>
                  </span>
                </h1>

                <p
                  id="hero-escritorio-desc"
                  className="mt-5 max-w-[55ch] text-ivory/85 leading-relaxed text-sm sm:text-base font-light"
                >
                  A Braga &amp; Xavier Advogados nasceu com o compromisso de oferecer advocacia
                  artesanal de alta performance para quem enfrenta litígios complexos contra instituições
                  financeiras e demandas estratégicas no agronegócio.
                </p>

                <div id="hero-escritorio-cta" className="mt-8 flex flex-col sm:flex-row gap-3.5">
                  <a
                    href={escritorioWA}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary justify-center shadow-2xl !py-3 !px-6 !text-xs cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 text-champagne" />
                    <span>Agendar reunião com os sócios</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>

                  <Link
                    href="/contato"
                    className="btn-ghost justify-center backdrop-blur-md bg-ink/30 !py-3 !px-6 !text-xs hover:bg-white/[0.06] cursor-pointer"
                  >
                    <span>Conhecer a sede física</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* OS SÓCIOS FUNDADORES */}
        <section className="py-16 md:py-24 bg-graphite border-b hairline">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-[5vw]">
            <div className="reveal-on-scroll grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-5 relative">
                <div className="relative h-[380px] sm:h-[480px] w-full overflow-hidden border border-white/10 shadow-2xl">
                  <Image
                    src="/assets/equipe-escritorio.jpg"
                    alt="Dr. Braga e Dr. Xavier Sócios Fundadores"
                    fill
                    sizes="(max-width: 1024px) 100vw, 500px"
                    className="object-cover object-[center_15%] filter contrast-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 p-3.5 glass border border-gold/30 bg-ink/90">
                    <p className="text-[.6rem] tracking-[.25em] uppercase text-gold font-medium">
                      Sócios Fundadores
                    </p>
                    <p className="text-sm font-normal text-ivory mt-0.5">
                      Dr. Braga &amp; Dr. Xavier Advogados
                    </p>
                    <p className="text-[.65rem] text-muted font-light mt-0.5">
                      Inscrição OAB/MG &bull; Atuação em todo o Brasil
                    </p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="w-12 h-0.5 bg-gold mb-4" />
                <p className="text-[.58rem] tracking-[.3em] uppercase text-gold font-normal mb-2">
                  Corpo Jurídico
                </p>
                <h2 className="font-light text-2xl sm:text-3xl lg:text-4xl leading-[1.12] text-ivory tracking-tight mb-5">
                  Advocacia personalizada com profundidade técnica e presença constante.
                </h2>
                <p className="text-xs sm:text-sm text-muted leading-relaxed font-light mb-4">
                  Fundado pelos advogados Dr. Braga e Dr. Xavier, o escritório se consolidou como uma
                  verdadeira <strong>Boutique Jurídica</strong> de defesa contra abusos bancários e
                  reestruturação patrimonial de produtores rurais e empresas.
                </p>
                <p className="text-xs sm:text-sm text-muted leading-relaxed font-light mb-6">
                  Nosso modelo de atuação prioriza a qualidade sobre a quantidade: aceitamos um número
                  selecionado de casos para garantir que cada cliente receba atenção minuciosa,
                  estratégias personalizadas e reuniões periódicas diretamente com os fundadores.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {pilares.map((pilar, index) => (
                    <div
                      key={pilar.title}
                      className="p-4 bg-ink/60 border border-white/10 hover:border-gold/30 transition-colors"
                    >
                      <h3 className="text-xs sm:text-sm font-medium text-gold mb-1.5">
                        {pilar.title}
                      </h3>
                      <p className="text-[.72rem] text-muted leading-relaxed font-light">
                        {pilar.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* GALERIA DA ESTRUTURA FÍSICA */}
        <StructureGallery />

        {/* CTA FINAL ESCRITÓRIO */}
        <section className="py-16 md:py-20 bg-forest/30 border-b hairline relative overflow-hidden">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-[5vw] relative z-10 text-center flex flex-col items-center">
            <h2 className="font-light text-2xl sm:text-3xl md:text-4xl text-ivory tracking-tight max-w-2xl text-balance">
              Seu patrimônio e sua empresa merecem o rigor de uma boutique especializada.
            </h2>
            <p className="mt-4 text-xs sm:text-sm text-ivory/80 max-w-xl font-light leading-relaxed">
              Agende uma consulta inicial com os sócios fundadores para mapear os riscos e
              oportunidades do seu caso.
            </p>
            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <a
                href={escritorioWA}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary !py-3 !px-8 !text-xs cursor-pointer shadow-2xl"
              >
                <MessageCircle className="w-4 h-4 text-champagne" />
                <span>Conversar pelo WhatsApp</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <Link
                href="/contato"
                className="btn-ghost !py-3 !px-6 !text-xs backdrop-blur-md bg-ink/50"
              >
                <span>Ver Localização da Sede</span>
              </Link>
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
