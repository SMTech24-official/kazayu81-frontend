"use client";
import React, { useState } from "react";
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
  return (
    <>
      <div>
        <Navbar />
        <div className="container">
          <Button
            onClick={toggleSidebar}
            className={` transition-all duration-300 ${
              isOpen ? "opacity-0  pointer-events-none" : "opacity-100"
            } p-4 px-3 mt-5 hover:bg-transparent hover:border border border-transparent hover:border-orange-500 bg-orange-500 text-white hover:text-orange-500`}
          >
            <CgMenu size={30} />
          </Button>
          <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
        </div>
        <div className="container">{children}</div>
        {/* <Footer /> */}
      </div>
    </>
  );
};

export default DashboardWrapper;
