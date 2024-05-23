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
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;

  display: flex;
  align-items: center;
  gap: 10px;

  color: ${({ theme }) => theme.fonts.main};

  &.active {
    font-weight: 700;
    svg path {
      fill: ${({ theme }) => theme.svg.color};
    }
  }

  @media ${({ theme }) => theme.media.large} {
    span {
      display: none;
    }
  }
`;
