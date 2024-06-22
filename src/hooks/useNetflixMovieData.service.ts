import { IMovieResults } from "../components/banner/interface/banner.interface";
import axios from "../components/connections/axios";
import { INetflixMovieRequestInterface } from "../interface/netflixMovieRequests.interface";

export const fetchNetflixOriginal = async (
  requests: string
): Promise<IMovieResults> => {
  const request = await axios.get(requests);
  const randomIndex = Math.floor(Math.random() * request.data.results.length);
  return request.data.results[randomIndex];
};

export const fetchNetflixMovieData = async (
  requests: string,
  fetchAll?: boolean
): Promise<IMovieResults> => {
  const request = await axios.get(requests);
  const randomIndex = Math.floor(Math.random() * request.data.results.length);
  return fetchAll ? request.data.results : request.data.results[randomIndex];
};
