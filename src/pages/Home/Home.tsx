import { useEffect, useState } from "react";
import { getMoviesByPopularity, MovieData } from "../../services/getMovieByPopularity"
import { HomeWrapper } from "./styles";
import PlayButton from "../../components/PlayButton/PlayButton";
import InfoButton from "../../components/InfoButton/InfoButton";
import Carousel from "../../components/Carousel/Carousel";


export const Home = () => {





    const [movies, setMovies] = useState<MovieData[]>([]);
    const [movieSuggested, setMovieSuggested] = useState<number>(1);


    useEffect(() => {
        const fetchAndDisplayMovies = async () => {
            const movies = await getMoviesByPopularity();
            setMovies(movies)
        };
        fetchAndDisplayMovies();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            const randomValue = Math.floor(Math.random() * 11);
            setMovieSuggested(randomValue);
        }, 4000);

        return () => clearInterval(interval);
    }, []);


    const backgroundImage = movies.length > 0 ? `
        url(https://image.tmdb.org/t/p/original${movies[movieSuggested].backdrop_path})` : "";

    useEffect(() => {
        console.log('movies', movies)
    }, [movies])

    return (
        <HomeWrapper style={{ backgroundImage }}>

            <div className="maincontent">


                <div className="mainMovieWrapper">
                    <h2>

                        <p>{movies[movieSuggested]?.original_title}</p>

                    </h2>
                    <p>
                        <p>{movies[movieSuggested]?.vote_average}</p>

                    </p>
                    <div className="ButtonsWrapper">

                        <PlayButton />
                        <InfoButton />
                    </div>
                </div>

                <Carousel movies={movies} />


                <div className="leftblur" />

                <div className="overblur" />
            </div>


        </HomeWrapper>
    )
}
