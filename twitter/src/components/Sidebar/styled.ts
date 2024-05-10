import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

export const SidebarContainer = styled.aside`
  width: 270px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 20px;

  border-right: 1px solid black;
`;

export const NavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 30px;
`;

export const StyledNavLink = styled(NavLink)`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 21px;

  color: #000000;
`;
