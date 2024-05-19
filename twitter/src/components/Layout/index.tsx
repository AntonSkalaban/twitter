import { FC, ReactNode } from "react";

import { Sidebar } from "..";

interface MainLayoutProps {
  children: ReactNode;
}
export const MainLayout: FC<MainLayoutProps> = ({ children }) => (
  <div style={{ display: "flex" }}>
    <Sidebar />
    <main>{children}</main>
  </div>
);
