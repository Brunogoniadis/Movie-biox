import { useEffect } from "react";
import { getMoviesCategory } from "../../services/getMoviesCategory"


export const Home = () => {

    useEffect(() => {
        const fetchAndDisplayMovies = async () => {
            const movies = await getMoviesCategory();
            console.log(movies);
        };
        fetchAndDisplayMovies();
    }, []);

    return <div>Home</div>
}
