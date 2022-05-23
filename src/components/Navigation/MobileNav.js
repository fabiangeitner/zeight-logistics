import { Link } from "react-router-dom";
import styled from "styled-components";

const Navigation = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;

const WrapperMobileNav = styled.ul`
  @media (max-width: 768px) {
    height: 100vh;
    width: 30%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    margin: 0;
    padding-top: 5vh;
    transform: ${({ open }) => (open ? "translateX(0%)" : "translateX(300%)")};
    transition: transform 0.3s ease-in-out;
    background-image: url("https://images.unsplash.com/photo-1643649842310-b89bcdb3832c?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1674");
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    filter: grayscale(100%);
    z-index: 10;
  }
`;

const Ul = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 800;
  list-style: none;

  @media (max-width: 768px) {
    height: 100vh;
    width: 70%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    margin: 0;
    padding-top: 5vh;
    position: fixed;
    top: 0;
    right: 0;
    background-color: #fff;
    transform: ${({ open }) => (open ? "translateX(0%)" : "translateX(100%)")};
    transition: transform 0.3s ease-in-out;
    z-index: 10;
  }
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  margin: 0 25px;
  color: #000;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  z-index: 13;

  :hover {
    padding-bottom: 0.5em;
    border-bottom: 2px solid #20a4f3;
  }
  @media (max-width: 768px) {
    margin: 25px 0;
    padding-left: 50px;
    font-size: 20px;

    :hover {
      padding-bottom: 0;
      border-bottom: none;
    }
  }
`;

const Privacy = styled.div`
  width: 100%;
  display: none;
  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
`;

const MobileNav = ({ open, setOpen }) => {
  const handleLink = () => {
    setOpen(!open);
  };

  return (
    <Navigation>
      <WrapperMobileNav open={open} />
      <Ul open={open}>
        <NavLink to="/" open={open} onClick={handleLink}>
          Startseite
        </NavLink>
        <NavLink to="/service" open={open} onClick={handleLink}>
          Service
        </NavLink>
        <NavLink to="/unternehmen" open={open} onClick={handleLink}>
          Unternehmen
        </NavLink>
        <NavLink to="/karriere" open={open} onClick={handleLink}>
          Karriere
        </NavLink>
        <NavLink to="/kontakt" open={open} onClick={handleLink}>
          Kontakt
        </NavLink>
        <Privacy>
          <NavLink open={open} onClick={handleLink} to="/impressum">
            Impressum
          </NavLink>
          <NavLink open={open} onClick={handleLink} to="/datenschutz">
            Datenschutz
          </NavLink>
        </Privacy>
      </Ul>
    </Navigation>
  );
};

export default MobileNav;
