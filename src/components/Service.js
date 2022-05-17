import styled from "styled-components";
import { MdLocalShipping, MdDirectionsBoatFilled } from "react-icons/md";
import { RiPlaneLine } from "react-icons/ri";
import { FaWarehouse } from "react-icons/fa";

const Wrapper = styled.div`
  background: #fff;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  padding: 25px;

  @media (min-width: 768px) {
    padding: 50px;
    flex-direction: row;
  }

  @media (min-width: 992px) {
    padding: 100px;
  }
`;

const ServiceItem = styled.div`
  text-align: center;
  border: 1px solid lightgrey;
  border-radius: 5px;
  width: 80%;
  padding: 25px;
  transition: all 0.3s ease-in-out;

  margin-bottom: 10%;
  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    transform: none;
  }

  h2 {
    text-transform: uppercase;
    font-size: 15px;
  }

  @media (min-width: 768px) {
    width: 20%;
    margin-bottom: 0;
    &:hover {
      transform: scale(1.1);
    }
  }
`;

const TransportIcon = styled(MdLocalShipping)`
  font-size: 100px;
  margin-bottom: 5%;
  color: #6a3b3e;

  @media (min-width: 768px) {
    font-size: 50px;
    margin-bottom: 10%;
  }
`;
const LuftIcon = styled(RiPlaneLine)`
  font-size: 100px;
  margin-bottom: 5%;
  color: #6a3b3e;

  @media (min-width: 768px) {
    font-size: 50px;
    margin-bottom: 10%;
  }
`;
const SeeIcon = styled(MdDirectionsBoatFilled)`
  font-size: 100px;
  margin-bottom: 5%;
  color: #6a3b3e;

  @media (min-width: 768px) {
    font-size: 50px;
    margin-bottom: 10%;
  }
`;
const LogistikIcon = styled(FaWarehouse)`
  font-size: 100px;
  margin-bottom: 5%;
  color: #6a3b3e;

  @media (min-width: 768px) {
    font-size: 50px;
    margin-bottom: 10%;
  }
`;

export const Service = () => {
  return (
    <div>
      <Wrapper>
        <ServiceItem>
          <TransportIcon />
          <h2>Transport</h2>
        </ServiceItem>
        <ServiceItem>
          <LuftIcon />
          <h2>Luftfracht</h2>
        </ServiceItem>
        <ServiceItem>
          <SeeIcon />
          <h2>Seefracht</h2>
        </ServiceItem>
        <ServiceItem>
          <LogistikIcon />
          <h2>Logistik</h2>
        </ServiceItem>
      </Wrapper>
    </div>
  );
};
