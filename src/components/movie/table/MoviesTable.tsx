import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "@/store";
import { fetchMovies } from "@/store/movie/action";

import DataTable, { Column } from "@/components/shared/data-table";
import DataTableError from "@/components/shared/data-table/DataTableError";

import { Copy, Check } from "lucide-react";

import { Movie } from "@/types/movie";
import MoviesTablePagination from "@/components/movie/table/MoviesTablePagination";

import { createTableColumns } from "@/utils/tableUtils";
import movieTableColumns from "@/constants/tables/movieTableColumns";

import { toast } from "sonner";
export default function MovieTable() {
  const navigate = useNavigate();

  const dispatch = useAppDispatch();

  const { movies, loading, error, searchParams } = useAppSelector(
    (state) => state.movies
  );

  const handleRowClick = (movie: Movie) => {
    navigate(`/movie/${movie.imdbID}`);
  };

  const handleCopy = (e: React.MouseEvent<SVGSVGElement>, imdbID: string) => {
    e.stopPropagation();
    navigator.clipboard.writeText(imdbID);
    toast.success("IMDB ID copied to clipboard", {
      position: "top-center",
      icon: <Check size={24} className="text-success" />,
    });
  };

  const columns: Column<Movie>[] = createTableColumns<Movie>(
    movieTableColumns,
    {
      customRenderers: {
        Type: (movie) => <h6 className="badge bg-primary">{movie.Type}</h6>,
        imdbID: (movie) => (
          <div className="d-flex justify-content-center align-items-center gap-2">
            <span>{movie.imdbID}</span>
            <Copy size={16} onClick={(e) => handleCopy(e, movie.imdbID)} />
          </div>
        ),
      },
    }
  );

  useEffect(() => {
    dispatch(fetchMovies(searchParams));
  }, []);

  return error ? (
    <DataTableError message={error} />
  ) : (
    <>
      <DataTable
        columns={columns}
        data={movies}
        keyField="imdbID"
        loading={loading}
        emptyMessage="No movies found"
        hoverable
        onRowClick={handleRowClick}
      />
      <MoviesTablePagination />
    </>
  );
}
