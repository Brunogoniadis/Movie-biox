import { CustomSlider, Item } from './styles';
import { NoteCalc } from '../NoteCalc/NoteCalc';

interface Movie {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  runtime?: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

interface CarouselProps {
  movies: Movie[];
  typeOfStyle?: string
}

const Carousel = (props: CarouselProps) => {
  const { movies, typeOfStyle } = props;


  let height = '310px';
  let width = 'auto';
  let borderRadius = '5%';
  let heightImage = '310px';
  let caroselItems = 5
  let backgroundCard: string = 'poster_path'
  let arrowContainerHeight = '130px'

  if (typeOfStyle === "min") {
    height = '140px';
    width = '250px';
    borderRadius = '10px';
    heightImage = 'auto';
    caroselItems = 4
    arrowContainerHeight = '140px'

    backgroundCard = 'backdrop_path'
  }

  const settings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: caroselItems,
    slidesToScroll: 1,
    autoplay: false,
  };




  return (
    <CustomSlider {...settings}
      height={height}
      width={width}
      arrowContainerHeight={arrowContainerHeight}
    >
      {movies.map((movie) => (
        <Item key={movie.id}
          height={height}
          width={width}
          heightImage={heightImage}
          borderRadius={borderRadius}
        >
          <img

            referrerPolicy="no-referrer"
            className="image"
            src={`https://image.tmdb.org/t/p/original${movie[backgroundCard as keyof Movie]}`}
            alt={movie.title}
          />
          <div className="textContainer">
            <p
              className="pTitle"
            >{movie.title}</p>
            <p
              className="pSub"
            >id:{movie.id}</p>

            <div className="starContainer">

              <NoteCalc
                typeOfStyle='min'
                noteAverage={movie?.vote_average} />

            </div>
          </div>
        </Item>
      ))}
    </CustomSlider>
  );
};

export default Carousel;
