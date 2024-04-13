import React, { useEffect, useState } from 'react';
import { CarouselWrapper, CustomSlider, Item } from './styles';

interface Movie {
  id: number;
  poster_path: string;
  title: string;
}

interface CarouselProps {
  movies: Movie[];
}

const Carousel = (props: CarouselProps) => {
  const { movies } = props;




  const settings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: false,
  };


  return (
      <CustomSlider {...settings}>
        {movies.map((movie) => (
          <Item key={movie.id}>
            <img
              referrerPolicy="no-referrer"
              className="image"
              src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt={movie.title}
            />
          </Item>
        ))}
      </CustomSlider>
  );
};

export default Carousel;
