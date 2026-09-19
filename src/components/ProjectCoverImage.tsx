import { useState } from 'react'
import { RNB_PLACEHOLDER_IMAGE } from '../config/projects'

type ProjectCoverImageProps = {
  src: string
  alt: string
  className?: string
}

export default function ProjectCoverImage({ src, alt, className }: ProjectCoverImageProps) {
  const [currentSrc, setCurrentSrc] = useState(src)

  return (
    <img
      src={currentSrc}
      alt={alt}
      loading="lazy"
      className={className}
      onError={() => {
        if (currentSrc !== RNB_PLACEHOLDER_IMAGE) {
          setCurrentSrc(RNB_PLACEHOLDER_IMAGE)
        }
      }}
    />
  )
}
