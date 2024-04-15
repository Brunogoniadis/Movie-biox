import { useEffect, useState } from 'react';
import { CustomSlider, Item } from './styles';
import { NoteCalc } from '../NoteCalc/NoteCalc';
import { Link } from 'react-router-dom';

interface Data {
  adult?: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  name?: string;
  id: number;
  original_language: string;
  original_title?: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date?: string;
  runtime?: string;
  title?: string;
  video?: boolean;
  vote_average: number;
  vote_count: number;
}

interface CarouselProps {
  data: Data[];
  typeOfStyle?: string;
  typeOfMedia?: string;
  onLastItemReached?: () => void | undefined; 
}

const Carousel = (props: CarouselProps) => {
  const { data: movies, typeOfStyle, typeOfMedia, onLastItemReached } = props;
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  let height = '310px';
  let width = 'auto';
  let borderRadius = '5%';
  let heightImage = '310px';
  let caroselItems = 5;
  let backgroundCard: string = 'poster_path';
  let arrowContainerHeight = '130px';

  if (typeOfStyle === 'min') {
    height = '140px';
    width = '250px';
    borderRadius = '10px';
    heightImage = 'auto';
    caroselItems = 4;
    arrowContainerHeight = '140px';
    backgroundCard = 'backdrop_path';
  }

  const settings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 320,
    slidesToShow: caroselItems,
    slidesToScroll: 1,
    autoplay: false,
    cssEase: 'ease-in-out',
    responsive: [
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
    afterChange: (index: number) => {
      setCurrentSlide(index + caroselItems);
    },
  };
  console.log('current', currentSlide, movies.length)

  useEffect(() => {
    if (currentSlide === movies.length && onLastItemReached && movies.length > 0) {
      const timeoutId = setTimeout(() => {
        onLastItemReached();
      }, 1000); 
      return () => clearTimeout(timeoutId); 
    }
  }, [currentSlide, movies.length, onLastItemReached]);

  return (
    <CustomSlider
      {...settings}
      height={height}
      width={width}
      arrowContainerHeight={arrowContainerHeight}
    >
      {movies.map((movie, index) => (
        <Link
          key={index}
          to={typeOfMedia === 'movie' ? `/movie/${movie.id}` : `/tvShow/${movie.id}`}
        >
          <Item
            height={height}
            width={width}
            heightImage={heightImage}
            borderRadius={borderRadius}
          >
            <img
              referrerPolicy="no-referrer"
              className="image"
              src={`https://image.tmdb.org/t/p/original${movie[backgroundCard as keyof Data]}`}
              alt={movie.title}
            />
            <div className="textContainer">
              <p className="pTitle">{movie.title || movie.name}</p>
              <p className="pSub">id:{movie.id}</p>
              <div className="starContainer">
                <NoteCalc typeOfStyle="min" noteAverage={movie?.vote_average} />
              </div>
            </div>
          </Item>
        </Link>
      ))}
    </CustomSlider>
  );
};

export default Carousel;
