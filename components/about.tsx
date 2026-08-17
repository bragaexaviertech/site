import React from 'react'

export function About() {
  return (
    <section id="escritorio" className="py-20 md:py-32 scroll-mt-24">
      <div className="max-w-[1440px] mx-auto px-5 md:px-[6vw]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <p className="text-[0.65rem] tracking-[0.35em] uppercase text-gold">O Escritório</p>
            <span
              className="font-serif text-8xl text-white/5 block mt-6 select-none font-bold"
              aria-hidden="true"
            >
              01
            </span>
          </div>

          <div className="lg:col-span-7 lg:col-start-6">
            <h2 className="font-serif text-[clamp(2.2rem,4.5vw,4.5rem)] leading-[1.02] text-ivory text-balance font-normal">
              Problemas financeiros complexos exigem leitura jurídica estratégica.
            </h2>
            <p className="mt-8 max-w-[65ch] text-muted leading-relaxed text-base md:text-lg">
              O <strong className="text-ivory font-medium">Braga &amp; Xavier Advogados</strong>{' '}
              atua em situações que envolvem instituições financeiras, contratos complexos, cobranças,
              execuções de títulos e reestruturação de passivos. Cada caso é analisado de forma
              individualizada, examinando a legalidade dos encargos, a higidez das garantias
              patrimoniais e as ferramentas processuais adequadas para resguardar o patrimônio do
              cliente.
            </p>
            <p className="mt-10 font-serif text-2xl md:text-3xl italic text-champagne border-l border-gold/40 pl-6 text-pretty">
              &ldquo;Cada operação financeira possui contexto, contrato, risco e estratégia
              próprios.&rdquo;
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
