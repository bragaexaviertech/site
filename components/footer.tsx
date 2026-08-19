import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

interface FooterProps {
  onOpenTriagem: (origin: string) => void
  onOpenPrivacy: () => void
}

export function Footer({ onOpenTriagem, onOpenPrivacy }: FooterProps) {
  return (
    <footer className="border-t hairline bg-ink w-full">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-[5vw] py-10 md:py-14">
        <div className="reveal-on-scroll grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          <div className="md:col-span-4">
            <div className="flex items-center gap-2.5">
              <Image
                src="/logo-BX.png"
                alt="Logo Braga & Xavier"
                width={36}
                height={36}
                className="h-8 sm:h-9 w-auto object-contain"
              />
              <div className="flex flex-col leading-none border-l hairline pl-2.5">
                <span className="font-normal text-xs tracking-wider text-ivory uppercase">
                  BRAGA <span className="text-gold">&amp;</span> XAVIER
                </span>
                <span className="text-[.45rem] tracking-[.3em] text-muted uppercase mt-0.5 font-light">
                  ADVOGADOS
                </span>
              </div>
            </div>
            <p className="mt-3 text-xs text-muted leading-relaxed max-w-[38ch] font-light">
              Boutique jurídica especializada em Direito Bancário, Reestruturação de Dívidas Empresariais e Direito do Agronegócio.
              Sede em Montes Claros – MG e atuação digital em todo o Brasil.
            </p>
          </div>

          <nav className="md:col-span-2 md:col-start-5" aria-label="Escritório">
            <p className="text-[.55rem] tracking-[.25em] uppercase text-gold mb-2.5 font-normal">
              O Escritório
            </p>
            <ul className="flex flex-col gap-1.5 text-xs font-light">
              <li>
                <Link href="/" className="link-underline text-ivory/70 hover:text-ivory transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/escritorio" className="link-underline text-ivory/70 hover:text-ivory transition-colors">
                  Sócios Fundadores
                </Link>
              </li>
              <li>
                <Link href="/contato" className="link-underline text-ivory/70 hover:text-ivory transition-colors">
                  Sede &amp; Localização
                </Link>
              </li>
            </ul>
          </nav>

          <nav className="md:col-span-3" aria-label="Agronegócio">
            <p className="text-[.55rem] tracking-[.25em] uppercase text-gold mb-2.5 font-normal">
              Agronegócio &amp; Crédito Rural
            </p>
            <ul className="flex flex-col gap-1.5 text-xs font-light">
              <li>
                <Link href="/agronegocio" className="link-underline text-ivory/70 hover:text-ivory transition-colors">
                  Visão Geral do Agro
                </Link>
              </li>
              <li>
                <Link href="/agronegocio/alongamento-divida-rural" className="link-underline text-ivory/70 hover:text-ivory transition-colors">
                  Alongamento de Dívida (STJ)
                </Link>
              </li>
              <li>
                <Link href="/agronegocio/auditoria-cpr-ccr" className="link-underline text-ivory/70 hover:text-ivory transition-colors">
                  Auditoria de CPR &amp; CCR
                </Link>
              </li>
              <li>
                <Link href="/agronegocio/protecao-propriedade-rural" className="link-underline text-ivory/70 hover:text-ivory transition-colors">
                  Impenhorabilidade da Terra
                </Link>
              </li>
            </ul>
          </nav>

          <nav className="md:col-span-3" aria-label="Direito Bancário">
            <p className="text-[.55rem] tracking-[.25em] uppercase text-gold mb-2.5 font-normal">
              Direito Bancário &amp; PJ
            </p>
            <ul className="flex flex-col gap-1.5 text-xs font-light">
              <li>
                <Link href="/direito-bancario" className="link-underline text-ivory/70 hover:text-ivory transition-colors">
                  Visão Geral Bancária
                </Link>
              </li>
              <li>
                <Link href="/direito-bancario/defesa-execucao-ccb" className="link-underline text-ivory/70 hover:text-ivory transition-colors">
                  Defesa em Execução de CCB
                </Link>
              </li>
              <li>
                <Link href="/direito-bancario/desbloqueio-sisbajud" className="link-underline text-ivory/70 hover:text-ivory transition-colors">
                  Desbloqueio Sisbajud (24h)
                </Link>
              </li>
              <li>
                <Link href="/direito-bancario/blindagem-patrimonial-socios" className="link-underline text-ivory/70 hover:text-ivory transition-colors">
                  Blindagem de Sócios Avalistas
                </Link>
              </li>
              <li>
                <Link href="/direito-bancario/renegociacao-dividas-pj" className="link-underline text-ivory/70 hover:text-ivory transition-colors">
                  Reestruturação de Passivos PJ
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="border-t hairline mt-6 pt-3 text-[.58rem] text-muted/60 leading-relaxed font-light">
          <p>
            Este site possui caráter meramente informativo e institucional, em estrita observância ao
            Provimento CFOAB nº 205/2021 e ao Código de Ética e Disciplina da OAB. Nenhuma informação
            contida aqui deve ser interpretada como parecer ou garantia de resultado. Sociedade de
            Advogados devidamente inscrita na OAB/MG.
          </p>
        </div>

        <div className="border-t hairline mt-3 pt-3 flex flex-col md:flex-row md:items-center md:justify-between gap-2">
          <p className="text-[.7rem] text-muted/65 font-light">
            &copy; {new Date().getFullYear()} Braga &amp; Xavier Advogados. Todos os direitos reservados.
          </p>
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenPrivacy}
              className="text-[.55rem] text-muted/50 hover:text-gold uppercase tracking-wider transition-colors cursor-pointer"
            >
              Termos &amp; Privacidade
            </button>
            <span className="text-white/10">&bull;</span>
            <p className="text-[.48rem] tracking-[.25em] uppercase text-muted/40 font-light">
              Montes Claros &mdash; MG &bull; Brasil
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
