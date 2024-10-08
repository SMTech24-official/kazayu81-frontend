import { baseApi } from "./baseApi";

const messagesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // get all pet
    getAllmessages: build.query({
      query: (roomId) => ({
        url: `chatroom/${roomId}/messages`,
        method: "GET",
      }),
      providesTags: ["messages"],
    }),

    sendMessage: build.mutation({
      query: (payload: any) => ({
        url: `/messages`,
        method: "POST",
        body: payload,
      }),
      invalidatesTags: ["messages"],
    }),
    
  }),
});

export const {useGetAllmessagesQuery,useSendMessageMutation } = messagesApi;
