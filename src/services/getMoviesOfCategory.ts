import axios from 'axios'

export interface MovieData {
  adult: boolean
  backdrop_path: string | null
  genre_ids: number[]
  id: number
  original_language: string
  original_title: string
  overview: string
  popularity: number
  poster_path: string | null
  release_date: string
  title: string
  video: boolean
  vote_average: number
  vote_count: number
}

export const getMoviesCategory = async (
  categoryId: number,
  page: number = 1 
): Promise<MovieData[]> => {
  const apiKey = import.meta.env.VITE_API_KEY;

  const apiUrl: string = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=${categoryId}&page=${page}`;

  try {
    const response = await axios.get(apiUrl);
    return response.data.results;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
};