import { Banner } from "../Banner/banner";
import NavBar from "../nav-bar/nav-bar";
import "./home-screen.css";

const HomeScreen: React.FunctionComponent = () => {
  return (
    <div className="homeScreen">
      <NavBar />
      <Banner />
    </div>
  );
};

export default HomeScreen;
