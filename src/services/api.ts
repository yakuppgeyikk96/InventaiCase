import axios from "axios";
import {
  MovieDetail,
  SearchParams,
  SearchResponse,
  SearchMovieDetailParams,
} from "@/types";
import { API_CONFIG } from "@/config";

export const searchMovies = async (
  params: SearchParams
): Promise<SearchResponse> => {
  try {
    const response = await axios.get(API_CONFIG.BASE_URL, {
      params: {
        apikey: API_CONFIG.API_KEY,
        ...params,
      },
    });

    return response.data;
  } catch (error) {
    console.error("Search movies error:", error);
    throw new Error("Search movies error");
  }
};

export const getMovieDetails = async (
  params: SearchMovieDetailParams
): Promise<MovieDetail> => {
  try {
    const response = await axios.get(API_CONFIG.BASE_URL, {
      params: {
        apikey: API_CONFIG.API_KEY,
        ...params,
      },
    });

    if (response.data.Response === "False") {
      throw new Error(response.data.Error || "Failed to fetch movie details");
    }

    return response.data;
  } catch (error) {
    console.error("Get movie details error:", error);
    throw new Error("Get movie details error");
  }
};
