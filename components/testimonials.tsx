'use client'

import React from 'react'
import { Star, Quote, ExternalLink } from 'lucide-react'

export function Testimonials() {
  const testimonials = [
    {
      name: 'M. S.',
      role: 'Produtor Rural — Triângulo Mineiro',
      text: 'Estávamos com execução em andamento e risco iminente de perda de maquinários por conta de uma CPR com juros abusivos. A intervenção técnica do Braga & Xavier renegociou o passivo e garantiu o alongamento nos termos da lei.',
    },
    {
      name: 'R. C.',
      role: 'Diretor Financeiro — Setor de Transportes',
      text: 'O banco havia bloqueado as contas operacionais da empresa por uma dívida de capital de giro. A banca conseguiu o desbloqueio cautelar em 48 horas e estruturou um acordo com deságio real.',
    },
    {
      name: 'A. F.',
      role: 'Empresário — Montes Claros / MG',
      text: 'Contratamos para revisar três cédulas de crédito bancário que acumulavam exigências ilegais de garantias. Atendimento discreto, direto pelos sócios e com fundamentação jurídica impecável.',
    },
  ]

  return (
    <section id="avaliacoes" className="py-16 md:py-24 bg-graphite border-b hairline scroll-mt-16 w-full">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-[5vw]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          <div className="reveal-on-scroll lg:col-span-4">
            <p className="text-[.58rem] tracking-[.3em] uppercase text-gold font-normal mb-3">
              Avaliações &bull; Prova Social
            </p>
            <h2 className="font-light text-2xl lg:text-4xl leading-[1.1] text-ivory tracking-tight mb-6">
              Confiança construída caso a caso.
            </h2>
            <div className="glass p-6 border border-gold/25 shadow-lg max-w-sm">
              <div className="flex gap-[2px] mb-3">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-gold fill-current" />
                ))}
              </div>
              <p className="text-2xl font-light text-ivory mb-1">
                5,0 <span className="text-sm text-muted font-light">no Google</span>
              </p>
              <p className="text-xs text-muted font-light mb-4">
                37 avaliações públicas verificadas
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Braga+%26+Xavier+Advogados+Montes+Claros"
                target="_blank"
                rel="noopener"
                className="inline-flex items-center gap-1.5 mt-2.5 text-[.58rem] tracking-[.15em] uppercase text-champagne border-t hairline pt-2 font-normal link-underline"
              >
                <span>Ver avaliações no Google</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          <div
            id="testimonials-group"
            className="lg:col-span-8 flex flex-col gap-3.5 w-full"
          >
            <blockquote className="reveal-on-scroll testimonial-item p-4 sm:p-5 bg-white/[0.015] border-l border-gold/40 relative">
              <p className="text-xs sm:text-sm md:text-base font-light italic leading-relaxed text-ivory/90 font-serif">
                &ldquo;Muito competente, atenciosos, prestativos, super recomendo.&rdquo;
              </p>
              <footer className="mt-2 text-[.55rem] tracking-[.15em] uppercase text-muted font-light">
                Avaliação pública no Google
              </footer>
            </blockquote>
            <blockquote className="reveal-on-scroll reveal-delay-1 testimonial-item p-4 sm:p-5 bg-white/[0.015] border-l border-gold/40 relative lg:ml-4">
              <p className="text-xs sm:text-sm md:text-base font-light italic leading-relaxed text-ivory/90 font-serif">
                &ldquo;Dois excelentes profissionais, resolveram minha vida!&rdquo;
              </p>
              <footer className="mt-2 text-[.55rem] tracking-[.15em] uppercase text-muted font-light">
                Avaliação pública no Google
              </footer>
            </blockquote>
            <blockquote className="reveal-on-scroll reveal-delay-2 testimonial-item p-4 sm:p-5 bg-white/[0.015] border-l border-gold/40 relative">
              <p className="text-xs sm:text-sm md:text-base font-light italic leading-relaxed text-ivory/90 font-serif">
                &ldquo;Excelente escritório, atendimento impecável e estratégia certeira.&rdquo;
              </p>
              <footer className="mt-2 text-[.55rem] tracking-[.15em] uppercase text-muted font-light">
                Avaliação pública no Google
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  )
}
