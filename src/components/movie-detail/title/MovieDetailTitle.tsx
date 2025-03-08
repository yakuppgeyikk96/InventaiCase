import { Users } from "lucide-react";
import { formatVotes } from "@/utils/formatters";
import MovieDetailTitleStar from "@/components/movie-detail/title/MovieDetailTitleStar";
import "@/components/movie-detail/title/MovieDetailTitle.scss";

interface MovieDetailTitleProps {
  title: string;
  imdbRating: string;
  imdbVotes: string;
}

export default function MovieDetailTitle({
  title,
  imdbRating,
  imdbVotes,
}: MovieDetailTitleProps) {
  const rating = parseFloat(imdbRating);
  const formattedVotes = formatVotes(imdbVotes);

  return (
    <div className="movie-detail-title mb-4 border-bottom border-top p-4">
      <h1 className="display-6 fw-bold text-primary mb-3">{title}</h1>

      <div className="imdb-rating-container d-flex align-items-center">
        <div className="imdb-rating me-4">
          <div className="d-flex align-items-center">
            <div className="rating-circle bg-warning d-flex align-items-center justify-content-center me-2">
              <span className="fw-bold text-dark">{imdbRating}</span>
            </div>
            <div>
              <span className="text-muted small">IMDb Rating</span>
              <MovieDetailTitleStar rating={rating} />
            </div>
          </div>
        </div>

        <div className="imdb-votes">
          <span className="badge bg-secondary">
            <Users size={14} className="me-1" />
            {formattedVotes} votes
          </span>
        </div>
      </div>
    </div>
  );
}
