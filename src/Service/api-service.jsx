import axios from 'axios';

const API_KEY = '121fad3c6c9b7bc3d8e43ee646e86854';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/';
// axios.defaults.headers.common['Authorization'] = API_KEY;
// axios.defaults.params = {};

export const getMovie = async () => {
  const data = await axios.get(`movie/550?api_key=${API_KEY}`);
};
