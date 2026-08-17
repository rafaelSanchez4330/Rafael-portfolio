import { SectionTitle } from '../components/common/SectionTitle'
import { siteConfig } from '../data/site'

export function About() {
  return (
    <section className="section container" id="about">
      <SectionTitle eyebrow="01 — About" title="Thoughtful engineering, built on strong foundations." />
      <div className="about__content">
        {siteConfig.about.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </section>
  )
}
