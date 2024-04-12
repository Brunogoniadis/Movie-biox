import React, { useEffect } from 'react'
import { CarouselWrapper, CustomSlider, Item } from './style'

const Carousel = ({ movies }) => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
  }

  useEffect(() => {
    console.log('movies', movies)
  }, [movies])

  return (
    <CarouselWrapper>
      <h2>Movies</h2>
      <CustomSlider {...settings}>
        {movies.map((movie) => (
          <Item key={movie.id}>
            <>
              <img
                referrerpolicy="no-referrer"
                className="image"
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                alt={movie.title}
              />
            </>
          </Item>
        ))}
      </CustomSlider>
    </CarouselWrapper>
  )
}
export default Carousel
