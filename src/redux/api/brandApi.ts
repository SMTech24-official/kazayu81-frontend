import { baseApi } from "./baseApi";

const brandsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    // get all pet
    getAllBrands: build.query({
      query: () => ({
        url: `/brands`,
        method: "GET",
      }),
      providesTags: ["Brands"],
    }),
    // get all pet
    createBrands: build.mutation({
      query: (payload: any) => {
        return {
          url: `/brands`,
          method: "POST",
          body: payload,
        };
      },
      invalidatesTags: ["Brands"],
    }),
    // get all pet
    updateBrands: build.mutation({
      query: (payload: any) => {
        return {
          url: `/brands/${payload.id}`,
          method: "PUT",
          body: { brandName: payload.brandName },
        };
      },
      invalidatesTags: ["Brands"],
    }),
    // get all pet
    deleteBrands: build.mutation({
      query: (id: string) => {
        return {
          url: `/brands/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: ["Brands"],
    }),
  }),
});

export const { useGetAllBrandsQuery, useCreateBrandsMutation, useUpdateBrandsMutation, useDeleteBrandsMutation } =
  brandsApi;
