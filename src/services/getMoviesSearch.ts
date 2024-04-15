import axios from "axios";

import { IMovie } from './types/IMovie';


export const getMoviesSearch = async (
  term: string | null
): Promise<IMovie[]> => {
  const apiKey = import.meta.env.VITE_API_KEY;

  const apiUrl: string = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${term}&page=1`;

  try {
    const response = await axios.get(apiUrl);

    console.log("response.data", response.data);

    return response.data.results.slice(0, 10); 
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
};
