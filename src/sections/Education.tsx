import { SectionTitle } from '../components/common/SectionTitle'
import { education } from '../data/education'

export function Education() {
  return (
    <section className="section container" id="education">
      <SectionTitle eyebrow="05 — Education" title="Academic foundation." />
      <div className="education-grid">
        {education.map((item) => (
          <article className="education-card" key={item.institution}>
            <h3>{item.degree}</h3>
            <p>{item.institution}</p>
            {item.dates && <p>{item.dates}</p>}
          </article>
        ))}
      </div>
    </section>
  )
}
