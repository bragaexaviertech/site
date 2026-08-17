'use client'

import React, { useState } from 'react'
import { Landmark, Building2, Wheat, Plus, Minus } from 'lucide-react'

export function ServicesAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const services = [
    {
      title: 'Direito Bancário',
      icon: Landmark,
      items: [
        'Defesa do patrimônio em cobranças e execuções bancárias',
        'Revisão de contratos bancários (juros abusivos e encargos ilegais)',
        'Defesa em Execução de Título Extrajudicial (embargos e exceção de pré-executividade)',
        'Renegociação e quitação de dívidas bancárias com deságio',
        'Desbloqueio de contas, ativos financeiros e liberação de penhoras',
      ],
    },
    {
      title: 'Direito Empresarial',
      icon: Building2,
      items: [
        'Renegociação de dívidas empresariais e passivos bancários (CCB, FGI, PRONAMPE)',
        'Reestruturação de endividamento corporativo e proteção de caixa operacional',
        'Defesa de sócios e avalistas contra desconsideração de personalidade jurídica',
        'Blindagem patrimonial lícita de ativos estratégicos da empresa',
      ],
    },
    {
      title: 'Direito Rural e Agronegócio',
      icon: Wheat,
      items: [
        'Alongamento e prorrogação de dívida rural (Manual de Crédito Rural e Súmula 298 do STJ)',
        'Revisão e impugnação de encargos em Cédulas de Crédito Rural (CCR) e CPR',
        'Defesa contra penhora e leilão de pequenas e médias propriedades rurais',
        'Assessoria jurídica integral para produtores rurais e cooperativas agropecuárias',
      ],
    },
  ]

  return (
    <section className="py-20 md:py-32">
      <div className="max-w-[1440px] mx-auto px-5 md:px-[6vw]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column */}
          <div className="lg:col-span-4">
            <p className="text-[0.65rem] tracking-[0.35em] uppercase text-gold mb-4">Serviços</p>
            <h2 className="font-serif text-[clamp(2rem,3.5vw,3.5rem)] leading-[1.05] text-balance font-normal text-ivory">
              O que o escritório faz, em detalhe.
            </h2>
            <p className="mt-6 text-muted leading-relaxed text-sm max-w-[40ch]">
              Serviços jurídicos organizados por especialidade. Toda demanda passa por análise
              técnica minuciosa dos contratos e documentos antes de qualquer propositura de ação
              ou negociação.
            </p>
          </div>

          {/* Right Column: Accordions */}
          <div className="lg:col-span-8 flex flex-col">
            {services.map((service, index) => {
              const isOpen = openIndex === index
              const Icon = service.icon

              return (
                <div
                  key={service.title}
                  className={`border-t hairline transition-colors ${
                    index === services.length - 1 ? 'border-b' : ''
                  }`}
                >
                  <button
                    onClick={() => toggle(index)}
                    className="w-full flex items-center justify-between gap-6 py-7 text-left group"
                    aria-expanded={isOpen}
                  >
                    <span className="flex items-center gap-5">
                      <Icon className="w-5 h-5 text-gold shrink-0 group-hover:scale-110 transition-transform" />
                      <span className="font-serif text-2xl md:text-3xl text-ivory group-hover:text-gold transition-colors">
                        {service.title}
                      </span>
                    </span>
                    <div className="p-1 rounded-full border border-white/10 group-hover:border-gold/50 transition-colors">
                      {isOpen ? (
                        <Minus className="w-4 h-4 text-gold shrink-0" />
                      ) : (
                        <Plus className="w-4 h-4 text-muted group-hover:text-gold shrink-0" />
                      )}
                    </div>
                  </button>

                  <div
                    className={`grid transition-all duration-400 ease-in-out ${
                      isOpen ? 'grid-rows-[1fr] opacity-100 pb-8' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden pl-10 md:pl-12">
                      <ul className="flex flex-col gap-3 text-muted text-sm md:text-base leading-relaxed">
                        {service.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-start gap-3">
                            <span className="text-gold/70 font-serif text-lg leading-none select-none">
                              &mdash;
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
