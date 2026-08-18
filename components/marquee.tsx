import React from 'react'

export function Marquee() {
  return (
    <div
      className="border-y hairline py-2.5 overflow-hidden bg-graphite/40 w-full select-none"
      aria-hidden="true"
    >
      <div className="marquee-track">
        <span className="text-[.6rem] tracking-[.25em] font-light uppercase text-muted/50 whitespace-nowrap pr-8">
          DIREITO BANCÁRIO &bull; DEFESA PATRIMONIAL &bull; REESTRUTURAÇÃO EMPRESARIAL &bull; CRÉDITO RURAL &bull; SÚMULA 298 STJ &bull; ESTRATÉGIA &bull;&nbsp;
        </span>
        <span className="text-[.6rem] tracking-[.25em] font-light uppercase text-muted/50 whitespace-nowrap pr-8">
          DIREITO BANCÁRIO &bull; DEFESA PATRIMONIAL &bull; REESTRUTURAÇÃO EMPRESARIAL &bull; CRÉDITO RURAL &bull; SÚMULA 298 STJ &bull; ESTRATÉGIA &bull;&nbsp;
        </span>
      </div>
    </div>
  )
}
