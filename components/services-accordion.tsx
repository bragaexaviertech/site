'use client'

import React, { useState } from 'react'
import { Landmark, Building2, Wheat, Plus } from 'lucide-react'

export function ServicesAccordion() {
  const [openItems, setOpenItems] = useState<number[]>([0]) // Default first item open

  const toggleItem = (index: number) => {
    setOpenItems((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    )
  }

  const services = [
    {
      title: 'Direito Bancário',
      icon: Landmark,
      items: [
        'Defesa do patrimônio em cobranças bancárias',
        'Revisão de contratos bancários e juros abusivos',
        'Defesa em Execução de Título Extrajudicial (Embargos e Exceções)',
        'Renegociação de dívidas bancárias com deságio',
        'Desbloqueio de contas bancárias e ativos financeiros',
      ],
    },
    {
      title: 'Direito Empresarial',
      icon: Building2,
      items: [
        'Renegociação de dívidas empresariais e passivo bancário',
        'Reestruturação de endividamento corporativo e proteção de caixa',
        'Defesa de sócios avalistas contra execuções patrimoniais',
      ],
    },
    {
      title: 'Direito Rural e Agronegócio',
      icon: Wheat,
      items: [
        'Alongamento de dívida rural (Manual de Crédito Rural e Súmula 298 do STJ)',
        'Revisão de crédito rural e cédulas (CCR e CPR)',
        'Assessoria jurídica integral para o produtor rural',
        'Defesa contra penhora de propriedade rural e maquinários',
      ],
    },
  ]

  return (
    <section id="servicos-section" className="py-14 md:py-20 w-full">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-[5vw]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          <div id="servicos-header" className="lg:col-span-4">
            <p className="text-[.58rem] tracking-[.3em] uppercase text-gold font-normal mb-1.5">
              Serviços
            </p>
            <h2 className="font-light text-xl sm:text-2xl leading-[1.15] text-balance text-ivory tracking-tight">
              O que o escritório faz, em detalhe.
            </h2>
            <p className="mt-3 text-muted leading-relaxed text-xs max-w-[38ch] font-light">
              Serviços jurídicos organizados por área. Cada demanda passa por análise individual
              antes de qualquer definição de estratégia.
            </p>
          </div>

          <div id="servicos-list" className="lg:col-span-8">
            {services.map((service, index) => {
              const isOpen = openItems.includes(index)
              const Icon = service.icon
              const isLast = index === services.length - 1

              return (
                <div
                  key={service.title}
                  className={`border-t hairline ${isLast ? 'border-b' : ''}`}
                >
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full flex items-center justify-between gap-3.5 py-4 text-left group cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="flex items-center gap-3">
                      <Icon className="w-3.5 h-3.5 text-gold shrink-0" aria-hidden="true" />
                      <span className="font-normal text-sm sm:text-base text-ivory group-hover:text-gold transition-colors">
                        {service.title}
                      </span>
                    </span>
                    <Plus
                      className={`w-3.5 h-3.5 text-muted shrink-0 transition-transform duration-300 ${
                        isOpen ? 'rotate-45 text-gold' : ''
                      }`}
                      aria-hidden="true"
                    />
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-out ${
                      isOpen ? 'grid-rows-[1fr] opacity-100 pb-4' : 'grid-rows-[0fr] opacity-0'
                    }`}
                  >
                    <div className="overflow-hidden pl-6 sm:pl-7">
                      <ul className="flex flex-col gap-1.5 text-muted leading-relaxed text-xs font-light">
                        {service.items.map((item) => (
                          <li key={item} className="flex gap-2">
                            <span className="text-gold" aria-hidden="true">
                              &bull;
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
