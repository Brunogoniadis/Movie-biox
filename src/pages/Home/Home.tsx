import { useEffect, useState } from "react";

import { HomeWrapper } from "./styles";
import { getCategories } from "../../services/getMovieCategories";

import { MovieHome } from "../../components/MovieHome/MovieHome";
import { useParams } from "react-router-dom";
interface IuseParams {
    type: string | undefined;
    [key: string]: string | undefined;
}

export const Home = () => {


    const { type } = useParams<IuseParams>();

    console.log('id', type)

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
