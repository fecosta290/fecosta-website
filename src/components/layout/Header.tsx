import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { getWhatsAppUrl, navigation } from '../../config/site'
import { Logo } from '../ui/Logo'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const closeOnEscape = (event: KeyboardEvent) => event.key === 'Escape' && setIsOpen(false)
    window.addEventListener('keydown', closeOnEscape)
    return () => window.removeEventListener('keydown', closeOnEscape)
  }, [])

  return (
    <header className="site-header">
      <div className="shell header-inner">
        <a href="#inicio" className="brand-link" aria-label="FE COSTA — início"><Logo /></a>
        <nav className="desktop-nav" aria-label="Navegação principal">
          {navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </nav>
        <a className="button button--small header-cta" href={getWhatsAppUrl()}>Solicitar orçamento</a>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
          onClick={() => setIsOpen((value) => !value)}
        >
          {isOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
        </button>
      </div>
      <div id="mobile-menu" className={`mobile-menu ${isOpen ? 'is-open' : ''}`}>
        <nav className="shell" aria-label="Navegação mobile">
          {navigation.map((item, index) => (
            <a key={item.href} href={item.href} onClick={() => setIsOpen(false)}>
              <span>0{index + 1}</span>{item.label}
            </a>
          ))}
          <a className="button" href={getWhatsAppUrl()} onClick={() => setIsOpen(false)}>Solicitar orçamento</a>
        </nav>
      </div>
    </header>
  )
}
