'use client'

import React, { useEffect, useRef, useState } from 'react'

export function Metrics() {
  const [inView, setInView] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={ref} className="py-20 md:py-28 bg-graphite border-y hairline">
      <div className="max-w-[1440px] mx-auto px-5 md:px-[6vw]">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {/* Item 1 */}
          <div className="border-l hairline pl-6">
            <p className="font-serif text-[clamp(3rem,5vw,5.5rem)] leading-none text-ivory font-normal">
              {inView ? '5,0' : '0,0'}
            </p>
            <p className="mt-3 text-xs tracking-[0.18em] uppercase text-muted">
              Nota máxima no Google
            </p>
          </div>

          {/* Item 2 */}
          <div className="border-l hairline pl-6 lg:mt-6">
            <p className="font-serif text-[clamp(3rem,5vw,5.5rem)] leading-none text-ivory font-normal">
              {inView ? '37+' : '0'}
            </p>
            <p className="mt-3 text-xs tracking-[0.18em] uppercase text-muted">
              Avaliações públicas
            </p>
          </div>

          {/* Item 3 */}
          <div className="border-l hairline pl-6">
            <p className="font-serif text-[clamp(3rem,5vw,5.5rem)] leading-none text-ivory font-normal">
              Nacional
            </p>
            <p className="mt-3 text-xs tracking-[0.18em] uppercase text-muted">
              Atuação em todo o país
            </p>
          </div>

          {/* Item 4 */}
          <div className="border-l hairline pl-6 lg:mt-6">
            <p className="font-serif text-[clamp(3rem,5vw,5.5rem)] leading-none text-champagne font-normal">
              Montes Claros
            </p>
            <p className="mt-3 text-xs tracking-[0.18em] uppercase text-muted">
              Sede no Norte de Minas
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
