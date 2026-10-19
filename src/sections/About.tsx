import { Braces, CodeXml, Database, Network, ServerCog, Workflow } from 'lucide-react'
import { SectionHeading } from '../components/ui/SectionHeading'
import { siteConfig } from '../config/site'

const skills = [
  ['Back-end', ServerCog], ['C# e .NET', Braces], ['APIs', Network], ['Sistemas web', CodeXml], ['Bancos de dados', Database], ['Arquitetura e integrações', Workflow],
] as const

export function About() {
  return (
    <section id="sobre" className="section section-dark about-section" aria-labelledby="about-title">
      <div className="shell about-grid">
        <div className="portrait-frame">
          <img
            src={`${import.meta.env.BASE_URL}images/andre-felipe.jpg`}
            alt="André Felipe da Costa em seu espaço de trabalho"
            width="1254"
            height="1254"
            loading="lazy"
          />
          <span>André Felipe da Costa</span>
          <i className="corner corner-tl" /><i className="corner corner-br" />
        </div>
        <div className="about-copy">
          <SectionHeading eyebrow="Sobre" title={`${siteConfig.owner} — ${siteConfig.role}.`} />
          <p>Desenvolvimento de soluções digitais com atenção ao contexto de cada projeto, combinando organização técnica, comunicação clara e visão de longo prazo.</p>
          <p>A atuação contempla diferentes camadas de uma aplicação, da estrutura de dados e regras de negócio à integração entre sistemas.</p>
          <div className="skill-grid">
            {skills.map(([label, Icon]) => <span key={label}><Icon size={17} aria-hidden="true" />{label}</span>)}
          </div>
        </div>
      </div>
    </section>
  )
}
