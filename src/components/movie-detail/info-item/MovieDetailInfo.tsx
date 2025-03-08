import { ReactNode } from "react";
import "@/components/movie-detail/info-item/MovieDetailInfo.scss";

interface MovieDetailInfoProps {
  icon: ReactNode;
  label: string;
  value: string;
}

export const MovieDetailInfo = ({
  icon,
  label,
  value,
}: MovieDetailInfoProps) => {
  return (
    <div className="movie-detail-info">
      <div className="movie-detail-info-icon">{icon}</div>
      <div className="movie-detail-info-content">
        <div className="movie-detail-info-label">{label}</div>
        <div className="movie-detail-info-value">{value}</div>
      </div>
    </div>
  );
};
