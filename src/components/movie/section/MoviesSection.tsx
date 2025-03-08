import MoviesTable from "@/components/movie/table/MoviesTable";
import MoviesTableFilters from "@/components/movie/filters/MoviesTableFilters";

export default function MoviesSection() {
  return (
    <>
      <MoviesTableFilters />
      <MoviesTable />
    </>
  );
}
