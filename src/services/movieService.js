const API_KEY = 'f28de8ba0645f2c84397c77d12304763';
const BASE_URL = 'https://api.themoviedb.org/3';

export const fetchMovies = async () => {
  const response = await fetch(`${BASE_URL}/movie/popular?language=pt-BR&?api_key=${API_KEY}`);
  const data = await response.json();
  return data.results;
};

export const fetchMovieDetails = async (id) => {
  const response = await fetch(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
  const data = await response.json();
  return data;
};
