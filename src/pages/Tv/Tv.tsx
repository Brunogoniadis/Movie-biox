import { useEffect, useState } from "react";
import { TvWrapper } from "./styles";
import { getTVShowCategories, Genre } from "../../services/getTVShowCategories";
import { getTVShowsByCategory, TVShowData } from "../../services/getTVShowOfCategory";
import Carousel from "../../components/Carousel/Carousel";

export const Tv = () => {

    const [categoriesWithShows, setCategoriesWithShows] = useState<{ category: Genre, shows: TVShowData[] }[]>([]);

    useEffect(() => {
        const fetchCategoriesAndShows = async () => {
            try {
                const categories = await getTVShowCategories();
                const categoriesWithShowsPromises = categories.map(async (category) => {
                    const shows = await getTVShowsByCategory(category.id);
                    return { category, shows };
                });
                const categoriesWithShowsData = await Promise.all(categoriesWithShowsPromises);
                setCategoriesWithShows(categoriesWithShowsData);
            } catch (error) {
                console.error("Error fetching categories and shows:", error);
            }
        };

        fetchCategoriesAndShows();
    }, []);


    return (
        <TvWrapper>
            <div className="maincontent">

                <div className="caroselWrapper">

                    {categoriesWithShows.map(({ category, shows }) => (
                        <>
                            <h3>{category.name}</h3>
                            <Carousel data={shows} typeOfStyle="min" />
                        </>

                    ))}
                </div>

                <div className="bottomblur" />
                <div className="leftblur" />
                <div className="overblur" />
            </div>
        </TvWrapper>
    );
};
