'use client'

import React, { useEffect, useRef } from 'react'

export function Metrics() {
  const sectionRef = useRef<HTMLElement>(null)
  const num1Ref = useRef<HTMLSpanElement>(null)
  const num2Ref = useRef<HTMLSpanElement>(null)
  const num3Ref = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    if (!sectionRef.current) return

    let animFrame: number
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let startTimestamp: number | null = null
          const duration = 1200

          const step = (timestamp: number) => {
            if (!startTimestamp) startTimestamp = timestamp
            const progress = Math.min((timestamp - startTimestamp) / duration, 1)
            const easeOut = 1 - Math.pow(1 - progress, 3)

            if (num1Ref.current) {
              num1Ref.current.textContent = `${Math.floor(easeOut * 100)}%`
            }
            if (num2Ref.current) {
              num2Ref.current.textContent = `+${Math.floor(easeOut * 500)}`
            }
            if (num3Ref.current) {
              num3Ref.current.textContent = `${Math.floor(easeOut * 24)}h`
            }

            if (progress < 1) {
              animFrame = window.requestAnimationFrame(step)
            } else {
              if (num1Ref.current) num1Ref.current.textContent = '100%'
              if (num2Ref.current) num2Ref.current.textContent = '+500'
              if (num3Ref.current) num3Ref.current.textContent = '24h'
            }
          }

          window.cancelAnimationFrame(animFrame)
          animFrame = window.requestAnimationFrame(step)
        }
      },
      { threshold: 0.15 }
    )

    observer.observe(sectionRef.current)
    return () => {
      window.cancelAnimationFrame(animFrame)
      observer.disconnect()
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      id="metrics-section"
      className="py-12 md:py-16 border-b hairline bg-ink w-full relative"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-[5vw]">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <div className="metric-item border-l border-gold/40 pl-4 sm:pl-5">
            <p className="font-light text-2xl sm:text-3xl lg:text-4xl leading-none text-ivory">
              <span ref={num1Ref}>100%</span>
            </p>
            <p className="mt-1.5 text-[.58rem] tracking-[.18em] uppercase text-muted font-medium">
              Defesa do Devedor
            </p>
            <p className="text-[.62rem] text-ivory/60 font-light mt-0.5">
              Não atuamos para bancos
            </p>
          </div>

          <div className="metric-item border-l border-gold/40 pl-4 sm:pl-5">
            <p className="font-light text-2xl sm:text-3xl lg:text-4xl leading-none text-ivory">
              <span ref={num2Ref}>+500</span>
            </p>
            <p className="mt-1.5 text-[.58rem] tracking-[.18em] uppercase text-muted font-medium">
              Contratos &amp; Cédulas
            </p>
            <p className="text-[.62rem] text-ivory/60 font-light mt-0.5">
              Operações auditadas
            </p>
          </div>

          <div className="metric-item border-l border-gold/40 pl-4 sm:pl-5">
            <p className="font-light text-2xl sm:text-3xl lg:text-4xl leading-none text-ivory">
              <span ref={num3Ref}>24h</span>
            </p>
            <p className="mt-1.5 text-[.58rem] tracking-[.18em] uppercase text-muted font-medium">
              Análise de Urgência
            </p>
            <p className="text-[.62rem] text-ivory/60 font-light mt-0.5">
              Bloqueios e penhoras
            </p>
          </div>

          <div className="metric-item border-l border-gold/40 pl-4 sm:pl-5">
            <p className="font-light text-2xl sm:text-3xl lg:text-4xl leading-none text-champagne font-serif italic">
              Brasil
            </p>
            <p className="mt-1.5 text-[.58rem] tracking-[.18em] uppercase text-muted font-medium">
              Atuação Nacional
            </p>
            <p className="text-[.62rem] text-ivory/60 font-light mt-0.5">
              Processos 100% digitais
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
