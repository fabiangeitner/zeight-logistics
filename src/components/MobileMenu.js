import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  width: 100%;
  height: 50vh;
  background: red;
`;

export const MobileMenu = () => {
  return (
    <>
      <Wrapper>
        <h1>HALLO</h1>
      </Wrapper>
    </>
  );
};
