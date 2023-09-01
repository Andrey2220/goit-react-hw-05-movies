import axios from 'axios';

axios.defaults.baseURL = `https://api.themoviedb.org/3`;
axios.defaults.params = {
  api_key: `4a06fb9567ad4adbaf614250c2ab2e25`,
  include_adult: false,
};

const getTrending = async signal => {
  const { data } = await axios.get('/trending/movie/day', { signal });
  return data.results;
};

const getDetails = async (signal, movieId) => {
  try {
    const { data } = await axios.get(`/movie/${movieId}`, { signal });

    return data;
  } catch (error) {
    throw new Error('problem with part "Details"');
  }
};
const getCast = async (signal, movieId) => {
  try {
    const { data } = await axios.get(`/movie/${movieId}/credits`, { signal });

    return data;
  } catch (error) {
    throw new Error('problem with part "Details"');
  }
};

const getReviews = async (signal, movieId) => {
  try {
    const { data } = await axios.get(`/movie/${movieId}/reviews`, { signal });

    return data.results;
  } catch (error) {
    throw new Error('problem with part "Details"');
  }
};

const getSearch = async (signal, query) => {
  try {
    const { data } = await axios.get(`/search/movie?query=${query}`, {
      signal,
    });

    return data.results;
  } catch (error) {
    throw new Error('problem with part "Details"');
  }
};

export const Service = {
  getTrending,
  getDetails,
  getCast,
  getReviews,
  getSearch,
};
