import axios from "axios";

export interface TVShowDataRelacioned {
  backdrop_path: string | null;
  first_air_date: string;
  genre_ids: number[];
  id: number;
  name: string;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  vote_average: number;
  vote_count: number;
}

export const getTVShowRelacioned = async (
  tvShowId: string | undefined
): Promise<TVShowDataRelacioned[]> => {
  const apiKey = import.meta.env.VITE_API_KEY;

  const apiUrl: string = `https://api.themoviedb.org/3/tv/${tvShowId}/recommendations?api_key=${apiKey}`;

  try {
    const response = await axios.get(apiUrl);
    return response.data.results;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
};
