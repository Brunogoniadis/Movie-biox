import { useEffect, useState } from "react";

import { HomeWrapper } from "./styles";
import { getCategories, Genre } from "../../services/getMovieCategories";

import { ShowHome } from '../../components/MovieHome/ShowHome'



export const Home = () => {
    const [category, setCategory] = useState<Genre[]>([]);

    const fetchCategory = async () => {
        const categories = await getCategories();
        setCategory(categories);
    };

    useEffect(() => {
        fetchCategory();
    }, []);

    console.log('movieCategory', category)
    return (
        <>

            <HomeWrapper >

                <ShowHome id={28}
                />

            </HomeWrapper>
        </>
    );
};
