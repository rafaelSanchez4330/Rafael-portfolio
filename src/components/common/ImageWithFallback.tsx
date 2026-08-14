import { useState } from 'react'

interface ImageWithFallbackProps {
  src?: string
  alt: string
  className?: string
}

export function ImageWithFallback({
  src,
  alt,
  className = '',
}: ImageWithFallbackProps) {
  const [failed, setFailed] = useState(false)

  if (!src || failed) {
    return (
      <div
        className={`image-placeholder ${className}`}
        role="img"
        aria-label={`${alt} — image coming soon`}
      >
        <span>Image coming soon</span>
      </div>
    )
  }

  return (
    <img
      className={className}
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
    />
  )
}
