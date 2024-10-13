"use client";
import { useGetMyProfileQuery } from "@/redux/api/authApi";
import { SessionProvider } from "next-auth/react";
import React, { useEffect } from "react";

interface WrapperProps {
  children: React.ReactNode;
}

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  const { data: userInfo } = useGetMyProfileQuery(undefined);

  useEffect(()=>{
    // check for accessToken in local storage 

  },[])

  return <SessionProvider>{children}</SessionProvider>;
};

export default Wrapper;
