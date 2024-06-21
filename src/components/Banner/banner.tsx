import { useEffect, useState } from "react";
import NetflixBanner from "../../attachments/NetflixBanner.png";
import "./banner.css";
import axios from "../connections/axios";
import { netflixMovieRequests } from "../connections/netflixMovieRequests";
import { IMovieResults } from "./interface/banner.interface";
import useNetflixOriginalMovies from "../../hooks/useNetflixOriginalMovies";
import { truncateDescription } from "./banner.service";

export const Banner: React.FC = () => {
  const { movie } = useNetflixOriginalMovies();

  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">{movie?.name || movie?.original_name}</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {truncateDescription(movie?.overview, 150)}
        </h1>
      </div>
      <div className="banner__fadeBottom" />
    </header>
  );
};
