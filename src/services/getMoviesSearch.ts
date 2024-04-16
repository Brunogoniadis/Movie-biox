import axios from 'axios';

import { IMovie } from './types/IMovie';

export const getMoviesSearch = async (
  term: string | null
): Promise<IMovie[]> => {
  const apiKey = import.meta.env.VITE_API_KEY;

  const apiUrl: string = `https://node-ts-moviebiox.vercel.app/api/movies/search?term=${term}`;

  try {
    const response = await axios.get(apiUrl);

    console.log('response.data', response.data);

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
};
