import { baseApi } from "./baseApi";

const chatApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // get all pet
    getAllchat: build.query({
      query: () => ({
        url: `/chatroom`,
        method: "GET",
      }),
      providesTags: ["chat","Products","Biddings","paymentInfo","chatroom"],
    }),
    getSinglechat: build.query({
      query: (id) => ({
        url: `/chatroom/${id}`,
        method: "GET",
      }),
      providesTags: ["chat","Products","Biddings","paymentInfo","chatroom"],
    }),

    createchat: build.mutation({
      query: (payload: any) => ({
        url: `/chat`,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["chat","Products","Biddings","paymentInfo","chatroom"],
    }),
  }),
});

export const {
  useGetAllchatQuery,
  useCreatechatMutation,
  useGetSinglechatQuery,
} = chatApi;
