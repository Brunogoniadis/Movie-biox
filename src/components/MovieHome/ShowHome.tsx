import { useEffect, useState, useRef } from "react";
import { MovieData } from "../../services/getMovieByPopularity";
import { ShowHomeWrapper } from "./styles";
import PlayButton from "../PlayButton/PlayButton";
import InfoButton from "../InfoButton/InfoButton";
import Carousel from "../Carousel/Carousel";
import { getMoviesCategory } from "../../services/getMoviesOfCategory";

interface IShowHomeProps {
    id: number;
    idPage: number,

}

export const ShowHome = (props: IShowHomeProps) => {

    const { id } = props

    const [movies, setMovies] = useState<MovieData[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);

    const [imageBackgroundList, setImageBackgroundList] = useState<HTMLImageElement[]>([]);
    const [carouselOpacity, setCarouselOpacity] = useState<number>(1);
    const [randomNumber] = useState<number>(Math.floor(Math.random() * 4) + 1);
    const [reqController, setReqController] = useState<boolean>(false);

    const movieWrapperRef = useRef<HTMLDivElement>(null);

    const fetchAndDisplayMovies = async (page: number = 1) => {
        const movies = await getMoviesCategory(id, page);
        setMovies((prevMovies) => [...prevMovies, ...movies]);

        const imgElements = movies.map((movie) => {
            const img = new Image();
            img.src = `https://image.tmdb.org/t/p/original${movie.backdrop_path}`;
            return img;
        });
        setImageBackgroundList((prevImages) => [...prevImages, ...imgElements]);
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
        <ShowHomeWrapper ref={movieWrapperRef} style={{ backgroundImage: `url(${imageBackgroundList[randomNumber]?.currentSrc})` }}>
            <div className="maincontent">
                <div className="mainMovieWrapper" >
                    <h2>{movies[randomNumber]?.original_title}</h2>
                    <p>{movies[randomNumber]?.vote_average}</p>
                    <div className="ButtonsWrapper">
                        <PlayButton />
                        <InfoButton />
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
