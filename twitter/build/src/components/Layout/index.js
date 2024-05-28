import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { H4, Wrapper } from "styled/StyledComponents";
import { SidebarRight } from "components/SidebarRigth";
import { ThemeToggle } from "components/ThemeToggle";
import { getUser } from "store/slices";
import { useGetPageName } from "hooks/index";
import { PageNamesEnum } from "types/paths";
import { Sidebar } from "..";
import { PageContainer, StyledMain, TopRow } from "./styled";
export const MainLayout = ({ children }) => {
    const navigate = useNavigate();
    let pageName = useGetPageName();
    const { id, name } = useSelector(getUser);
    if (pageName === PageNamesEnum.Profile)
        pageName = name;
    useEffect(() => {
        if (!id)
            return navigate("/");
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (_jsx(Wrapper, { children: _jsxs(PageContainer, { children: [_jsx(Sidebar, {}), _jsxs(StyledMain, { children: [_jsx("div", { children: _jsxs(TopRow, { children: [_jsx(H4, { children: pageName }), _jsx(ThemeToggle, {}), " "] }) }), children] }), _jsx(SidebarRight, {})] }) }));
};
