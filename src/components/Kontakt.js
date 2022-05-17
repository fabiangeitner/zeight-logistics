import styled from "styled-components";

import { Headline, SubHeadline, Button } from "../Style";

const Sektion = styled.div`
  background-color: #20a4f3;
`;

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 25px;

  @media (min-width: 768px) {
    padding: 50px;
  }

  @media (min-width: 992px) {
    padding: 100px;
  }
`;

const Mail = styled.div`
  font-size: 25px;
  margin-bottom: 5%;
  color: #fff;

  @media (min-width: 768px) {
    font-size: 40px;
  }
`;

export const Kontakt = () => {
  return (
    <>
      <Sektion>
        <Headline color="#fff">Kontakt</Headline>
        <SubHeadline color="#fff">
          Kontaktieren Sie uns schnell und einfach!
        </SubHeadline>
        <Wrapper>
          <Mail>info@zeight-solutions.com</Mail>
          <Button color="#fff">Kontakt aufnehmen</Button>
        </Wrapper>
      </Sektion>
    </>
  );
};
