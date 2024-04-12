import { FC } from 'react'

import { MovieData } from '../../services/getMovieByPopularity'

interface CarouselProps {
  movies: MovieData[]
}

declare const Carousel: FC<CarouselProps>

export default Carousel
