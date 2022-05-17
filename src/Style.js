import styled from "styled-components";
import { Link } from "react-router-dom";

export const ContainerSektion = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.div``;

export const ButtonText = styled(Link)`
  padding: 8px 40px;
  border: 1px solid #fff;
  color: ${(props) => props.color};
  text-decoration: none;

  &:hover {
    background: #fff;
    color: #6a3b3e;
    transition: all 0.4s ease-in-out;
  }
`;

export const Headline = styled.h2`
  font-size: 30px;
  font-weight: 600;
  padding: 50px 25px 5px 25px;
  text-align: center;
  color: ${(props) => props.color};

  @media (min-width: 768px) {
    padding: 50px 50px 5px 50px;
  }

  @media (min-width: 992px) {
    padding: 100px 50px 5px 50px;
  }
`;

export const SubHeadline = styled.h3`
  font-size: 18px;
  font-weight: 200;
  padding: 0px 25px 25px 25px;
  text-align: center;
  color: ${(props) => props.color};

  @media (min-width: 768px) {
    padding: 0px 50px 25px 50px;
  }

  @media (min-width: 992px) {
    padding: 0px 50px 25px 50px;
  }
`;
