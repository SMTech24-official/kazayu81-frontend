/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "./baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // login
    login: build.mutation({
      query: (data: any) => {
        return {
          url: `/auth/login`,
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["Auth"],
    }),

    // create helper
    createHelper: build.mutation({
      query: (data: any) => {
        return {
          url: `/helper/create-helper`,
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["Auth"],
    }),

    // customer signup

    createCustomer: build.mutation({
      query: (data: any) => {
        return {
          url: `/customer/create-customer`,
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["Auth"],
    }),

    // social login

    socialLogin: build.mutation({
      query: (data: any) => {
        return {
          url: `/auth/social-login`,
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["Auth"],
    }),

    // varify otp

    verifyOtp: build.mutation({
      query: (data: any) => {
        return {
          url: `/auth/otp-enter`,
          method: "POST",
          body: data,
        };
      },
      invalidatesTags: ["Auth"],
    }),

    // forgotten profile
    forgottenPassword: build.mutation({
      query: (data: { email: string }) => ({
        url: `/auth/forgot-password`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Auth"],
    }),
    // reset password profile
    resetPassword: build.mutation({
      query: (data: { id: number; password: string }) => ({
        url: `/auth/reset-password`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["Auth"],
    }),
    // get me
    getMyProfile: build.query({
      query: () => ({
        url: `/auth/get-me`,
        method: "GET",
      }),
      providesTags: ["Auth"],
    }),

    // change password
    changePassword: build.mutation({
      query: (data: { oldPassword: string; newPassword: string }) => ({
        url: `/auth/change-password`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["Auth"],
    }),
  }),
});

export const {
  useLoginMutation,
  useCreateHelperMutation,
  useForgottenPasswordMutation,
  useChangePasswordMutation,
  useGetMyProfileQuery,
  useResetPasswordMutation,
  useCreateCustomerMutation,
  useVerifyOtpMutation,
  useSocialLoginMutation,
} = authApi;
