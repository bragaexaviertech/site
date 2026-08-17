'use client'

import React, { useState, useEffect } from 'react'
import { ArrowUpRight, Menu, X } from 'lucide-react'

interface HeaderProps {
  onOpenTriage: () => void
}

export function Header({ onOpenTriage }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isMobileMenuOpen) {
        setIsMobileMenuOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isMobileMenuOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-400 ${
          isScrolled
            ? 'bg-ink/90 backdrop-blur-xl border-b border-white/10 shadow-lg'
            : 'bg-transparent border-b border-transparent'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-5 md:px-[6vw] flex items-center justify-between h-20">
          <a
            href="#inicio"
            className="flex flex-col leading-none group"
            aria-label="Braga & Xavier Advogados — início"
          >
            <span className="font-serif text-xl md:text-2xl tracking-wide text-ivory group-hover:text-gold transition-colors">
              BRAGA <span className="text-gold">&amp;</span> XAVIER
            </span>
            <span className="text-[0.6rem] tracking-[0.45em] text-muted mt-1">ADVOGADOS</span>
          </a>

          <nav className="hidden lg:flex items-center gap-8" aria-label="Navegação principal">
            <a
              href="#escritorio"
              className="link-underline text-xs tracking-[0.14em] uppercase text-muted hover:text-ivory transition-colors"
            >
              Escritório
            </a>
            <a
              href="#bancario"
              className="link-underline text-xs tracking-[0.14em] uppercase text-muted hover:text-ivory transition-colors"
            >
              Direito Bancário
            </a>
            <a
              href="#empresas"
              className="link-underline text-xs tracking-[0.14em] uppercase text-muted hover:text-ivory transition-colors"
            >
              Empresas
            </a>
            <a
              href="#agronegocio"
              className="link-underline text-xs tracking-[0.14em] uppercase text-muted hover:text-ivory transition-colors"
            >
              Agronegócio
            </a>
            <a
              href="#avaliacoes"
              className="link-underline text-xs tracking-[0.14em] uppercase text-muted hover:text-ivory transition-colors"
            >
              Avaliações
            </a>
            <a
              href="#contato"
              className="link-underline text-xs tracking-[0.14em] uppercase text-muted hover:text-ivory transition-colors"
            >
              Contato
            </a>
          </nav>

          <div className="flex items-center gap-4">
            <button
              onClick={onOpenTriage}
              className="hidden md:inline-flex btn-primary !py-3 !px-5"
            >
              Falar com um advogado
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="lg:hidden p-2 text-ivory hover:text-gold transition-colors"
              aria-label="Abrir menu de navegação"
              aria-expanded={isMobileMenuOpen}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-[60] bg-ink/98 backdrop-blur-2xl lg:hidden flex flex-col justify-between p-6 animate-in fade-in duration-300"
          role="dialog"
          aria-modal="true"
          aria-label="Menu Mobile"
        >
          <div>
            <div className="flex items-center justify-between h-14 border-b hairline">
              <div className="flex flex-col leading-none">
                <span className="font-serif text-xl tracking-wide text-ivory">
                  BRAGA <span className="text-gold">&amp;</span> XAVIER
                </span>
                <span className="text-[0.55rem] tracking-[0.4em] text-muted mt-1">ADVOGADOS</span>
              </div>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2 text-ivory hover:text-gold transition-colors"
                aria-label="Fechar menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <nav className="flex flex-col gap-2 pt-8" aria-label="Navegação móvel">
              {[
                { href: '#escritorio', label: 'O Escritório' },
                { href: '#bancario', label: 'Direito Bancário' },
                { href: '#empresas', label: 'Dívidas Empresariais' },
                { href: '#agronegocio', label: 'Direito Rural & Agro' },
                { href: '#avaliacoes', label: 'Avaliações' },
                { href: '#contato', label: 'Localização & Contato' },
              ].map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="font-serif text-2xl py-3 border-b hairline text-ivory hover:text-gold transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="pt-6 border-t hairline flex flex-col gap-3">
            <button
              onClick={() => {
                setIsMobileMenuOpen(false)
                onOpenTriage()
              }}
              className="btn-primary justify-center w-full !py-4"
            >
              Falar com um advogado
              <ArrowUpRight className="w-4 h-4" />
            </button>
            <p className="text-center text-xs text-muted">
              Atendimento em Montes Claros e todo o Brasil
            </p>
          </div>
        </div>
      )}
    </>
  )
}
