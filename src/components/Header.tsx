import { useEffect, useRef, useState } from 'react'
import logo from '../assets/logo.jpg'

const LINKS = [
  ['Services', '/#services'], ['Global Reach', '/#global'], ['About', '/#about'],
  ['Founder', '/founders'], ['Insights', '/#insights'], ['Contact', '/#contact'],
]

export default function Header() {
  const isFounders = window.location.pathname.replace(/\/$/, '') === '/founders'
  const [scrolled, setScrolled] = useState(() => isFounders || window.scrollY > 40)
  const [menuOpen, setMenuOpen] = useState(false)
  const menuButton = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    const update = () => setScrolled(isFounders || window.scrollY > 40)
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [isFounders])

  useEffect(() => {
    if (!menuOpen) return
    const close = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setMenuOpen(false)
        menuButton.current?.focus()
      }
    }
    document.addEventListener('keydown', close)
    return () => document.removeEventListener('keydown', close)
  }, [menuOpen])

  return (
    <header className={scrolled || menuOpen ? 's' : ''}>
      <div className="w">
        <a href="/#top" aria-label="Paulson Global home"><img src={logo} alt="Paulson Global" /></a>
        <button ref={menuButton} className="nav-toggle" type="button" aria-expanded={menuOpen} aria-controls="primary-navigation" onClick={() => setMenuOpen(value => !value)}>
          {menuOpen ? 'Close menu' : 'Menu'} <span aria-hidden="true">{menuOpen ? '×' : '☰'}</span>
        </button>
        <nav id="primary-navigation" className={menuOpen ? 'is-open' : ''} aria-label="Primary">
          {LINKS.map(([label, href]) => (
            <a className="ul" href={href} key={href} aria-current={isFounders && href === '/founders' ? 'page' : undefined} onClick={() => setMenuOpen(false)}>{label}</a>
          ))}
          <a className="btn" href="/#contact" onClick={() => setMenuOpen(false)}>Book a Free Consultation</a>
        </nav>
      </div>
    </header>
  )
}
