import React from "react";
import Loader from "../components/Loader";
import {
  useGetGainersQuery,
  useGetTrendingQuery,
  useGetLosersQuery,
} from "../api/cryptoStatsApi";
import TopTens from "./TopTens";

function Statistics() {
  const {data: trending, isFetching, currentData} = useGetTrendingQuery();
  const {data: gainers} = useGetGainersQuery();
  const {data: losers} = useGetLosersQuery();

  if (isFetching && !currentData) return <Loader />;

  return (
    <div>
      <TopTens data={trending} title="Trending" />
      <TopTens data={gainers} title="Gainers" />
      <TopTens data={losers} title="Losers" />
    </div>
  );
}

export default Statistics;
