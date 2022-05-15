import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "http://localhost:8000";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: () => ({}),
});