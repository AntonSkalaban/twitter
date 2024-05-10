import { FC } from "react";

import { Button } from "styled/StyledComponents";

import { navLinks } from "./constants";
import { NavContainer, SidebarContainer, StyledNavLink } from "./styled";

export const Sidebar: FC = () => {
  return (
    <SidebarContainer>
      <NavContainer>
        {navLinks.map(({ name, path }) => (
          <StyledNavLink key={name} to={path}>
            {name}
          </StyledNavLink>
        ))}
      </NavContainer>
      <Button $color="blue">Tweet</Button>
    </SidebarContainer>
  );
};
