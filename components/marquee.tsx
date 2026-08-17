import React from 'react'

export function Marquee() {
  const items = [
    'DIREITO BANCÁRIO',
    'DEFESA PATRIMONIAL',
    'ALONGAMENTO DE CRÉDITO RURAL',
    'REESTRUTURAÇÃO EMPRESARIAL',
    'SÚMULA 298 DO STJ',
    'ESTRATÉGIA JURÍDICA',
  ]

  const textSequence = items.join(' — ') + ' — '

  return (
    <div className="border-y hairline py-4 overflow-hidden bg-graphite/40" aria-hidden="true">
      <div className="marquee-track">
        <span className="font-serif text-base md:text-lg tracking-[0.25em] text-muted/60 whitespace-nowrap pr-6 select-none">
          {textSequence}
        </span>
        <span className="font-serif text-base md:text-lg tracking-[0.25em] text-muted/60 whitespace-nowrap pr-6 select-none">
          {textSequence}
        </span>
      </div>
    </div>
  )
}
