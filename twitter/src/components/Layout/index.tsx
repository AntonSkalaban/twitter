import { FC, ReactNode } from "react";

import { SidebarRight } from "components/SidebarRigth";

import { Sidebar } from "..";

interface MainLayoutProps {
  children: ReactNode;
}
export const MainLayout: FC<MainLayoutProps> = ({ children }) => (
  <div style={{ width: 1400, display: "flex" }}>
    <Sidebar />
    <main>{children}</main>
    <SidebarRight />
  </div>
);
