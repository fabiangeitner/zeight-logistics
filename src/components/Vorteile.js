import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  width: 100%;
`;

const HeadlineBox = styled.div`
  width: 100%;
  height: auto;
  background-color: #20a4f3;

  color: #fff;

  @media (min-width: 768px) {
    width: 50%;
    background-color: #0a1128;
  }
`;

const Info = styled.div`
  width: 100%;
  height: 50%;

  padding: 25px;

  h1 {
    font-size: 60px;
    font-weight: 600;
  }
  h2 {
    font-size: 30px;
  }

  @media (min-width: 768px) {
    padding: 50px;
    height: 50%;
  }

  @media (min-width: 992px) {
    padding: 100px;
  }
`;
const InfoImg = styled.div`
  display: none;
  background-image: url("https://images.unsplash.com/photo-1446694292248-2c2a7e575b1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80");
  background-color: black;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  opacity: 0.4;

  @media (min-width: 768px) {
    display: block;
    width: 100%;
    height: 50%;
  }
`;

const VorteileBox = styled.ol`
  background-color: #20a4f3;
  color: #fff;
  width: 100%;
  height: auto;

  li {
    padding-bottom: 5%;
    list-style: decimal-leading-zero inside;
    font-size: 20px;
    font-weight: 600;

    &:last-child {
      padding-bottom: 0;
    }

    h3 {
      text-transform: uppercase;
      font-size: 20px;
      font-weight: 600;
      padding-bottom: 1%;
    }
    p {
      font-weight: 200;
    }
  }

  padding: 25px;

  @media (min-width: 768px) {
    padding: 50px;
    width: 50%;
  }

  @media (min-width: 992px) {
    padding: 100px;
  }
`;

export const Vorteile = () => {
  return (
    <>
      <Wrapper>
        <HeadlineBox>
          <Info>
            <h1>Warum Wir?</h1>
            <h2>Mache die nächsten Schritte mit uns!</h2>
          </Info>
          <InfoImg></InfoImg>
        </HeadlineBox>
        <VorteileBox>
          <li>
            <h3>schnelle Umsetzung</h3>
            <p>Flexible und schnelle Umsetzung Ihrer Anforderungen</p>
          </li>
          <li>
            <h3>Verfügbarkeit</h3>
            <p>24h/Tag, 7 Tage/Woche professionelle und persönliche Beratung</p>
          </li>
          <li>
            <h3>Kontrolle</h3>
            <p>
              Rundum-Sorglos-Paket: Übernahme des gesamten Organisations­ablaufs
              und Überwachung des Transports
            </p>
          </li>
          <li>
            <h3>Netzwerk</h3>
            <p>
              Gutes Preis-/­Leistungs­verhältnis aufgrund eines großen Netzwerks
              aus zuverlässigen Sub­unter­nehmern
            </p>
          </li>
          <li>
            <h3>Transportmöglichkeiten</h3>
            <p>
              Standardt­ransporte, Maschinen­transporte, Schwer­transporte,
              Sonder­transporte, Spezial­transporte, Übermaß­transporte,
              Gefahrengut­transporte (ADR), Stückgut­transporte,
              temperatur­geführte Transporte
            </p>
          </li>
        </VorteileBox>
      </Wrapper>
    </>
  );
};
