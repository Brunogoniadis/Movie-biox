import axios from 'axios';
import { ITvShow } from './types/ITvShow';

export const getTVShowsByCategory = async (
  genreId: number,
  page: number = 1
): Promise<ITvShow[]> => {

  const apiUrl: string = `https://node-ts-moviebiox.vercel.app/api/tv/category/${genreId}?page=${page}`;

  try {
    const response = await axios.get(apiUrl);

    return response.data;
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
};
