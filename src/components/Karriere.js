import styled from "styled-components";

import { Headline, SubHeadline, Button } from "../Style";

const Sektion = styled.div`
  background-color: #0a1128;
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

const Stellenbeschreibung = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  width: 70%;

  padding-bottom: 3%;
  border-bottom: 1px solid #fff;

  margin-bottom: 5%;
  &:last-child {
    margin-bottom: 0%;
    padding-bottom: 0%;

    border-bottom: none;
  }
`;

const Stelle = styled.h4`
  width: 100%;
  color: #fff;
  margin-bottom: 5%;
  @media (min-width: 768px) {
    width: 50%;
    margin-bottom: 0;
  }
`;

export const Karriere = () => {
  return (
    <>
      <Sektion>
        <Headline color="#fff">Karriere</Headline>
        <SubHeadline color="#fff">Werde Teil unseres Teams!</SubHeadline>
        <Wrapper>
          <Stellenbeschreibung>
            <Stelle>Leiter Disponent - Fachbereich: Seefracht (m/w/d)</Stelle>
            <Button color="#fff">Jetzt Bewerben</Button>
          </Stellenbeschreibung>
          <Stellenbeschreibung>
            <Stelle>
              Fachkraft für Buchhaltung und Rechnungswesen (m/w/d)
            </Stelle>
            <Button color="#fff">Jetzt Bewerben</Button>
          </Stellenbeschreibung>
          <Stellenbeschreibung>
            <Stelle>Ausbildung - Fachkraft für Lagerlogistik (m/w/d)</Stelle>
            <Button color="#fff">Jetzt Bewerben</Button>
          </Stellenbeschreibung>
        </Wrapper>
      </Sektion>
    </>
  );
};
