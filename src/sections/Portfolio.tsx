import { ArrowUpRight, FolderGit2, Github } from 'lucide-react'
import { SectionHeading } from '../components/ui/SectionHeading'
import { projects } from '../data/projects'

export function Portfolio() {
  return (
    <section id="projetos" className="section section-light" aria-labelledby="portfolio-title">
      <div className="shell">
        <SectionHeading eyebrow="Projetos" title="Trabalho que transforma contexto em produto." description="Este espaço receberá projetos reais e autorizados para divulgação." />
        {projects.length ? (
          <div className="project-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.name}>
                <img src={project.screenshot} alt={project.screenshotAlt} loading="lazy" />
                <div className="project-content">
                  <div className="tag-list">{project.technologies.map((technology) => <span key={technology}>{technology}</span>)}</div>
                  <h3>{project.name}</h3><p>{project.description}</p>
                  <div className="project-links">
                    {project.demoUrl && <a href={project.demoUrl} target="_blank" rel="noreferrer">Ver projeto <ArrowUpRight size={16} /></a>}
                    {project.repositoryUrl && <a href={project.repositoryUrl} target="_blank" rel="noreferrer"><Github size={16} /> Código</a>}
                  </div>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="empty-portfolio">
            <div className="empty-icon"><FolderGit2 aria-hidden="true" /></div>
            <div><p className="eyebrow">Portfólio em construção</p><h3>Novos projetos serão apresentados aqui.</h3><p>Cases serão publicados conforme estiverem concluídos e autorizados, com contexto, tecnologias e links relevantes.</p></div>
            <a className="text-link" href="#contato">Fale sobre seu projeto <ArrowUpRight size={17} /></a>
          </div>
        )}
      </div>
    </section>
  )
}
