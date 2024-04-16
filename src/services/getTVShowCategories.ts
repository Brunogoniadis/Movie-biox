import axios from 'axios';

export interface Genre {
  id: number;
  name: string;
}

export const getTVShowCategories = async (): Promise<Genre[]> => {


  const apiUrl: string = `https://node-ts-moviebiox.vercel.app/api/tvgenres`;

  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
};
