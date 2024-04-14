import axios from "axios";

interface Genre {
  id: number;
  name: string;
}

export const getCategories = async (): Promise<Genre[]> => {
  const apiKey = import.meta.env.VITE_API_KEY;

  if (!apiKey) {
    throw new Error("API key not found.");
  }

  const apiUrl: string = `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}`;

  try {
    const response = await axios.get(apiUrl);
    return response.data.genres;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
};
