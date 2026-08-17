'use client'

import React from 'react'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

interface AgribusinessProps {
  onOpenTriage: () => void
}

export function Agribusiness({ onOpenTriage }: AgribusinessProps) {
  const highlights = [
    { tag: 'Rural', text: 'Alongamento de dívida rural (MCR e Súmula 298 STJ)' },
    { tag: 'Rural', text: 'Revisão de juros e encargos em Cédulas Rurais' },
    { tag: 'Bancário', text: 'Defesa contra penhora de safras e maquinário' },
    { tag: 'Agro', text: 'Consultoria para produtores e cooperativas' },
  ]

  return (
    <section id="agronegocio" className="relative py-24 md:py-36 overflow-hidden scroll-mt-24">
      {/* Background Image using next/image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/agronegocio.png"
          alt="Lavoura e agronegócio brasileiro"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-ink/85 backdrop-blur-[2px]" aria-hidden="true" />
      </div>

      <div className="relative z-10 max-w-[1440px] mx-auto px-5 md:px-[6vw]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <p className="text-[0.65rem] tracking-[0.35em] uppercase text-gold mb-4">
              Direito Rural
            </p>
            <h2 className="font-serif text-[clamp(2.2rem,4.5vw,4.5rem)] leading-[1.02] text-balance font-normal text-ivory">
              Crédito rural também exige estratégia jurídica.
            </h2>
            <p className="mt-8 text-ivory/80 leading-relaxed text-base md:text-lg max-w-[58ch]">
              A legislação agrária e o Manual de Crédito Rural conferem ao produtor rural o direito
              subjetivo ao alongamento de suas dívidas bancárias em casos de frustração de safra,
              intempéries climáticas ou queda de preços de mercado.
            </p>
            <button
              onClick={onOpenTriage}
              className="btn-primary mt-10"
            >
              Falar com advogado do agro
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          <div className="lg:col-span-5 lg:col-start-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className={`glass p-6 border border-white/10 hover:border-gold/40 transition-colors ${
                  idx % 2 === 1 ? 'sm:mt-6' : ''
                }`}
              >
                <p className="text-[0.6rem] tracking-[0.25em] uppercase text-gold mb-2 font-medium">
                  {item.tag}
                </p>
                <p className="text-sm text-ivory/90 leading-relaxed font-normal">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
