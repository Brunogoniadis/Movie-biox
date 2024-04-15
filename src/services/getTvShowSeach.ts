import axios from "axios";

export interface TVShowData {
  name: string;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  first_air_date: string;
  vote_average: number;
  vote_count: number;
}

export const getTVShowsSearch = async (
  term: string | null
): Promise<TVShowData[]> => {
  const apiKey = import.meta.env.VITE_API_KEY;

  const apiUrl: string = `https://api.themoviedb.org/3/search/tv?api_key=${apiKey}&query=${term}&page=1`;

  try {
    const response = await axios.get(apiUrl);

    console.log("response.data", response.data);

    return response.data.results.slice(0, 10);
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
};
