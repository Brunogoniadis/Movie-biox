import axios from 'axios'

export const getMoviesCategory = async () => {
  const apiKey = import.meta.env.VITE_API_KEY

  const apiUrl = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&with_genres=28`

  try {
    const response = await axios.get(apiUrl)

    return response.data.results
  } catch (error) {
    console.error('Error:', error)
    return null
  }
}
