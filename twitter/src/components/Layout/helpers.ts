import { navLinks } from "components/Sidebar/Nav/constants";
import { PagePathsEnum } from "types/index";

export const getPageName = (pathname: string, userName: string) => {
  if (pathname === "/" + PagePathsEnum.Profile) return userName;
  return navLinks.find((el) => "/" + el.path === pathname)?.name;
};
