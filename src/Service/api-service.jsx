import axios from 'axios';

const API_KEY = '121fad3c6c9b7bc3d8e43ee646e86854';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';

axios.defaults.params = {
  api_key: API_KEY,
  language: 'en-US',
  include_adult: false,
};

export const getTrendingMovies = async () => {
  const { data } = await axios.get('trending/movie/week');

  return data.results;
};

export const searchMovies = async query => {
  const { data } = await axios.get(`/search/movie?query=${query}`);

  return data.results;
};

export const getMovieDetails = async movieId => {
  const { data } = await axios.get(`movie/${movieId}`);

  return data;
};

export const getMovieCredits = async movieId => {
  const { data } = await axios.get(`movie/${movieId}/credits`);

  return data.cast;
};

export const getMovieReviews = async movieId => {
  const { data } = await axios.get(`movie/${movieId}/reviews`);

  return data.results;
};
