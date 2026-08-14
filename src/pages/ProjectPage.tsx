import { useEffect } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import { ExternalLink } from '../components/common/ExternalLink'
import { TechBadge } from '../components/common/TechBadge'
import { ArchitectureDiagram } from '../components/projects/ArchitectureDiagram'
import { ProjectGallery } from '../components/projects/ProjectGallery'
import { getProjectBySlug } from '../data/projects'
import type { FeatureStatus } from '../types'

const statusLabels: Record<FeatureStatus, string> = {
  completed: 'Completed',
  'in-development': 'In Development',
  planned: 'Planned',
}

export function ProjectPage() {
  const { slug = '' } = useParams()
  const project = getProjectBySlug(slug)

  useEffect(() => {
    if (project) {
      document.title = `${project.title} | Rafael Sánchez`
    }

    return () => {
      document.title = 'Rafael Sánchez | Software Engineer'
    }
  }, [project])

  if (!project) {
    return <Navigate to="/404" replace />
  }

  const isSmartPowerStrip = project.slug === 'smart-power-strip'

  return (
    <article className="case-study">
      <header className="case-study__hero container">
        <Link className="back-link" to="/#projects">
          ← Back to projects
        </Link>
        <p className="eyebrow">{project.category}</p>
        <h1>{project.title}</h1>
        <p className="case-study__lead">{project.shortDescription}</p>
        <div className="badge-list">
          {project.technologies.map((technology) => (
            <TechBadge key={technology}>{technology}</TechBadge>
          ))}
        </div>
        {project.github && (
          <ExternalLink className="button button--primary" href={project.github}>
            View repository ↗
          </ExternalLink>
        )}
      </header>

      <div className="case-study__body container">
        <section className="case-study__section">
          <p className="eyebrow">Overview</p>
          <h2>Project overview</h2>
          <p>{project.overview}</p>
        </section>

        {project.problem && (
          <section className="case-study__section">
            <p className="eyebrow">Problem</p>
            <h2>The problem</h2>
            <p>{project.problem}</p>
          </section>
        )}

        {project.solution && (
          <section className="case-study__section">
            <p className="eyebrow">Solution</p>
            <h2>The solution</h2>
            <p>{project.solution}</p>
          </section>
        )}

        {isSmartPowerStrip && (
          <section className="case-study__section">
            <p className="eyebrow">Architecture</p>
            <h2>System architecture</h2>
            <ArchitectureDiagram />
          </section>
        )}

        <section className="case-study__section">
          <p className="eyebrow">Technologies</p>
          <h2>Technical stack</h2>
          <div className="badge-list badge-list--large">
            {project.technologies.map((technology) => (
              <TechBadge key={technology}>{technology}</TechBadge>
            ))}
          </div>
        </section>

        {project.features && (
          <section className="case-study__section">
            <p className="eyebrow">Implementation</p>
            <h2>Implementation status</h2>
            <div className="feature-list">
              {project.features.map((feature) => (
                <div className="feature-list__item" key={feature.name}>
                  <span>{feature.name}</span>
                  <span className={`status status--${feature.status}`}>
                    {statusLabels[feature.status]}
                  </span>
                </div>
              ))}
            </div>
          </section>
        )}

        {project.challenges && (
          <section className="case-study__section">
            <p className="eyebrow">Challenges</p>
            <h2>Engineering challenges</h2>
            <div className="challenge-grid">
              {project.challenges.map((challenge) => (
                <article key={challenge.title}>
                  <h3>{challenge.title}</h3>
                  <p>{challenge.description}</p>
                </article>
              ))}
            </div>
          </section>
        )}

        {project.learnings && (
          <section className="case-study__section">
            <p className="eyebrow">What I Learned</p>
            <h2>Key learnings</h2>
            {project.learnings.map((learning) => (
              <p key={learning}>{learning}</p>
            ))}
          </section>
        )}

        {project.gallery && (
          <section className="case-study__section">
            <p className="eyebrow">Gallery</p>
            <h2>Project gallery</h2>
            <ProjectGallery images={project.gallery} />
          </section>
        )}
      </div>
    </article>
  )
}
