import React, {useState} from "react";
import {useParams} from "react-router-dom";
import {useGetCryptoDetailsQuery, useGetCryptoHistoryQuery} from "../api/cryptoApi";
import Loader from "./Loader";
import millify from "millify";
import HTMLReactParser from "html-react-parser";
import {
  AiOutlineDollar,
  AiOutlineNumber,
  AiOutlineThunderbolt,
  AiOutlineTrophy,
  AiOutlineFund,
  AiOutlineMoneyCollect,
  AiOutlineCheckCircle,
  AiOutlineStop,
  AiOutlineExclamationCircle,
} from "react-icons/ai";
import LineChart from "./LineChart";

function CoinDetails() {
  const {coinId} = useParams();

  const [timePeriod, setTimePeriod] = useState("3h");
  const {data, isFetching, currentData} = useGetCryptoDetailsQuery(coinId);
  const {data: coinHistory} = useGetCryptoHistoryQuery({coinId, timePeriod});

  const coin = data?.data?.coin;

  if (isFetching && !currentData) return <Loader />;

  const time = ["3h", "24h", "7d", "30d", "1y", "3m", "3y", "5y"];

  const stats = [
    {
      title: "Price to USD",
      value: `$ ${coin?.price && millify(coin?.price)}`,
      icon: <AiOutlineDollar />,
    },
    {title: "Rank", value: coin?.rank, icon: <AiOutlineNumber />},
    {
      title: "24h Volume",
      value: `$ ${coin["24hVolume"] && millify(coin["24hVolume"])}`,
      icon: <AiOutlineThunderbolt />,
    },
    {
      title: "Market Cap",
      value: `$ ${coin?.marketCap && millify(coin?.marketCap)}`,
      icon: <AiOutlineDollar />,
    },
    {
      title: "All-time-high(daily avg.)",
      value: `$ ${coin?.allTimeHigh?.price && millify(coin?.allTimeHigh?.price)}`,
      icon: <AiOutlineTrophy />,
    },
  ];

  const genericStats = [
    {
      title: "Number Of Markets",
      value: coin?.numberOfMarkets,
      icon: <AiOutlineFund />,
    },
    {
      title: "Number Of Exchanges",
      value: coin?.numberOfExchanges,
      icon: <AiOutlineMoneyCollect />,
    },
    {
      title: "Aprroved Supply",
      value: coin?.supply?.confirmed ? <AiOutlineCheckCircle /> : <AiOutlineStop />,
      icon: <AiOutlineExclamationCircle />,
    },
    {
      title: "Total Supply",
      value: `$ ${coin?.supply?.total && millify(coin?.supply?.total)}`,
      icon: <AiOutlineExclamationCircle />,
    },
    {
      title: "Circulating Supply",
      value: `$ ${coin?.supply?.circulating && millify(coin?.supply?.circulating)}`,
      icon: <AiOutlineExclamationCircle />,
    },
  ];

  return (
    <div className="py-8 sm:w-11/12 lg:w-5/6 xl:w-3/4 mx-auto">
      <div className="text-center">
        <h1 className="text-3xl mb-4">
          {coin.name} <span className="text-2xl"> ( {coin.symbol} ) </span> Price
        </h1>

        <p>
          {coin.name} live price in US dollars. View value statistics, market cap and
          supply
        </p>
      </div>

      <div>
        <label htmlFor="timePeriod">Select the Time Period : </label>
        <select
          name="timePeriod"
          id="timePeriod"
          className="mt-4"
          onChange={(e) => setTimePeriod(e.target.value)}
        >
          {time.map((timeStamp, index) => (
            <option key={index} value={timeStamp}>
              {timeStamp}
            </option>
          ))}
        </select>
      </div>

      <LineChart
        coinHistory={coinHistory}
        currentPrice={millify(coin.price)}
        coinName={coin.name}
      />

      <div className="mt-4 grid grid-cols-2 gap-24">
        <div className="">
          <div>
            <p className="text-xl font-semibold">{coin.name} Value Statistics</p>
            <p>An overview showing the stats of {coin.name}</p>
          </div>

          <div className="mt-4 grid gap-4">
            {stats.map(({title, value, icon}, index) => (
              <div key={index} className="flex items-center gap-4">
                <span className="inline-block text-gray-600">{icon}</span>
                <span className="text-gray-600">{title} : </span>
                <span className="font-bold">{value}</span>
                <hr />
              </div>
            ))}
          </div>
        </div>

        <div className="">
          <div>
            <p className="text-xl font-semibold">Other Statistics</p>
            <p>An overview showing the stats of {coin.name}</p>
          </div>
          <div className="mt-4 grid gap-4 ">
            {genericStats.map(({title, value, icon}, index) => (
              <div key={index} className="flex items-center gap-4">
                <span className="inline-block text-gray-600">{icon}</span>
                <span className="text-gray-600">{title} : </span>

                <span className="inline-block font-bold">{value}</span>
                <hr />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 lg:grid xl:grid-cols-2 gap-24">
        <div>
          <p className="text-xl font-bold">What is {coin.name}</p>
          <figure>{HTMLReactParser(coin.description)}</figure>
        </div>

        <div className="mt-8 lg:mt-0">
          <p className="text-xl font-bold">{coin.name} Related Links</p>

          <div className="grid gap-4 mt-4">
            {coin.links.map((link, index) => (
              <div key={index} className="w-96 flex justify-between">
                <span>{link.type}</span>
                <span className="text-[#0071bd] font-bold">{link.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoinDetails;
