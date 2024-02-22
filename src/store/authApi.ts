import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8000" }),
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
  }),
});

export const { useAuthLoginMutation } = authApi;
