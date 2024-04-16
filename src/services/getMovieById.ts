import axios from 'axios';
import { IMovie } from './types/IMovie';

export const getMovieById = async (
  movieId: string | undefined
): Promise<IMovie | null> => {
  const apiUrl = `https://node-ts-moviebiox.vercel.app/api/movie/${movieId}`;

  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
};
