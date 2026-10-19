import { CheckCircle2 } from 'lucide-react'
import { SectionHeading } from '../components/ui/SectionHeading'

const differentials = [
  ['Soluções personalizadas', 'Tecnologia desenhada a partir do contexto e dos objetivos de cada negócio.'],
  ['Comunicação direta', 'Decisões, progresso e próximos passos apresentados com clareza.'],
  ['Qualidade técnica', 'Código organizado, legível e preparado para manutenção.'],
  ['Design responsivo', 'Experiência consistente em celulares, tablets e computadores.'],
  ['Possibilidade de evolução', 'Bases técnicas que permitem ampliar a solução quando fizer sentido.'],
  ['Alinhamento com o negócio', 'Desenvolvimento guiado pela necessidade, não pela tecnologia da moda.'],
]

export function Differentials() {
  return (
    <section className="section section-dark diagonal-section" aria-labelledby="differentials-title">
      <div className="shell split-heading">
        <SectionHeading eyebrow="Como trabalhamos" title="Tecnologia com critério. Parceria com transparência." />
        <p>O desenvolvimento é conduzido com foco no que gera valor: entender o problema, simplificar decisões e construir uma solução confiável.</p>
      </div>
      <div className="shell differential-grid">
        {differentials.map(([title, description]) => (
          <article key={title}>
            <CheckCircle2 aria-hidden="true" />
            <div><h3>{title}</h3><p>{description}</p></div>
          </article>
        ))}
      </div>
    </section>
  )
}
