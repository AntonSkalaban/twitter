import { FC } from "react";

import { navLinks } from "./constants";
import { StyledNav, StyledNavLink } from "./styled";

export const Nav: FC = () => {
  return (
    <StyledNav>
      {navLinks.map(({ name, logo, path }) => (
        <StyledNavLink key={name} to={"/" + path}>
          {logo} <span>{name}</span>
        </StyledNavLink>
      ))}
    </StyledNav>
  );
};
