import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postApi = createApi({
  reducerPath: "postApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com",
  }),
  endpoints: (builder) => ({
    posts: builder.query({
      query: () => "/posts",
    }),
    addPost: builder.mutation({
      query: (post: PostType) => ({
        url: "/posts",
        method: "POST",
        body: post,
      }),
    }),
    updatePost: builder.mutation({
      query: ({ id, ...rest }) => ({
        url: `/post/${id}`,
        method: "PUT",
        body: rest,
      }),
    }),
  }),
});

export const { usePostsQuery, useAddPostMutation, useUpdatePostMutation } =
  postApi;
