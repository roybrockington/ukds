"use client"

import Image from "next/image"
import { useState } from "react"

type ProductImageProps = {
  img: string
  alt: string
  width: number
  height: number
  className?: string
  priority?: boolean
}

const ProductImage = ({ img, alt, width, height, className = "", priority }: ProductImageProps) => {
  const [failed, setFailed] = useState(false)

  if (!img || failed) {
    // Placeholder sized to the 278x148 source image ratio
    return (
      <div
        role="img"
        aria-label={alt}
        className={`flex items-center justify-center rounded-xl bg-zinc-100 dark:bg-zinc-800 aspect-[278/148] ${className}`}
        style={{ width }}
      >
        <svg
          className="w-1/4 h-auto text-zinc-400 opacity-60"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <circle cx="9" cy="9" r="2" />
          <path d="m21 15-3.1-3.1a2 2 0 0 0-2.8 0L6 21" />
        </svg>
      </div>
    )
  }

  return (
    <Image
      src={`https://media.sound-service.eu/Artikelbilder/Shopsystem/278x148/${img}`}
      className={className}
      alt={alt}
      width={width}
      height={height}
      priority={priority}
      onError={() => setFailed(true)}
    />
  )
}

export default ProductImage
