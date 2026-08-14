import { Link } from 'react-router-dom'
import type { Project } from '../../types'
import { ExternalLink } from '../common/ExternalLink'
import { ImageWithFallback } from '../common/ImageWithFallback'
import { TechBadge } from '../common/TechBadge'

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="project-card">
      <ImageWithFallback
        src={project.image}
        alt={`${project.title} preview`}
        className="project-card__image"
      />
      <div className="project-card__content">
        <div className="project-card__meta">
          <span>{project.category}</span>
          {project.status === 'in-development' && (
            <span className="status status--development">In Development</span>
          )}
        </div>
        <h3>{project.title}</h3>
        <p>{project.shortDescription}</p>
        <div className="badge-list" aria-label="Technologies">
          {project.technologies.slice(0, 5).map((technology) => (
            <TechBadge key={technology}>{technology}</TechBadge>
          ))}
        </div>
        <div className="project-card__actions">
          <Link className="button button--primary" to={`/projects/${project.slug}`}>
            Case Study
          </Link>
          {project.github && (
            <ExternalLink className="button button--secondary" href={project.github}>
              GitHub ↗
            </ExternalLink>
          )}
        </div>
      </div>
    </article>
  )
}
