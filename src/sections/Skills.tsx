import { SectionTitle } from '../components/common/SectionTitle'
import { TechBadge } from '../components/common/TechBadge'
import { skillCategories } from '../data/skills'

export function Skills() {
  return (
    <section className="section section--surface" id="skills">
      <div className="container">
        <SectionTitle
          eyebrow="02 / Skills"
          title="Technologies I work with."
          description="A practical toolkit for building backend services, interfaces and connected systems."
        />
        <div className="skills-grid">
          {skillCategories.map((group) => (
            <article className="skill-group" key={group.category}>
              <h3>{group.category}</h3>
              <div className="badge-list">
                {group.skills.map((skill) => (
                  <TechBadge key={skill}>{skill}</TechBadge>
                ))}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
