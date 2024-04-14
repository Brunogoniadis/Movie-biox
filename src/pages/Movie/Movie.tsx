import { useEffect, useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { MovieData, getMovieById } from '../../services/getMovieById';
import { MovieScreen } from './styles';
import { NoteCalc } from '../../components/NoteCalc/NoteCalc';


interface IuseParams {
  id: string | undefined;
  [key: string]: string | undefined;
}

export const Movie = () => {


  const { id } = useParams<IuseParams>();

  const [movie, setMovie] = useState<MovieData | null>(null);

  useEffect(() => {
    const fetchCategoryMovies = async () => {
      const movieService = await getMovieById(id);
      setMovie(movieService);
    };
    fetchCategoryMovies();
  }, []);

  console.log(movie)




  return <MovieScreen
    style={{
      backgroundImage: `url(https://image.tmdb.org/t/p/original${movie?.backdrop_path})`

    }}
  >
    <div className="mainMovieWrapper"   >
      <div className="moviedetails">
        <h2 className="movietitle">{movie?.title}</h2>
        <p className="moviedetail">{movie?.overview}</p>
        <p className="moviedetail">Release Date: {movie?.release_date}</p>
        <p className="moviedetail">Runtime: {movie?.runtime} minutes</p>
        <p className="moviedetail">Average Vote: {movie?.vote_average}</p>

        <NoteCalc noteAverage={movie?.vote_average} />
      </div>
    </div>
    <div className="bottomblur"></div>
    <div className="leftblur"></div>
    <div className="overblur"></div>
  </MovieScreen>
}
