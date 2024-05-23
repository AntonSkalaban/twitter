import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

export const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  gap: 30px;

  @media ${({ theme }) => theme.media.extraSmall} {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    gap: 0;
  }
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
