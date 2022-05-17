import React from "react";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 10vh;
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

  padding: 0 50px 0 50px;

  @media (min-width: 768px) {
    padding: 0 50px 0 50px;
  }
  @media (min-width: 992px) {
    padding: 0 50px 0 50px;
  }
`;

const Logo = styled.div`
  background-image: url("https://pngimage.net/wp-content/uploads/2018/06/simbolo-logistica-png-.png");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  width: 5%;
  height: 70px;
`;
const Nav = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style: none;
  min-width: 40%;

  color: #6a3b3e;
  font-weight: 400;
  font-size: 14px;
`;

export const Header = () => {
  return (
    <div>
      <Container>
        <Logo></Logo>
        <Nav>
          <li>Startseite</li>
          <li>Service</li>
          <li>Unternehmen</li>
          <li>Karriere</li>
          <li>Kontakt</li>
        </Nav>
      </Container>
    </div>
  );
};
