import Footer from "@/components/shared/footer/Footer";
import NavBar from "@/components/shared/navBar/NavBar";
import React from "react";

import { ReactNode } from "react";

const CommonLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="grid grid-rows-[auto_1fr_auto] min-h-screen">
      <NavBar />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default CommonLayout;
