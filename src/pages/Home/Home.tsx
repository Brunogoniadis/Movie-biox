import { useEffect, useState } from "react";

import { HomeWrapper } from "./styles";
import { getCategories, Genre } from "../../services/getMovieCategories";

import { ShowHome } from '../../components/MovieHome/ShowHome'



export const Home = () => {



    const [category, setCategory] = useState<Genre[]>([]);

    useEffect(() => {
        const fetchCategory = async () => {

            const categories = await getCategories();
            setCategory(categories);

        };
        fetchCategory();




    }, []);


    console.log('movieCategory', category)



    return (
        <>

            <HomeWrapper >
                {category.map((category) => (
                    <ShowHome id={category.id} />
                ))}

            </HomeWrapper>


        </>
    );
};
