import Img from 'next/image'

import { randomNumber, rgbDataURL } from '@/elements/utils'

type TImage = {
  src: string
  alt: string
  w?: number
  h?: number
  size?: 'lg' | 'md' | 'sm'
  className?: string
}

const sizes = {
  lg: 500,
  md: 250,
  sm: 25,
}

export const Image = (props: TImage) => {
  const { src, alt, w, h, size = 'md', className } = props

  //NOTE: You can provide either width with no height or both
  //NOTE: If you provide both, then we use Both, if you provide only width, then we use width for both
  //NOTE: If you provide nothing, then we use the default size
  const width = w || h || sizes[size]
  const height = h || w || sizes[size]

  const r = randomNumber({ min: 200, max: 220 })
  const g = randomNumber({ min: 200, max: 240 })
  const b = randomNumber({ min: 200, max: 255 })

  return (
    <Img
      placeholder="blur"
      blurDataURL={rgbDataURL(r, g, b)}
      {...{ src, alt, className, width, height }}
      suppressHydrationWarning // ToDo: This should be removed by adding deterministic random numbers eg. using a seed
    />
  )
}
