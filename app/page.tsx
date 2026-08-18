'use client'

import React, { useState } from 'react'
import { Header } from '@/components/header'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { PracticeAreas } from '@/components/practice-areas'
import { Methodology } from '@/components/methodology'
import { Agribusiness } from '@/components/agribusiness'
import { BusinessDebt } from '@/components/business-debt'
import { StructureGallery } from '@/components/structure-gallery'
import { Founders } from '@/components/founders'
import { Metrics } from '@/components/metrics'
import { Testimonials } from '@/components/testimonials'
import { InstagramFeed } from '@/components/instagram-feed'
import { FAQ } from '@/components/faq'
import { LocationContact } from '@/components/location-contact'
import { CTASection } from '@/components/cta-section'
import { Footer } from '@/components/footer'
import { LeadTriageModal } from '@/components/lead-triage-modal'
import { PrivacyModal } from '@/components/privacy-modal'
import { CookieBanner } from '@/components/cookie-banner'
import { FloatingWhatsApp } from '@/components/floating-whatsapp'
import { SmoothScroll } from '@/components/smooth-scroll'
import { ScrollRevealProvider } from '@/components/scroll-reveal-provider'

export default function Home() {
  const [triagemOpen, setTriagemOpen] = useState(false)
  const [privacyOpen, setPrivacyOpen] = useState(false)

  const handleOpenTriagem = (origin: string) => {
    // Optional analytics push
    if (typeof window !== 'undefined' && (window as unknown as { dataLayer?: unknown[] }).dataLayer) {
      (window as unknown as { dataLayer: unknown[] }).dataLayer.push({
        event: 'triagem_modal_open',
        origin,
        timestamp: new Date().toISOString(),
      })
    }
    setTriagemOpen(true)
  }

  return (
    <>
      <SmoothScroll />
      <ScrollRevealProvider />

      <Header onOpenTriagem={handleOpenTriagem} />

      <main id="inicio" className="flex flex-col w-full overflow-x-clip">
        <Hero onOpenTriagem={handleOpenTriagem} />
        <About />
        <Founders />
        <PracticeAreas onOpenTriagem={handleOpenTriagem} />
        <Agribusiness onOpenTriagem={handleOpenTriagem} />
        <BusinessDebt onOpenTriagem={handleOpenTriagem} />
        <Methodology />
        <StructureGallery />
        <Metrics />
        <Testimonials />
        <InstagramFeed />
        <FAQ onOpenTriagem={handleOpenTriagem} />
        <LocationContact onOpenTriagem={handleOpenTriagem} />
        <CTASection onOpenTriagem={handleOpenTriagem} />
      </main>

      <Footer
        onOpenTriagem={handleOpenTriagem}
        onOpenPrivacy={() => setPrivacyOpen(true)}
      />

      <FloatingWhatsApp onOpenTriagem={handleOpenTriagem} />

      <LeadTriageModal
        isOpen={triagemOpen}
        onClose={() => setTriagemOpen(false)}
      />

      <PrivacyModal
        isOpen={privacyOpen}
        onClose={() => setPrivacyOpen(false)}
      />

      <CookieBanner onOpenPrivacy={() => setPrivacyOpen(true)} />
    </>
  )
}
