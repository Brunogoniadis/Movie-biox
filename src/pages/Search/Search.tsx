import { useEffect, useState } from "react";
import { MovieSearch } from "../../components/MovieSearch/MovieSearch"
import { SearchWrapper } from "./styles"
import { getMoviesSearch, MovieData } from "../../services/getMoviesSearch";
import { useSearchParams } from "react-router-dom";


export const Search = () => {


  const [searchParams] = useSearchParams()

  const query: string | null = searchParams.get('q')


  const [movies, setMovies] = useState<MovieData[]>([]);

  useEffect(() => {
    const fetchAndDisplayMovies = async () => {
      const movies = await getMoviesSearch(query);
      setMovies(movies);


    };
    fetchAndDisplayMovies();
  }, [query]);


  console.log('movies', movies)

  return (
    <SearchWrapper>
      <h3> Resultados para "House" </h3>
      <div className="mainGrid">
        {movies.map((movie, index) => (
          <MovieSearch
            key={index}
            id={movie.id}
            backdrop_path={movie.backdrop_path || undefined}
            poster_path={movie.poster_path || undefined}
            title={movie.title}
            vote_average={movie.vote_average}
          />
        ))}
      </div>
    </SearchWrapper>
  )
}
