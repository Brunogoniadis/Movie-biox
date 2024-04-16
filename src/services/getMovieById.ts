import axios from 'axios';
import { IMovie } from './types/IMovie';

export const getMovieById = async (
  movieId: string | undefined
): Promise<IMovie | null> => {
  const apiKey = import.meta.env.VITE_API_KEY;

  const apiUrl = `https://node-ts-moviebiox.vercel.app/api/movie/${movieId}`;

  try {
    const response = await axios.get(apiUrl);
    console.log('data', response);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
};
