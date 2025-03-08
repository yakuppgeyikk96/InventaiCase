import { useAppDispatch, useAppSelector } from "@/store";
import Searchbar from "@/components/shared/Searchbar";
import { applyTextFilter } from "@/store/movie/action";
import ReleaseYearFilter from "@/components/movie/filters/ReleaseYearFilter";
import { useCallback } from "react";
import MovieTypeFilter from "@/components/movie/filters/MovieTypeFilter";

export default function MoviesTableFilters() {
  const currentSearchTerm = useAppSelector(
    (state) => state.movies.searchParams.s
  );
  const searchLoading = useAppSelector((state) => state.movies.searchLoading);

  const dispatch = useAppDispatch();

  const handleSearch = useCallback(
    (searchTerm: string) => {
      dispatch(applyTextFilter(searchTerm));
    },
    [dispatch]
  );

  return (
    <div className="d-flex justify-content-between align-items-center py-4">
      <div className="d-flex flex-grow-1">
        <Searchbar
          initialValue={currentSearchTerm}
          placeholder="Search for a movie"
          onSearch={handleSearch}
          debounceTime={500}
          searching={searchLoading}
        />
      </div>
      <div className="d-flex ms-3">
        <MovieTypeFilter />
        <ReleaseYearFilter />
      </div>
    </div>
  );
}
