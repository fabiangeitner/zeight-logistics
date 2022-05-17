import React from "react";
import styled from "styled-components";
import { ContainerSektion, Button, ButtonText } from "../Style";

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const Headline = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 15;
  text-align: center;

  color: #fff;

  h1 {
    font-weight: 600;
    font-size: 60px;
  }

  h2 {
    font-weight: 200;
    font-size: 30px;
  }

  div {
    margin-bottom: 50px;
  }

  padding: 8vh 25px 50px 25px;

  @media (min-width: 768px) {
    padding: 8vh 50px 75px 50px;
  }

  @media (min-width: 992px) {
    padding: 8vh 50px 100px 50px;
  }
`;

const Img = styled.div`
  width: 100%;
  height: 100%;

  background-image: url("https://images.unsplash.com/photo-1446694292248-2c2a7e575b1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80");
  background-color: black;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.4;

  position: absolute;
  z-index: 5;

  padding: 8vh 25px 50px 25px;

  @media (min-width: 768px) {
    padding: 8vh 50px 75px 50px;
    opacity: 1;
  }

  @media (min-width: 992px) {
    padding: 8vh 50px 100px 50px;
  }
`;

const Overlay = styled.div`
  width: 100%;
  height: 100vh;
  background: #6a3b3e;
  opacity: 0.7;
  z-index: 10;
  position: absolute;
  bottom: 0;
`;

export const Home = () => {
  return (
    <div>
      <ContainerSektion>
        <Wrapper>
          <Headline>
            <div>
              <h1>Zeight Solutions GmbH</h1>
              <h2>we love to deliver you.</h2>
            </div>
            <Button>
              <ButtonText to="/" color="#fff">
                Service
              </ButtonText>
            </Button>
          </Headline>
          <Img />
        </Wrapper>
        <Overlay />
      </ContainerSektion>
    </div>
  );
};
