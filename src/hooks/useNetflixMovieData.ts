import { useCallback, useEffect, useState } from "react";
import { IMovieResults } from "../components/banner/interface/banner.interface";
import axios from "../components/connections/axios";
import { netflixMovieRequests } from "../components/connections/netflixMovieRequests";
import {
  fetchNetflixMovieData,
  fetchNetflixOriginal,
} from "./useNetflixMovieData.service";

interface INetflixOriginalMovies {
  randomMovies: IMovieResults | undefined;
  movies: IMovieResults | undefined;
  fetchNetflixOriginals: () => Promise<void>;
  fetchAllNetflixData: (fetchURL: string) => Promise<void>;
}

const useNetflixOriginalMovies = (): INetflixOriginalMovies => {
  const [randomMovies, setRandomMovies] = useState<IMovieResults | undefined>(
    undefined
  );
  const [movies, setMovies] = useState<IMovieResults | undefined>(undefined);

  const fetchNetflixOriginals = useCallback(async () => {
    try {
      const randomMovie = await fetchNetflixOriginal(
        netflixMovieRequests.fetchNetflixOriginals
      );
      setRandomMovies(randomMovie);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  }, []);

  const fetchAllNetflixData = useCallback(async (fetchURL: string) => {
    try {
      const allMovies = await fetchNetflixMovieData(fetchURL, true);
      setMovies(allMovies);
    } catch (error) {
      console.log("Error fetching data:", error);
    }
  }, []);
  return { movies, fetchNetflixOriginals, fetchAllNetflixData, randomMovies };
};

export default useNetflixOriginalMovies;
