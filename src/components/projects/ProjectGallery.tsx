import type { GalleryImage } from '../../types'
import { ImageWithFallback } from '../common/ImageWithFallback'

interface ProjectGalleryProps {
  images: GalleryImage[]
}

export function ProjectGallery({ images }: ProjectGalleryProps) {
  return (
    <div className="gallery">
      {images.map((image) => (
        <figure className="gallery__item" key={image.src}>
          <ImageWithFallback
            src={image.src}
            alt={image.alt}
            className="gallery__image"
          />
          <figcaption>{image.alt}</figcaption>
        </figure>
      ))}
    </div>
  )
}
