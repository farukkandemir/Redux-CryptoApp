import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const baseUrl = "https://cryptocurrency-markets.p.rapidapi.com/general";

export const cryptoStatsApi = createApi({
  reducerPath: "cryptoStatsApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      headers.set("X-RapidAPI-Key", process.env.REACT_APP_API_KEY);
      headers.set("X-RapidAPI-Host", "cryptocurrency-markets.p.rapidapi.com");
    },
  }),
  endpoints: (builder) => ({
    getTrending: builder.query({
      query: () => "/trending",
    }),
    getGainers: builder.query({
      query: () => "/gainer",
    }),
    getLosers: builder.query({
      query: () => "/loser",
    }),
  }),
});

export const {useGetTrendingQuery, useGetGainersQuery, useGetLosersQuery} =
  cryptoStatsApi;
