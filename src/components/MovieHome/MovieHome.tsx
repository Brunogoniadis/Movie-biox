import React, { useEffect, useState, useRef } from "react";
import { getMoviesByPopularity, MovieData } from "../../services/getMovieByPopularity";
import { MovieWrapper } from "./styles";
import PlayButton from "../PlayButton/PlayButton";
import InfoButton from "../InfoButton/InfoButton";
import Carousel from "../Carousel/Carousel";
import { getCategories } from "../../services/getCategories";
import { getMoviesCategory } from "../../services/getMoviesOfCategory";




interface MovieHomeProps {
    id: number;
}




export const MovieHome = (props: MovieHomeProps) => {

    const { id } = props

    const [movies, setMovies] = useState<MovieData[]>([]);
    const [movieSuggested, setMovieSuggested] = useState<number>(1);
    const [imageBackgroundList, setImageBackgroundList] = useState<HTMLImageElement[]>([]);
    const [movieCategory, setMovieCategory] = useState<unknown[]>([]);
    const [carouselOpacity, setCarouselOpacity] = useState<number>(1);
    const [carouselUp, setCarouselUp] = useState<string>("");

    const movieWrapperRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const fetchCategoryMovies = async () => {
            const categories = await getCategories();
            setMovieCategory(categories);
        };
        fetchCategoryMovies();
    }, []);

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
                    setCarouselUp("10px")
                } else {
                    setCarouselOpacity(0.3);
                    setCarouselUp("0px")
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
        <MovieWrapper ref={movieWrapperRef} style={{ backgroundImage: `url(${imageBackgroundList[movieSuggested]?.currentSrc})` }}>
            <div className="maincontent">
                <div className="mainMovieWrapper" >
                    <h2>{movies[movieSuggested]?.original_title}</h2>
                    <p>{movies[movieSuggested]?.vote_average}</p>
                    <div className="ButtonsWrapper">
                        <PlayButton />
                        <InfoButton />
                    </div>
                </div>
                <div className="caroselWrapper" style={{ opacity: carouselOpacity, 
                    transition: "all 1.5s ease" }}>
                    <Carousel movies={movies} />
                </div>
                <div className="bottomblur" />
                <div className="leftblur" />
                <div className="overblur" />
            </div>
        </MovieWrapper>
    );
};
