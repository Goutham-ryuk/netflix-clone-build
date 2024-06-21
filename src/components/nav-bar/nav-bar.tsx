import React, { useEffect, useState } from "react";
import NetflixLogo from "../../attachments/NetflixLogo.jpg";
import Avatar from "../../attachments/Avatar.png";
import "./nav-bar.css";

const NavBar: React.FC = () => {
  const [isNavBarVisible, setNavBarVisible] = useState(false);

  const handleScroll = () => {
    setNavBarVisible(window.scrollY > 100);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`nav ${!isNavBarVisible && `nav__black`}`}>
      <div className="nav__contents">
        <img className="nav__logo" src={NetflixLogo} alt="Netflix Logo" />
        <img className="nav__avatar" src={Avatar} alt="Avatar" />
      </div>
    </div>
  );
};

export default NavBar;
