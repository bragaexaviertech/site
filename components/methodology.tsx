import React from 'react'

export function Methodology() {
  const steps = [
    {
      num: '01',
      title: 'Diagnóstico',
      description: 'Análise aprofundada da situação jurídica, financeira e do risco iminente de execuções ou penhoras.',
    },
    {
      num: '02',
      title: 'Documentação',
      description: 'Perícia prévia dos contratos bancários, cédulas (CCB/CCR/CPR), taxas pactuadas e garantias reais.',
    },
    {
      num: '03',
      title: 'Estratégia',
      description: 'Definição do plano jurídico: ação revisional, embargos à execução, pedido de alongamento ou negociação extrajudicial.',
    },
    {
      num: '04',
      title: 'Condução',
      description: 'Atuação combativa em juízo ou na mesa de negociação, com foco na preservação patrimonial e equilíbrio contratual.',
    },
  ]

  return (
    <section className="py-20 md:py-36 bg-graphite border-y hairline topo-lines">
      <div className="max-w-[1440px] mx-auto px-5 md:px-[6vw]">
        <div className="max-w-3xl">
          <p className="text-[0.65rem] tracking-[0.35em] uppercase text-gold mb-4">Método</p>
          <h2 className="font-serif text-[clamp(2.2rem,4.5vw,4.5rem)] leading-[1.02] text-balance font-normal text-ivory">
            A cobrança é apenas uma parte do problema.
          </h2>
          <p className="mt-6 text-muted leading-relaxed max-w-[62ch] text-base md:text-lg">
            Antes de aceitar qualquer repactuação bancária desfavorável, é indispensável
            compreender a legalidade das cláusulas, as garantias vinculadas e as defesas
            processuais disponíveis.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12 mt-16 md:mt-20">
          {steps.map((step, idx) => (
            <div
              key={step.num}
              className={`border-t hairline pt-8 ${idx % 2 === 1 ? 'lg:mt-8' : ''}`}
            >
              <span
                className="font-serif text-5xl md:text-6xl text-white/10 select-none block font-bold"
                aria-hidden="true"
              >
                {step.num}
              </span>
              <h3 className="font-serif text-2xl mt-5 text-ivory">{step.title}</h3>
              <p className="mt-3 text-sm text-muted leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
