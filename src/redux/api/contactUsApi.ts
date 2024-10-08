import { baseApi } from "./baseApi";

const contactUsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // get all pet
    sendEmail: build.mutation({
      query: (data) => ({
        url: `contact-us`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const {useSendEmailMutation} = contactUsApi;
