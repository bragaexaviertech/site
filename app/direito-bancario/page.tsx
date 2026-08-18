'use client'

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import gsap from 'gsap'
import {
  MessageCircle,
  ArrowUpRight,
  ShieldAlert,
  Lock,
  FileSpreadsheet,
  Building2,
  HelpCircle,
  Clock,
  CheckCircle,
  AlertTriangle,
} from 'lucide-react'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { LeadTriageModal } from '@/components/lead-triage-modal'
import { PrivacyModal } from '@/components/privacy-modal'
import { CookieBanner } from '@/components/cookie-banner'
import { FloatingWhatsApp } from '@/components/floating-whatsapp'
import { SmoothScroll } from '@/components/smooth-scroll'
import { ScrollRevealProvider } from '@/components/scroll-reveal-provider'

export default function DireitoBancarioPage() {
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
          '#hero-bancario-desc',
          { opacity: 0, y: 18 },
          { opacity: 1, y: 0, duration: 0.65, ease: 'power3.out' },
          0.3
        )
        tl.fromTo(
          '#hero-bancario-cta',
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

  const handleOpenTriagem = (origin: string) => {
    setTriagemOpen(true)
  }

  const bancarioWA =
    'https://wa.me/5531971746972?text=Ol%C3%A1!%20Preciso%20de%20orienta%C3%A7%C3%A3o%20jur%C3%ADdica%20urgente%20sobre%20execu%C3%A7%C3%A3o%20banc%C3%A1ria%20%2F%20d%C3%ADvida%20PJ.'

  const servicos = [
    {
      icon: Lock,
      title: 'Desbloqueio de Contas (Sisbajud)',
      desc: 'Atuação urgente para reverter bloqueios judiciais indevidos sobre folha de pagamento, capital de giro e contas bancárias indispensáveis à subsistência da empresa.',
    },
    {
      icon: ShieldAlert,
      title: 'Defesa em Execuções de Título (CCB)',
      desc: 'Ajuizamento tempestivo de Embargos à Execução e Exceção de Pré-Executividade para impugnar excessos de execução, juros extorsivos e nulidades processuais.',
    },
    {
      icon: FileSpreadsheet,
      title: 'Auditoria e Revisional de Juros',
      desc: 'Perícia contábil para identificar juros capitalizados acima da taxa média do Banco Central, tarifas ilegais e seguros embutidos sem consentimento.',
    },
    {
      icon: Building2,
      title: 'Proteção do Patrimônio dos Sócios',
      desc: 'Defesa jurídica robusta contra a desconsideração da personalidade jurídica, preservando os bens particulares dos sócios e seus bens de família.',
    },
  ]

  const faqs = [
    {
      q: 'Fui citado em uma Execução de Título. Qual é o meu prazo?',
      a: 'O prazo para pagamento é de apenas 3 dias e para apresentação de Embargos à Execução é de 15 dias úteis contados da juntada do mandado. A intervenção imediata de um advogado especialista é decisiva para evitar penhora de faturamento e veículos.',
    },
    {
      q: 'O banco pode bloquear 100% do saldo da conta da minha empresa?',
      a: 'Bloqueios que inviabilizam a atividade operacional, o pagamento de salários de funcionários ou que recaem sobre quantias impenhoráveis podem ser liberados através de pedido judicial de urgência fundamentado no princípio da menor onerosidade.',
    },
    {
      q: 'É possível renegociar a dívida com desconto expressivo?',
      a: 'Sim. A partir do momento em que o débito é auditado judicialmente e são apontadas as ilegalidades cometidas pelo banco, a instituição financeira é compelida a abrir mesa de negociação com deságios significativos sobre o saldo devedor.',
    },
  ]

  return (
    <>
      <SmoothScroll />
      <ScrollRevealProvider />

      <Header onOpenTriagem={handleOpenTriagem} />

      <main className="flex flex-col w-full overflow-x-clip bg-ink text-ivory">
        {/* HERO DIREITO BANCÁRIO */}
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
            {/* Imagem de Fundo Completa preenchendo 100% da tela de ponta a ponta */}
            <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
              <Image
                src="/assets/hero-direito-bancario-bg.png"
                alt="Defesa em Execução Bancária e Reestruturação de Dívidas Braga & Xavier"
                fill
                priority
                sizes="100vw"
                className="object-cover object-[right_top] lg:object-[right_center] opacity-90 filter contrast-[1.03] brightness-[0.96]"
              />
              {/* Degradê Mobile suave */}
              <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-transparent via-40% to-ink lg:hidden" />
            </div>

            {/* Degradê Superior para Header no Desktop */}
            <div className="hidden lg:block absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-ink/80 via-ink/40 to-transparent" />

            {/* Degradê Desktop Horizontal Suave e Contínuo sobre a tela inteira */}
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
                    <span>Defesa estratégica contra</span>
                  </span>
                  <span className="reveal-line">
                    <span className="text-champagne font-serif italic font-normal">
                      execuções bancárias, bloqueios
                    </span>
                  </span>
                  <span className="reveal-line">
                    <span>e juros abusivos.</span>
                  </span>
                </h1>

                <p
                  id="hero-bancario-desc"
                  className="mt-5 max-w-[55ch] text-ivory/85 leading-relaxed text-sm sm:text-base font-light"
                >
                  Atuação combativa para proteger o caixa da sua empresa, suspender atos de penhora e
                  reestruturar contratos de Cédula de Crédito Bancário (CCB) perante bancos e fundos de investimento.
                </p>

                <div id="hero-bancario-cta" className="mt-8 flex flex-col sm:flex-row gap-3.5">
                  <a
                    href={bancarioWA}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary justify-center shadow-2xl !py-3 !px-6 !text-xs cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 text-champagne" />
                    <span>Falar com especialista no WhatsApp</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>

                  <button
                    onClick={() => handleOpenTriagem('hero_bancario')}
                    className="btn-ghost justify-center backdrop-blur-md bg-ink/30 !py-3 !px-6 !text-xs hover:bg-white/[0.06] cursor-pointer"
                  >
                    <span>Solicitar análise de urgência</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ALERTA DE URGÊNCIA PROCESSUAL */}
        <section className="py-8 bg-forest/25 border-b hairline">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-[5vw]">
            <div className="reveal-on-scroll flex flex-col md:flex-row items-start md:items-center justify-between gap-4 p-4 sm:p-5 bg-ink/90 border border-gold/40 shadow-xl">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded bg-gold/15 border border-gold/40 flex items-center justify-center shrink-0">
                  <AlertTriangle className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <p className="text-xs sm:text-sm font-medium text-ivory">
                    Recebeu citação ou notificação de processo judicial?
                  </p>
                  <p className="text-[.75rem] text-muted font-light">
                    O prazo legal de defesa é de apenas <strong>15 dias úteis</strong>. A inércia pode acarretar bloqueio imediato de contas.
                  </p>
                </div>
              </div>
              <a
                href={bancarioWA}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary !py-2 !px-4 !text-xs shrink-0 whitespace-nowrap cursor-pointer"
              >
                <span>Plantão de Urgência</span>
                <Clock className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </section>

        {/* 4 SOLUÇÕES JURÍDICAS */}
        <section className="py-16 md:py-24 bg-graphite border-b hairline">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-[5vw]">
            <div className="reveal-on-scroll max-w-2xl mb-12">
              <div className="w-12 h-0.5 bg-gold mb-4" />
              <p className="text-[.58rem] tracking-[.3em] uppercase text-gold font-normal mb-2">
                Soluções para Empresas &amp; Sócios
              </p>
              <h2 className="font-light text-2xl sm:text-3xl lg:text-4xl leading-[1.12] text-ivory tracking-tight">
                Proteção integral do caixa e do patrimônio empresarial.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {servicos.map((servico, index) => {
                const Icon = servico.icon
                return (
                  <div
                    key={servico.title}
                    className={`reveal-on-scroll reveal-delay-${(index % 2) + 1} glass p-6 sm:p-7 border border-white/10 hover:border-gold/40 transition-colors flex flex-col justify-between`}
                  >
                    <div>
                      <div className="w-10 h-10 rounded bg-forest/40 border border-gold/30 flex items-center justify-center mb-4">
                        <Icon className="w-5 h-5 text-champagne" />
                      </div>
                      <h3 className="text-base sm:text-lg font-normal text-ivory mb-2.5">
                        {servico.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-muted leading-relaxed font-light">
                        {servico.desc}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* FAQ BANCÁRIO */}
        <section className="py-16 md:py-24 bg-ink border-b hairline">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-[5vw]">
            <div className="reveal-on-scroll max-w-2xl mb-10">
              <p className="text-[.58rem] tracking-[.3em] uppercase text-gold font-normal mb-2">
                Tira-Dúvidas
              </p>
              <h2 className="font-light text-2xl sm:text-3xl lg:text-4xl leading-[1.12] text-ivory tracking-tight">
                Perguntas Frequentes sobre Dívidas Bancárias.
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

        {/* CTA FINAL BANCÁRIO */}
        <section className="py-16 md:py-20 bg-forest/30 border-b hairline relative overflow-hidden">
          <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-[5vw] relative z-10 text-center flex flex-col items-center">
            <h2 className="font-light text-2xl sm:text-3xl md:text-4xl text-ivory tracking-tight max-w-2xl text-balance">
              Não enfrente as instituições financeiras desarmado.
            </h2>
            <p className="mt-4 text-xs sm:text-sm text-ivory/80 max-w-xl font-light leading-relaxed">
              Consulte diretamente os advogados especialistas da Braga &amp; Xavier e desenhe uma
              estratégia técnica para proteger o fluxo de caixa da sua empresa.
            </p>
            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <a
                href={bancarioWA}
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
                <span>Ver Localização &amp; Sede</span>
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
