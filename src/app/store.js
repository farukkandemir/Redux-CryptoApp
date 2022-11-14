import {configureStore} from "@reduxjs/toolkit";
import {cryptoApi} from "../api/cryptoApi";
import {cryptoNewsApi} from "../api/cryptoNewsApi";
import {cryptoStatsApi} from "../api/cryptoStatsApi";

export const store = configureStore({
  reducer: {
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,
    [cryptoStatsApi.reducerPath]: cryptoStatsApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      cryptoApi.middleware,
      cryptoNewsApi.middleware,
      cryptoStatsApi.middleware
    ),
});
