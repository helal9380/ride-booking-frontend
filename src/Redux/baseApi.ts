/** @format */

import { createApi } from "@reduxjs/toolkit/query/react";
import axiosBaseQuery from "./axiosBaseQuery";

export const baseApi = createApi({
  reducerPath: "baseApi",
  tagTypes: ["USER", "RIDE"],
  baseQuery: axiosBaseQuery(),
  endpoints: () => ({}),
});
