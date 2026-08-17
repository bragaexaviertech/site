import React from 'react'
import { MapPin, Phone, Clock } from 'lucide-react'
import { InstagramIcon } from '@/components/icons'

export function LocationContact() {
  return (
    <section id="contato" className="py-20 md:py-32 scroll-mt-24">
      <div className="max-w-[1440px] mx-auto px-5 md:px-[6vw]">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Left Column */}
          <div className="lg:col-span-6">
            <p className="text-[0.65rem] tracking-[0.35em] uppercase text-gold mb-4">
              Localização &amp; Atendimento
            </p>
            <h2 className="font-serif text-[clamp(2.2rem,4vw,4.5rem)] leading-[1.02] text-balance font-normal text-ivory">
              Montes Claros &mdash; MG. Atuação em todo o Brasil.
            </h2>
            <p className="mt-8 text-muted leading-relaxed text-base">
              Nosso escritório físico está localizado no coração de Montes Claros, ponto estratégico
              do Norte de Minas Gerais, com infraestrutura completa e suporte tecnológico para
              atender demandas judiciais e consultivas em qualquer comarca do território nacional.
            </p>
            <p className="mt-6 text-[0.65rem] tracking-[0.3em] uppercase text-muted/60" aria-hidden="true">
              16°44&prime;S &mdash; 43°51&prime;W &bull; Montes Claros / MG
            </p>
          </div>

          {/* Right Column: Contact Cards */}
          <div className="lg:col-span-5 lg:col-start-8 grid grid-cols-1 sm:grid-cols-2 gap-4 content-start">
            <div className="glass p-6 border border-white/10">
              <MapPin className="w-4 h-4 text-gold mb-3" aria-hidden="true" />
              <p className="text-[0.6rem] tracking-[0.25em] uppercase text-muted mb-1 font-medium">
                Endereço
              </p>
              <p className="text-xs text-ivory/85 leading-relaxed">
                R. Irmã Beata, 18 &ndash; Lj 03<br />
                Centro, Montes Claros &ndash; MG<br />
                CEP 39400-110
              </p>
            </div>

            <div className="glass p-6 border border-white/10">
              <Phone className="w-4 h-4 text-gold mb-3" aria-hidden="true" />
              <p className="text-[0.6rem] tracking-[0.25em] uppercase text-muted mb-1 font-medium">
                Telefone / WhatsApp
              </p>
              <a
                href="https://wa.me/5531971746972?text=Ol%C3%A1!%20Conheci%20o%20Braga%20%26%20Xavier%20Advogados%20pelo%20site%20e%20gostaria%20de%20conversar%20sobre%20meu%20caso."
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-ivory/85 link-underline block"
              >
                (31) 97174-6972
              </a>
            </div>

            <div className="glass p-6 border border-white/10">
              <Clock className="w-4 h-4 text-gold mb-3" aria-hidden="true" />
              <p className="text-[0.6rem] tracking-[0.25em] uppercase text-muted mb-1 font-medium">
                Horário &amp; Suporte
              </p>
              <p className="text-xs text-ivory/85 leading-relaxed">
                Segunda a Sexta: 08h às 18h<br />
                <span className="text-[0.65rem] text-gold">Atendimento ágil para urgências</span>
              </p>
            </div>

            <div className="glass p-6 border border-white/10">
              <InstagramIcon className="w-4 h-4 text-gold mb-3" />
              <p className="text-[0.6rem] tracking-[0.25em] uppercase text-muted mb-1 font-medium">
                Instagram Oficial
              </p>
              <a
                href="https://instagram.com/bragaexavier"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-ivory/85 link-underline block"
              >
                @bragaexavier
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
