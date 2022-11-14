import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const baseUrl = "https://coinranking1.p.rapidapi.com";

const headers = {
  "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
  "X-RapidAPI-Host": "coinranking1.p.rapidapi.com",
};

export const cryptoApi = createApi({
  reducerPath: "cryptoApi",
  baseQuery: fetchBaseQuery({baseUrl, headers}),
  endpoints: (builder) => ({
    getCryptos: builder.query({
      query: (count = 10) => `/coins?limit=${count}`,
    }),
    getCryptoDetails: builder.query({
      query: (coinId) => `/coin/${coinId}`,
    }),
    getCryptoHistory: builder.query({
      query: ({coinId, timePeriod}) => `/coin/${coinId}/history?timePeriod=${timePeriod}`,
    }),
  }),
});

export const {useGetCryptosQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery} =
  cryptoApi;
