import axios from 'axios';

import { IMovie } from './types/IMovie';

export const getMoviesRelacioned = async (
  movieId: string | undefined
): Promise<IMovie[]> => {
  const apiKey = import.meta.env.VITE_API_KEY;

  const apiUrl: string = `https://api.themoviedb.org/3/movie/${movieId}/recommendations?api_key=${apiKey}`;

  try {
    const response = await axios.get(apiUrl);
    return response.data.results;
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
};
