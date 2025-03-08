import { Movie, MovieType } from "@/types/movie";

export interface SearchParams {
  s?: string;
  type?: MovieType;
  y?: string;
  page: number;
}

export interface SearchResponse {
  Search: Movie[];
  totalResults: string;
  Response: string;
  Error?: string;
}

export interface SearchMovieDetailParams {
  i: string;
  plot?: "short" | "full";
}
