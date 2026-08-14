import { ExternalLink } from '../components/common/ExternalLink'
import { siteConfig, socialLinks } from '../data/site'

export function Contact() {
  return (
    <section className="section contact container" id="contact">
      <p className="eyebrow">06 / Contact</p>
      <h2>{siteConfig.contactHeading}</h2>
      <p>{siteConfig.contactCopy}</p>
      <div className="contact__links">
        {socialLinks.map((link) =>
          link.placeholder ? (
            <span
              className="button button--secondary button--disabled"
              key={link.label}
              title={`Replace ${link.label} placeholder in src/data/site.ts`}
            >
              {link.label} · TODO
            </span>
          ) : (
            <ExternalLink
              className="button button--secondary"
              href={link.href}
              key={link.label}
            >
              {link.label} ↗
            </ExternalLink>
          ),
        )}
      </div>
    </section>
  )
}
