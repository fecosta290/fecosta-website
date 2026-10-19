import { ArrowDown, ArrowUpRight, Braces, Check, Code2, Cpu, Database } from 'lucide-react'
import { getWhatsAppUrl, siteConfig } from '../config/site'

export function Hero() {
  const whatsappConfigured = Boolean(siteConfig.whatsapp)

  return (
    <section id="inicio" className="hero section-dark" aria-labelledby="hero-title">
      <div className="hero-grid-bg" aria-hidden="true" />
      <div className="shell hero-grid">
        <div className="hero-copy reveal">
          <p className="status-pill"><span /> Desenvolvimento sob medida</p>
          <h1 id="hero-title">Tecnologia que transforma <em>ideias</em> em resultados.</h1>
          <p className="hero-subtitle">Desenvolvimento de sites, sistemas e soluções digitais sob medida para ajudar seu negócio a evoluir.</p>
          <div className="hero-actions">
            <a className="button" href={getWhatsAppUrl()}>
              Solicitar orçamento <ArrowUpRight size={18} aria-hidden="true" />
            </a>
            <a className="button button--ghost" href="#servicos">Conhecer serviços <ArrowDown size={17} aria-hidden="true" /></a>
          </div>
          {!whatsappConfigured && <p className="config-note">Contato por WhatsApp disponível após configurar o número.</p>}
        </div>
        <div className="hero-visual" aria-label="Representação visual de uma solução de software em desenvolvimento">
          <div className="code-window">
            <div className="window-bar"><i /><i /><i /><span>solucao.ts</span></div>
            <div className="code-body" aria-hidden="true">
              <p><span className="code-purple">const</span> <span className="code-green">seuNegocio</span> = {'{'}</p>
              <p className="indent">ideia: <span className="code-string">'transformar'</span>,</p>
              <p className="indent">estrategia: <span className="code-string">'sob medida'</span>,</p>
              <p className="indent">resultado: <span className="code-string">'evolução'</span></p>
              <p>{'}'}</p>
              <p className="code-muted">// do desafio à solução</p>
              <p><span className="code-purple">export default</span> <span className="code-green">build</span>(seuNegocio)</p>
            </div>
            <div className="build-status"><Check size={15} /> solução pronta para evoluir</div>
          </div>
          <div className="orbit orbit-one"><Code2 /></div>
          <div className="orbit orbit-two"><Database /></div>
          <div className="orbit orbit-three"><Cpu /></div>
          <Braces className="visual-braces" aria-hidden="true" />
        </div>
      </div>
      <div className="shell hero-meta" aria-label="Áreas de atuação">
        <span>01 — Sites</span><span>02 — Sistemas</span><span>03 — Automações</span>
      </div>
    </section>
  )
}
