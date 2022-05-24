import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const mode = "prod";
const baseUrl =
  mode === "dev" ? "http://localhost:8000" : "https://vibes-backend.vercel.app";

const baseQuery = fetchBaseQuery({
  baseUrl,
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery,
  tagTypes: ["Users", "Posts", "Comments"],
  endpoints: () => ({}),
});


