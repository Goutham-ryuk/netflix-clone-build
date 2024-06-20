import { styled } from "@mui/material";
import { CSSProperties } from "react";
import { NavBarProps } from "./interface/nav-bar.interface";

export const NavBarContainer = styled("div")<NavBarProps>(
  ({ theme, showBackgroundColor }) => ({
    position: "fixed",
    top: "0",
    padding: "20px",
    width: "100%",
    backgroundColor: !showBackgroundColor ? "#111" : "",
    height: "30px",
    zIndex: 1,
    transitionTimingFunction: "ease-in",
    transition: "all 0.5s",
  })
);

export const netflixLogoStyle: CSSProperties = {
  position: "fixed",
  left: "0px",
  top: "25px",
  width: "80px",
  cursor: "pointer",
  paddingLeft: "20px",
  objectFit: "contain",
};

export const avatarStyle: CSSProperties = {
  cursor: "pointer",
  position: "fixed",
  right: "20px",
  width: "30px",
};

export const ImageParentContainer = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
}));
