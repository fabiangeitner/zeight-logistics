import React, { useState } from "react";
import styled from "styled-components";
// Component
import MobileNav from "./MobileNav";

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  right: 50px;
  z-index: 20;
  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    top: 15px;
  }
  span {
    top: 50px;
    background-color: ${({ open }) => (open ? "#20a4f3" : "#20a4f3")};
    border-radius: 5px;
    transform-origin: 1px;
    transition: all 0.3s linear;
    &:nth-child(1) {
      transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
      width: 2rem;
      height: 3px;
      right: 0;
    }
    &:nth-child(2) {
      transform: ${({ open }) => (open ? "translateY(100%)" : "translateY(0)")};
      opacity: ${({ open }) => (open ? 0 : 1)};
      width: 1rem;
      height: 3px;
    }
    &:nth-child(3) {
      transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
      width: 2rem;
      height: 3px;
    }
  }
`;

export const Burgermenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledBurger open={open} onClick={() => setOpen(!open)}>
        <span />
        <span />
        <span />
      </StyledBurger>
      <MobileNav open={open} onClick={() => setOpen(!open)} />
    </>
  );
};
