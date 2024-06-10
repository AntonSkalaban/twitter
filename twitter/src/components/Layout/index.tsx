import { FC, useEffect } from "react";
import { useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";

import { H4, Wrapper } from "styled";
import { SidebarRight, ThemeToggle } from "components";
import { getUser } from "store/slices";
import { useGetPageName } from "hooks";
import { PageNamesEnum } from "types";

import { Sidebar } from "..";
import { PageContainer, StyledMain, TopRow } from "./styled";

export const MainLayout: FC = () => {
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

          <Outlet />
        </StyledMain>

        <SidebarRight />
      </PageContainer>
    </Wrapper>
  );
};
