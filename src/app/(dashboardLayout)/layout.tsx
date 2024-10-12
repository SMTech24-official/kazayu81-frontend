import DashboardWrapper from "@/components/dashboardLayoutWrapper/DashboardWrapper";
import React from "react";

import { ReactNode } from "react";

const CommonLayout = ({ children }: { children: ReactNode }) => {
  return <DashboardWrapper>{children}</DashboardWrapper>;
};

export default CommonLayout;
