"use client";
import { removeUser, setUser } from "@/redux/slice/usersSlice";
import { RootState } from "@/redux/store";
import { SessionProvider } from "next-auth/react";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

interface WrapperProps {
  children: React.ReactNode;
}

const BASEAPI = process.env.NEXT_PUBLIC_BASEURL;

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  const user = useSelector((state: RootState) => state.user.user); // Get user from Redux (make sure to access .user)
  const dispatch = useDispatch();
  const pathName = usePathname();

  useEffect(() => {
    // Check if token exists in localStorage
    const token = localStorage.getItem("accessToken");
    // console.log("Token:", token);

    // If no token, remove the user from Redux and return early
    if (!token) {
      console.log("No token found, removing user");
      dispatch(removeUser());
      return;
    }

    // Fetch user profile if user is not set in Redux
    const fetchUserProfile = async () => {
      try {
        console.log("Fetching user profile...");

        const response = await fetch(`${BASEAPI}/auth/get-me`, {
          method: "GET",
          headers: {
            authorization: `${token}`, // Use Bearer token format
          },
        });

        const result = await response.json();
        console.log("API response:", result);

        if (result?.success) {
          console.log("Setting user in Redux:", result.data);

          // Dispatch the user data to Redux
          dispatch(setUser(result.data));
        } else {
          console.log("Failed to fetch user profile:", result.message);
        }
      } catch (error) {
        console.error("Error fetching user profile:", error);
        toast.error("Error fetching user profile");
        dispatch(removeUser());
      }
    };

    if (!user) {
      fetchUserProfile(); // Only fetch if user is not set in Redux
    } else {
      console.log("User already set in Redux:", user);
    }
  }, [dispatch, user, pathName]);

  return <SessionProvider>{children}</SessionProvider>;
};

export default Wrapper;
