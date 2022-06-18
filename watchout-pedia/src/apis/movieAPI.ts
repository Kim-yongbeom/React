import axiosInstance from ".";

// https://developers.themoviedb.org/3/movies/get-movie-details

export const latestApi = () => axiosInstance.get("/movie/latest");

export const upcomingApi = () => axiosInstance.get("/movie/upcomoing");

export const nowPlayingApi = () => axiosInstance.get("/movie/now_playing");

export const topRateApi = () => axiosInstance.get("/movie/top_rated");

export const popularApi = () => axiosInstance.get("/movie/popular");

export const detailApi = (movieId: string) =>
  axiosInstance.get(`/movie/${movieId}`);

export const similarApi = (movieId: string) =>
  axiosInstance.get(`/movie/${movieId}/similar`);

export const searchApi = (query: string) =>
  axiosInstance.get(`/search/movie?query=${query}`);