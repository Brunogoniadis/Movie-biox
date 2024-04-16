import axios from 'axios';

import { IMovie } from './types/IMovie';

export const getMoviesRelacioned = async (
  movieId: string | undefined
): Promise<IMovie[]> => {
  const apiUrl: string = `https://node-ts-moviebiox.vercel.app/api/movies/related/${movieId}}`;

  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
};
