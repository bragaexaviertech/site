import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Landmark, Building2, ShieldCheck, Wheat, ArrowUpRight, AlertCircle } from 'lucide-react'

interface PracticeAreasProps {
  onOpenTriagem: (origin: string) => void
}

export function PracticeAreas({ onOpenTriagem }: PracticeAreasProps) {
  return (
    <section
      id="bancario"
      className="py-16 md:py-24 bg-graphite border-y hairline scroll-mt-16 w-full relative overflow-hidden"
    >
      {/* Glow de fundo ambiental */}
      <div className="absolute top-1/2 -left-40 w-96 h-96 bg-forest/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-[5vw] relative z-10">
        <div
          id="practice-header"
          className="reveal-on-scroll flex flex-col md:flex-row md:items-end md:justify-between gap-3 mb-10"
        >
          <div>
            <p className="text-[.6rem] tracking-[.3em] uppercase text-gold font-normal mb-2">
              Áreas de Atuação Especializadas
            </p>
            <h2 className="font-light text-2xl sm:text-3xl lg:text-4xl leading-[1.12] max-w-[24ch] text-balance text-ivory tracking-tight">
              Atuação concentrada onde patrimônio e crédito se encontram.
            </h2>
          </div>
          <span
            className="text-6xl font-light text-white/5 select-none hidden md:block font-serif italic"
            aria-hidden="true"
          >
            02
          </span>
        </div>

        <div
          id="practice-cards-group"
          className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-5"
        >
          {/* Card 01: Direito Bancário */}
          <Link
            href="/direito-bancario"
            id="card-bancario"
            className="reveal-on-scroll area-panel md:col-span-7 p-6 sm:p-7 flex flex-col justify-between min-h-[250px] sm:min-h-[280px] relative overflow-hidden group cursor-pointer border border-white/10 hover:border-gold/50 bg-[#111210]/90 transition-all duration-500 rounded-none shadow-xl"
          >
            {/* Background Fotográfico Cinematográfico */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
              <Image
                src="/assets/sala-reuniao.webp"
                alt="Ambiente Jurídico Bancário"
                fill
                sizes="(max-width: 768px) 100vw, 55vw"
                className="object-cover opacity-15 group-hover:opacity-35 filter contrast-125 brightness-75 scale-100 group-hover:scale-105 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-transparent to-transparent" />
            </div>

            {/* Número em Marca d'água no canto inferior direito para não conflitar com o botão */}
            <span
              className="absolute bottom-3 right-5 sm:bottom-4 sm:right-6 text-6xl sm:text-7xl font-light text-white/[0.04] group-hover:text-gold/[0.14] select-none pointer-events-none transition-colors font-serif italic z-0"
              aria-hidden="true"
            >
              01
            </span>

            <div className="relative z-10">
              <div className="flex items-start justify-between">
                <div className="p-2 bg-forest/50 border border-gold/30 backdrop-blur-md">
                  <Landmark className="w-4 h-4 text-gold" aria-hidden="true" />
                </div>
                <span className="inline-flex items-center gap-1.5 text-[.65rem] text-gold uppercase tracking-wider font-medium group-hover:text-champagne transition-colors">
                  <span>Ver página dedicada</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-normal mt-5 text-ivory group-hover:text-gold transition-colors">
                Direito Bancário &amp; Cobranças
              </h3>
              <p className="mt-2 text-ivory/70 leading-relaxed max-w-[48ch] text-xs sm:text-sm font-light">
                Defesa ágil contra execuções de títulos, bloqueios judiciais e juros abusivos em contratos de crédito.
              </p>
            </div>

            <ul className="relative z-10 mt-5 flex flex-wrap gap-x-4 gap-y-1.5 text-[.65rem] sm:text-[.7rem] tracking-[.08em] uppercase text-champagne/90 font-medium">
              <li>• Defesa em Execuções</li>
              <li>• Desbloqueio Sisbajud</li>
              <li>• Revisão Contratual</li>
              <li>• Bem de Família</li>
            </ul>
          </Link>

          {/* Card 02: Dívidas Empresariais */}
          <Link
            href="/direito-bancario"
            id="card-empresarial"
            className="reveal-on-scroll reveal-delay-1 area-panel md:col-span-5 p-6 sm:p-7 flex flex-col justify-between min-h-[250px] sm:min-h-[280px] relative overflow-hidden group cursor-pointer border border-white/10 hover:border-gold/50 bg-[#111210]/90 transition-all duration-500 rounded-none shadow-xl"
          >
            {/* Background Fotográfico Cinematográfico */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
              <Image
                src="/assets/escritorio.webp"
                alt="Ambiente de Gestão Empresarial"
                fill
                sizes="(max-width: 768px) 100vw, 45vw"
                className="object-cover opacity-15 group-hover:opacity-35 filter contrast-125 brightness-75 scale-100 group-hover:scale-105 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-transparent to-transparent" />
            </div>

            {/* Número em Marca d'água no canto inferior direito */}
            <span
              className="absolute bottom-3 right-5 sm:bottom-4 sm:right-6 text-6xl sm:text-7xl font-light text-white/[0.04] group-hover:text-gold/[0.14] select-none pointer-events-none transition-colors font-serif italic z-0"
              aria-hidden="true"
            >
              02
            </span>

            <div className="relative z-10">
              <div className="flex items-start justify-between">
                <div className="p-2 bg-forest/50 border border-gold/30 backdrop-blur-md">
                  <Building2 className="w-4 h-4 text-gold" aria-hidden="true" />
                </div>
                <span className="inline-flex items-center gap-1.5 text-[.65rem] text-gold uppercase tracking-wider font-medium group-hover:text-champagne transition-colors">
                  <span>Ver página</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-normal mt-5 text-ivory group-hover:text-gold transition-colors">
                Dívidas Empresariais &amp; Caixa
              </h3>
              <p className="mt-2 text-ivory/70 leading-relaxed text-xs sm:text-sm font-light">
                Reestruturação de passivos corporativos para liberar capital de giro e proteger o patrimônio dos sócios avalistas.
              </p>
            </div>

            <p className="relative z-10 text-[.62rem] sm:text-[.68rem] tracking-[.1em] uppercase text-champagne/90 mt-5 font-medium">
              Proteção de caixa &bull; Acordos com deságio &rarr;
            </p>
          </Link>

          {/* Card 03: Agronegócio */}
          <Link
            href="/agronegocio"
            id="card-agro"
            className="reveal-on-scroll reveal-delay-2 area-panel md:col-span-5 p-6 sm:p-7 flex flex-col justify-between min-h-[250px] sm:min-h-[280px] relative overflow-hidden group cursor-pointer border border-white/10 hover:border-gold/50 bg-[#111210]/90 transition-all duration-500 rounded-none shadow-xl"
          >
            {/* Background Fotográfico Cinematográfico */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
              <Image
                src="/assets/agronegocio.webp"
                alt="Crédito e Agronegócio"
                fill
                sizes="(max-width: 768px) 100vw, 45vw"
                className="object-cover opacity-20 group-hover:opacity-40 filter contrast-125 brightness-75 scale-100 group-hover:scale-105 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-transparent to-transparent" />
            </div>

            {/* Número em Marca d'água no canto inferior direito */}
            <span
              className="absolute bottom-3 right-5 sm:bottom-4 sm:right-6 text-6xl sm:text-7xl font-light text-white/[0.04] group-hover:text-gold/[0.14] select-none pointer-events-none transition-colors font-serif italic z-0"
              aria-hidden="true"
            >
              03
            </span>

            <div className="relative z-10">
              <div className="flex items-start justify-between">
                <div className="p-2 bg-forest/50 border border-gold/30 backdrop-blur-md">
                  <ShieldCheck className="w-4 h-4 text-gold" aria-hidden="true" />
                </div>
                <span className="inline-flex items-center gap-1.5 text-[.65rem] text-gold uppercase tracking-wider font-medium group-hover:text-champagne transition-colors">
                  <span>Ver página</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-normal mt-5 text-ivory group-hover:text-gold transition-colors">
                Agronegócio &amp; Safra
              </h3>
              <p className="mt-2 text-ivory/70 leading-relaxed text-xs sm:text-sm font-light">
                Aplicação da Súmula 298 do STJ para prorrogar dívidas de safra e resguardar terras e maquinários do produtor.
              </p>
            </div>

            <p className="relative z-10 text-[.62rem] sm:text-[.68rem] tracking-[.1em] uppercase text-champagne/90 mt-5 font-medium">
              Alongamento rural &bull; Súmula 298 STJ &rarr;
            </p>
          </Link>

          {/* Card 04: Direito Rural */}
          <Link
            href="/agronegocio"
            id="card-rural"
            className="reveal-on-scroll reveal-delay-3 area-panel md:col-span-7 p-6 sm:p-7 flex flex-col justify-between min-h-[250px] sm:min-h-[280px] relative overflow-hidden group cursor-pointer border border-white/10 hover:border-gold/50 bg-[#111210]/90 transition-all duration-500 rounded-none shadow-xl"
          >
            {/* Background Fotográfico Cinematográfico */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
              <Image
                src="/assets/agronegocio.webp"
                alt="Direito Rural e Safra"
                fill
                sizes="(max-width: 768px) 100vw, 55vw"
                className="object-cover opacity-20 group-hover:opacity-40 filter contrast-125 brightness-75 scale-100 group-hover:scale-105 transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/80 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-ink/90 via-transparent to-transparent" />
            </div>

            {/* Número em Marca d'água no canto inferior direito */}
            <span
              className="absolute bottom-3 right-5 sm:bottom-4 sm:right-6 text-6xl sm:text-7xl font-light text-white/[0.04] group-hover:text-gold/[0.14] select-none pointer-events-none transition-colors font-serif italic z-0"
              aria-hidden="true"
            >
              04
            </span>

            <div className="relative z-10">
              <div className="flex items-start justify-between">
                <div className="p-2 bg-forest/50 border border-gold/30 backdrop-blur-md">
                  <Wheat className="w-4 h-4 text-gold" aria-hidden="true" />
                </div>
                <span className="inline-flex items-center gap-1.5 text-[.65rem] text-gold uppercase tracking-wider font-medium group-hover:text-champagne transition-colors">
                  <span>Ver página dedicada</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </span>
              </div>
              <h3 className="text-lg sm:text-xl md:text-2xl font-normal mt-5 text-ivory group-hover:text-gold transition-colors">
                Auditoria de CPR &amp; Garantias
              </h3>
              <p className="mt-2 text-ivory/70 leading-relaxed max-w-[48ch] text-xs sm:text-sm font-light">
                Perícia em Cédulas de Produto Rural e impugnação imediata de leilões, penhoras e arrestos indevidos de grãos.
              </p>
            </div>

            <ul className="relative z-10 mt-5 flex flex-wrap gap-x-4 gap-y-1.5 text-[.65rem] sm:text-[.7rem] tracking-[.08em] uppercase text-champagne/90 font-medium">
              <li>• Alongamento de Dívida (STJ)</li>
              <li>• Auditoria de CPR e CCR</li>
              <li>• Proteção de Terras e Tratores</li>
            </ul>
          </Link>
        </div>

        {/* Box de Alerta de Urgência & Prazos Processuais */}
        <div className="reveal-on-scroll mt-8 p-6 sm:p-7 glass border border-gold/40 bg-forest/20 backdrop-blur-xl relative overflow-hidden shadow-2xl">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-5 relative z-10">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-gold/15 border border-gold/40 flex items-center justify-center shrink-0 mt-0.5">
                <AlertCircle className="w-5 h-5 text-gold" />
              </div>
              <div>
                <p className="text-[.6rem] tracking-[.25em] uppercase text-gold font-medium mb-1">
                  ATENÇÃO AOS PRAZOS PROCESSUAIS
                </p>
                <h3 className="text-base sm:text-lg font-normal text-ivory tracking-tight">
                  Recebeu notificação judicial, citação ou bloqueio em conta?
                </h3>
                <p className="text-xs sm:text-sm text-ivory/80 mt-1 max-w-2xl font-light leading-relaxed">
                  Você tem apenas <strong className="text-ivory font-medium">15 dias úteis</strong> para apresentar defesa em execuções bancárias. Uma atuação técnica rápida impede penhoras irreversíveis de faturamento, maquinários e imóveis.
                </p>
              </div>
            </div>

            <button
              onClick={() => onOpenTriagem('urgencia_prazos')}
              className="btn-primary !py-3 !px-6 !text-xs shrink-0 cursor-pointer justify-center shadow-xl"
            >
              <span>Avaliar Meu Prazo no WhatsApp</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
