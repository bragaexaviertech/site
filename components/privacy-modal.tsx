'use client'

import React from 'react'
import { X } from 'lucide-react'

interface PrivacyModalProps {
  isOpen: boolean
  onClose: () => void
}

export function PrivacyModal({ isOpen, onClose }: PrivacyModalProps) {
  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-[100] bg-ink/90 backdrop-blur-md flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Política de Privacidade e LGPD"
    >
      <div className="w-full max-w-2xl bg-[#111210] border border-white/15 p-5 sm:p-7 shadow-2xl relative max-h-[85vh] flex flex-col">
        <div className="flex items-center justify-between pb-3.5 border-b hairline">
          <div>
            <span className="text-[.58rem] tracking-[.25em] uppercase text-gold font-normal">
              Conformidade Legal
            </span>
            <h3 className="text-base sm:text-lg font-light text-ivory">
              Política de Privacidade &bull; LGPD
            </h3>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-muted hover:text-ivory cursor-pointer"
            aria-label="Fechar"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="overflow-y-auto pr-2 py-4 text-xs text-muted leading-relaxed flex flex-col gap-3 font-light">
          <p>
            A <strong className="text-ivory font-normal">Braga &amp; Xavier Advogados</strong> respeita a
            privacidade de seus usuários e clientes, em estrita conformidade com a Lei Geral de
            Proteção de Dados (Lei nº 13.709/2018 – LGPD) e com o Provimento nº 205/2021 do Conselho
            Federal da OAB.
          </p>
          <h4 className="text-xs text-champagne font-normal uppercase tracking-wider">
            1. Coleta e Uso de Dados
          </h4>
          <p>
            As informações fornecidas voluntariamente através de formulários, WhatsApp ou e-mail
            (como nome, telefone e descrição do caso) são utilizadas exclusivamente para fins de
            triagem, contato preliminar e prestação de serviços advocatícios solicitados.
          </p>
          <h4 className="text-xs text-champagne font-normal uppercase tracking-wider">
            2. Sigilo Profissional da Advocacia
          </h4>
          <p>
            Todo e qualquer dado ou documento compartilhado está resguardado pelo sigilo profissional
            inerente ao exercício da advocacia (Lei Federal nº 8.906/94 – Estatuto da OAB), não sendo
            comercializado, cedido ou compartilhado com terceiros sem autorização prévia.
          </p>
          <h4 className="text-xs text-champagne font-normal uppercase tracking-wider">
            3. Cookies e Tecnologias de Navegação
          </h4>
          <p>
            Utilizamos cookies técnicos mínimos e ferramentas de análise anônima para aprimorar a
            experiência de navegação e medir a eficácia de nossas comunicações institucionais. O
            usuário pode desabilitar cookies em seu navegador a qualquer momento.
          </p>
          <h4 className="text-xs text-champagne font-normal uppercase tracking-wider">
            4. Direitos do Titular
          </h4>
          <p>
            O titular dos dados pode solicitar confirmação da existência de tratamento, acesso,
            correção ou eliminação de seus dados pessoais através do canal oficial:{' '}
            <a href="mailto:contato@bragaexavier.adv.br" className="text-gold link-underline">
              contato@bragaexavier.adv.br
            </a>
            .
          </p>
        </div>

        <div className="pt-3.5 border-t hairline flex justify-end">
          <button onClick={onClose} className="btn-ghost !py-1.5 !px-3.5 !text-xs">
            <span>Entendido</span>
          </button>
        </div>
      </div>
    </div>
  )
}
