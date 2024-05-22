import { navLinks } from "./constants";
import { StyledNav, StyledNavLink } from "./styled";

export const Nav = () => {
  return (
    <StyledNav>
      {navLinks.map(({ name, logo, path }) => (
        <StyledNavLink key={name} to={"/" + path}>
          {logo} {name}
        </StyledNavLink>
      ))}
    </StyledNav>
  );
};
