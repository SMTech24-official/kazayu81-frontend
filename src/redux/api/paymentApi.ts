import { baseApi } from "./baseApi";

const paymentApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // get all pet
    createPayment: build.mutation({
      query: (payload: any) => {
        return {
          url: `/create-payment-intent`,
          method: "POST",
          body: payload,
        };
      },
      invalidatesTags: ["payment","chatroom"],
    }),
  }),
});
export const { useCreatePaymentMutation } = paymentApi;
