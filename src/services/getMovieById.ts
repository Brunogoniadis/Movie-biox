import axios from 'axios';
import { IMovie } from './types/IMovie';

export const getMovieById = async (
  movieId: string | undefined
): Promise<IMovie | null> => {
  const apiKey = import.meta.env.VITE_API_KEY;

  const apiUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}`;

  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    return null;
  }
};
