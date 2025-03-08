import { createAsyncThunk } from "@reduxjs/toolkit";
import { getMovieDetails } from "@/services/api";

export const fetchMovieDetails = createAsyncThunk(
  "movieDetails/fetchMovieDetails",
  async (imdbID: string, { rejectWithValue }) => {
    try {
      const response = await getMovieDetails({ i: imdbID, plot: "full" });
      return response;
    } catch (error) {
      console.error("Fetch movie details error:", error);
      return rejectWithValue(
        error instanceof Error ? error.message : "Failed to fetch movie details"
      );
    }
  }
);
