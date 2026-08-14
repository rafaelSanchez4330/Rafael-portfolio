import { SectionTitle } from '../components/common/SectionTitle'
import { ProjectCard } from '../components/projects/ProjectCard'
import { projects } from '../data/projects'

export function Projects() {
  return (
    <section className="section container" id="projects">
      <SectionTitle
        eyebrow="03 / Projects"
        title="Selected engineering work."
        description="Case studies across backend development, infrastructure, IoT and computer vision."
      />
      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  )
}
