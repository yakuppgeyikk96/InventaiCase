import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Movie, SearchParams } from "@/types";
import { applyYearFilter, fetchMovies } from "./action";
import { SearchResponse } from "@/types";
import { APP_CONFIG } from "@/config";

interface MovieState {
  movies: Movie[];
  loading: boolean;
  searchLoading: boolean;
  yearFilterLoading: boolean;
  movieTypeFilterLoading: boolean;
  error: string | null;
  searchParams: SearchParams;
  totalResults: number;
}

const initialState: MovieState = {
  movies: [],
  loading: false,
  searchLoading: false,
  yearFilterLoading: false,
  movieTypeFilterLoading: false,
  error: null,
  searchParams: { page: 1, s: APP_CONFIG.DEFAULT_SEARCH_TERM },
  totalResults: 0,
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setSearchParams: (state, action: PayloadAction<Partial<SearchParams>>) => {
      state.searchParams = {
        ...state.searchParams,
        ...action.payload,
        page:
          action.payload.s !== undefined ||
          action.payload.y !== undefined ||
          action.payload.type !== undefined
            ? 1
            : action.payload.page || state.searchParams.page,
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state, action) => {
        state.loading = true;
        state.error = null;
        state.searchParams.page = action.meta.arg.page;
        state.searchParams.s = action.meta.arg.s;
        state.searchParams.y = action.meta.arg.y;
        state.searchParams.type = action.meta.arg.type;
      })
      .addCase(
        fetchMovies.fulfilled,
        (state, action: PayloadAction<SearchResponse>) => {
          state.loading = false;
          state.movies = action.payload.Search;
          state.totalResults = parseInt(action.payload.totalResults);
        }
      )
      .addCase(fetchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        state.movies = [];
        state.totalResults = 0;
      })
      .addCase(applyYearFilter.pending, (state) => {
        state.yearFilterLoading = true;
      })
      .addCase(applyYearFilter.fulfilled, (state) => {
        state.yearFilterLoading = false;
      })
      .addCase(applyYearFilter.rejected, (state, action) => {
        state.yearFilterLoading = false;
        state.error = action.payload as string;
      });
  },
});

export const { setSearchParams } = movieSlice.actions;
export default movieSlice.reducer;
