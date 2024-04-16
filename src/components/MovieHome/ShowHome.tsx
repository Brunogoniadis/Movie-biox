import { useEffect, useState, useRef } from "react";
import { IMovie } from "../../services/types/IMovie"
import { ShowHomeWrapper } from "./styles";
import { PlayButton } from "../PlayButton/PlayButton";
import Carousel from "../Carousel/Carousel";
import { getMoviesCategory } from "../../services/getMoviesOfCategory";

interface IShowHomeProps {
    id: number;
    category: string,
}
export const ShowHome = ({ id, category }: IShowHomeProps) => {

    const [movies, setMovies] = useState<IMovie[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [carouselOpacity, setCarouselOpacity] = useState<number>(1);
    const [randomNumber] = useState<number>(Math.floor(Math.random() * 8) + 1);
    const [reqController, setReqController] = useState<boolean>(false);
    const movieWrapperRef = useRef<HTMLDivElement>(null);

    const fetchAndDisplayMovies = async (page: number = 1) => {
        const movies = await getMoviesCategory(id, page);

        setMovies((prevMovies) => [...prevMovies, ...movies]);


    };



    const handleLastItemReached = () => {


        setReqController(true)

        if (reqController) {
            const nextPage = currentPage + 1;
            fetchAndDisplayMovies(nextPage);
            setCurrentPage(nextPage);
            setReqController(false)

        }
    };

    useEffect(() => {
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


    return (
        <ShowHomeWrapper
            ref={movieWrapperRef}
            style={{
                backgroundImage: `url(${`https://image.tmdb.org/t/p/original${movies[randomNumber]?.backdrop_path}`}), url(${`https://image.tmdb.org/t/p/w500${movies[randomNumber]?.backdrop_path}`})`
            }}
        >
            <div className="mainContent">
                <div className="mainMovieWrapper" >
                    <h2>{category}</h2>
                    <p>{movies[randomNumber]?.title}</p>
                    <div className="ButtonsWrapper">
                        <PlayButton
                            id={movies[randomNumber]?.id}
                        />
                    </div>
                </div>
                <div className="caroselWrapper" style={{
                    opacity: carouselOpacity,
                    transition: "all 1.5s ease"
                }}>
                    <Carousel
                        data={movies}
                        typeOfMedia="movie"
                        onLastItemReached={handleLastItemReached}
                    />
                </div>
                <div className="bottomblur" />
                <div className="leftblur" />
                <div className="overblur" />
            </div>
        </ShowHomeWrapper>
    );
};
