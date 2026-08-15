import { SectionTitle } from '../components/common/SectionTitle'
import { ProjectCard } from '../components/projects/ProjectCard'
import { projects } from '../data/projects'

export function Projects() {
  return (
    <section className="section container" id="projects">
      <SectionTitle
        eyebrow="03 — Selected work"
        title="One project, explored in depth."
        description="A connected-device project spanning embedded software, networking and physical hardware."
      />
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  )
}
