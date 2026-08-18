'use client'

import React from 'react'
import Image from 'next/image'
import { MessageCircle, ArrowUpRight } from 'lucide-react'

interface CTASectionProps {
  onOpenTriagem: (origin: string) => void
}

export function CTASection({ onOpenTriagem }: CTASectionProps) {
  return (
    <section
      id="final-cta-section"
      className="relative min-h-[50vh] flex items-center bg-[#15231C] overflow-hidden w-full py-16 sm:py-24"
    >
      {/* Background Fotográfico Cinematográfico */}
      <div
        className="absolute inset-0 z-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <div className="absolute right-0 top-0 bottom-0 w-full lg:w-[65%] h-full">
          <Image
            src="/assets/equipe-editorial.jpg"
            alt="Dr. Braga e Dr. Xavier"
            fill
            sizes="100vw"
            className="object-cover object-[center_20%] opacity-20 lg:opacity-35 filter contrast-125 brightness-75"
          />
        </div>

        <div className="absolute inset-0 bg-gradient-to-r from-[#15231C] via-[#15231C]/95 via-50% lg:via-55% to-transparent" />
        <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-ink to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-ink to-transparent" />
        <div className="absolute inset-0 topo-lines opacity-30 mix-blend-overlay" />
      </div>

      <span
        id="cta-watermark"
        className="absolute inset-0 flex items-center justify-center text-[14vw] font-light text-white/[0.02] select-none pointer-events-none font-serif italic z-0"
        aria-hidden="true"
      >
        Estratégia
      </span>

      <div className="relative max-w-[1440px] mx-auto w-full px-4 sm:px-6 md:px-[5vw] z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div id="cta-text-col" className="reveal-on-scroll lg:col-span-8 xl:col-span-7">
            <h2 className="font-light text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-[1.08] text-ivory text-balance tracking-tight">
              Seu patrimônio exige estratégia antes de qualquer decisão.
            </h2>
            <p className="mt-4 text-ivory/80 text-xs sm:text-sm md:text-base leading-relaxed max-w-[50ch] font-light">
              Fale diretamente com os advogados fundadores e receba um diagnóstico jurídico individualizado para resguardar seus bens.
            </p>

            <div className="mt-7 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <button
                onClick={() => onOpenTriagem('final_cta')}
                className="btn-primary justify-center shadow-2xl !py-3 !px-6 !text-xs cursor-pointer"
              >
                <MessageCircle className="w-4 h-4 text-champagne" />
                <span>Conversar no WhatsApp com os Sócios</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>

              <a
                href="https://wa.me/5531971746972"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost justify-center backdrop-blur-md bg-ink/30 !py-3 !px-6 !text-xs hover:bg-white/[0.06]"
              >
                <span>(31) 97174-6972</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
