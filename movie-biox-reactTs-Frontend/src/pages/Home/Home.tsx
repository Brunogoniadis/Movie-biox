import { useEffect, useState } from "react";
import { getMoviesByPopularity, MovieData } from "../../services/getMovieByPopularity"
import { HomeWrapper } from "./styles";
import PlayButton from "../../components/PlayButton/PlayButton";
import InfoButton from "../../components/InfoButton/InfoButton";
import Carousel from "../../components/Carousel/Carousel";


export const Home = () => {





    const [movies, setMovies] = useState<MovieData[]>([]);


    useEffect(() => {
        const fetchAndDisplayMovies = async () => {
            const movies = await getMoviesByPopularity();
            setMovies(movies)
        };
        fetchAndDisplayMovies();
    }, []);

    const backgroundImage = movies.length > 0 ? `
        url(https://image.tmdb.org/t/p/original${movies[0].backdrop_path})` : "";

    useEffect(() => {
        console.log('movies', movies)
    }, [movies])

    return (
        <HomeWrapper style={{ backgroundImage }}>

            <div className="maincontent">


                <div className="mainMovieWrapper">
                    <h2>
                        {movies[0]?.original_title}
                    </h2>
                    <p>
                        {movies[0]?.vote_average}


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
