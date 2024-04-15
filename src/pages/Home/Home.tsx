import { useEffect, useState } from "react";

import { HomeWrapper } from "./styles";
import { getCategories, Genre } from "../../services/getMovieCategories";

import { ShowHome } from '../../components/MovieHome/ShowHome'

export const Home = () => {
    const [categories, setCategories] = useState<Genre[]>([]);
    const [loadedItems, setLoadedItems] = useState<number>(2);
    const [pageHeight, setPageHeight] = useState(window.innerHeight * 1.3);

    const fetchCategories = async () => {
        const newCategories = await getCategories();
        setCategories(prevCategories => [...prevCategories, ...newCategories]);
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const scrollBottom = scrollTop + window.innerHeight;

            if (scrollBottom >= pageHeight) {
                setPageHeight(prevPageHeight => prevPageHeight + (window.innerHeight * 1.3));
                setLoadedItems(prevLoadedItems => prevLoadedItems + 1);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [pageHeight]);

    return (
        <>
            <HomeWrapper>
                {categories.map((category, index) => (
                    <div key={category.id} className="mainController">
                        {index < loadedItems && (
                            <ShowHome
                                id={category.id}
                                category={category.name}
                            />
                        )}
                    </div>
                ))}
            </HomeWrapper>
        </>
    );
};
