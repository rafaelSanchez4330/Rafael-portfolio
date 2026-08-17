import { ExternalLink } from '../components/common/ExternalLink'
import { siteConfig, socialLinks } from '../data/site'

export function Contact() {
  return (
    <section className="section contact container" id="contact">
      <p className="eyebrow">06 — Contact</p>
      <h2>{siteConfig.contactHeading}</h2>
      <p>{siteConfig.contactCopy}</p>
      <div className="contact__links">
        {socialLinks
          .filter((link) => !link.placeholder)
          .map((link) => (
            <ExternalLink
              className="text-link"
              href={link.href}
              key={link.label}
            >
              {link.label} <span aria-hidden="true">↗</span>
            </ExternalLink>
          ))}
      </div>
    </section>
  )
}
