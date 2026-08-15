import { SectionTitle } from '../components/common/SectionTitle'
import { skillCategories } from '../data/skills'

export function Skills() {
  return (
    <section className="section section--surface" id="skills">
      <div className="container">
        <SectionTitle
          eyebrow="02 — Expertise"
          title="The tools behind the work."
          description="A focused toolkit for building dependable services, interfaces and connected systems."
        />
        <div className="skills-grid">
          {skillCategories.map((group) => (
            <article className="skill-group" key={group.category}>
              <h3>{group.category}</h3>
              <p>{group.skills.join(' · ')}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
