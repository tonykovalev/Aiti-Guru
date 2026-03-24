import { api } from "@/shared/api";
import type { ProductsQueryParams, ProductsResponse } from "../model";

export const productsApi = api.injectEndpoints({
  endpoints: builder => ({
    getProducts: builder.query<ProductsResponse, ProductsQueryParams>({
      query: ({ q, ...params }) => ({
        url: q ? "/products/search" : "/products",
        params: q ? { q, ...params } : params,
      }),
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
