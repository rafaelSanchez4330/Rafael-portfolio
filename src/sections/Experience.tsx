import { SectionTitle } from '../components/common/SectionTitle'
import { experiences } from '../data/experience'

export function Experience() {
  return (
    <section className="section section--surface" id="experience">
      <div className="container">
        <SectionTitle
          eyebrow="04 — Experience"
          title="Where I have applied my skills."
        />
        <div className="timeline">
          {experiences.map((experience) => (
            <article className="timeline__item" key={experience.role}>
              <div className="timeline__meta">
                <p>{experience.dates ?? 'Professional experience'}</p>
              </div>
              <div className="timeline__content">
                {experience.company && <p className="eyebrow">{experience.company}</p>}
                <h3>{experience.role}</h3>
                <p>{experience.summary}</p>
                <ul>
                  {experience.responsibilities.map((responsibility) => (
                    <li key={responsibility}>{responsibility}</li>
                  ))}
                </ul>
                <p className="timeline__technologies">
                  {experience.technologies.join(' · ')}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
