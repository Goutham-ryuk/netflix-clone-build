import { Banner } from "../banner/banner";
import { netflixMovieRequests } from "../connections/netflixMovieRequests";
import { MovieRows } from "../movie-rows/movie-rows";
import NavBar from "../nav-bar/nav-bar";
import "./home-screen.css";

const HomeScreen: React.FunctionComponent = () => {
  return (
    <div className="homeScreen">
      <NavBar />
      <Banner />
      <MovieRows
        title="Netflix Originals"
        fetchURL={netflixMovieRequests.fetchNetflixOriginals}
        isLargeRow
      />
      <MovieRows
        title="Top Rated"
        fetchURL={netflixMovieRequests.fetchTrending}
      />
      <MovieRows
        title="Action Movies"
        fetchURL={netflixMovieRequests.fetchTopRated}
      />
      <MovieRows
        title="Comedy Movies"
        fetchURL={netflixMovieRequests.fetchComedyMovies}
      />
      <MovieRows
        title="Horror Movies"
        fetchURL={netflixMovieRequests.fetchHorrorMovies}
      />
      <MovieRows
        title="Romance Movies"
        fetchURL={netflixMovieRequests.fetchRomanceMovies}
      />
      <MovieRows
        title="Documentaries"
        fetchURL={netflixMovieRequests.fetchDocumentaries}
      />
    </div>
  );
};

export default HomeScreen;
