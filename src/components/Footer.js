import React from "react";
import styled from "styled-components";

const FooterContainer = styled.div`
  width: 100%;
  min-height: 25vh;
  background-color: pink;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 576px) {
    flex-direction: row;
  }
`;

export const Footer = () => {
  return (
    <div>
      <FooterContainer>
        <div>CREATION</div>
        <div>FOOTER</div>
        <div>NAVIGATION</div>
      </FooterContainer>
    </div>
  );
};
