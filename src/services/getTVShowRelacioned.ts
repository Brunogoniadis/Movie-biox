import axios from "axios";
import { ITvShow } from "./types/ITvShow";



export const getTVShowRelacioned = async (
  tvShowId: string | undefined,
  page: number = 1
): Promise<ITvShow[]> => {
  const apiKey = import.meta.env.VITE_API_KEY;
  console.log("page", page);
  const apiUrl: string = `https://api.themoviedb.org/3/tv/${tvShowId}/recommendations?api_key=${apiKey}&page=${page}`;

  try {
    const response = await axios.get(apiUrl);
    return response.data.results;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
};
