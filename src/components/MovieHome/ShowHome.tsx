import { useEffect, useState, useRef } from "react";
import { MovieData } from "../../services/getMovieByPopularity";
import { ShowHomeWrapper } from "./styles";
import PlayButton from "../PlayButton/PlayButton";
import InfoButton from "../InfoButton/InfoButton";
import Carousel from "../Carousel/Carousel";
import { getMoviesCategory } from "../../services/getMoviesOfCategory";

interface IShowHomeProps {
    id: number;
}

export const ShowHome = (props: IShowHomeProps) => {

    const { id } = props

    const [movies, setMovies] = useState<MovieData[]>([]);
    const [movieSuggested, setMovieSuggested] = useState<number>(1);
    const [imageBackgroundList, setImageBackgroundList] = useState<HTMLImageElement[]>([]);
    const [carouselOpacity, setCarouselOpacity] = useState<number>(1);

    const movieWrapperRef = useRef<HTMLDivElement>(null);


    useEffect(() => {
        const fetchAndDisplayMovies = async () => {
            const movies = await getMoviesCategory(id);
            setMovies(movies);

            const imgElements = movies.map((movie) => {
                const img = new Image();
                img.src = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;
                return img;
            });
            setImageBackgroundList(imgElements);
        };
        fetchAndDisplayMovies();
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (movieWrapperRef.current) {
                const rect = movieWrapperRef.current.getBoundingClientRect();
                const centerY = window.innerHeight / 2;
                const isCentered = Math.abs(rect.top + rect.height / 2 - centerY) < 280;

                if (isCentered) {
                    setCarouselOpacity(1);
                } else {
                    setCarouselOpacity(0.3);
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [movieWrapperRef]);

    useEffect(() => {
        const interval = setInterval(() => {
            const randomValue = Math.floor(Math.random() * 11);
            setMovieSuggested(randomValue);
        }, 7000);

        return () => clearInterval(interval);
    }, []);

    return (
        <ShowHomeWrapper ref={movieWrapperRef} style={{ backgroundImage: `url(${imageBackgroundList[movieSuggested]?.currentSrc})` }}>
            <div className="maincontent">
                <div className="mainMovieWrapper" >
                    <h2>{movies[0]?.original_title}</h2>
                    <p>{movies[0]?.vote_average}</p>
                    <div className="ButtonsWrapper">
                        <PlayButton />
                        <InfoButton />
                    </div>
                </div>
                <div className="caroselWrapper" style={{ opacity: carouselOpacity, 
                    transition: "all 1.5s ease" }}>
                    <Carousel data={movies}
                    typeOfMedia="movie"
                    />
                </div>
                <div className="bottomblur" />
                <div className="leftblur" />
                <div className="overblur" />
            </div>
        </ShowHomeWrapper>
    );
};
