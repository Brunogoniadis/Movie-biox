import { useEffect, useState, useRef } from "react";

import { HomeWrapper } from "./styles";
import { getCategories, Genre } from "../../services/getMovieCategories";

import { ShowHome } from '../../components/MovieHome/ShowHome'

export const Home = () => {
    const [categories, setCategories] = useState<Genre[]>([]);
    const [loadedItems, setLoadedItems] = useState<number>(10); // Defina o número inicial de itens carregados
    const [loading, setLoading] = useState<boolean>(false);

    const mainControlerRef = useRef<HTMLDivElement>(null);

    const fetchCategories = async () => {
        setLoading(true);
        const newCategories = await getCategories();
        setCategories(prevCategories => [...prevCategories, ...newCategories]);
        setLoading(false);
    };

    useEffect(() => {
        fetchCategories();
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            if (!loading && mainControlerRef.current) {
                const rect = mainControlerRef.current.getBoundingClientRect();
                const scrollTop = window.scrollY || document.documentElement.scrollTop;
                const scrollBottom = scrollTop + window.innerHeight;

                const rectBottom = (rect.top * rect.height) +rect.height ;


                if (scrollBottom >= rectBottom) {

                    setLoadedItems(prevLoadedItems => prevLoadedItems + 1);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [categories, loading]);

    return (
        <>
            <HomeWrapper >
                <div ref={mainControlerRef} className="mainControler">
                    {categories.slice(0, loadedItems).map((category, index: number) => (
                        <div key={index}
                            ref={mainControlerRef}
                        >
                            <ShowHome
                                id={category.id}
                                idPage={index}
                            />
                        </div>
                    ))}
                    {loading && <div>Loading...</div>}
                </div>
            </HomeWrapper>
        </>
    );
};
