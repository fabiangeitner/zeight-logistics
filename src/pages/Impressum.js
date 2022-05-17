import React from "react";
import styled from "styled-components";

const ImpressumWrapper = styled.div`
  width: 100vw;
  height: 90vh;
  padding: 8vh 25px 8vh 25px;

  @media (min-width: 768px) {
    padding: 8vh 50px;
  }

  @media (min-width: 992px) {
    padding: 8vh 100px;
  }
`;

const Headline = styled.h2`
  font-size: 30px;
  font-weight: 600;
  padding: 50px 25px;
  text-align: center;
  color: ${(props) => props.color};

  @media (min-width: 768px) {
    padding: 50px;
  }

  @media (min-width: 992px) {
    padding: 100px 50px;
  }
`;

const Box = styled.div`
  margin-bottom: 50px;
  text-align: center;

  h4 {
    font-size: 18px;
    margin-bottom: 15px;
  }

  p {
    font-size: 14px;
  }
`;

export const Impressum = () => {
  return (
    <>
      <ImpressumWrapper>
        <Headline>Impressum</Headline>
        <Box>
          <h4>Angaben gemäß §5 TMG</h4>
          <p>Zeight Solutions GmbH</p>
          <p>Siebring 5</p>
          <p>37589 Kalefeld</p>
        </Box>
        <Box>
          <h4>Kontakt</h4>
          <p>Tel: 0135 / 847621</p>
          <p>Mail: info@zeight-solutions.com</p>
        </Box>
        <Box>
          <p>Amtsgericht Hannover</p>
          <p>Umsatzsteuer ID-Nr.: DE 216 983 121</p>
        </Box>
      </ImpressumWrapper>
    </>
  );
};
