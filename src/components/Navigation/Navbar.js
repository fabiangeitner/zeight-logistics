import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
// CSS
import "./Navbar.css";
// Image
import LogoImg from "../../utils/logo.png";
// Component
import { Burgermenu } from "./Burgermenu";

const Nav = styled.nav`
  width: 100vw;
  height: 8vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  padding: 0 50px;
  background-color: #fff;
  z-index: 23;
  /* @media (max-width: 768px) {
  } */
`;

export const LogoLink = styled(Link)`
  width: 10%;
  height: 50%;
  background-image: url(${LogoImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  text-decoration: none;
  transition: all 0.4s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.3);
  }
`;

export const Navbar = (open, handleLink) => {
  const [navbar, setNavbar] = useState(false);

  const changeBackground = () => {
    if (window.scrollY >= 100) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  window.addEventListener("scroll", changeBackground);

  return (
    <Nav className={navbar ? "header" : ""}>
      <LogoLink open={open} onClick={handleLink} to="/"></LogoLink>
      <Burgermenu />
    </Nav>
  );
};
