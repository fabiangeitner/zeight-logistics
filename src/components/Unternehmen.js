import styled from "styled-components";
import { ContainerSektion, Headline, SubHeadline } from "../Style";

const Wrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  row-gap: 30px;

  padding: 25px;

  @media (min-width: 768px) {
    padding: 50px;
  }

  @media (min-width: 992px) {
    padding: 100px;
  }
`;

const Row = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  row-gap: 50px;
  width: 100%;
`;

const UnternehemnsText = styled.div`
  width: 100%;
  @media (min-width: 768px) {
    width: 50%;
    padding: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
const UnternehmenImg = styled.div`
  width: 100%;
  height: 50vh;

  background-image: url("https://images.unsplash.com/photo-1620306677888-10e367e6293d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80");
  background-color: black;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  @media (min-width: 768px) {
    width: 50%;
  }
`;
const MitarbeiterImg = styled.div`
  width: 100%;
  display: none;
  @media (min-width: 768px) {
    width: 50%;
    height: 50vh;
    display: block;

    background-image: url("https://images.unsplash.com/photo-1577075473292-5f62dfae5522?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80");
    background-color: black;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
`;

export const Unternehmen = () => {
  return (
    <div>
      <ContainerSektion>
        <Headline>Unternehmen</Headline>
        <SubHeadline>Seit dem Jahr 2004 an Ihrer Seite!</SubHeadline>
        <Wrapper>
          <Row>
            <UnternehemnsText>
              <p>
                Das Unternehmen Zeight Solutions GmbH, verfügen über 20 Jahre
                Erfahrung in der Logistikbranche und haben dabei
                anspruchsvollste Projekte für namhafte Kunden der weltweiten
                Öl-, Gas-, Pharma- und Bauindustrie erfolgreich umgesetzt. Das
                Unternehmen Zeight Solutions ist in der Branche der
                Transportfracht, Seefracht und Luftfracht ein starkes Gewicht,
                sowie für die Kunden die Garantie für eine saubere und
                reibungslose Abwicklung. Im Laufe der Jahre kamen zahlreiche
                Projekte – darunter Spezialtransporte, Schwertransporte und
                Sondertransporte – über sämtliche Verkehrswege, in die ganze
                Welt hinzu. Die Leidenschaft, mit der die Unternehmer sich Ihrem
                Metier widmeten, machte sie rasch zu wertvollen Partnern Ihrer
                Kunden. Logische Konsequenz der stetig steigenden Nachfrage war
                die weltweite Erweiterung des Unternehmens. Durch viele Aufträge
                überall auf dem Kontinent verteilt, ist ein mehrsprachiges Team
                Pflicht. Neben den Sprachen Englisch, Italienisch, Französisch
                und Deutsch wird auch fließend Arabisch gesprochen. Das
                Unternehmen ist auf den europäischen und weltweiten Transport
                von Kraftfahrzeugen, Baumaschinen, Container und
                Schwertransporte spezialisiert.
              </p>
            </UnternehemnsText>
            <UnternehmenImg />
          </Row>
          <Row>
            <MitarbeiterImg />
            <UnternehemnsText>
              <p>
                Die Maxime von Zeight Solutions bleibt die Erkenntnis:
                Erfolgreiche Speditionslogistik bedeutet für den Kunden vor
                allem Sicherheit. Die Sicherheit, dass der Transport unversehrt
                und termingerecht den Zielort erreicht. Aber auch die Sicherheit
                des fairen Preises. Oder auch die Sicherheit eines
                umweltbewussten Handelns. Und nicht zuletzt die Sicherheit, es
                mit erfahrenen Profis zu tun zu haben, die die Komplexität eines
                Projektes nicht nur überblicken, sondern sie auch jederzeit im
                Griff haben.
              </p>
            </UnternehemnsText>
          </Row>
        </Wrapper>
      </ContainerSektion>
    </div>
  );
};
