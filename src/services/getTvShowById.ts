import axios from "axios";

export interface TVShowData {
  backdrop_path: string | null;
  created_by: {
    id: number;
    credit_id: string;
    name: string;
    gender: number;
    profile_path: string | null;
  }[];
  episode_run_time: number[];
  first_air_date: string;
  genres: {
    id: number;
    name: string;
  }[];
  homepage: string;
  id: number;
  in_production: boolean;
  languages: string[];
  last_air_date: string;
  name: string;
  networks: {
    name: string;
    id: number;
    logo_path: string | null;
    origin_country: string;
  }[];
  number_of_episodes: number;
  number_of_seasons: number;
  origin_country: string[];
  original_language: string;
  original_name: string;
  overview: string;
  popularity: number;
  poster_path: string | null;
  production_companies: {
    id: number;
    logo_path: string | null;
    name: string;
    origin_country: string;
  }[];
  seasons: {
    air_date: string;
    episode_count: number;
    id: number;
    name: string;
    overview: string;
    poster_path: string | null;
    season_number: number;
  }[];
  status: string;
  type: string;
  vote_average: number;
  vote_count: number;
}

export const getTVShowById = async (
  tvShowId: string | undefined
): Promise<TVShowData | null> => {
  const apiKey = import.meta.env.VITE_API_KEY;

  const apiUrl = `https://api.themoviedb.org/3/tv/${tvShowId}?api_key=${apiKey}`;

  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    return null;
  }
};