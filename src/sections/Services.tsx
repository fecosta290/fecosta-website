import { ArrowUpRight, Blocks, Globe2, Workflow } from 'lucide-react'
import { SectionHeading } from '../components/ui/SectionHeading'

const services = [
  { number: '01', icon: Globe2, title: 'Sites e Landing Pages', description: 'Páginas profissionais, responsivas e orientadas à presença digital e conversão.' },
  { number: '02', icon: Blocks, title: 'Sistemas Web', description: 'Soluções personalizadas para organizar processos e melhorar a operação de empresas.' },
  { number: '03', icon: Workflow, title: 'Automações e Integrações', description: 'Tecnologia para reduzir tarefas repetitivas e integrar ferramentas e informações.' },
]

export function Services() {
  return (
    <section id="servicos" className="section section-light" aria-labelledby="services-title">
      <div className="shell">
        <SectionHeading eyebrow="O que desenvolvemos" title="Soluções digitais que trabalham a favor do seu negócio." description="Do primeiro contato à entrega, cada decisão técnica parte de uma necessidade real." />
        <div className="service-grid">
          {services.map(({ number, icon: Icon, title, description }) => (
            <article className="service-card" key={title}>
              <div className="card-top"><span>{number}</span><Icon aria-hidden="true" /></div>
              <div><h3>{title}</h3><p>{description}</p></div>
              <a href="#contato" aria-label={`Conversar sobre ${title}`}>Tenho interesse <ArrowUpRight size={17} aria-hidden="true" /></a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
