import { jwtDecode } from "jwt-decode";

interface UserJwtPayload {
  id: number;
  email: string;
  role: string;
  iat: number; // Issued at timestamp
  exp: number; // Expiration timestamp
}

// Update the function to use the new type
export const getUserInfo = (): UserJwtPayload | null => {
  try {
    if (typeof window === "undefined") {
      return null;
    }

    const token = localStorage.getItem("accessToken");

    if (!token) {
      return null;
    }

    // Decode the token using jwt-decode
    const user = jwtDecode<UserJwtPayload>(token);

    return user;
  } catch (error) {
    console.error("Failed to decode token or retrieve user info:", error);
    return null;
  }
};
