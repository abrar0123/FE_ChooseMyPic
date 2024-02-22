import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_KEY, DOMAIN } from "../../API";

export const authApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_SERVER_URL }),
  endpoints: (builder) => ({
    authLogin: builder.mutation({
      query: (data) => {
        console.log("data99 :", data);
        return {
          url: "/api/auth/signup",
          method: "POST",
          body: data,
        };
      },
    }),
    testData: builder.query({
      query: () => {
        return {
          url: "/products",
          method: "GET",
        };
      },
    }),
  }),
});

export const { useAuthLoginMutation, useTestDataQuery } = authApi;
