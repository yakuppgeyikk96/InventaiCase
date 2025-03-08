import { createAsyncThunk } from "@reduxjs/toolkit";
import { MovieType, SearchParams } from "@/types";
import { searchMovies } from "@/services/api";
import { RootState } from "@/store";

export const fetchMovies = createAsyncThunk(
  "movie/fetchMovies",
  async (params: SearchParams, { rejectWithValue }) => {
    try {
      if (!params.s) {
        return rejectWithValue("Please enter a search term");
      }

      const response = await searchMovies(params);

      if (response.Response === "True") {
        return response;
      } else {
        return rejectWithValue(response.Error || "Result not found");
      }
    } catch (error) {
      return rejectWithValue(
        error instanceof Error ? error.message : "An error occurred"
      );
    }
  }
);

export const applyYearFilter = createAsyncThunk(
  "movie/applyYearFilter",
  async (year: string, { getState, dispatch }) => {
    const state = getState() as RootState;
    const { searchParams } = state.movies;

    const newParams: SearchParams = {
      s: searchParams.s,
      type: searchParams.type,
      page: 1,
    };

    if (year) {
      newParams.y = year;
    }

    return dispatch(fetchMovies(newParams)).unwrap();
  }
);

export const applyTextFilter = createAsyncThunk(
  "movie/applyTextFilter",
  async (text: string, { getState, dispatch }) => {
    const state = getState() as RootState;
    const { searchParams } = state.movies;

    const newParams: SearchParams = {
      ...searchParams,
      page: 1,
      s: text,
    };

    return dispatch(fetchMovies(newParams)).unwrap();
  }
);

export const applyMovieTypeFilter = createAsyncThunk(
  "movie/applyMovieTypeFilter",
  async (type: MovieType | undefined, { getState, dispatch }) => {
    const state = getState() as RootState;
    const { searchParams } = state.movies;

    const newParams: SearchParams = {
      s: searchParams.s,
      y: searchParams.y,
      page: 1,
    };

    if (type) {
      newParams.type = type as MovieType;
    }

    return dispatch(fetchMovies(newParams)).unwrap();
  }
);

export const applyPageFilter = createAsyncThunk(
  "movie/applyPageFilter",
  async (page: number, { getState, dispatch }) => {
    const state = getState() as RootState;
    const { searchParams } = state.movies;

    const newParams: SearchParams = {
      ...searchParams,
      page,
    };

    return dispatch(fetchMovies(newParams)).unwrap();
  }
);
