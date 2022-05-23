import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const FooterContainer = styled.div`
  width: 100%;
  height: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 25px;

  @media (min-width: 768px) {
    padding: 25px 50px;
    flex-direction: row;
  }

  @media (min-width: 992px) {
    padding: 25px 100px;
  }
`;

const Creation = styled.div`
  width: 100%;
  flex-direction: row;
  display: flex;
  justify-content: center;

  @media (min-width: 768px) {
    width: 70%;
  }

  @media (min-width: 1100px) {
    width: 80%;
  }
`;

const FooterNav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 30%;
  text-align: center;

  @media (min-width: 768px) {
    width: 30%;
  }

  @media (min-width: 1100px) {
    width: 20%;
  }
`;

const FooterLink = styled(Link)`
  list-style: none;
  text-decoration: none;
  color: #000;
  margin: 25px;
`;

export const Footer = () => {
  return (
    <div>
      <FooterContainer>
        <Creation>© 2022 Fabgei</Creation>
        <FooterNav>
          <FooterLink to="/impressum">Impressum</FooterLink>
          <FooterLink to="/datenschutz">Datenschutz</FooterLink>
        </FooterNav>
      </FooterContainer>
    </div>
  );
};
