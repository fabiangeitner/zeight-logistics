import styled from "styled-components";
import { Headline, SubHeadline, Button } from "../Style";
//Image
import KontaktImg from "../utils/contact-plane.jpg";

const Sektion = styled.div`
  background-color: #20a4f3;
  background-image: url(${KontaktImg});
  background-color: white;
  background-position: bottom;
  background-repeat: no-repeat;
  background-size: cover;
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
    padding: 25px 50px 50px 50px;
  }

  @media (min-width: 992px) {
    padding: 25px 100px 100px 100px;
  }
`;

const ButtonTextMail = styled.div`
  padding: 8px 40px;
  border: 1px solid #0a1128;
  color: #0a1128;
  text-decoration: none;
  cursor: pointer;

  &:hover {
    background: #fff;
    border: 1px solid #fff;
    color: #0a1128;
    transition: all 0.4s ease-in-out;
  }
`;

export const Kontakt = () => {
  return (
    <>
      <Sektion>
        <Headline color="#0a1128">Kontakt</Headline>
        <SubHeadline color="#0a1128">
          Kontaktieren Sie uns schnell und einfach!
        </SubHeadline>
        <Wrapper>
          <Button>
            <ButtonTextMail
              color="#fff"
              onClick={() => (window.location = "mailto:fabian-geitner@web.de")}
            >
              Kontakt aufnehmen
            </ButtonTextMail>
          </Button>
        </Wrapper>
      </Sektion>
    </>
  );
};
