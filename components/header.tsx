'use client'

import React, { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import {
  ArrowUpRight,
  Menu,
  X,
  ChevronDown,
  Sprout,
  FileText,
  Shield,
  Lock,
  Building2,
  FileSpreadsheet,
  TrendingDown,
  ExternalLink,
} from 'lucide-react'

interface HeaderProps {
  onOpenTriagem: (origin: string) => void
}

interface SubLink {
  href: string
  title: string
  desc: string
  icon: React.ComponentType<{ className?: string }>
}

interface NavItem {
  href: string
  label: string
  sublinks?: SubLink[]
  hubLabel?: string
}

export function Header({ onOpenTriagem }: HeaderProps) {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [mobileExpanded, setMobileExpanded] = useState<Record<string, boolean>>({})
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  useEffect(() => {
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      const currentScroll = window.scrollY
      setScrolled(currentScroll > 25)

      if (currentScroll > 200 && currentScroll > lastScrollY) {
        setHidden(true)
        setActiveDropdown(null)
      } else {
        setHidden(false)
      }
      lastScrollY = currentScroll
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Fechar dropdowns com tecla Esc
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveDropdown(null)
        setMobileMenuOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  const navItems: NavItem[] = [
    { href: '/', label: 'Início' },
    {
      href: '/agronegocio',
      label: 'Agronegócio',
      hubLabel: 'Ver Visão Geral do Agronegócio',
      sublinks: [
        {
          href: '/agronegocio/alongamento-divida-rural',
          title: 'Alongamento de Dívida Rural',
          desc: 'Súmula 298 STJ, MCR e prorrogação por quebra de safra',
          icon: TrendingDown,
        },
        {
          href: '/agronegocio/auditoria-cpr-ccr',
          title: 'Auditoria de CPR & CCR',
          desc: 'Expurgo de juros abusivos e encargos em cédulas rurais',
          icon: FileText,
        },
        {
          href: '/agronegocio/protecao-propriedade-rural',
          title: 'Proteção da Propriedade Rural',
          desc: 'Impenhorabilidade da terra, colheitas e maquinários',
          icon: Shield,
        },
      ],
    },
    {
      href: '/direito-bancario',
      label: 'Direito Bancário',
      hubLabel: 'Ver Visão Geral de Direito Bancário',
      sublinks: [
        {
          href: '/direito-bancario/defesa-execucao-ccb',
          title: 'Defesa em Execução de CCB',
          desc: 'Prazo legal de 15 dias, embargos e nulidades de garantias',
          icon: FileSpreadsheet,
        },
        {
          href: '/direito-bancario/desbloqueio-sisbajud',
          title: 'Desbloqueio Sisbajud',
          desc: 'Plantão urgente para liberação de contas e salários',
          icon: Lock,
        },
        {
          href: '/direito-bancario/blindagem-patrimonial-socios',
          title: 'Blindagem Patrimonial de Sócios',
          desc: 'Defesa de avalistas e proteção de bens pessoais',
          icon: Shield,
        },
        {
          href: '/direito-bancario/renegociacao-dividas-pj',
          title: 'Reestruturação de Dívidas PJ',
          desc: 'Proteção de capital de giro e negociação com deságio',
          icon: Building2,
        },
      ],
    },
    { href: '/escritorio', label: 'O Escritório' },
    { href: '/contato', label: 'Contato' },
  ]

  const handleMouseEnter = (label: string) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current)
    setActiveDropdown(label)
  }

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setActiveDropdown(null)
    }, 150)
  }

  const toggleMobileExpand = (label: string) => {
    setMobileExpanded((prev) => ({
      ...prev,
      [label]: !prev[label],
    }))
  }

  return (
    <>
      <header
        id="site-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0A0A0C]/92 backdrop-blur-xl border-b border-white/[0.07]'
            : 'border-b border-transparent'
        } ${hidden ? '-translate-y-full' : 'translate-y-0'}`}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-[5vw] flex items-center justify-between h-14 md:h-16">
          {/* Logo Oficial */}
          <Link
            href="/"
            className="flex items-center gap-2 sm:gap-2.5 group"
            aria-label="Braga & Xavier Advogados — início"
          >
            <Image
              src="/logo-BX.png"
              alt="Logo Braga & Xavier Advogados"
              width={48}
              height={48}
              className="h-8 sm:h-9 md:h-10 w-auto object-contain group-hover:brightness-110 transition-all"
              priority
            />
            <div className="flex flex-col leading-none border-l hairline pl-2 sm:pl-2.5">
              <span className="font-normal text-[0.75rem] sm:text-xs md:text-sm tracking-wider text-ivory uppercase">
                BRAGA <span className="text-gold">&amp;</span> XAVIER
              </span>
              <span className="text-[0.44rem] sm:text-[0.48rem] tracking-[0.25em] text-muted uppercase mt-0.5 font-light">
                ADVOGADOS
              </span>
            </div>
          </Link>

          {/* Links Desktop com Mega Dropdowns */}
          <nav className="hidden lg:flex items-center gap-5 xl:gap-7" aria-label="Navegação principal">
            {navItems.map((item) => {
              const isDirectActive = pathname === item.href
              const isSubActive = item.sublinks?.some((sub) => pathname === sub.href)
              const isActive = isDirectActive || isSubActive
              const hasDropdown = Boolean(item.sublinks && item.sublinks.length > 0)
              const isOpen = activeDropdown === item.label

              if (!hasDropdown) {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`link-underline text-[.72rem] tracking-[.14em] uppercase font-light transition-colors py-1 ${
                      isActive ? 'text-gold font-normal active' : 'text-muted hover:text-ivory'
                    }`}
                  >
                    {item.label}
                  </Link>
                )
              }

              return (
                <div
                  key={item.label}
                  className="relative group py-2"
                  onMouseEnter={() => handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    onClick={() => setActiveDropdown(isOpen ? null : item.label)}
                    aria-expanded={isOpen}
                    aria-haspopup="true"
                    className={`inline-flex items-center gap-1.5 text-[.72rem] tracking-[.14em] uppercase font-light transition-colors py-1 cursor-pointer ${
                      isActive || isOpen ? 'text-gold font-normal' : 'text-muted hover:text-ivory'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={`w-3 h-3 text-gold/70 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-gold' : ''
                      }`}
                    />
                  </button>

                  {/* Dropdown Desktop Flutuante */}
                  <div
                    className={`absolute top-full left-1/2 -translate-x-1/2 pt-2 transition-all duration-200 ${
                      isOpen
                        ? 'opacity-100 visible translate-y-0 pointer-events-auto'
                        : 'opacity-0 invisible -translate-y-2 pointer-events-none'
                    }`}
                  >
                    <div className="w-[340px] xl:w-[380px] bg-[#111210]/98 backdrop-blur-2xl border border-white/15 p-3.5 shadow-2xl">
                      {/* Header do Dropdown */}
                      <div className="flex items-center justify-between pb-2.5 mb-2 border-b hairline">
                        <span className="text-[.58rem] tracking-[.25em] uppercase text-gold font-medium">
                          Especialidades {item.label}
                        </span>
                        <Link
                          href={item.href}
                          onClick={() => setActiveDropdown(null)}
                          className="inline-flex items-center gap-1 text-[.6rem] text-champagne hover:text-gold transition-colors link-underline"
                        >
                          <span>Visão Geral</span>
                          <ExternalLink className="w-2.5 h-2.5" />
                        </Link>
                      </div>

                      {/* Lista de Sublinks com Ícones e Micro-Copy */}
                      <div className="flex flex-col gap-1.5">
                        {item.sublinks?.map((sub) => {
                          const Icon = sub.icon
                          const isSubItemActive = pathname === sub.href

                          return (
                            <Link
                              key={sub.href}
                              href={sub.href}
                              onClick={() => setActiveDropdown(null)}
                              className={`p-2.5 flex items-start gap-3 transition-all duration-200 border ${
                                isSubItemActive
                                  ? 'bg-forest/30 border-gold/40 text-ivory'
                                  : 'bg-white/[0.015] border-transparent hover:bg-white/[0.05] hover:border-gold/30'
                              }`}
                            >
                              <div className="w-7 h-7 rounded bg-forest/40 border border-gold/30 flex items-center justify-center shrink-0 mt-0.5">
                                <Icon className="w-3.5 h-3.5 text-champagne" />
                              </div>
                              <div className="flex flex-col">
                                <span className="text-xs font-normal text-ivory group-hover:text-gold transition-colors">
                                  {sub.title}
                                </span>
                                <span className="text-[.65rem] text-muted font-light leading-relaxed mt-0.5">
                                  {sub.desc}
                                </span>
                              </div>
                            </Link>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </nav>

          {/* CTA Header & Hamburger */}
          <div className="flex items-center gap-2 sm:gap-2.5">
            <button
              onClick={() => onOpenTriagem('header')}
              className="!hidden lg:!inline-flex btn-primary !py-2 !px-4 !text-[.68rem] cursor-pointer"
            >
              <span>Falar com um advogado</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(true)}
              className="lg:!hidden flex items-center justify-center p-2 rounded border border-white/10 bg-white/[0.03] text-ivory hover:text-gold hover:border-gold/30 transition-colors cursor-pointer"
              aria-label="Abrir menu de navegação"
              aria-expanded={mobileMenuOpen}
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer (Com Acordeões Expansíveis) */}
      <div
        className={`fixed inset-0 z-[60] bg-[#0A0A0C]/98 backdrop-blur-2xl lg:hidden flex flex-col justify-between p-5 sm:p-6 transition-all duration-300 ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu Mobile"
      >
        <div className="overflow-y-auto max-h-[calc(100vh-100px)] pr-1">
          <div className="flex items-center justify-between h-14 border-b hairline">
            <Link
              href="/"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-2.5"
            >
              <Image
                src="/logo-BX.png"
                alt="Logo Braga & Xavier"
                width={36}
                height={36}
                className="h-8 sm:h-9 w-auto object-contain"
              />
              <div className="flex flex-col leading-none border-l hairline pl-2.5">
                <span className="font-normal text-xs tracking-wider uppercase">
                  BRAGA <span className="text-gold">&amp;</span> XAVIER
                </span>
                <span className="text-[0.45rem] tracking-[0.25em] text-muted uppercase mt-0.5">
                  ADVOGADOS
                </span>
              </div>
            </Link>
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 text-ivory hover:text-gold rounded border border-white/10"
              aria-label="Fechar menu"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <nav className="flex flex-col gap-1 pt-4" aria-label="Navegação móvel">
            {navItems.map((item) => {
              const hasDropdown = Boolean(item.sublinks && item.sublinks.length > 0)
              const isExpanded = mobileExpanded[item.label]
              const isDirectActive = pathname === item.href
              const isSubActive = item.sublinks?.some((sub) => pathname === sub.href)
              const isActive = isDirectActive || isSubActive

              if (!hasDropdown) {
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`font-light text-base py-3 border-b hairline transition-colors flex items-center justify-between ${
                      isActive ? 'text-gold font-normal' : 'text-ivory hover:text-gold'
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className="text-xs text-muted/50">&rarr;</span>
                  </Link>
                )
              }

              return (
                <div key={item.label} className="border-b hairline py-2">
                  <div className="flex items-center justify-between py-1.5">
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`font-light text-base transition-colors ${
                        isActive ? 'text-gold font-normal' : 'text-ivory hover:text-gold'
                      }`}
                    >
                      {item.label}
                    </Link>
                    <button
                      onClick={() => toggleMobileExpand(item.label)}
                      className="p-2 text-gold/80 hover:text-gold cursor-pointer"
                      aria-label={`Expandir ${item.label}`}
                    >
                      <ChevronDown
                        className={`w-4 h-4 transition-transform duration-200 ${
                          isExpanded ? 'rotate-180 text-gold' : ''
                        }`}
                      />
                    </button>
                  </div>

                  {/* Sublinks Acordeão Mobile */}
                  {isExpanded && (
                    <div className="flex flex-col gap-2 pt-2 pb-2 pl-2 animate-in fade-in slide-in-from-top-2 duration-200">
                      <Link
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        className="text-xs text-gold/80 hover:text-gold py-1 flex items-center gap-1 font-medium"
                      >
                        <span>&bull; {item.hubLabel}</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </Link>
                      {item.sublinks?.map((sub) => {
                        const Icon = sub.icon
                        const isSubActive = pathname === sub.href

                        return (
                          <Link
                            key={sub.href}
                            href={sub.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className={`p-2.5 flex items-start gap-2.5 border transition-all ${
                              isSubActive
                                ? 'bg-forest/30 border-gold/40 text-gold'
                                : 'bg-white/[0.02] border-white/5 hover:border-gold/30 text-ivory/80'
                            }`}
                          >
                            <Icon className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                            <div className="flex flex-col">
                              <span className="text-xs font-normal text-ivory">{sub.title}</span>
                              <span className="text-[.62rem] text-muted font-light mt-0.5">
                                {sub.desc}
                              </span>
                            </div>
                          </Link>
                        )
                      })}
                    </div>
                  )}
                </div>
              )
            })}
          </nav>
        </div>

        <div className="pt-4 border-t hairline mt-auto">
          <button
            onClick={() => {
              setMobileMenuOpen(false)
              onOpenTriagem('mobile-menu')
            }}
            className="btn-primary justify-center w-full !py-2.5 !text-xs cursor-pointer"
          >
            <span>Falar com um advogado</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </>
  )
}
