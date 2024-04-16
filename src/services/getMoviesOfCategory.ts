import axios from 'axios';

import { IMovie } from './types/IMovie';

export const getMoviesCategory = async (
  categoryId: number,
  page: number
): Promise<IMovie[]> => {
  const apiUrl: string = `//node-ts-moviebiox.vercel.app/api/movies/category/${categoryId}?page=${page}`;

  try {
    const response = await axios.get(apiUrl);
    
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
};
