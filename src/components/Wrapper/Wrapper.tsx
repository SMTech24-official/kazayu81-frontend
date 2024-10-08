"use client";
import { SessionProvider } from "next-auth/react";
import React from "react";

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default Wrapper;
