import "./banner.css";
import useNetflixOriginalMovies from "../../hooks/useNetflixMovieData";
import { truncateDescription } from "./banner.service";
import { useEffect } from "react";
import { baseImageURL } from "../../constants/imageURL";

export const Banner: React.FC = () => {
  const { randomMovies, fetchNetflixOriginals } = useNetflixOriginalMovies();

  useEffect(() => {
    fetchNetflixOriginals();
  }, [fetchNetflixOriginals]);

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url(${baseImageURL}${randomMovies?.backdrop_path})`,
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {randomMovies?.name || randomMovies?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {truncateDescription(randomMovies?.overview, 150)}
        </h1>
      </div>
      <div className="banner__fadeBottom" />
    </header>
  );
};
