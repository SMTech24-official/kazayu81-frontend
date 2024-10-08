import { baseApi } from "./baseApi";

const paymentApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // get all pet
    getAllPaymentInfo: build.query({
      query: () => ({
        url: `/paymentInfo`,
        method: "GET",
      }),
      providesTags: ["paymentInfo"],
    }),
    getPaymentInfoWithUser: build.query({
      query: (id) => ({
        url: `/paymentInfo/${id}`,
        method: "GET",
      }),
      providesTags: ["paymentInfo"],
    }),

    paymentInfo: build.mutation({
      query: (payload: any) => ({
        url: `/paymentInfo`,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["paymentInfo","chatroom"],
    }),
  }),
});

export const { useGetAllPaymentInfoQuery, usePaymentInfoMutation,useGetPaymentInfoWithUserQuery } = paymentApi;
