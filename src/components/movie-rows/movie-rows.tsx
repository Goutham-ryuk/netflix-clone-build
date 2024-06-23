import { useEffect } from "react";
import { IMovieRows } from "./interface/movie-rows.interface";
import "./movie-rows.css";
import useNetflixOriginalMovies from "../../hooks/useNetflixMovieData";
import { baseImageURL } from "../../constants/imageURL";

export const MovieRows: React.FC<IMovieRows> = ({
  title,
  fetchURL,
  isLargeRow,
}) => {
  const { movies, fetchAllNetflixData } = useNetflixOriginalMovies();
  useEffect(() => {
    fetchAllNetflixData(fetchURL);
  }, [fetchAllNetflixData]);
  return (
    <div className="movie__rows">
      <h2>{title}</h2>
      <div className="movie__row__posters">
        {movies &&
          Object.keys(movies).map(
            (key) =>
              ((isLargeRow && (movies as any)[key].poster_path) ||
                (!isLargeRow && (movies as any)[key].backdrop_path)) && (
                <img
                  className={`movie__row__poster ${
                    isLargeRow && "movie__row__posterLarge"
                  }`}
                  key={`${(movies as any)[key].id}`}
                  src={`${baseImageURL}${
                    isLargeRow
                      ? (movies as any)[key].poster_path
                      : (movies as any)[key].backdrop_path
                  }`}
                  alt={`${(movies as any)[key].name}`}
                />
              )
          )}
      </div>
    </div>
  );
};
