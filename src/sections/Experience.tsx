import { SectionTitle } from '../components/common/SectionTitle'
import { TechBadge } from '../components/common/TechBadge'
import { experiences } from '../data/experience'

export function Experience() {
  return (
    <section className="section section--surface" id="experience">
      <div className="container">
        <SectionTitle
          eyebrow="04 / Experience"
          title="Professional experience."
        />
        <div className="timeline">
          {experiences.map((experience) => (
            <article className="timeline__item" key={experience.role}>
              <div className="timeline__marker" aria-hidden="true" />
              <div className="timeline__content">
                <p className="eyebrow">{experience.company ?? 'Company · TODO'}</p>
                <h3>{experience.role}</h3>
                {experience.dates && <p>{experience.dates}</p>}
                <p>{experience.summary}</p>
                <h4>Responsibilities</h4>
                <ul>
                  {experience.responsibilities.map((responsibility) => (
                    <li key={responsibility}>{responsibility}</li>
                  ))}
                </ul>
                <div className="badge-list">
                  {experience.technologies.map((technology) => (
                    <TechBadge key={technology}>{technology}</TechBadge>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
