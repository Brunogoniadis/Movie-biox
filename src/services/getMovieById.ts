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
  runtime?: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export const getMovieById = async (
  movieId: string | undefined
): Promise<MovieData | null> => {
  const apiKey = import.meta.env.VITE_API_KEY;

  const apiUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`;

  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
};
