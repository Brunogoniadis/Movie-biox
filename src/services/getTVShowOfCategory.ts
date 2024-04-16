import axios from 'axios';
import { ITvShow } from './types/ITvShow';

export const getTVShowsByCategory = async (
  genreId: number,
  page: number = 1
): Promise<ITvShow[]> => {
  const apiKey = import.meta.env.VITE_API_KEY;

  const apiUrl: string = `https://api.themoviedb.org/3/discover/tv?api_key=${apiKey}&with_genres=${genreId}&page=${page}`;

  try {
    const response = await axios.get(apiUrl);

    return response.data.results;
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
};
