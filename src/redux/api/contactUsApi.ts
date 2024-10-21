import { baseApi } from "./baseApi";

const contactUsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // get all pet
    contactUs: build.mutation({
      query: (data) => ({
        url: `contactus/send-email`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useContactUsMutation } = contactUsApi;
