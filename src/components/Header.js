import { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
//Image
import LogoImg from "../utils/logo.png";
//Icon
import { GiHamburgerMenu } from "react-icons/gi";
import { MobileMenu } from "./MobileMenu";

const Container = styled.div`
  width: 100%;
  height: 8vh;
  background: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  z-index: 100;

  padding: 0 25px;

  @media (min-width: 768px) {
    padding: 0 50px;
  }

  @media (min-width: 992px) {
    padding: 0 100px;
  }
`;

const Logo = styled(Link)`
  background-image: url(${LogoImg});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  cursor: pointer;

  width: 7%;
  height: 40px;
`;
const Nav = styled.ul`
  display: flex;
  justify-content: flex-end;
  list-style: none;
  width: 50%;
  margin: 3px;

  @media (min-width: 992px) {
    justify-content: space-between;
    width: 50%;
  }
  @media (min-width: 1200px) {
    width: 40%;
  }
`;

const NavLink = styled(Link)`
  color: #0a1128;
  font-weight: 400;
  text-decoration: none;
  display: none;

  &:hover {
    opacity: 0.5;
  }

  @media (min-width: 768px) {
    display: block;
  }
`;

const BurgerMenu = styled(GiHamburgerMenu)`
  font-size: 30px;
  color: #0a1128;
  display: flex;
  @media (min-width: 768px) {
    display: none;
  }
`;

export const Header = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <div>
      <Container>
        <Logo to="/" />
        <Nav>
          <NavLink to="/">Startseite</NavLink>
          <NavLink to="/service">Service</NavLink>
          <NavLink to="/unternehmen">Unternehmen</NavLink>
          <NavLink to="/karriere">Karriere</NavLink>
          <NavLink to="/kontakt">Kontakt</NavLink>
          <BurgerMenu onClick={() => setMobileMenu(!mobileMenu)} />
        </Nav>
      </Container>
    </div>
  );
};
