import React from "react";
import styled from "styled-components";
import { ContainerSektion, Button, ButtonText } from "../Style";
//Image
import TruckImg from "../utils/home-truck.jpg";

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

  background-image: url(${TruckImg});
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
  background: #20a4f3;
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
              <ButtonText to="/" color="#fff" border="#fff">
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
