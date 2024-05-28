import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { navLinks } from "./constants";
import { StyledNav, StyledNavLink } from "./styled";
export const Nav = () => {
    return (_jsx(StyledNav, { children: navLinks.map(({ name, logo, path }) => (_jsxs(StyledNavLink, { to: "/" + path, children: [logo, " ", _jsx("span", { children: name })] }, name))) }));
};
