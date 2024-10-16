import { jwtDecode } from "jwt-decode";

export const getUserInfo: any = () => {
  // check if local storage is available

  if (typeof window === "undefined") return null;

  const token = localStorage.getItem("accessToken");
  if (!token) return null;
  const user = jwtDecode(token);
  return user;
};
