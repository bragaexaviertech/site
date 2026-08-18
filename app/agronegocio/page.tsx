'use client'

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import gsap from 'gsap'
import {
  MessageCircle,
  ArrowUpRight,
  Shield,
  FileText,
  TrendingDown,
  CheckCircle2,
  HelpCircle,
  Sparkles,
} from 'lucide-react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { LeadTriageModal } from '@/components/lead-triage-modal'
import { PrivacyModal } from '@/components/privacy-modal'
import { CookieBanner } from '@/components/cookie-banner'
import { FloatingWhatsApp } from '@/components/floating-whatsapp'
import { SmoothScroll } from '@/components/smooth-scroll'
import { ScrollRevealProvider } from '@/components/scroll-reveal-provider'

export default function AgronegocioPage() {
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
        '#hero-agro-desc',
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' },
        0.35
      )
      tl.fromTo(
        '#hero-agro-cta',
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

  const ruralWA =
    'https://wa.me/5531971746972?text=Ol%C3%A1!%20Sou%20produtor%20rural%20e%20gostaria%20de%20orienta%C3%A7%C3%A3o%20sobre%20alongamento%20de%20d%C3%ADvida%20rural%20%2F%20S%C3%BAmula%20298%20STJ.'

  const pilares = [
    {
      icon: TrendingDown,
      title: 'Alongamento de Dívida de Safra',
      desc: 'Aplicação da Súmula 298 do STJ e do Manual de Crédito Rural (MCR) para obrigar a instituição bancária a repactuar o débito com prazos compatíveis com a capacidade de pagamento do produtor.',
    },
    {
      icon: Shield,
      title: 'Proteção da Propriedade & Máquinas',
      desc: 'Medidas jurídicas para evitar penhora, busca e apreensão de maquinários, colheitadeiras, tratores e terra rural indispensável à atividade produtiva familiar.',
    },
    {
      icon: FileText,
      title: 'Auditoria de CPR, CCR e Títulos',
      desc: 'Revisão minuciosa de Cédulas de Produto Rural (Física e Financeira), Cédulas de Crédito Rural e Cédulas Bancárias para expurgar taxas abusivas e seguros embutidos.',
    },
    {
      icon: CheckCircle2,
      title: 'Defesa em Execuções e Arresto de Grãos',
      desc: 'Atuação imediata contra ordens judiciais de arresto de colheita, bloqueio de contas de custeio e leilões de imóveis rurais em todo o território nacional.',
    },
  ]

  const faqs = [
    {
      q: 'Quando o banco é obrigado a alongar a dívida rural?',
      a: 'De acordo com a Súmula 298 do STJ, o alongamento de dívida originada de crédito rural não é favor do banco, mas um direito do produtor rural quando comprovada a frustração de safra por intempéries climáticas, pragas, seca ou queda acentuada nos preços de mercado.',
    },
    {
      q: 'Quais documentos o produtor precisa apresentar?',
      a: 'A cópia do contrato ou Cédula de Crédito Rural (CCR/CPR), laudo agronômico ou relatório meteorológico atestando a perda, e a comprovação da incapacidade momentânea de pagamento formalizada administrativamente.',
    },
    {
      q: 'Minha propriedade pode ser penhorada por dívida bancária?',
      a: 'A Pequena Propriedade Rural trabalhada pela família é impenhorável por dívidas decorrentes de sua atividade produtiva (art. 5º, XXVI da Constituição Federal e art. 833 do CPC). Atuamos na impugnação imediata de penhoras indevidas.',
    },
  ]

  return (
    <>
      <SmoothScroll />
      <ScrollRevealProvider />

      <Header onOpenTriagem={handleOpenTriagem} />

      <main className="flex flex-col w-full overflow-x-clip bg-ink text-ivory">
        {/* HERO AGRONEGÓCIO */}
        <section
          ref={sectionRef}
          className="relative min-h-[100svh] lg:min-h-screen flex flex-col justify-end lg:justify-center pt-20 sm:pt-24 md:pt-32 pb-12 sm:pb-16 md:pb-20 overflow-hidden w-full bg-ink"
        >
          {/* Background com mesmo padrão de filtro e opacidade da Início */}
          <div
            ref={bgMediaRef}
            className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
            aria-hidden="true"
          >
            {/* Imagem de Fundo Completa de ponta a ponta (sem cortes laterais) */}
            <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
              <Image
                src="/assets/hero-agronegocio-bg.png"
                alt="Operações de Crédito Rural e Agronegócio Braga & Xavier"
                fill
                priority
                sizes="100vw"
                className="object-cover object-[center_top] lg:object-[center_45%] opacity-90 filter contrast-[1.03] brightness-[0.96]"
              />
              {/* Degradê Mobile suave */}
              <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-transparent via-40% to-ink lg:hidden" />
            </div>

            {/* Degradê Superior para Header no Desktop */}
            <div className="hidden lg:block absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-ink/80 via-ink/40 to-transparent" />

            {/* Degradê Desktop Horizontal Suave e Contínuo sobre a tela inteira (sem linhas de corte) */}
            <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-ink via-ink/85 via-30% lg:via-42% to-transparent" />

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
                    <span>Segurança jurídica para proteger</span>
                  </span>
                  <span className="reveal-line">
                    <span className="text-champagne font-serif italic font-normal">
                      a safra, a terra e o patrimônio
                    </span>
                  </span>
                  <span className="reveal-line">
                    <span>do produtor rural.</span>
                  </span>
                </h1>

                <p
                  id="hero-agro-desc"
                  className="mt-5 max-w-[55ch] text-ivory/85 leading-relaxed text-sm sm:text-base font-light"
                >
                  Atuação estratégica na renegociação e prorrogação de dívidas de crédito rural,
                  defesa contra penhoras de imóveis rurais e auditoria de contratos com instituições
                  bancárias em todo o Brasil.
                </p>

                <div id="hero-agro-cta" className="mt-8 flex flex-col sm:flex-row gap-3.5">
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
                    onClick={() => handleOpenTriagem('hero_agro')}
                    className="btn-ghost justify-center backdrop-blur-md bg-ink/30 !py-3 !px-6 !text-xs hover:bg-white/[0.06] cursor-pointer"
                  >
                    <span>Solicitar triagem sigilosa</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DESTAQUE SÚMULA 298 STJ */}
        <section className="py-16 md:py-24 bg-graphite border-b hairline">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-[5vw]">
            <div className="reveal-on-scroll grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
              <div className="lg:col-span-6">
                <div className="w-12 h-0.5 bg-gold mb-4" />
                <p className="text-[.58rem] tracking-[.3em] uppercase text-gold font-normal mb-2">
                  Direito Subjetivo Pacificado
                </p>
                <h2 className="font-light text-2xl sm:text-3xl lg:text-4xl leading-[1.12] text-ivory tracking-tight mb-4">
                  O alongamento da dívida rural é um direito do produtor, não favor do banco.
                </h2>
                <p className="text-xs sm:text-sm text-muted leading-relaxed font-light mb-4">
                  A <strong>Súmula 298 do Superior Tribunal de Justiça (STJ)</strong> e o Manual de
                  Crédito Rural estabelecem que, preenchidos os requisitos legais de quebra de
                  safra, seca, excesso de chuvas ou queda acentuada de preços, o banco é obrigado a
                  renegociar o débito com taxa e prazos condizentes com a nova realidade do produtor.
                </p>
                <div className="p-4 bg-ink/70 border border-gold/20 flex flex-col gap-2">
                  <div className="flex items-center gap-2 text-gold text-xs font-medium uppercase tracking-wider">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Requisitos para Prorrogação</span>
                  </div>
                  <ul className="text-xs text-ivory/80 space-y-1.5 list-disc pl-4 font-light">
                    <li>Dificuldade de comercialização ou frustração de safra por fatores climáticos;</li>
                    <li>Comprovação técnica da incapacidade momentânea de pagamento;</li>
                    <li>Formalização de requerimento perante a instituição financeira credora.</li>
                  </ul>
                </div>
              </div>

              <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {pilares.map((pilar, index) => {
                  const Icon = pilar.icon
                  return (
                    <div
                      key={pilar.title}
                      className={`reveal-on-scroll reveal-delay-${(index % 3) + 1} glass p-5 border border-white/10 hover:border-gold/40 transition-colors flex flex-col justify-between`}
                    >
                      <div>
                        <div className="w-8 h-8 rounded bg-forest/40 border border-gold/30 flex items-center justify-center mb-3">
                          <Icon className="w-4 h-4 text-champagne" />
                        </div>
                        <h3 className="text-xs sm:text-sm font-normal text-ivory mb-2">
                          {pilar.title}
                        </h3>
                        <p className="text-[.7rem] sm:text-xs text-muted leading-relaxed font-light">
                          {pilar.desc}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ RURAL */}
        <section className="py-16 md:py-24 bg-ink border-b hairline">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-[5vw]">
            <div className="reveal-on-scroll max-w-2xl mb-10">
              <p className="text-[.58rem] tracking-[.3em] uppercase text-gold font-normal mb-2">
                Dúvidas do Produtor
              </p>
              <h2 className="font-light text-2xl sm:text-3xl lg:text-4xl leading-[1.12] text-ivory tracking-tight">
                Perguntas Frequentes sobre Crédito Rural.
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

        {/* CTA FINAL AGRO */}
        <section className="py-16 md:py-20 bg-forest/30 border-b hairline relative overflow-hidden">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-[5vw] relative z-10 text-center flex flex-col items-center">
            <h2 className="font-light text-2xl sm:text-3xl md:text-4xl text-ivory tracking-tight max-w-2xl text-balance">
              Não permita que juros abusivos ou perdas climáticas comprometam seu patrimônio.
            </h2>
            <p className="mt-4 text-xs sm:text-sm text-ivory/80 max-w-xl font-light leading-relaxed">
              Converse diretamente com os advogados especialistas da Braga &amp; Xavier e receba uma
              análise preliminar individualizada da sua cédula ou contrato.
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
                href="/escritorio"
                className="btn-ghost !py-3 !px-6 !text-xs backdrop-blur-md bg-ink/50"
              >
                <span>Conhecer os Sócios Fundadores</span>
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
