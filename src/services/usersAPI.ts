import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const usersAPI = createApi({
  reducerPath: "usersAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    getUserByName: builder.query({
      query: () => "/todos/1",
    }),
  }),
});

export const { useGetUserByNameQuery } = usersAPI;
