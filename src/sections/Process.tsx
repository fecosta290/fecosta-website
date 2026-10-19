import { SectionHeading } from '../components/ui/SectionHeading'

const steps = [
  ['01', 'Entendimento da necessidade', 'Uma conversa para compreender o cenário, o objetivo e as prioridades.'],
  ['02', 'Planejamento da solução', 'Definição do escopo, da abordagem técnica e dos próximos passos.'],
  ['03', 'Desenvolvimento e validação', 'Construção em etapas, com acompanhamento e validações ao longo do processo.'],
  ['04', 'Entrega e suporte', 'Publicação orientada, documentação e continuidade conforme a necessidade.'],
]

export function Process() {
  return (
    <section className="section process-section" aria-labelledby="process-title">
      <div className="shell">
        <SectionHeading eyebrow="Processo" title="Um caminho claro, do primeiro contato à entrega." align="center" />
        <ol className="process-list">
          {steps.map(([number, title, description]) => (
            <li key={number}>
              <span className="step-number">{number}</span>
              <div><h3>{title}</h3><p>{description}</p></div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
