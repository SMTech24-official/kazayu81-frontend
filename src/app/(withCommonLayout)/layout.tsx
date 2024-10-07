import NavBar from "@/components/shared/navBar/NavBar";
import React from "react";

import { ReactNode } from "react";

const CommonLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
};

export default CommonLayout;