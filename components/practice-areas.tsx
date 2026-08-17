'use client'

import React from 'react'
import { Landmark, Building2, Wheat, ShieldCheck, ArrowUpRight } from 'lucide-react'

interface PracticeAreasProps {
  onSelectArea?: (areaKey: string) => void
}

export function PracticeAreas({ onSelectArea }: PracticeAreasProps) {
  return (
    <section id="bancario" className="py-20 md:py-32 bg-graphite border-y hairline scroll-mt-24">
      <div className="max-w-[1440px] mx-auto px-5 md:px-[6vw]">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <p className="text-[0.65rem] tracking-[0.35em] uppercase text-gold mb-4">
              Áreas de Atuação
            </p>
            <h2 className="font-serif text-[clamp(2.2rem,4.5vw,4.5rem)] leading-[1.02] max-w-[18ch] text-balance font-normal text-ivory">
              Atuação concentrada onde patrimônio e crédito se encontram.
            </h2>
          </div>
          <span className="font-serif text-8xl text-white/5 select-none hidden md:block font-bold" aria-hidden="true">
            02
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          {/* Card 1: Direito Bancário */}
          <article
            onClick={() => onSelectArea?.('pessoa-fisica')}
            className="area-card glass md:col-span-7 p-8 md:p-12 flex flex-col justify-between min-h-[300px] cursor-pointer group"
          >
            <div>
              <div className="flex items-start justify-between">
                <div className="p-2 bg-forest/40 border border-gold/30">
                  <Landmark className="w-5 h-5 text-gold" aria-hidden="true" />
                </div>
                <ArrowUpRight className="card-arrow w-5 h-5 text-muted group-hover:text-gold" aria-hidden="true" />
              </div>
              <h3 className="font-serif text-2xl md:text-3xl mt-6 text-ivory">Direito Bancário</h3>
              <p className="mt-4 text-muted leading-relaxed text-sm md:text-base max-w-[50ch]">
                Atuação especializada em conflitos, revisão de contratos, defesas contra cobranças e
                execuções abusivas de instituições financeiras.
              </p>
            </div>
            <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[0.7rem] tracking-[0.12em] uppercase text-champagne/80">
              <li>• Revisão contratual</li>
              <li>• Defesa em execução</li>
              <li>• Renegociação de dívidas</li>
              <li>• Proteção de bens de família</li>
            </ul>
          </article>

          {/* Card 2: Dívidas Empresariais */}
          <article
            onClick={() => onSelectArea?.('empresarial')}
            className="area-card glass md:col-span-5 p-8 md:p-12 flex flex-col justify-between min-h-[300px] cursor-pointer group"
          >
            <div>
              <div className="flex items-start justify-between">
                <div className="p-2 bg-forest/40 border border-gold/30">
                  <Building2 className="w-5 h-5 text-gold" aria-hidden="true" />
                </div>
                <ArrowUpRight className="card-arrow w-5 h-5 text-muted group-hover:text-gold" aria-hidden="true" />
              </div>
              <h3 className="font-serif text-2xl md:text-3xl mt-6 text-ivory">Dívidas Empresariais</h3>
              <p className="mt-4 text-muted leading-relaxed text-sm md:text-base">
                Análise e construção de estratégias jurídicas para empresas com passivo bancário
                (CCBs, capital de giro, travas e execuções de garantias).
              </p>
            </div>
            <p className="text-[0.7rem] tracking-[0.12em] uppercase text-champagne/80 mt-6">
              Reestruturação de passivo &amp; proteção do caixa
            </p>
          </article>

          {/* Card 3: Direito Rural */}
          <article
            onClick={() => onSelectArea?.('produtor-rural')}
            className="area-card glass md:col-span-5 p-8 md:p-12 flex flex-col justify-between min-h-[300px] cursor-pointer group"
          >
            <div>
              <div className="flex items-start justify-between">
                <div className="p-2 bg-forest/40 border border-gold/30">
                  <Wheat className="w-5 h-5 text-gold" aria-hidden="true" />
                </div>
                <ArrowUpRight className="card-arrow w-5 h-5 text-muted group-hover:text-gold" aria-hidden="true" />
              </div>
              <h3 className="font-serif text-2xl md:text-3xl mt-6 text-ivory">Direito Rural</h3>
              <p className="mt-4 text-muted leading-relaxed text-sm md:text-base">
                Assessoria em operações financeiras rurais, securitização, alongamento de dívidas
                e proteção das atividades do homem do campo.
              </p>
            </div>
            <p className="text-[0.7rem] tracking-[0.12em] uppercase text-champagne/80 mt-6">
              Súmula 298 do STJ &amp; Manual de Crédito Rural
            </p>
          </article>

          {/* Card 4: Agronegócio */}
          <article
            onClick={() => onSelectArea?.('produtor-rural')}
            className="area-card glass md:col-span-7 p-8 md:p-12 flex flex-col justify-between min-h-[300px] cursor-pointer group"
          >
            <div>
              <div className="flex items-start justify-between">
                <div className="p-2 bg-forest/40 border border-gold/30">
                  <ShieldCheck className="w-5 h-5 text-gold" aria-hidden="true" />
                </div>
                <ArrowUpRight className="card-arrow w-5 h-5 text-muted group-hover:text-gold" aria-hidden="true" />
              </div>
              <h3 className="font-serif text-2xl md:text-3xl mt-6 text-ivory">Agronegócio</h3>
              <p className="mt-4 text-muted leading-relaxed text-sm md:text-base max-w-[50ch]">
                Consultoria e defesa jurídica estratégica para produtores rurais e cooperativas em
                Cédulas de Produto Rural (CPR), garantias de safra e penhora de imóveis rurais.
              </p>
            </div>
            <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[0.7rem] tracking-[0.12em] uppercase text-champagne/80">
              <li>• Alongamento de dívida rural</li>
              <li>• Impenhorabilidade da pequena propriedade</li>
              <li>• Revisão de contratos de crédito agrícola</li>
            </ul>
          </article>
        </div>
      </div>
    </section>
  )
}
