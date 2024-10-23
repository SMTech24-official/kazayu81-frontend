import { baseApi } from "./baseApi";

const helpOrderApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // create order
    createOrder: build.mutation({
      query: (data) => ({
        url: `/orders/create-order`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["order"],
    }),

    // get all orders
    getOrders: build.query({
      query: (arg: Record<string, any>) => ({
        url: `/orders`,
        method: "GET",
        params: arg,
      }),
      providesTags: ["order"],
    }),

    // get order by id
    getOrderById: build.query({
      query: (id: number) => ({
        url: `/orders/${id}`,
        method: "GET",
      }),
      providesTags: ["order"],
    }),

    // update order
    updateOrder: build.mutation({
      query: ({ id, data }) => ({
        url: `/orders/update/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["order"],
    }),

    // save or publish order
    saveOrPublishOrder: build.mutation({
      query: (orderId: number) => ({
        url: `/orders/save-or-publish/${orderId}`,
        method: "PATCH",
      }),
      invalidatesTags: ["order"],
    }),

    // accept order by helper
    acceptOrder: build.mutation({
      query: (orderId: number) => ({
        url: `/orders/accept-order/${orderId}`,
        method: "PATCH",
      }),
      invalidatesTags: ["order"],
    }),

    // cancel order by customer
    cancelOrder: build.mutation({
      query: (orderId: number) => ({
        url: `/orders/cancel-order/${orderId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["order"],
    }),

    // complete order by customer
    completeOrder: build.mutation({
      query: (orderId: number) => ({
        url: `/orders/complete-order/${orderId}`,
        method: "PATCH",
      }),
      invalidatesTags: ["order"],
    }),

    // delete order
    deleteOrder: build.mutation({
      query: (orderId: number) => ({
        url: `/orders/delete/${orderId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["order"],
    }),
  }),
});

export const {
  useCreateOrderMutation,
  useGetOrdersQuery,
  useGetOrderByIdQuery,
  useUpdateOrderMutation,
  useSaveOrPublishOrderMutation,
  useAcceptOrderMutation,
  useCancelOrderMutation,
  useCompleteOrderMutation,
  useDeleteOrderMutation,
} = helpOrderApi;
