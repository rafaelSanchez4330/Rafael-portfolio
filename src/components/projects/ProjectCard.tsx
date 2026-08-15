import { Link } from 'react-router-dom'
import type { Project } from '../../types'
import { ExternalLink } from '../common/ExternalLink'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      <div className="project-card__visual" aria-hidden="true">
        <span className="project-card__visual-label">Connected device / 01</span>
        <div className="power-strip">
          <span /><span /><span />
        </div>
        <span className="project-card__visual-caption">Pico W · Local network · GPIO</span>
      </div>
      <div className="project-card__content">
        <div className="project-card__meta">
          <span>{project.category}</span>
          <span>Featured project</span>
        </div>
        <h3>{project.title}</h3>
        <p>{project.shortDescription}</p>
        <p className="project-card__technologies">
          {project.technologies.slice(0, 5).join(' · ')}
        </p>
        <div className="project-card__actions">
          <Link className="text-link" to={`/projects/${project.slug}`}>
            Read case study <span aria-hidden="true">→</span>
          </Link>
          {project.github && (
            <ExternalLink className="text-link" href={project.github}>
              GitHub <span aria-hidden="true">↗</span>
            </ExternalLink>
          )}
        </div>
      </div>
    </article>
  )
}
