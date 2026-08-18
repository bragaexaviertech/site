'use client'

import React from 'react'
import Link from 'next/link'
import { MapPin, Phone, Mail, Clock, MessageCircle, ArrowUpRight } from 'lucide-react'

interface LocationContactProps {
  onOpenTriagem: (origin: string) => void
}

export function LocationContact({ onOpenTriagem }: LocationContactProps) {
  return (
    <section id="contato" className="py-16 md:py-24 bg-surface border-b hairline scroll-mt-16 w-full">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-[5vw]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-10">
          <div id="contato-text-col" className="reveal-on-scroll lg:col-span-5">
            <p className="text-[.58rem] tracking-[.3em] uppercase text-gold font-normal mb-1.5">
              Localização &amp; Sede
            </p>
            <h2 className="font-light text-2xl sm:text-3xl lg:text-4xl leading-[1.12] text-balance text-ivory tracking-tight">
              Montes Claros &mdash; MG. Atuação em todo o Brasil.
            </h2>
            <p className="mt-4 text-muted leading-relaxed text-xs sm:text-sm font-light">
              R. Irmã Beata, 18 &ndash; Lj 03 &ndash; Centro
              <br />
              Montes Claros &ndash; MG &bull; CEP 39400-110
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <a
                href="https://www.google.com/maps/search/?api=1&query=Braga+%26+Xavier+Advogados+Montes+Claros"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-champagne link-underline font-medium"
              >
                <MapPin className="w-3.5 h-3.5 text-gold" />
                <span>Traçar rota &rarr;</span>
              </a>
              <span className="text-white/20">&bull;</span>
              <Link
                href="/contato"
                className="inline-flex items-center gap-1 text-xs text-gold hover:text-champagne transition-colors underline font-normal"
              >
                <span>Página de Contato &amp; Plantão 24h</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
            <p
              className="mt-2.5 text-[.48rem] tracking-[.25em] uppercase text-muted/50 font-light"
              aria-hidden="true"
            >
              16°44&prime;S &mdash; 43°51&prime;W &bull; Brasil
            </p>
          </div>

          <div
            id="contato-cards-col"
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3.5 content-start w-full"
          >
            <div className="reveal-on-scroll contact-card glass p-4 border border-white/10 hover:border-gold/30 transition-colors">
              <MapPin className="w-3.5 h-3.5 text-gold mb-2" aria-hidden="true" />
              <p className="text-[.55rem] tracking-[.2em] uppercase text-muted mb-0.5 font-normal">
                Endereço
              </p>
              <p className="text-xs text-ivory/85 leading-relaxed font-light">
                R. Irmã Beata, 18 &ndash; Lj 03, Centro, Montes Claros &ndash; MG
              </p>
            </div>
            <div className="reveal-on-scroll reveal-delay-1 contact-card glass p-4 border border-white/10 hover:border-gold/30 transition-colors">
              <Phone className="w-3.5 h-3.5 text-gold mb-2" aria-hidden="true" />
              <p className="text-[.55rem] tracking-[.2em] uppercase text-muted mb-0.5 font-normal">
                WhatsApp / Telefone
              </p>
              <a
                href="https://wa.me/5531971746972?text=Ol%C3%A1!%20Conheci%20o%20Braga%20%26%20Xavier%20Advogados%20pelo%20site%20e%20gostaria%20de%20conversar%20sobre%20meu%20caso."
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-ivory/85 link-underline font-normal"
              >
                (31) 97174-6972
              </a>
            </div>
            <div className="reveal-on-scroll reveal-delay-2 contact-card glass p-4 border border-white/10 hover:border-gold/30 transition-colors">
              <Mail className="w-3.5 h-3.5 text-gold mb-2" aria-hidden="true" />
              <p className="text-[.55rem] tracking-[.2em] uppercase text-muted mb-0.5 font-normal">
                E-mail Institucional
              </p>
              <a
                href="mailto:contato@bragaexavier.adv.br"
                className="text-xs text-ivory/85 link-underline font-normal"
              >
                contato@bragaexavier.adv.br
              </a>
            </div>
            <div className="reveal-on-scroll reveal-delay-3 contact-card glass p-4 border border-white/10 hover:border-gold/30 transition-colors">
              <Clock className="w-3.5 h-3.5 text-gold mb-2" aria-hidden="true" />
              <p className="text-[.55rem] tracking-[.2em] uppercase text-muted mb-0.5 font-normal">
                Atendimento
              </p>
              <p className="text-xs text-ivory/85 leading-relaxed font-light">
                Seg a Sex: 08h às 18h
                <br />
                <span className="text-gold font-normal">Plantão para urgências 24h</span>
              </p>
            </div>
          </div>
        </div>

        {/* Mapa do Google Incorporado */}
        <div className="reveal-on-scroll w-full relative overflow-hidden border border-white/15 shadow-2xl bg-ink">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3821.108395165154!2d-43.8681804!3d-16.721442499999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x754adbbf9d17d99%3A0xd737545d31577788!2sBraga%20%26%20Xavier%20Advogados!5e0!3m2!1spt-BR!2sbr!4v1786974613847!5m2!1spt-BR!2sbr"
            width="100%"
            height="380"
            style={{ border: 0, display: 'block' }}
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            title="Localização do Escritório Braga & Xavier Advogados no Google Maps"
            className="w-full h-[320px] sm:h-[380px] md:h-[420px] filter brightness-[0.88] contrast-[1.1] hover:brightness-100 transition-all duration-500"
          />
        </div>
      </div>
    </section>
  )
}
