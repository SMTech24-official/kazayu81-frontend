"use client";
import React, { useEffect, useState } from "react";
import Sidebar from "../shared/Sidebar/Sidebar";
import Navbar from "../shared/navBar/NavBar";
import { Button } from "../ui/button";
import { CgMenu } from "react-icons/cg";

interface DashboardWrapperProps {
  children: React.ReactNode;
}

const DashboardWrapper: React.FC<DashboardWrapperProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  // .no-scroll {
  //   overflow: hidden;
  // }

  // disable scrool on sidebar open

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  }, [isOpen]);

  return (
    <>
      <div>
        <Navbar />
        <div className="container mb-5 px-5 xl:px-0">
          <Button
            onClick={toggleSidebar}
            className={` transition-all duration-300 ${
              isOpen ? "opacity-0  pointer-events-none" : "opacity-100"
            } p-4 px-2 mt-5 ml-3 xl:ml-0 hover:bg-transparent hover:border border border-transparent hover:border-orange-500 bg-orange-500 text-white hover:text-orange-500`}
          >
            <CgMenu size={30} />
          </Button>
          <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
        </div>
        <div className="container px-5 xl:px-0">{children}</div>
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default DashboardWrapper;
