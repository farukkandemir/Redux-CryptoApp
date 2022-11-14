import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

const baseUrl = "https://bing-news-search1.p.rapidapi.com/news";

//
export const cryptoNewsApi = createApi({
  reducerPath: "cryptoNewsApi",
  baseQuery: fetchBaseQuery({
    baseUrl,
    prepareHeaders: (headers) => {
      headers.set("X-BingApis-SDK", "true");
      headers.set("X-RapidAPI-Key", process.env.REACT_APP_API_KEY);
      headers.set("X-RapidAPI-Host", "bing-news-search1.p.rapidapi.com");
    },
  }),
  endpoints: (builder) => ({
    getCryptoNews: builder.query({
      query: ({category, count}) =>
        `/search?q=${category}&count=${count}&safeSearch=Off&freshness=Day&textFormat=Raw`,
    }),
  }),
});

export const {useGetCryptoNewsQuery} = cryptoNewsApi;
