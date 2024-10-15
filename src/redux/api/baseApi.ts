import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASEAPI = process.env.NEXT_PUBLIC_BASEURL;
// console.log(process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID);

// Define a service using a base URL and expected endpoints
export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    // baseUrl: "http://localhost:5000/api/v1",
    // baseUrl: "http://localhost:3000/api/v1",
    // baseUrl: "https://help-on-way-backend.vercel.app/api/v1",
    baseUrl: BASEAPI,

    prepareHeaders: (headers: Headers) => {
      const token = localStorage.getItem("accessToken");
      if (token) {
        headers.set("authorization", ` ${token}`);
      }
      return headers;
    },
  }),
  endpoints: () => ({}),
  tagTypes: [
    "Users",
    "Auth",
    "Brands",
    "Products",
    "Reviews",
    "Wishlist",
    "Biddings",
    "Vehicles",
    "payment",
    "messages",
    "chat",
    "chatroom",
    "paymentInfo",
  ],
});
