import { FC, ReactNode, useEffect } from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import { H4, Wrapper } from "styled/StyledComponents";
import { SidebarRight } from "components/SidebarRigth";
import { ThemeToggle } from "components/ThemeToggle";
import { getUser } from "store/slices";

import { Sidebar } from "..";
import { getPageName } from "./helpers";
import { PageContainer, StyledMain, TopRow } from "./styled";

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const { id, name } = useSelector(getUser);

  useEffect(() => {
    if (!id) return navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const pageName = getPageName(pathname, name);

  return (
    <Wrapper>
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
    </Wrapper>
  );
};
