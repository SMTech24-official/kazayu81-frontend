import { baseApi } from "./baseApi";

const freeVisitApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // offer free visit
    createFreeVisit: build.mutation({
      query: ({ orderId, data }) => ({
        url: `/orders/free-visit/${orderId}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["freeVisit", "order"],
    }),

    // Update free visit status
    updateFreeVisitStatus: build.mutation({
      query: ({ freeVisitId, data }) => ({
        url: `/orders/free-visit/update-status/${freeVisitId}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["freeVisit", "order"],
    }),
  }),
});

export const { useCreateFreeVisitMutation, useUpdateFreeVisitStatusMutation } =
  freeVisitApi;
