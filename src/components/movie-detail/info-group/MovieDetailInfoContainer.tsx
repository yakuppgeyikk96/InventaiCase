import { Calendar, User, Users } from "lucide-react";
import { Film } from "lucide-react";

import { Clock } from "lucide-react";
import { MovieDetailInfo } from "@/components/movie-detail/info-item/MovieDetailInfo";

import "@/components/movie-detail/info-group/MovieDetailInfoContainer.scss";

interface MovieDetailInfoContainerProps {
  duration: string;
  genre: string;
  director: string;
  cast: string;
  released: string;
}

export const MovieDetailInfoContainer = ({
  duration,
  genre,
  director,
  cast,
  released,
}: MovieDetailInfoContainerProps) => {
  return (
    <div className="movie-detail-info-container">
      <div className="row row-gap-3">
        <div className="col-12 col-sm-4">
          <MovieDetailInfo
            icon={<Clock size={20} />}
            label="Duration"
            value={duration}
          />
        </div>
        <div className="col-12 col-sm-4">
          <MovieDetailInfo
            icon={<User size={20} />}
            label="Director"
            value={director}
          />
        </div>
        <div className="col-12 col-sm-12">
          <MovieDetailInfo
            icon={<Users size={20} />}
            label="Cast"
            value={cast}
          />
        </div>
        <div className="col-12 col-sm-12">
          <MovieDetailInfo
            icon={<Film size={20} />}
            label="Genre"
            value={genre}
          />
        </div>
        <div className="col-12 col-sm-12">
          <MovieDetailInfo
            icon={<Calendar size={20} />}
            label="Released"
            value={released}
          />
        </div>
      </div>
    </div>
  );
};
