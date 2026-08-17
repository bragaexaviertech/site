'use client'

import React, { useState } from 'react'
import { X, ArrowRight, ShieldAlert, CheckCircle2, MessageSquare } from 'lucide-react'

interface LeadTriageModalProps {
  isOpen: boolean
  onClose: () => void
  initialArea?: string
}

export function LeadTriageModal({ isOpen, onClose, initialArea }: LeadTriageModalProps) {
  const [step, setStep] = useState<1 | 2>(1)
  const [profile, setProfile] = useState<string>(initialArea || 'produtor-rural')
  const [debtRange, setDebtRange] = useState<string>('100k-500k')
  const [urgency, setUrgency] = useState<string>('analise-preventiva')
  const [name, setName] = useState<string>('')
  const [city, setCity] = useState<string>('')

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const profileLabels: Record<string, string> = {
      'produtor-rural': 'Produtor Rural / Agronegócio',
      'empresarial': 'Empresa / Dívida PJ',
      'pessoa-fisica': 'Pessoa Física / Consumidor',
    }

    const debtLabels: Record<string, string> = {
      'ate-100k': 'Até R$ 100 mil',
      '100k-500k': 'De R$ 100 mil a R$ 500 mil',
      '500k-2m': 'De R$ 500 mil a R$ 2 milhões',
      'acima-2m': 'Acima de R$ 2 milhões',
    }

    const urgencyLabels: Record<string, string> = {
      'urgente-processo': '🚨 Já existe Processo de Execução / Risco de Penhora',
      'cobranca-banco': '⚠️ Cobrança bancária em andamento / Sem processo ainda',
      'analise-preventiva': '🔍 Análise preventiva de contrato / Renegociação',
    }

    const textMessage = `Olá, Dr. Braga & Dr. Xavier! Solicito pré-diagnóstico jurídico:
    
👤 *Nome:* ${name || 'Não informado'}
📍 *Cidade/UF:* ${city || 'Não informada'}
🌾 *Perfil:* ${profileLabels[profile] || profile}
💰 *Faixa da Dívida:* ${debtLabels[debtRange] || debtRange}
⚖️ *Situação Atual:* ${urgencyLabels[urgency] || urgency}

Gostaria de agendar uma análise para avaliar as estratégias aplicáveis ao meu caso.`

    const encoded = encodeURIComponent(textMessage)
    window.open(`https://wa.me/5531971746972?text=${encoded}`, '_blank', 'noopener,noreferrer')
    onClose()
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-ink/80 backdrop-blur-md animate-in fade-in duration-300">
      <div
        className="glass-modal max-w-lg w-full p-6 md:p-8 rounded-none border border-gold/40 relative shadow-2xl"
        role="dialog"
        aria-modal="true"
        aria-labelledby="triage-title"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-muted hover:text-ivory transition-colors p-2"
          aria-label="Fechar"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="mb-6">
          <span className="text-[0.65rem] tracking-[0.3em] uppercase text-gold block mb-1">
            Triagem Estratégica
          </span>
          <h3 id="triage-title" className="font-serif text-2xl md:text-3xl text-ivory">
            Solicitar Pré-Diagnóstico Jurídico
          </h3>
          <p className="text-xs text-muted mt-2 leading-relaxed">
            Identifique seu perfil para direcionarmos seu atendimento com a estratégia jurídica
            adequada aos seus contratos e garantias.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {step === 1 ? (
            <>
              <div>
                <label className="text-xs uppercase tracking-wider text-champagne block mb-2 font-medium">
                  1. Qual é o seu perfil de demanda?
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {[
                    { id: 'produtor-rural', label: 'Produtor Rural', desc: 'Crédito e dívidas do campo' },
                    { id: 'empresarial', label: 'Empresarial', desc: 'Dívidas bancárias de PJ' },
                    { id: 'pessoa-fisica', label: 'Pessoa Física', desc: 'Financiamentos e contratos' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setProfile(item.id)}
                      className={`p-3 text-left border transition-all text-xs ${
                        profile === item.id
                          ? 'border-gold bg-forest/50 text-ivory shadow-sm'
                          : 'border-white/10 bg-white/5 text-muted hover:border-gold/40'
                      }`}
                    >
                      <p className="font-medium text-ivory">{item.label}</p>
                      <p className="text-[0.65rem] text-muted mt-0.5">{item.desc}</p>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs uppercase tracking-wider text-champagne block mb-2 font-medium">
                  2. Valor estimado do endividamento / contrato
                </label>
                <select
                  value={debtRange}
                  onChange={(e) => setDebtRange(e.target.value)}
                  className="w-full bg-graphite border border-white/15 px-3 py-2.5 text-xs text-ivory focus:border-gold outline-none transition-colors"
                >
                  <option value="ate-100k">Até R$ 100.000</option>
                  <option value="100k-500k">R$ 100.000 a R$ 500.000</option>
                  <option value="500k-2m">R$ 500.000 a R$ 2.000.000</option>
                  <option value="acima-2m">Acima de R$ 2.000.000</option>
                </select>
              </div>

              <div>
                <label className="text-xs uppercase tracking-wider text-champagne block mb-2 font-medium">
                  3. Situação atual do caso
                </label>
                <div className="flex flex-col gap-2 text-xs">
                  {[
                    { id: 'urgente-processo', label: 'Já existe processo judicial / Risco de penhora ou leilão' },
                    { id: 'cobranca-banco', label: 'Em cobrança extrajudicial / Notificação do banco' },
                    { id: 'analise-preventiva', label: 'Análise preventiva para renegociação ou alongamento' },
                  ].map((item) => (
                    <label
                      key={item.id}
                      className={`flex items-center gap-3 p-2.5 border cursor-pointer transition-colors ${
                        urgency === item.id
                          ? 'border-gold/80 bg-forest/40 text-ivory'
                          : 'border-white/10 bg-white/5 text-muted hover:border-white/20'
                      }`}
                    >
                      <input
                        type="radio"
                        name="urgency"
                        checked={urgency === item.id}
                        onChange={() => setUrgency(item.id)}
                        className="accent-gold"
                      />
                      <span>{item.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={() => setStep(2)}
                className="btn-primary justify-center mt-2 w-full"
              >
                Avançar para contato
                <ArrowRight className="w-4 h-4" />
              </button>
            </>
          ) : (
            <>
              <div>
                <label className="text-xs uppercase tracking-wider text-champagne block mb-1 font-medium">
                  Seu Nome ou Razão Social
                </label>
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Ex: João da Silva ou Fazenda Santa Maria"
                  className="w-full bg-graphite border border-white/15 px-3 py-2.5 text-xs text-ivory focus:border-gold outline-none transition-colors"
                />
              </div>

              <div>
                <label className="text-xs uppercase tracking-wider text-champagne block mb-1 font-medium">
                  Cidade e Estado (UF)
                </label>
                <input
                  type="text"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  placeholder="Ex: Montes Claros - MG, Unaí, Patos de Minas..."
                  className="w-full bg-graphite border border-white/15 px-3 py-2.5 text-xs text-ivory focus:border-gold outline-none transition-colors"
                />
              </div>

              <div className="p-3 bg-forest/30 border border-gold/30 text-[0.7rem] text-muted flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <p>
                  Suas informações são protegidas pelo sigilo profissional da advocacia (Código de Ética da OAB) e pela LGPD.
                </p>
              </div>

              <div className="flex gap-2 mt-2">
                <button
                  type="button"
                  onClick={() => setStep(1)}
                  className="btn-ghost flex-1 justify-center !py-3 text-xs"
                >
                  Voltar
                </button>
                <button
                  type="submit"
                  className="btn-primary flex-[2] justify-center !py-3 text-xs"
                >
                  <MessageSquare className="w-4 h-4" />
                  Iniciar no WhatsApp
                </button>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  )
}
