"use client";
import { removeUser, setUser } from "@/redux/slice/usersSlice";
import { RootState } from "@/redux/store";
import { SessionProvider } from "next-auth/react";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

interface WrapperProps {
  children: React.ReactNode;
}

const BASEAPI = process.env.NEXT_PUBLIC_BASEURL;

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  const [loading, setLoading] = useState<boolean>(false);
  const user = useSelector((state: RootState) => state.user.user);
  const dispatch = useDispatch();
  const pathName = usePathname();
  const toastId = React.useRef<string | number | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");

    if (!token) {
      console.log("No token found, removing user");
      dispatch(removeUser());
      return;
    }

    const fetchUserProfile = async () => {
      try {
        setLoading(true);
        console.log("Fetching user profile...");

        const response = await fetch(`${BASEAPI}/auth/get-me`, {
          method: "GET",
          headers: {
            authorization: `${token}`,
          },
        });

        const result = await response.json();

        if (result?.success) {
          dispatch(setUser(result.data));
        } else {
          toast.error("Failed to fetch user profile");
        }
      } catch (error) {
        console.error("Error fetching user profile:", error);
        toast.error("Error fetching user profile");
        dispatch(removeUser());
      } finally {
        setLoading(false);
      }
    };

    if (!user) {
      fetchUserProfile();
    }
  }, [dispatch, user, pathName]);

  useEffect(() => {
    if (loading) {
      if (!toastId.current) {
        toastId.current = toast.info("Loading user profile...", {
          position: "bottom-right",
        });
      }
    } else {
      if (toastId.current) {
        toast.dismiss(toastId.current);
        toastId.current = null;
      }
    }
  }, [loading]);
  return <SessionProvider>{children}</SessionProvider>;
};

export default Wrapper;
