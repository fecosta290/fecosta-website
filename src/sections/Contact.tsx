import { ArrowUpRight, MessageCircle } from 'lucide-react'
import { getWhatsAppUrl, siteConfig } from '../config/site'

export function Contact() {
  const configured = Boolean(siteConfig.whatsapp)
  return (
    <section id="contato" className="contact-section" aria-labelledby="contact-title">
      <div className="shell contact-card">
        <div className="contact-mark" aria-hidden="true"><MessageCircle /></div>
        <p className="eyebrow"><span>/</span> Vamos conversar</p>
        <h2 id="contact-title">Seu próximo projeto pode começar <em>aqui.</em></h2>
        <p>Conte o que seu negócio precisa e vamos conversar sobre a solução ideal.</p>
        <a className="button button--dark" href={getWhatsAppUrl()}>
          Conversar pelo WhatsApp <ArrowUpRight size={18} aria-hidden="true" />
        </a>
        {!configured && <p className="contact-config">O número de WhatsApp ainda precisa ser configurado em <code>src/config/site.ts</code>.</p>}
      </div>
    </section>
  )
}
