import styled from "styled-components";
import { MdLocalShipping, MdDirectionsBoatFilled } from "react-icons/md";
import { RiPlaneLine } from "react-icons/ri";
import { FaWarehouse } from "react-icons/fa";
import { Headline, SubHeadline } from "../Style";

const Wrapper = styled.div`
  background: #fff;
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

const ServiceItem = styled.div`
  text-align: center;
  border-radius: 5px;
  width: 100%;
  padding: 25px;
  transition: all 0.3s ease-in-out;

  &:hover {
    transform: none;
  }

  h2 {
    text-transform: uppercase;
    font-size: 20px;
    font-weight: 600;
    padding-bottom: 5%;
  }

  p {
    font-weight: 200;
  }

  @media (min-width: 576px) {
    width: 50%;
  }

  @media (min-width: 992px) {
    width: 25%;
    &:hover {
      transform: scale(1.1);
    }
  }
`;

const TransportIcon = styled(MdLocalShipping)`
  font-size: 50px;
  margin-bottom: 5%;
  color: #6a3b3e;
`;
const LuftIcon = styled(RiPlaneLine)`
  font-size: 50px;
  margin-bottom: 5%;
  color: #6a3b3e;
`;
const SeeIcon = styled(MdDirectionsBoatFilled)`
  font-size: 50px;
  margin-bottom: 5%;
  color: #6a3b3e;
`;
const LogistikIcon = styled(FaWarehouse)`
  font-size: 50px;
  margin-bottom: 5%;
  color: #6a3b3e;
`;

export const Service = () => {
  return (
    <>
      <Headline>Leistungen</Headline>
      <SubHeadline>Wir sind Spezialisten in unseren Fachbereichen!</SubHeadline>
      <Wrapper>
        <ServiceItem>
          <TransportIcon />
          <h2>Transport</h2>
          <p>
            Wir haben im europäischen Raum starke Partnerschaften für LKW-,
            Gefahrgut- und High & Heavy-Transporte aufgebaut.
          </p>
        </ServiceItem>
        <ServiceItem>
          <LuftIcon />
          <h2>Luftfracht</h2>
          <p>
            Luftfracht bietet Ihnen die Flexibilität und Geschwindigkeit. Ihr
            Fahrzeug, schnell, sicher und zuverlässig an jeden Flughafen
            weltweit.
          </p>
        </ServiceItem>
        <ServiceItem>
          <SeeIcon />
          <h2>Seefracht</h2>
          <p>
            RoRo ( Roll on Roll off) & Vollcontainer (FCL) bis hin zur
            Sammelladung (LCL)Verschiffungen mit 20 Jahren Erfahrung!
          </p>
        </ServiceItem>
        <ServiceItem>
          <LogistikIcon />
          <h2>Logistik</h2>
          <p>
            Aufgrund ausgewählter Partner ist unsere Spedition in der Lage, Ihre
            Ware auch langfristig einzulagern.
          </p>
        </ServiceItem>
      </Wrapper>
    </>
  );
};
