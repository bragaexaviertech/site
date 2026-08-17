import React from 'react'

export function TargetAudience() {
  const audiences = [
    {
      num: '01',
      title: 'Consumidores e Pessoas Físicas',
      description:
        'Pessoas físicas que enfrentam juros extorsivos em empréstimos, financiamentos imobiliários/veiculares, busca e apreensão ou penhora de bens essenciais.',
    },
    {
      num: '02',
      title: 'Empresas e Empresários',
      description:
        'Sociedades empresárias de médio e grande porte com estrangulamento de capital de giro, execução de CCBs, bloqueio de contas ou risco patrimonial dos sócios avalistas.',
    },
    {
      num: '03',
      title: 'Produtores Rurais',
      description:
        'Agricultores e pecuaristas que necessitam de alongamento de dívidas de custeio/investimento, renegociação de CPRs e proteção jurídica contra a perda de suas terras.',
    },
  ]

  return (
    <section className="py-20 md:py-32">
      <div className="max-w-[1440px] mx-auto px-5 md:px-[6vw]">
        <p className="text-[0.65rem] tracking-[0.35em] uppercase text-gold mb-12">
          Para quem atuamos
        </p>

        <div className="flex flex-col">
          {audiences.map((item, idx) => (
            <div
              key={item.num}
              className={`grid grid-cols-1 md:grid-cols-12 gap-4 items-baseline border-t hairline py-10 md:py-14 ${
                idx === audiences.length - 1 ? 'border-b' : ''
              }`}
            >
              <span
                className="md:col-span-2 font-serif text-5xl md:text-7xl text-white/10 select-none font-bold"
                aria-hidden="true"
              >
                {item.num}
              </span>
              <h3 className="md:col-span-4 font-serif text-2xl md:text-3xl text-ivory">
                {item.title}
              </h3>
              <p className="md:col-span-5 md:col-start-8 text-muted leading-relaxed text-sm md:text-base">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
