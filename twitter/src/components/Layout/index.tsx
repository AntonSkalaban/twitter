import { FC, ReactNode, useEffect } from "react";
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

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout: FC<MainLayoutProps> = ({ children }) => {
  const navigate = useNavigate();

  let pageName = useGetPageName();

  const { id, name } = useSelector(getUser);

  if (pageName === PageNamesEnum.Profile) pageName = name;

  useEffect(() => {
    if (!id) return navigate("/");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

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
