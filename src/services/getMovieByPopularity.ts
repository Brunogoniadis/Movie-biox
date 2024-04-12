import axios from 'axios'

export const getMoviesByPopularity = async () => {
  const apiKey = import.meta.env.VITE_API_KEY

  const apiUrl = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${apiKey}`

  try {
    const response = await axios.get(apiUrl)

    return response.data.results
  } catch (error) {
    console.error('Error:', error)
    return null
  }
}
