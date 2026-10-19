import { ArrowUpRight, Instagram, Linkedin, Mail } from 'lucide-react'
import { navigation, siteConfig } from '../../config/site'
import { Logo } from '../ui/Logo'

const socials = [
  { label: 'Instagram', href: siteConfig.instagram, icon: Instagram },
  { label: 'LinkedIn', href: siteConfig.linkedin, icon: Linkedin },
  { label: 'E-mail', href: siteConfig.email ? `mailto:${siteConfig.email}` : '', icon: Mail },
]

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-brand">
          <a href="#inicio" aria-label="FE COSTA — voltar ao início"><Logo /></a>
          <p>Software pensado para negócios que querem evoluir com clareza, qualidade e propósito.</p>
        </div>
        <div>
          <p className="footer-title">Navegação</p>
          <nav className="footer-links" aria-label="Navegação do rodapé">
            {navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
          </nav>
        </div>
        <div>
          <p className="footer-title">Conecte-se</p>
          <div className="footer-links">
            {socials.map(({ label, href, icon: Icon }) => href ? (
              <a key={label} href={href} target="_blank" rel="noreferrer"><Icon size={16} />{label}<ArrowUpRight size={14} /></a>
            ) : (
              <span key={label} aria-label={`${label} ainda não configurado`}><Icon size={16} />{label}<small>em breve</small></span>
            ))}
          </div>
        </div>
      </div>
      <div className="shell footer-bottom">
        <p>© {new Date().getFullYear()} FE COSTA. Todos os direitos reservados.</p>
        <p>Engenharia de software com intenção.</p>
      </div>
    </footer>
  )
}
