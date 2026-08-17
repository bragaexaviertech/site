import React from 'react'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t hairline bg-ink">
      <div className="max-w-[1440px] mx-auto px-5 md:px-[6vw] py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
          {/* Brand Col */}
          <div className="md:col-span-5">
            <p className="font-serif text-2xl tracking-wide text-ivory">
              BRAGA <span className="text-gold">&amp;</span> XAVIER
            </p>
            <p className="text-[0.6rem] tracking-[0.45em] text-muted mt-1">ADVOGADOS</p>
            <p className="mt-6 text-xs md:text-sm text-muted leading-relaxed max-w-[42ch]">
              Sociedade de advogados com foco em Direito Bancário, reestruturação de dívidas
              empresariais, Direito Rural e Agronegócio. Sede em Montes Claros – MG e atuação
              estratégica em todo o Brasil.
            </p>
          </div>

          {/* Nav Col 1 */}
          <nav className="md:col-span-2 md:col-start-7" aria-label="Escritório">
            <p className="text-[0.6rem] tracking-[0.25em] uppercase text-gold mb-4 font-medium">
              Escritório
            </p>
            <ul className="flex flex-col gap-2.5 text-xs md:text-sm">
              <li>
                <a href="#escritorio" className="link-underline text-ivory/75 hover:text-ivory transition-colors">
                  Sobre o Escritório
                </a>
              </li>
              <li>
                <a href="#bancario" className="link-underline text-ivory/75 hover:text-ivory transition-colors">
                  Áreas de Atuação
                </a>
              </li>
              <li>
                <a href="#avaliacoes" className="link-underline text-ivory/75 hover:text-ivory transition-colors">
                  Avaliações
                </a>
              </li>
            </ul>
          </nav>

          {/* Nav Col 2 */}
          <nav className="md:col-span-2" aria-label="Atuação">
            <p className="text-[0.6rem] tracking-[0.25em] uppercase text-gold mb-4 font-medium">
              Atuação
            </p>
            <ul className="flex flex-col gap-2.5 text-xs md:text-sm">
              <li>
                <a href="#bancario" className="link-underline text-ivory/75 hover:text-ivory transition-colors">
                  Direito Bancário
                </a>
              </li>
              <li>
                <a href="#empresas" className="link-underline text-ivory/75 hover:text-ivory transition-colors">
                  Dívidas Empresariais
                </a>
              </li>
              <li>
                <a href="#agronegocio" className="link-underline text-ivory/75 hover:text-ivory transition-colors">
                  Direito Rural &amp; Agro
                </a>
              </li>
            </ul>
          </nav>

          {/* Nav Col 3 */}
          <nav className="md:col-span-2" aria-label="Contato">
            <p className="text-[0.6rem] tracking-[0.25em] uppercase text-gold mb-4 font-medium">
              Contato
            </p>
            <ul className="flex flex-col gap-2.5 text-xs md:text-sm">
              <li>
                <a
                  href="https://wa.me/5531971746972?text=Ol%C3%A1!%20Conheci%20o%20Braga%20%26%20Xavier%20Advogados%20pelo%20site%20e%20gostaria%20de%20conversar%20sobre%20meu%20caso."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline text-ivory/75 hover:text-ivory transition-colors"
                >
                  WhatsApp Oficial
                </a>
              </li>
              <li>
                <a
                  href="https://instagram.com/bragaexavier"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-underline text-ivory/75 hover:text-ivory transition-colors"
                >
                  Instagram @bragaexavier
                </a>
              </li>
              <li>
                <a href="#contato" className="link-underline text-ivory/75 hover:text-ivory transition-colors">
                  Endereço Físico
                </a>
              </li>
            </ul>
          </nav>
        </div>

        {/* Ethical Notice & Compliance */}
        <div className="border-t hairline mt-12 pt-6 text-[0.68rem] text-muted/60 leading-relaxed flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <p>
            Este site possui caráter meramente informativo e institucional, em estrita
            observância ao Provimento CFOAB nº 205/2021 e ao Código de Ética e Disciplina da OAB.
            Nenhuma informação contida aqui deve ser interpretada como parecer ou promessa de resultado.
          </p>
        </div>

        {/* Bottom Bar */}
        <div className="border-t hairline mt-6 pt-6 flex flex-col md:flex-row md:items-center md:justify-between gap-3">
          <p className="text-xs text-muted/80">
            &copy; {currentYear} Braga &amp; Xavier Advogados. Todos os direitos reservados.
          </p>
          <p className="text-[0.6rem] tracking-[0.25em] uppercase text-muted/50">
            Montes Claros &mdash; MG &bull; Brasil
          </p>
        </div>
      </div>
    </footer>
  )
}
