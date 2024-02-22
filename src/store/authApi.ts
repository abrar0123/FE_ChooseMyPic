import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com/" }),
  endpoints: (builder) => ({
    authLogin: builder.mutation({
      query: (data) => {
        console.log("data", data);
        return {
          url: "/api/auth/signup",
          method: "POST",
        };
      },
    }),
    testData: builder.query({
      query: () => {
        return {
          url: "products",
          method: "GET",
        };
      },
    }),
  }),
});

export const { useAuthLoginMutation, useTestDataQuery } = authApi;
