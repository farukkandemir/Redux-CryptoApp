import React from "react";

import millify from "millify";

function TopTens({data, title}) {
  console.log(data);

  return (
    <div className="w-11/12 mx-auto pt-4">
      <div>
        <p className="font-semibold text-2xl mb-4">Top 10 {title} Cryptocurrencies</p>
      </div>

      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
        {data?.result.map((coin) => (
          <div key={coin.id} className="bg-white h-40 p-2 rounded-xl shadow-lg">
            <p className="text-center font-semibold pb-2">
              {coin.name} <span className="text-sm">( {coin.symbol} )</span>
            </p>
            <div>
              <p>
                Market Cap : <span>{millify(coin.marketCap)}</span>{" "}
              </p>
              <p>
                Price : <span>${coin.priceChange.price.toFixed(5)}</span>
              </p>
              <p>
                Price Change (24h) :{" "}
                <span>%{coin.priceChange["priceChange24h"].toFixed(2)}</span>
              </p>
              <p>
                Volume (24h) : <span>%{millify(coin.priceChange["volume24h"])}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TopTens;
