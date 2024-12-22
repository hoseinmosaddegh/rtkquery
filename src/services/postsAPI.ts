import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const postsAPI = createApi({
  reducerPath: "postsAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/posts/",
  }),

  endpoints: (builder) => ({
    getPostByName: builder.query({
      query: ({ id /*, name */ }) => `${id}` /*${name}*/,
    }), //() | {return }| ohne
  }),
});

export const { useGetPostByNameQuery } = postsAPI;
