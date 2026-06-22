import API from "../api";
import type { ResponseData, VideosData } from "./type";

export const getPopularMovies = async () => {
  try {
    const response = await API.get("movie/popular");

    return response.data as ResponseData;
  } catch (error) {
    console.error(error);
  }
};

export const getUpcomingMovies = async () => {
  try {
    const response = await API.get("movie/upcoming", {
      params: {
        language: "en-US"
      }
    });
    return response.data as ResponseData;
  } catch (error) {
    console.error(error);
  }
};

export const getTopRatedMovies = async () => {
  try {
    const response = await API.get("movie/top_rated", {
      params: {
        language: "en-US"
      }
    });
    return response.data as ResponseData;
  } catch (error) {
    console.error(error);
  }
};

export const getMovieTrailers = async (movieId: number) => {
  try {
    const response = await API.get(`movie/${movieId}/videos`);
    return response.data as VideosData;
  } catch (error) {
    console.error(error);
  }
};

export const searchMovies = async (query: string) => {
  try {
    const response = await API.get("search/movie", {
      params: {
        query: query,
        language: "en-US"
      }
    });
    return response.data as ResponseData;
  } catch (error) {
    console.error(error);
  }
};
