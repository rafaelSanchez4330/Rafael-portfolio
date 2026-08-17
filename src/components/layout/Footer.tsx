import { ExternalLink } from '../common/ExternalLink'
import { socialLinks } from '../../data/site'

export function Footer() {
  const publicLinks = socialLinks.filter(
    (link) => !link.placeholder && ['GitHub', 'LinkedIn'].includes(link.label),
  )

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div>
          <strong>Rafael Sánchez</strong>
          <p>© {new Date().getFullYear()} Built with care.</p>
        </div>
        <div className="footer__links">
          {publicLinks.map((link) => (
            <ExternalLink key={link.label} href={link.href}>
              {link.label}
            </ExternalLink>
          ))}
        </div>
      </div>
    </footer>
  )
}
