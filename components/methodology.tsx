'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { CheckCircle2, Scale, Shield, FileCheck2, ArrowRight } from 'lucide-react'

export function Methodology() {
  const [currentStep, setCurrentStep] = useState(0)

  const steps = [
    {
      num: '01',
      title: '01. Diagnóstico',
      subtitle: 'Mapeamento de Riscos',
      desc: 'Avaliação técnica imediata da dívida, juros cobrados e do risco de penhora ou bloqueio de contas.',
      icon: Scale,
    },
    {
      num: '02',
      title: '02. Auditoria',
      subtitle: 'Contratos & Cédulas',
      desc: 'Exame minucioso de cláusulas abusivas, encargos ilegais e nulidades em contratos CCB, CPR e CCR.',
      icon: FileCheck2,
    },
    {
      num: '03',
      title: '03. Estratégia',
      subtitle: 'Tese Sob Medida',
      desc: 'Definição da rota ideal: embargos à execução, pedido de alongamento de safra ou acordo com forte deságio.',
      icon: Shield,
    },
    {
      num: '04',
      title: '04. Condução',
      subtitle: 'Defesa do Patrimônio',
      desc: 'Atuação combativa nos tribunais e na mesa de negociação para preservar o patrimônio do cliente.',
      icon: CheckCircle2,
    },
  ]

  return (
    <section
      id="metodo"
      className="relative py-20 md:py-32 bg-graphite border-y hairline overflow-hidden w-full"
    >
      {/* Background Panorâmico Cinematográfico no estilo Hero */}
      <div
        className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute inset-0 w-full h-full">
          <Image
            src="/assets/sala-reuniao.webp"
            alt="Ambiente de Estratégia Jurídica Braga & Xavier"
            fill
            sizes="100vw"
            className="object-cover object-[center_35%] opacity-25 lg:opacity-35 filter contrast-[1.03] brightness-[0.92]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-graphite via-graphite/80 to-graphite" />
          <div className="absolute inset-0 bg-gradient-to-r from-graphite/90 via-graphite/60 to-graphite/90" />
        </div>

        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-graphite to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-graphite to-transparent" />
        <div className="absolute inset-0 topo-lines opacity-20 mix-blend-overlay" />
      </div>

      <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-6 md:px-[5vw] relative z-10">
        <div className="reveal-on-scroll max-w-2xl mb-12">
          <div className="w-12 h-0.5 bg-gold mb-4" />
          <p className="text-[.6rem] tracking-[.3em] uppercase text-gold font-medium mb-2">
            MÉTODO DE ATUAÇÃO &bull; BOUTIQUE JURÍDICA
          </p>
          <h2 className="font-light text-2xl sm:text-3xl lg:text-4xl leading-[1.12] text-balance text-ivory tracking-tight">
            Etapas estruturadas para cada decisão jurídica.
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-ivory/80 font-light leading-relaxed">
            Metodologia artesanal e analítica aplicada caso a caso pelos fundadores para máxima segurança patrimonial.
          </p>
        </div>

        {/* Grid de 4 Etapas com Glassmorphism Panorâmico */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step, idx) => {
            const Icon = step.icon
            const isActive = currentStep === idx

            return (
              <div
                key={step.num}
                onClick={() => setCurrentStep(idx)}
                onMouseEnter={() => setCurrentStep(idx)}
                className={`reveal-on-scroll reveal-delay-${idx} p-5 sm:p-6 border transition-all duration-500 cursor-pointer flex flex-col justify-between min-h-[220px] backdrop-blur-2xl ${
                  isActive
                    ? 'bg-forest/30 border-gold/60 shadow-2xl scale-[1.02]'
                    : 'bg-[#111210]/80 border-white/10 hover:border-gold/40 hover:bg-[#111210]/95'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-9 h-9 rounded bg-forest/40 border border-gold/30 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-champagne" />
                    </div>
                    <span className="text-2xl font-serif italic text-white/15 font-light">
                      {step.num}
                    </span>
                  </div>

                  <span className="text-[.58rem] tracking-widest uppercase text-gold font-medium block mb-1">
                    {step.subtitle}
                  </span>
                  <h3 className="font-normal text-base text-ivory mb-2">{step.title}</h3>
                  <p className="text-ivory/75 text-xs leading-relaxed font-light">{step.desc}</p>
                </div>

                <div className="pt-3 mt-4 border-t hairline flex items-center justify-between text-[.55rem] tracking-wider uppercase text-champagne">
                  <span>{isActive ? 'Fase Ativa' : 'Clique para ver'}</span>
                  <ArrowRight
                    className={`w-3 h-3 transition-transform ${
                      isActive ? 'translate-x-1 text-gold' : 'text-muted'
                    }`}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
