'use client'

import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowUpRight, Menu, X } from 'lucide-react'

interface HeaderProps {
  onOpenTriagem: (origin: string) => void
}

export function Header({ onOpenTriagem }: HeaderProps) {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [hidden, setHidden] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    let lastScrollY = window.scrollY

    const handleScroll = () => {
      const currentScroll = window.scrollY
      setScrolled(currentScroll > 25)

      if (currentScroll > 200 && currentScroll > lastScrollY) {
        setHidden(true)
      } else {
        setHidden(false)
      }
      lastScrollY = currentScroll
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'Início' },
    { href: '/agronegocio', label: 'Agronegócio' },
    { href: '/direito-bancario', label: 'Direito Bancário' },
    { href: '/escritorio', label: 'O Escritório' },
    { href: '/contato', label: 'Contato' },
  ]

  return (
    <>
      <header
        id="site-header"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-[#0A0A0C]/90 backdrop-blur-xl border-b border-white/[0.07]'
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

          {/* Links Desktop Centralizados com Respiro */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8" aria-label="Navegação principal">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`link-underline text-[.72rem] tracking-[.14em] uppercase font-light transition-colors py-1 ${
                    isActive
                      ? 'text-ivory font-normal active text-gold'
                      : 'text-muted hover:text-ivory'
                  }`}
                >
                  {link.label}
                </Link>
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

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed inset-0 z-[60] bg-[#0A0A0C]/98 backdrop-blur-2xl lg:hidden flex flex-col justify-between p-5 sm:p-6 transition-all duration-300 ${
          mobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Menu Mobile"
      >
        <div>
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

          <nav className="flex flex-col gap-1 pt-5" aria-label="Navegação móvel">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`font-light text-base py-3 border-b hairline transition-colors flex items-center justify-between ${
                    isActive ? 'text-gold font-normal' : 'text-ivory hover:text-gold'
                  }`}
                >
                  <span>{link.label}</span>
                  <span className="text-xs text-muted/50">&rarr;</span>
                </Link>
              )
            })}
          </nav>
        </div>

        <div className="pt-4 border-t hairline">
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

