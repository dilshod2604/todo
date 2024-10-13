import { createApi } from "@reduxjs/toolkit/query/react";
import { BaseQueryFn, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

  
  const baseQuery = fetchBaseQuery({
    baseUrl: "https://api.elchocrud.pro/api/v1/b2e41e68c0fe2e1d8c495476c3cb51a9/todo",
   
  });
  
  const baseQueryExtanded: BaseQueryFn = (arg, api, extraOptions) => {
    const result = baseQuery(arg, api, extraOptions);
    return result;
  };
  
  export const api = createApi({
    reducerPath: "api",
    baseQuery: baseQueryExtanded,
    refetchOnFocus: true,
    refetchOnReconnect: true,
    tagTypes: ["todo"],
  
    endpoints: () => ({}),
  });