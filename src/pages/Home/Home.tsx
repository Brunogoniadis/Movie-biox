import React, { useEffect, useState } from "react";
import { getMoviesByPopularity, MovieData } from "../../services/getMovieByPopularity";
import { HomeWrapper } from "./styles";
import PlayButton from "../../components/PlayButton/PlayButton";
import InfoButton from "../../components/InfoButton/InfoButton";
import Carousel from "../../components/Carousel/Carousel";
import { getCategories } from "../../services/getCategories";
import { MovieWrapper } from "../../components/MovieHome/styles";
import { MovieHome } from "../../components/MovieHome/MovieHome";

export const Home = () => {

    const [movieCategory, setMovieCategory] = useState<unknown[]>([]);

    useEffect(() => {
        const fetchCategoryMovies = async () => {
            const categories = await getCategories();
            setMovieCategory(categories);
        };
        fetchCategoryMovies();
    }, []);


    console.log('movieCategory', movieCategory)



    return (
        <>

            <HomeWrapper >
                {movieCategory.map((category) => (
                    <MovieHome id={category.id} />
                ))}

            </HomeWrapper>


        </>
    );
};
