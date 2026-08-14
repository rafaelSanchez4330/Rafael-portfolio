import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ExternalLink } from '../common/ExternalLink'

const navigation = ['About', 'Skills', 'Projects', 'Experience', 'Contact']

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  const homeHref = (section: string) =>
    location.pathname === '/' ? `#${section}` : `/#${section}`

  return (
    <header className="navbar">
      <nav className="container navbar__inner" aria-label="Main navigation">
        <Link className="navbar__brand" to="/" onClick={() => setMenuOpen(false)}>
          Rafael Sánchez
        </Link>

        <button
          className="navbar__toggle"
          type="button"
          aria-expanded={menuOpen}
          aria-controls="main-menu"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>

        <div
          className={`navbar__menu ${menuOpen ? 'navbar__menu--open' : ''}`}
          id="main-menu"
        >
          {navigation.map((item) => (
            <a
              key={item}
              href={homeHref(item.toLowerCase())}
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <ExternalLink href="https://github.com/rafaelSanchez4330">
            GitHub ↗
          </ExternalLink>
        </div>
      </nav>
    </header>
  )
}
