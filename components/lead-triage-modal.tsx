'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { X, ArrowUpRight, ShieldCheck } from 'lucide-react'

interface LeadTriageModalProps {
  isOpen: boolean
  onClose: () => void
}

export function LeadTriageModal({ isOpen, onClose }: LeadTriageModalProps) {
  const [perfil, setPerfil] = useState('Produtor Rural')
  const [necessidade, setNecessidade] = useState('Alongamento de Dívida de Safra (Súmula 298 STJ)')

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const text =
      'Olá! Conheci o Braga & Xavier Advogados pelo site e gostaria de uma orientação jurídica.\n\n' +
      `• Meu perfil: ${perfil}\n` +
      `• Necessidade: ${necessidade}`

    const waUrl = `https://wa.me/5531971746972?text=${encodeURIComponent(text)}`
    onClose()
    window.open(waUrl, '_blank')
  }

  return (
    <div
      className="fixed inset-0 z-[100] bg-ink/85 backdrop-blur-md flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Triagem Inicial de Atendimento"
    >
      <div className="w-full max-w-lg bg-[#111210] border border-gold/30 p-5 sm:p-7 shadow-2xl relative">
        <button
          onClick={onClose}
          className="absolute top-3.5 right-3.5 p-1.5 text-muted hover:text-ivory transition-colors cursor-pointer"
          aria-label="Fechar modal"
        >
          <X className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-2 mb-4">
          <Image src="/logo-BX.png" alt="Logo" width={20} height={20} className="h-5 w-auto" />
          <span className="text-[.58rem] tracking-[.25em] uppercase text-gold font-normal">
            Diagnóstico Preliminar
          </span>
        </div>

        <h3 className="text-lg sm:text-xl font-light text-ivory tracking-tight">
          Como podemos ajudar você hoje?
        </h3>
        <p className="text-xs text-muted mt-1 font-light">
          Selecione as opções abaixo para direcionarmos seu caso ao advogado especialista:
        </p>

        <form onSubmit={handleSubmit} className="mt-5 flex flex-col gap-3.5">
          <div>
            <label className="block text-[.62rem] tracking-[.15em] uppercase text-champagne mb-1 font-medium">
              1. Qual é o seu perfil?
            </label>
            <div className="grid grid-cols-3 gap-2">
              {['Produtor Rural', 'Empresa / PJ', 'Pessoa Física'].map((option) => (
                <label
                  key={option}
                  className={`cursor-pointer p-2 text-center text-xs border transition-all ${
                    perfil === option
                      ? 'border-gold bg-forest/30 text-ivory'
                      : 'border-white/10 bg-white/[0.02] text-muted hover:border-gold/40'
                  }`}
                >
                  <input
                    type="radio"
                    name="perfil"
                    value={option}
                    checked={perfil === option}
                    onChange={(e) => setPerfil(e.target.value)}
                    className="sr-only"
                  />
                  <span className="block text-xs">{option}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <label className="block text-[.62rem] tracking-[.15em] uppercase text-champagne mb-1 font-medium">
              2. Qual a principal necessidade?
            </label>
            <select
              value={necessidade}
              onChange={(e) => setNecessidade(e.target.value)}
              className="w-full bg-ink border border-white/15 px-3 py-2 text-xs text-ivory focus:border-gold outline-none transition-colors"
            >
              <option value="Alongamento de Dívida de Safra (Súmula 298 STJ)">
                Alongamento de Dívida Rural (Súmula 298 STJ)
              </option>
              <option value="Defesa em Execução de Título / Penhora">
                Defesa em Execução Bancária / Penhora
              </option>
              <option value="Renegociação de Dívidas Empresariais">
                Renegociação de Dívidas Empresariais
              </option>
              <option value="Revisão de Juros e Contratos Bancários">
                Revisão de Contrato Bancário / Juros Abusivos
              </option>
              <option value="Desbloqueio de Contas e Ativos">
                Desbloqueio de Contas / Proteção Patrimonial
              </option>
              <option value="Outro assunto">Outro assunto específico</option>
            </select>
          </div>

          <button type="submit" className="btn-primary justify-center !py-2.5 !text-xs mt-1 w-full">
            <span>Continuar para o WhatsApp</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          <div className="flex items-center justify-between pt-2 border-t hairline text-[.6rem] text-muted">
            <span className="flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-gold" /> Atendimento sigiloso
            </span>
            <a
              href="https://wa.me/5531971746972?text=Ol%C3%A1!%20Gostaria%20de%20falar%20diretamente%20com%20um%20advogado%20do%20Braga%20%26%20Xavier."
              target="_blank"
              rel="noopener noreferrer"
              className="text-champagne link-underline font-normal"
            >
              Chamar direto no WhatsApp &rarr;
            </a>
          </div>
        </form>
      </div>
    </div>
  )
}
