interface TechBadgeProps {
  children: string
}

export function TechBadge({ children }: TechBadgeProps) {
  return <span className="tech-badge">{children}</span>
}
