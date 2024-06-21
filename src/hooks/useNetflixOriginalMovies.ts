import { useEffect, useState } from "react";
import { IMovieResults } from "../components/Banner/interface/banner.interface";
import axios from "../components/connections/axios";
import { netflixMovieRequests } from "../components/connections/netflixMovieRequests";

const useNetflixOriginalMovies = () => {
  const [movie, setMovie] = useState<IMovieResults | undefined>(undefined);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const request = await axios.get(
          netflixMovieRequests.fetchNetflixOriginals
        );
        const randomIndex = Math.floor(
          Math.random() * request.data.results.length
        );
        setMovie(request.data.results[randomIndex]);
      } catch (error) {
        console.log("Error fetching data");
      }
    };

    fetchData();
  }, []);

  return { movie };
};

export default useNetflixOriginalMovies;
