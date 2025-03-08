import { useCallback, useEffect } from "react";
import { useAppSelector } from "@/store";
import { useParams } from "react-router-dom";
import { fetchMovieDetails } from "@/store/movieDetails/action";
import { useAppDispatch } from "@/store";
import MovieDetailTitle from "@/components/movie-detail/title/MovieDetailTitle";
import { MovieDetailContent } from "@/components/movie-detail/content/MovieDetailContent";
import NotFound from "@/components/shared/not-found/NotFound";
import Loading from "@/components/shared/Loading";
import { NavigateBack } from "@/components/shared/navigate-back/NavigateBack";

export default function MovieDetail() {
  const { id: movieId } = useParams<{ id: string }>();

  const dispatch = useAppDispatch();

  const {
    data: movieDetails,
    loading,
    error,
  } = useAppSelector((state) => state.movieDetails);

  const handleFetchMovieDetails = useCallback(() => {
    if (movieId) {
      dispatch(fetchMovieDetails(movieId));
    }
  }, [dispatch, movieId]);

  useEffect(() => {
    handleFetchMovieDetails();
  }, [handleFetchMovieDetails]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center min-vh-100">
        <Loading />
      </div>
    );
  }

  if (error) {
    return (
      <NotFound
        title="Movie not found"
        message="The movie you are looking for does not exist."
        showHomeButton={true}
        showBackButton={true}
        customAction={{
          label: "Try Again",
          onClick: () => movieId && dispatch(fetchMovieDetails(movieId)),
        }}
      />
    );
  }

  return (
    movieDetails && (
      <>
        <div className="mb-4">
          <NavigateBack label="Back to Movies" link="/" />
        </div>
        <MovieDetailTitle
          title={movieDetails?.Title ?? ""}
          imdbRating={movieDetails?.imdbRating ?? ""}
          imdbVotes={movieDetails?.imdbVotes ?? ""}
        />
        <MovieDetailContent
          poster={movieDetails?.Poster ?? ""}
          title={movieDetails?.Title ?? ""}
          plot={movieDetails?.Plot ?? ""}
          duration={movieDetails?.Runtime ?? ""}
          genre={movieDetails?.Genre ?? ""}
          director={movieDetails?.Director ?? ""}
          cast={movieDetails?.Actors ?? ""}
          released={movieDetails?.Released ?? ""}
        />
      </>
    )
  );
}
