import { memo, useCallback } from "react";
import { useAppDispatch, useAppSelector } from "@/store";
import { applyMovieTypeFilter } from "@/store/movie/action";
import { MovieType } from "@/types";
import Dropdown, {
  DropdownItem,
  DropdownHeader,
  DropdownDivider,
} from "@/components/shared/dropdown";
import movieTypeOptions from "@/constants/filters/movieTypeOptions";

function MovieTypeFilter() {
  const dispatch = useAppDispatch();

  const currentMovieType = useAppSelector(
    (state) => state.movies.searchParams.type
  );

  const movieTypeFilterLoading = useAppSelector(
    (state) => state.movies.movieTypeFilterLoading
  );

  const handleTypeSelect = useCallback(
    (type: MovieType | undefined) => {
      dispatch(applyMovieTypeFilter(type));
    },
    [dispatch]
  );

  return (
    <Dropdown
      buttonText={
        currentMovieType ? `Type: ${currentMovieType}` : "Content Type"
      }
      disabled={movieTypeFilterLoading}
      className="movie-type-filter"
    >
      <DropdownHeader title="Filter by type" />
      <DropdownDivider />
      {movieTypeOptions.map((type, index) => (
        <DropdownItem
          key={`${type.value}-${index}`}
          value={type.value}
          label={type.label}
          isActive={type.value === currentMovieType}
          onClick={() => handleTypeSelect(type.value)}
        />
      ))}
    </Dropdown>
  );
}

export default memo(MovieTypeFilter);
