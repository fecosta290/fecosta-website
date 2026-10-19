import { fireEvent, render, screen } from '@testing-library/react'
import App from './App'

describe('FE COSTA landing page', () => {
  it('renders the core commercial content', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1, name: /tecnologia que transforma/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: 'Sites e Landing Pages' })).toBeInTheDocument()
    expect(screen.getByRole('heading', { name: /seu próximo projeto/i })).toBeInTheDocument()
  })

  it('opens and closes the mobile navigation', () => {
    render(<App />)
    const button = screen.getByRole('button', { name: 'Abrir menu' })
    fireEvent.click(button)
    expect(button).toHaveAttribute('aria-expanded', 'true')
    fireEvent.click(screen.getByRole('button', { name: 'Fechar menu' }))
    expect(button).toHaveAttribute('aria-expanded', 'false')
  })
})
