import { useEffect, useRef } from "react";
import { MovieDetailInfoContainer } from "@/components/movie-detail/info-group/MovieDetailInfoContainer";

import "@/components/movie-detail/content/MovieDetailContent.scss";

interface MovieDetailContentProps {
  poster: string;
  title: string;
  plot: string;
  duration: string;
  genre: string;
  director: string;
  cast: string;
  released: string;
}

export const MovieDetailContent = ({
  poster,
  title,
  plot,
  duration,
  genre,
  director,
  cast,
  released,
}: MovieDetailContentProps) => {
  const plotRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (plotRef.current?.scrollTop && plotRef.current.scrollTop > 10) {
      plotRef.current?.classList.add("scrolled");
    } else {
      plotRef.current?.classList.remove("scrolled");
    }
  };

  useEffect(() => {
    const plotElement = plotRef.current;
    if (!plotElement) return;

    plotElement.addEventListener("scroll", handleScroll);

    return () => {
      plotElement.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <div className="movie-detail-content">
        <div className="movie-detail-content-poster">
          <img src={poster} alt={title} className="img-fluid" />
        </div>
        <div className="movie-detail-content-info">
          <div className="movie-detail-content-info-plot" ref={plotRef}>
            <p>{plot}</p>
          </div>
          <div className="d-none d-lg-block">
            <MovieDetailInfoContainer
              duration={duration}
              genre={genre}
              director={director}
              cast={cast}
              released={released}
            />
          </div>
        </div>
      </div>
      <div className="d-lg-none">
        <MovieDetailInfoContainer
          duration={duration}
          genre={genre}
          director={director}
          cast={cast}
          released={released}
        />
      </div>
    </>
  );
};
