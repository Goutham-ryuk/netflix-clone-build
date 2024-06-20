import React, { useEffect, useState } from "react";
import {
  NavBarContainer,
  ImageParentContainer,
  avatarStyle,
  netflixLogoStyle,
} from "./nav-bar.styled";
import NetflixLogo from "../../attachments/NetflixLogo.jpg";
import Avatar from "../../attachments/Avatar.png";

const NavBar = () => {
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
    <NavBarContainer showBackgroundColor={isNavBarVisible}>
      <ImageParentContainer>
        <img src={NetflixLogo} alt="Netflix Logo" style={netflixLogoStyle} />
        <img src={Avatar} alt="Avatar" style={avatarStyle} />
      </ImageParentContainer>
    </NavBarContainer>
  );
};

export default NavBar;
