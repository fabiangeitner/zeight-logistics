import styled from "styled-components";

import { Headline, SubHeadline, Button, ButtonText } from "../Style";

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

  padding-bottom: 15%;
  border-bottom: 1px solid #fff;

  margin-bottom: 5%;

  &:last-child {
    padding-bottom: 0%;

    border-bottom: none;
  }

  @media (min-width: 768px) {
    padding-bottom: 5%;
  }
`;

const Stelle = styled.h4`
  width: 100%;
  color: #fff;
  margin-bottom: 10%;
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
            <Button>
              <ButtonText color="#fff" to="/">
                Jetzt Bewerben
              </ButtonText>
            </Button>
          </Stellenbeschreibung>
          <Stellenbeschreibung>
            <Stelle>
              Fachkraft für Buchhaltung und Rechnungswesen (m/w/d)
            </Stelle>
            <Button>
              <ButtonText color="#fff" to="/">
                Jetzt Bewerben
              </ButtonText>
            </Button>
          </Stellenbeschreibung>
          <Stellenbeschreibung>
            <Stelle>Ausbildung - Fachkraft für Lagerlogistik (m/w/d)</Stelle>
            <Button>
              <ButtonText color="#fff" to="/">
                Jetzt Bewerben
              </ButtonText>
            </Button>
          </Stellenbeschreibung>
        </Wrapper>
      </Sektion>
    </>
  );
};
