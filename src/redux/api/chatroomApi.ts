import { baseApi } from "./baseApi";

const chatApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // get all pet
    getAllchat: build.query({
      query: () => ({
        url: `/chatroom`,
        method: "GET",
      }),
      providesTags: ["chatroom","Products","Biddings","paymentInfo"],
    }),
    getSinglechatRoom: build.query({
      query: (id) => ({
        url: `/chatroom/singleRoom/${id}`,
        method: "GET",
      }),
      providesTags: ["chatroom","Products","Biddings","paymentInfo"],
    }),

    createchatRoom: build.mutation({
      query: (payload: any) => ({
        url: `/chatroom`,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["chatroom","Products","Biddings","paymentInfo"],
    }),
  }),
});

export const {
  useGetAllchatQuery,
  useCreatechatRoomMutation,
  useGetSinglechatRoomQuery,
} = chatApi;
