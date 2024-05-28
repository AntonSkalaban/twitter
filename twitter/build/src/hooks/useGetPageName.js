import { useLocation } from "react-router-dom";
import { navLinks } from "components/Sidebar/Nav/constants";
export const useGetPageName = () => {
    const { pathname } = useLocation();
    return navLinks.find((el) => "/" + el.path === pathname)?.name;
};
