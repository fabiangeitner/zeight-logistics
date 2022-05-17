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

  @media (min-width: 576px) {
    flex-direction: row;
  }

  @media (min-width: 768px) {
    padding: 25px 50px;
  }

  @media (min-width: 992px) {
    padding: 25px 100px;
  }
`;

const FooterNav = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  width: 100%;
  text-align: center;
  row-gap: 20px;

  @media (min-width: 768px) {
    width: 30%;
    flex-flow: row wrap;
  }

  @media (min-width: 1100px) {
    width: 20%;
  }
`;

const FooterLink = styled(Link)`
  list-style: none;
  text-decoration: none;
  color: #000;
`;

export const Footer = () => {
  return (
    <div>
      <FooterContainer>
        <div>© 2022 Fabgei</div>
        <FooterNav>
          <FooterLink to="/impressum">Impressum</FooterLink>
          <FooterLink to="/datenschutz">Datenschutz</FooterLink>
        </FooterNav>
      </FooterContainer>
    </div>
  );
};
