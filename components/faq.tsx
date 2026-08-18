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
      q: 'Como funciona o alongamento da dívida rural pela Súmula 298 do STJ?',
      a: 'O alongamento de crédito rural é um direito do produtor assegurado por lei, e não favor do banco. Em caso de quebra de safra, seca, excesso de chuvas ou queda acentuada de preços, o banco é obrigado a repactuar o débito com prazos compatíveis com a nova colheita.',
    },
    {
      q: 'Recebi notificação de Execução ou Penhora. O que fazer?',
      a: 'O prazo de defesa é de apenas 15 dias úteis. Nossa equipe ingressa imediatamente com medidas judiciais de urgência para impugnar juros abusivos, desbloquear contas e blindar terras, máquinas e bens de família.',
    },
    {
      q: 'O escritório atende clientes fora de Montes Claros ou em outros estados?',
      a: 'Sim. Temos sede física em Montes Claros – MG e atuamos de forma 100% digital em todos os Tribunais de Justiça, TRFs e instâncias superiores (STJ e STF) do Brasil, com reuniões por videoconferência com os próprios sócios fundadores.',
    },
    {
      q: 'Como funciona o sigilo das informações e documentos?',
      a: 'Seus dados e contratos são protegidos por sigilo profissional absoluto da advocacia (Lei nº 8.906/94) e pela LGPD. Nenhuma informação é compartilhada com terceiros.',
    },
    {
      q: 'Quais documentos preciso enviar para a análise preliminar?',
      a: 'Basta enviar a cópia do contrato ou cédula bancária (CCB, CPR ou CCR), demonstrativo do saldo devedor e a notificação ou cópia do processo judicial, caso já exista.',
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
