'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import gsap from 'gsap'

declare global {
  interface Window {
    __BX_PRELOADER_DONE__?: boolean
  }
}

export function Preloader() {
  const [isVisible, setIsVisible] = useState(true)
  const overlayRef = useRef<HTMLDivElement>(null)
  const brandContainerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Se o usuário prefere movimento reduzido ou o preloader já rodou na sessão
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion || window.__BX_PRELOADER_DONE__) {
      window.__BX_PRELOADER_DONE__ = true
      window.dispatchEvent(new CustomEvent('bx:preloader-done'))
      setIsVisible(false)
      return
    }

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => {
          setIsVisible(false)
        },
      })

      // 1. A marca completa (Logo + Nome Oficial) surge unificada e elegante
      tl.fromTo(
        brandContainerRef.current,
        { opacity: 0, scale: 0.94, y: 10 },
        { opacity: 1, scale: 1, y: 0, duration: 0.55, ease: 'power3.out' }
      )

      // 2. Tempo de leitura e presença da marca (350ms)
      tl.to({}, { duration: 0.35 })

      // 3. Fade out sutil da marca
      tl.to(brandContainerRef.current, {
        opacity: 0,
        y: -10,
        duration: 0.28,
        ease: 'power2.in',
      })

      // 4. Cortina escura desliza suavemente para cima revelando a página
      tl.to(
        overlayRef.current,
        {
          yPercent: -100,
          duration: 0.55,
          ease: 'power3.inOut',
          onStart: () => {
            // Notifica o Hero e ScrollReveal exatamente no início da abertura da cortina
            window.__BX_PRELOADER_DONE__ = true
            window.dispatchEvent(new CustomEvent('bx:preloader-done'))
          },
        },
        '-=0.05'
      )
    })

    return () => ctx.revert()
  }, [])

  if (!isVisible) return null

  return (
    <aside
      ref={overlayRef}
      aria-label="Carregando Braga & Xavier Advogados"
      className="fixed inset-0 z-[9999] bg-[#0A0A0C] flex items-center justify-center pointer-events-none overflow-hidden select-none"
    >
      {/* Glow Dourado Sutil no Fundo */}
      <div className="absolute w-[450px] h-[450px] bg-gold/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Marca Oficial: Logo Real + Fonte Real Oficial (Plus Jakarta Sans) */}
      <div
        ref={brandContainerRef}
        style={{ opacity: 0 }}
        className="relative z-10 flex items-center gap-3.5 sm:gap-4 md:gap-5 px-6"
      >
        {/* Monograma Oficial da Logo */}
        <Image
          src="/logo-BX.png"
          alt="Logo Braga & Xavier Advogados"
          width={80}
          height={80}
          priority
          className="h-12 sm:h-14 md:h-16 w-auto object-contain drop-shadow-[0_0_20px_rgba(197,160,89,0.3)]"
        />

        {/* Nome Oficial da Advocacia com a Fonte Real do Header */}
        <div className="flex flex-col leading-none border-l hairline pl-3.5 sm:pl-4 md:pl-5">
          <span className="font-normal text-base sm:text-lg md:text-xl tracking-wider text-ivory uppercase">
            BRAGA <span className="text-gold">&amp;</span> XAVIER
          </span>
          <span className="text-[0.52rem] sm:text-[0.58rem] md:text-[0.65rem] tracking-[0.28em] text-muted uppercase mt-1 sm:mt-1.5 font-light">
            ADVOGADOS
          </span>
        </div>
      </div>
    </aside>
  )
}
