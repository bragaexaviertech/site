'use client'

import React, { useState, useEffect } from 'react'

interface CookieBannerProps {
  onOpenPrivacy: () => void
}

export function CookieBanner({ onOpenPrivacy }: CookieBannerProps) {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const consent = localStorage.getItem('bx_cookie_consent')
    if (!consent) {
      const timer = setTimeout(() => setShow(true), 1200)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('bx_cookie_consent', 'accepted')
    setShow(false)
  }

  const handleDismiss = () => {
    setShow(false)
  }

  if (!show) return null

  return (
    <div
      className="fixed bottom-4 left-4 right-4 md:left-5 md:right-auto md:max-w-sm z-50 bg-[#111210] border border-white/15 p-3.5 shadow-2xl transition-all duration-500 transform translate-y-0 opacity-100"
      role="region"
      aria-label="Consentimento de Cookies"
    >
      <div className="flex flex-col gap-2.5">
        <p className="text-xs text-muted font-light leading-relaxed">
          Utilizamos cookies essenciais para garantir a melhor experiência de navegação, em
          conformidade com a{' '}
          <button
            onClick={onOpenPrivacy}
            className="text-gold underline hover:text-ivory cursor-pointer"
          >
            LGPD
          </button>
          .
        </p>
        <div className="flex items-center gap-2">
          <button
            onClick={handleAccept}
            className="btn-primary !py-1 !px-3 !text-[.62rem]"
          >
            <span>Aceitar e continuar</span>
          </button>
          <button
            onClick={handleDismiss}
            className="btn-ghost !py-1 !px-2.5 !text-[.62rem]"
          >
            <span>Fechar</span>
          </button>
        </div>
      </div>
    </div>
  )
}
