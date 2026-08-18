'use client'

import React, { useState } from 'react'
import Image from 'next/image'

export function Methodology() {
  const [currentStep, setCurrentStep] = useState(0)

  const steps = [
    {
      num: '01',
      title: '01. Diagnóstico',
      subtitle: 'Mapeamento de Riscos',
      desc: 'Avaliação técnica imediata da dívida, juros cobrados e do risco de penhora ou bloqueio de contas.',
      scale: 1.05,
    },
    {
      num: '02',
      title: '02. Auditoria',
      subtitle: 'Contratos & Cédulas',
      desc: 'Exame minucioso de cláusulas abusivas, encargos ilegais e nulidades em contratos CCB, CPR e CCR.',
      scale: 1.025,
    },
    {
      num: '03',
      title: '03. Estratégia',
      subtitle: 'Tese Sob Medida',
      desc: 'Definição da rota ideal: embargos à execução, pedido de alongamento de safra ou acordo com forte deságio.',
      scale: 1.01,
    },
    {
      num: '04',
      title: '04. Condução',
      subtitle: 'Defesa do Patrimônio',
      desc: 'Atuação combativa nos tribunais e na mesa de negociação para preservar o patrimônio do cliente.',
      scale: 1.0,
    },
  ]

  return (
    <section
      id="metodo"
      className="relative py-16 md:py-24 bg-graphite border-y hairline topo-lines w-full"
    >
      <div className="max-w-[1440px] mx-auto w-full px-4 sm:px-6 md:px-[5vw]">
        <div className="reveal-on-scroll max-w-2xl mb-10">
          <p className="text-[.6rem] tracking-[.3em] uppercase text-gold font-normal mb-2">
            Método de Atuação
          </p>
          <h2 className="font-light text-2xl sm:text-3xl lg:text-4xl leading-[1.12] text-balance text-ivory tracking-tight">
            Etapas estruturadas para cada decisão jurídica.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Lado Esquerdo: Imagem com Badge Dinâmico */}
          <div className="reveal-on-scroll lg:col-span-6 relative w-full">
            <div className="relative overflow-hidden w-full h-[260px] sm:h-[320px] lg:h-[400px] border border-white/10 shadow-2xl">
              <Image
                src="/assets/sala-reuniao.jpg"
                alt="Reunião de estratégia e diagnóstico jurídico"
                fill
                sizes="(max-width: 1024px) 100vw, 600px"
                className="object-cover transition-transform duration-700 ease-out"
                style={{ transform: `scale(${steps[currentStep].scale})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />

              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between bg-ink/85 backdrop-blur-md p-3 text-xs border border-white/10">
                <span className="text-gold uppercase tracking-wider font-medium text-[.58rem]">
                  Fase Ativa
                </span>
                <span className="text-ivory font-normal text-xs sm:text-sm">
                  {steps[currentStep].title}
                </span>
              </div>
            </div>
          </div>

          {/* Lado Direito: Etapas Clicáveis */}
          <div className="reveal-on-scroll reveal-delay-1 lg:col-span-6 flex flex-col gap-3.5 w-full">
            {steps.map((step, idx) => {
              const isActive = currentStep === idx
              return (
                <div
                  key={step.num}
                  onClick={() => setCurrentStep(idx)}
                  onMouseEnter={() => setCurrentStep(idx)}
                  className={`p-4 sm:p-5 border transition-all duration-300 cursor-pointer ${
                    isActive
                      ? 'bg-forest/20 border-gold/60 shadow-lg'
                      : 'bg-white/[0.02] border-white/10 hover:border-white/20'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span
                      className={`font-medium text-sm sm:text-base ${
                        isActive ? 'text-gold' : 'text-ivory/70'
                      }`}
                    >
                      {step.title}
                    </span>
                    <span className="text-[.6rem] tracking-widest uppercase text-muted font-light">
                      {step.subtitle}
                    </span>
                  </div>
                  <p className="text-ivory/80 text-xs sm:text-sm mt-2 leading-relaxed font-light">
                    {step.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
