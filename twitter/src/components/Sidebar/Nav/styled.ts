import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

export const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 30px;
`;

export const StyledNavLink = styled(NavLink)`
  font-family: "Roboto";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;

  color: #000000;

  display: flex;
  align-items: center;
  gap: 10px;

  &.active {
    font-weight: 700;
    svg {
      fill: red;
    }
  }
`;
