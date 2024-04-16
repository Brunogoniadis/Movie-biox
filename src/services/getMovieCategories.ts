import axios from "axios";

export interface Genre {
  id: number;
  name: string;
}

export const getCategories = async (): Promise<Genre[]> => {


  const apiUrl: string = `https://node-ts-moviebiox.vercel.app/api/moviesgenres`;
                          
  try {
    const response = await axios.get(apiUrl);
    return response.data;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
};
