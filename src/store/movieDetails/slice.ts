import { createSlice } from "@reduxjs/toolkit";
import { MovieDetail } from "@/types";
import { fetchMovieDetails } from "./action";

interface MovieDetailsState {
  data: MovieDetail | null;
  loading: boolean;
  error: string | null;
}

const initialState: MovieDetailsState = {
  data: null,
  loading: false,
  error: null,
};

const movieDetailsSlice = createSlice({
  name: "movieDetails",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchMovieDetails.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(fetchMovieDetails.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = null;
    });
    builder.addCase(fetchMovieDetails.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
});

export default movieDetailsSlice.reducer;
