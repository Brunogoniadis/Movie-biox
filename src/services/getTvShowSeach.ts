import axios from 'axios';

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

  const apiUrl: string = `https://node-ts-moviebiox.vercel.app/api/tvshows/search?term=${term}`;

  try {
    const response = await axios.get(apiUrl);

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
};
