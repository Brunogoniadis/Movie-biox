import axios from "axios";

export interface MovieData {
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export const getMoviesSearch = async (
  term: string | null
): Promise<MovieData[]> => {
  const apiKey = import.meta.env.VITE_API_KEY;

  const apiUrl: string = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${term}`;

  try {
    const response = await axios.get(apiUrl);

    console.log("response.data", response.data);

    return response.data.results;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
};
