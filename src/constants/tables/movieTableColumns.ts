import { Column } from "@/components/shared/data-table";
import { Movie } from "@/types";

export const baseMovieColumns: Column<Movie>[] = [
  {
    header: "Title",
    field: "Title",
    className: "w-25",
  },
  {
    header: "IMDB ID",
    field: "imdbID",
    className: "w-25 text-center",
  },
  {
    header: "Year",
    field: "Year",
    className: "w-25 text-center",
  },
  {
    header: "Type",
    field: "Type",
    className: "w-25 text-center",
  },
];

export default baseMovieColumns;
