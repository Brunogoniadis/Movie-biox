import { useEffect, useState } from "react";
import { TvWrapper } from "./styles";
import { getTVShowCategories, Genre } from "../../services/getTVShowCategories";
import { getTVShowsByCategory, TVShowData } from "../../services/getTVShowOfCategory";
import Carousel from "../../components/Carousel/Carousel";

const RenderCategoryCarousel = ({ idOfCategory }: { idOfCategory: number }) => {
    const [shows, setShows] = useState<TVShowData[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [reachedLastItem, setReachedLastItem] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            const fetchedShows = await getTVShowsByCategory(idOfCategory, currentPage);
            setShows(prevShows => [...prevShows, ...fetchedShows]);
            setReachedLastItem(fetchedShows.length === 0);
        };

        if (idOfCategory && !reachedLastItem) {
            fetchData();
        }
    }, [idOfCategory, currentPage, reachedLastItem]);

    const handleLastItemReached = () => {
        setCurrentPage(prevPage => prevPage + 1);
    };

    return (
        <Carousel
            data={shows}
            typeOfStyle="min"
            onLastItemReached={handleLastItemReached}
        />
    );
};

export const Tv = () => {
    const [categories, setCategories] = useState<Genre[]>([]);

    useEffect(() => {
        const fetchCategoriesAndShows = async () => {
            const categoriesFetch = await getTVShowCategories();
            setCategories(categoriesFetch);
        };
        fetchCategoriesAndShows();
    }, []);

    return (
        <TvWrapper>
            <div className="maincontent">
                {categories.map(({ id }) => (
                    <div className="caroselWrapper">
                        <RenderCategoryCarousel idOfCategory={id} />
                    </div>
                ))}
            </div>
        </TvWrapper>
    );
};
