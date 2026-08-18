'use client'

import React from 'react'
import { MessageCircle } from 'lucide-react'

interface FloatingWhatsAppProps {
  onOpenTriagem: (origin: string) => void
}

export function FloatingWhatsApp({ onOpenTriagem }: FloatingWhatsAppProps) {
  return (
    <button
      onClick={() => onOpenTriagem('float_button')}
      className="group fixed bottom-4 right-4 md:bottom-5 md:right-5 z-40 flex items-center gap-2 bg-forest border border-gold/35 hover:border-gold transition-all duration-300 p-2.5 md:p-3 shadow-xl rounded-none cursor-pointer"
      aria-label="Falar com um advogado pelo WhatsApp"
    >
      <MessageCircle className="w-4 h-4 text-champagne shrink-0" />
      <span className="hidden md:block max-w-0 overflow-hidden group-hover:max-w-[170px] transition-all duration-500 whitespace-nowrap text-[.65rem] tracking-[.12em] uppercase text-ivory font-normal">
        Falar com um advogado
      </span>
    </button>
  )
}
