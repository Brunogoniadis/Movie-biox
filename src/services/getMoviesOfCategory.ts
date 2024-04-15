import axios from 'axios';

import { IMovie } from './types/IMovie';

export const getMoviesCategory = async (
  categoryId: number,
  page: number = 1
): Promise<IMovie[]> => {
  const apiKey = import.meta.env.VITE_API_KEY;

  const apiUrl: string = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${categoryId}&page=${page}`;

  try {
    const response = await axios.get(apiUrl);
    return response.data.results;
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
};
