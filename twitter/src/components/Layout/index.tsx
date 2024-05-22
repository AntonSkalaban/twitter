import { FC, ReactNode } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { styled } from "styled-components";

import { H4 } from "styled/StyledComponents";
import { navLinks } from "components/Sidebar/Nav/constants";
import { SidebarRight } from "components/SidebarRigth";
import { ThemeToggle } from "components/ThemeToggle";
import { getUser } from "store/slices";
import { PagePathsEnum } from "types/paths";

import { Sidebar } from "..";
import { PageContainer, StyledMain, TopRow } from "./styled";

export const StyledWrapper = styled.div`
  margin: 0 auto;
  max-width: 1400px;
  height: 100%;
  box-sizing: content-box;
  padding: 0 10px 0 10px;
`;

interface MainLayoutProps {
  children: ReactNode;
}
export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  const { pathname } = useLocation();

  const { name } = useSelector(getUser);

  const getPageName = () => {
    if (pathname === "/" + PagePathsEnum.Profile) return name;
    return navLinks.find((el) => "/" + el.path === pathname)?.name;
  };

  const pageName = getPageName();

  return (
    <StyledWrapper>
      <PageContainer>
        <Sidebar />
        <StyledMain>
          <div>
            <TopRow>
              <H4>{pageName}</H4>
              <ThemeToggle />{" "}
            </TopRow>
          </div>

          {children}
        </StyledMain>

        <SidebarRight />
      </PageContainer>
    </StyledWrapper>
  );
};
