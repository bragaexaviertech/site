'use client'

import React, { useState } from 'react'
import { Plus, ArrowUpRight } from 'lucide-react'

interface FAQProps {
  onOpenTriagem: (origin: string) => void
}

export function FAQ({ onOpenTriagem }: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const toggleItem = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  const faqs = [
    {
      q: 'Como funciona o direito de alongamento da dívida rural (Súmula 298 STJ)?',
      a: 'O alongamento de dívidas originadas de crédito rural é um direito subjetivo do produtor rural assegurado pelo Manual de Crédito Rural (MCR) e pacificado pela Súmula 298 do Superior Tribunal de Justiça. Quando ocorrem perdas de safra, intempéries climáticas ou queda acentuada nos preços de mercado, o banco é obrigado a renegociar e estender o prazo, desde que os requisitos legais sejam preenchidos e formalizados adequadamente.',
    },
    {
      q: 'Recebi uma notificação de Execução de Título ou Penhora. O que fazer?',
      a: 'Os prazos para apresentação de defesas como Embargos à Execução ou Exceção de Pré-Executividade são curtos e peremptórios. A análise imediata dos cálculos, das cláusulas do contrato e das garantias vinculadas permite impugnar juros abusivos, evitar bloqueios de contas bancárias e resguardar bens de família ou bens indispensáveis à atividade empresarial/rural.',
    },
    {
      q: 'O escritório atende apenas em Montes Claros ou em outros estados?',
      a: 'O escritório possui sede em Montes Claros – MG e infraestrutura operacional 100% digital para atuar em processos eletrônicos perante qualquer Tribunal de Justiça, Tribunal Regional Federal e instâncias superiores (STJ e STF) em todo o Brasil, garantindo acompanhamento próximo e reuniões por videoconferência com os próprios sócios.',
    },
    {
      q: 'Como funciona o sigilo e a análise preliminar dos documentos?',
      a: 'Todas as consultas e trocas de documentos são protegidas pelo sigilo profissional inerente à advocacia (Lei Federal nº 8.906/94) e pela LGPD. A análise preliminar visa verificar a viabilidade jurídica da demanda e desenhar cenários estratégicos antes de qualquer tomada de decisão.',
    },
    {
      q: 'Quais documentos são necessários para a primeira análise jurídica?',
      a: 'Para uma análise eficiente, recomenda-se disponibilizar: cópia do contrato ou cédula bancária (CCB, CPR, CCR), extratos da evolução do saldo devedor e, se houver processo judicial em andamento, a cópia da petição inicial e da citação/intimação recebida.',
    },
  ]

  return (
    <section
      id="faq"
      className="py-16 md:py-24 border-b hairline scroll-mt-16 bg-graphite w-full"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-[5vw]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div id="faq-header" className="reveal-on-scroll lg:col-span-4">
            <p className="text-[.58rem] tracking-[.3em] uppercase text-gold font-normal mb-1.5">
              FAQ &bull; Dúvidas Frequentes
            </p>
            <h2 className="font-light text-xl sm:text-2xl lg:text-3xl leading-[1.15] text-balance text-ivory tracking-tight">
              Respostas diretas para decisões urgentes.
            </h2>
            <p className="mt-3 text-muted leading-relaxed text-xs max-w-[36ch] font-light">
              Entenda como funciona o suporte jurídico especializado antes de dar o próximo passo.
            </p>
            <button
              onClick={() => onOpenTriagem('faq')}
              className="btn-ghost mt-5 !text-xs !py-2.5 cursor-pointer"
            >
              <span>Tirar uma dúvida direta</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          <div id="faq-list" className="reveal-on-scroll reveal-delay-1 lg:col-span-8">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index
              const isLast = index === faqs.length - 1

              return (
                <div
                  key={faq.q}
                  className={`border-t hairline ${isLast ? 'border-b' : ''}`}
                >
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full flex items-center justify-between gap-3.5 py-4 text-left group cursor-pointer"
                    aria-expanded={isOpen}
                  >
                    <span className="font-normal text-xs sm:text-sm md:text-base text-ivory group-hover:text-gold transition-colors">
                      {faq.q}
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
                    <div className="overflow-hidden text-muted leading-relaxed text-xs sm:text-sm font-light">
                      {faq.a}
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
