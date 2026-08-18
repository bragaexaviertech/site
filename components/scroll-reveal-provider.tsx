'use client'

import { useEffect } from 'react'

export function ScrollRevealProvider() {
  useEffect(() => {
    // Se o usuário prefere movimento reduzido, revela tudo instantaneamente
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      document.querySelectorAll('.reveal-on-scroll').forEach((el) => {
        el.classList.add('is-revealed')
      })
      return
    }

    const initObserver = () => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-revealed')
            } else {
              // Só remove a classe quando o elemento de fato saiu do campo de visão,
              // garantindo que ele re-execute a animação suave ao voltar
              const rect = entry.boundingClientRect
              if (rect.top >= window.innerHeight || rect.bottom <= 0) {
                entry.target.classList.remove('is-revealed')
              }
            }
          })
        },
        {
          root: null,
          rootMargin: '0px 0px -40px 0px', // Ativa suavemente ao entrar 40px no viewport
          threshold: [0, 0.08],
        }
      )

      const observeElements = () => {
        const elements = document.querySelectorAll('.reveal-on-scroll')
        elements.forEach((el) => observer.observe(el))
      }

      observeElements()
      const timer = setTimeout(observeElements, 400)

      return () => {
        clearTimeout(timer)
        observer.disconnect()
      }
    }

    let cleanup: (() => void) | undefined

    if (typeof window !== 'undefined' && window.__BX_PRELOADER_DONE__) {
      cleanup = initObserver()
    } else {
      const handler = () => {
        cleanup = initObserver()
      }
      window.addEventListener('bx:preloader-done', handler, { once: true })
      return () => {
        window.removeEventListener('bx:preloader-done', handler)
        cleanup?.()
      }
    }

    return () => {
      cleanup?.()
    }
  }, [])

  return null
}

