'use client'

import React from 'react'
import Image from 'next/image'

export function StructureGallery() {
  return (
    <section
      id="estrutura"
      className="py-16 md:py-24 bg-ink border-b hairline scroll-mt-16 relative overflow-hidden w-full"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-[5vw]">
        <div id="structure-header" className="reveal-on-scroll max-w-2xl mb-10">
          <p className="text-[.6rem] tracking-[.3em] uppercase text-gold font-normal mb-2">
            Estrutura Institucional
          </p>
          <h2 className="font-light text-2xl sm:text-3xl lg:text-4xl leading-[1.12] text-balance text-ivory tracking-tight">
            Infraestrutura pensada para decisões de alto nível.
          </h2>
          <p className="mt-3 text-ivory/70 leading-relaxed text-xs sm:text-sm font-light">
            Ambiente discreto, moderno e equipado para atendimento a pessoas físicas, executivos e
            produtores rurais de todo o país.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:gap-5 items-center w-full">
          <div
            id="gallery-img-1"
            className="reveal-on-scroll md:col-span-7 relative overflow-hidden h-[250px] sm:h-[340px] w-full border border-white/10 hover:border-gold/40 transition-colors duration-500 group shadow-2xl"
          >
            <Image
              src="/assets/recepcao.webp"
              alt="Recepção Oficial Braga & Xavier Advogados"
              fill
              sizes="(max-width: 1024px) 100vw, 55vw"
              className="object-cover object-center filter contrast-110 brightness-90 group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 text-xs tracking-wider uppercase text-champagne font-medium">
              Recepção &bull; Atendimento Reservado
            </div>
          </div>

          <div className="md:col-span-5 flex flex-col gap-4 sm:gap-5 w-full">
            <div className="relative overflow-hidden h-[190px] sm:h-[210px] border border-white/10 shadow-xl group">
              <Image
                src="/assets/sala-reuniao.webp"
                alt="Sala de Reuniões Estratégicas"
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover object-center filter contrast-110 brightness-90 group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3 right-3 text-[.65rem] tracking-wider uppercase text-champagne font-medium">
                Sala de Reuniões
              </div>
            </div>

            <div className="relative overflow-hidden h-[190px] sm:h-[210px] border border-white/10 shadow-xl group">
              <Image
                src="/assets/escritorio.webp"
                alt="Ambiente de Trabalho e Gestão"
                fill
                sizes="(max-width: 1024px) 50vw, 25vw"
                className="object-cover object-center filter contrast-110 brightness-90 group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/85 via-ink/20 to-transparent" />
              <div className="absolute bottom-3 left-3 px-2.5 py-1 bg-ink/80 backdrop-blur-md border border-white/10 text-[.6rem] uppercase tracking-widest text-ivory font-light">
                Área Operacional Integrada
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
