import { ExternalLink } from '../components/common/ExternalLink'
import { siteConfig } from '../data/site'

export function Hero() {
  return (
    <section className="hero container" aria-labelledby="hero-title">
      <div className="hero__content">
        <p className="hero__greeting">Hi, I&rsquo;m {siteConfig.name}.</p>
        <h1 id="hero-title">I build reliable software systems.</h1>
        <p className="hero__intro">{siteConfig.introduction}</p>
        <div className="hero__actions">
          <a className="text-link" href="#projects">
            Explore my work <span aria-hidden="true">↓</span>
          </a>
          <ExternalLink
            className="text-link"
            href="https://github.com/rafaelSanchez4330"
          >
            GitHub <span aria-hidden="true">↗</span>
          </ExternalLink>
        </div>
      </div>
      <p className="hero__focus">{siteConfig.focus}</p>
    </section>
  )
}
