import React from 'react'

export function BusinessDebt() {
  const steps = [
    { num: 'i.', title: 'Diagnóstico Empresarial', desc: 'Estrutura societária, faturamento e fluxo de caixa' },
    { num: 'ii.', title: 'Auditoria de Contratos', desc: 'CCBs, capital de giro, limites e seguros embutidos' },
    { num: 'iii.', title: 'Mapeamento de Garantias', desc: 'Aval dos sócios, alienação fiduciária e hipotecas' },
    { num: 'iv.', title: 'Dimensionamento do Passivo', desc: 'Volume consolidado e ordem de exigibilidade' },
    { num: 'v.', title: 'Estratégia Jurídica & Negocial', desc: 'Plano de proteção e repactuação com deságio' },
  ]

  return (
    <section id="empresas" className="py-20 md:py-32 border-t hairline scroll-mt-24">
      <div className="max-w-[1440px] mx-auto px-5 md:px-[6vw]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center">
          <div className="lg:col-span-6">
            <p className="text-[0.65rem] tracking-[0.35em] uppercase text-gold mb-4">Empresas</p>
            <h2 className="font-serif text-[clamp(2.2rem,4vw,4.2rem)] leading-[1.05] text-balance font-normal text-ivory">
              Endividamento empresarial precisa ser tratado antes de comprometer a operação.
            </h2>
            <p className="mt-8 text-muted leading-relaxed max-w-[60ch] text-base md:text-lg">
              O estrangulamento financeiro por juros bancários drena a liquidez do negócio. Nossa
              atuação visa reequilibrar contratos, suspender atos expropriatórios e permitir que a
              empresa continue operando enquanto o passivo é reestruturado de forma sustentável.
            </p>
          </div>

          {/* Flow Panel */}
          <div className="lg:col-span-5 lg:col-start-8">
            <div className="glass p-6 md:p-8 relative border border-white/10 shadow-2xl">
              <span
                className="absolute top-4 right-5 text-[0.55rem] tracking-[0.3em] text-muted/50 uppercase font-medium"
                aria-hidden="true"
              >
                Fluxo de Análise
              </span>
              <ol className="flex flex-col mt-4">
                {steps.map((item, idx) => (
                  <li
                    key={item.num}
                    className={`flex items-start gap-4 py-3.5 ${
                      idx !== steps.length - 1 ? 'border-b hairline' : ''
                    }`}
                    style={{ paddingLeft: `${idx * 10}px` }}
                  >
                    <span className="text-xs font-serif text-gold/80 w-6 pt-0.5" aria-hidden="true">
                      {item.num}
                    </span>
                    <div>
                      <span
                        className={`font-serif text-lg md:text-xl block ${
                          idx === steps.length - 1 ? 'text-champagne font-medium' : 'text-ivory/90'
                        }`}
                      >
                        {item.title}
                      </span>
                      <span className="text-xs text-muted block mt-0.5">{item.desc}</span>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
