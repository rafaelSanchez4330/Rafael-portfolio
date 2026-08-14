import { ExternalLink } from '../components/common/ExternalLink'
import { siteConfig } from '../data/site'

export function Hero() {
  return (
    <section className="hero container" aria-labelledby="hero-title">
      <div className="hero__content">
        <p className="eyebrow">{siteConfig.name}</p>
        <h1 id="hero-title">{siteConfig.role}</h1>
        <p className="hero__focus">{siteConfig.focus}</p>
        <p className="hero__intro">{siteConfig.introduction}</p>
        <div className="hero__actions">
          <a className="button button--primary" href="#projects">
            View Projects
          </a>
          <ExternalLink
            className="button button--secondary"
            href="https://github.com/rafaelSanchez4330"
          >
            GitHub ↗
          </ExternalLink>
          <a
            className="button button--secondary"
            href="/resume/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume ↗
          </a>
        </div>
      </div>
      <div className="hero__visual" aria-hidden="true">
        <div className="hero__system">
          <span>API</span>
          <span>DB</span>
          <span>SYS</span>
        </div>
      </div>
    </section>
  )
}
