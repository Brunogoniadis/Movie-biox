import axios from 'axios';

import { IMovie } from './types/IMovie';

export const getMoviesSearch = async (
  term: string | null
): Promise<IMovie[]> => {

  const apiUrl: string = `https://node-ts-moviebiox.vercel.app/api/movies/search?term=${term}`;

  try {
    const response = await axios.get(apiUrl);


    return response.data;
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
};
