import React from "react";
import Loader from "./Loader";
import {useGetCryptosQuery} from "../api/cryptoApi";
import millify from "millify";

function Stats() {
  const {data, isFetching} = useGetCryptosQuery(10);

  if (isFetching) return <Loader />;

  const stats = data?.data?.stats;

  return (
    <article className="pt-4">
      <div>
        <h1 className="md:text-2xl text-lg font-semibold">Global Crypto Stats</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-4">
        <div>
          <p className="text-gray-500 text-sm">Total Cryptocurrencies</p>
          <span className="text-2xl">{millify(stats?.totalCoins)}</span>
        </div>
        <div>
          <p className="text-gray-500 text-sm">Total Exchanges</p>
          <span className="text-2xl">{stats?.totalExchanges}</span>
        </div>
        <div>
          <p className="text-gray-500 text-sm">Total Market Cap</p>
          <span className="text-2xl">{millify(stats?.totalMarketCap)}</span>
        </div>
        <div>
          <p className="text-gray-500 text-sm">Total 24h Volume</p>
          <span className="text-2xl">{millify(stats?.total24hVolume)}</span>
        </div>
        <div>
          <p className="text-gray-500 text-sm">Total Markets</p>
          <span className="text-2xl">{millify(stats?.totalMarkets)}</span>
        </div>
        <div>
          <p className="text-gray-500 text-sm">Total Something</p>
          <span className="text-2xl">12,176</span>
        </div>
      </div>
    </article>
  );
}

export default Stats;
