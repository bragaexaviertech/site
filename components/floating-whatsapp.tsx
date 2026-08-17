'use client'

import React from 'react'
import { MessageCircle } from 'lucide-react'

interface FloatingWhatsAppProps {
  onOpenTriage?: () => void
}

export function FloatingWhatsApp({ onOpenTriage }: FloatingWhatsAppProps) {
  return (
    <button
      onClick={onOpenTriage}
      className="group fixed bottom-5 right-5 md:bottom-8 md:right-8 z-40 flex items-center gap-3 bg-forest border border-gold/40 hover:border-gold hover:bg-forestlight transition-all duration-300 p-4 md:p-[1.1rem] shadow-2xl cursor-pointer"
      aria-label="Falar com um advogado pelo WhatsApp"
    >
      <MessageCircle className="w-5 h-5 text-champagne shrink-0" />
      <span className="hidden md:block max-w-0 overflow-hidden group-hover:max-w-[220px] transition-all duration-500 whitespace-nowrap text-xs tracking-[0.14em] uppercase text-ivory font-medium">
        Falar com um advogado
      </span>
    </button>
  )
}
