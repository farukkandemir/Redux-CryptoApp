import React, {useState, useEffect} from "react";
import {useGetCryptosQuery} from "../api/cryptoApi";
import millify from "millify";
import {Link} from "react-router-dom";
import Loader from "./Loader";

function Coins({simplified}) {
  const count = simplified ? 10 : 100;

  const {data, isFetching} = useGetCryptosQuery(count);
  const [coins, setCoins] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const filteredCoins = data?.data?.coins.filter((coin) =>
      coin.name.toLowerCase().includes(searchTerm?.toLowerCase())
    );

    setCoins(filteredCoins);
  }, [data, searchTerm]);

  if (isFetching) return <Loader />;

  return (
    <article>
      {simplified ? (
        <div className="flex justify-between lg:mt-4 items-center">
          <h2 className="md:text-2xl text-lg font-semibold pt-4">
            Top {count} Cryptos In The World{" "}
          </h2>
          <Link to="/cryptocurrencies">
            <button className="md:text-xl text-blue-400 font-semibold mr-4">
              Show More
            </button>
          </Link>
        </div>
      ) : (
        <div className="grid place-content-center pt-4">
          <h2 className="text-2xl font-semibold mb-4">
            Top {count} Cryptos In The World{" "}
          </h2>
          <input
            type="text"
            placeholder="Search Cryptocurrency"
            className="text-lg px-4 rounded-3xl outline-none border-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      )}

      <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-4 bg-[#efefef]">
        {coins?.map((coin) => (
          <Link key={coin?.uuid} to={`/coin/${coin.uuid}`}>
            <aside
              id={coin?.uuid}
              className="p-2 rounded-xl hover:shadow-xl transition-all duration-300 ease-in-out bg-white h-52"
            >
              <div className="flex justify-between items-center">
                <div className="text-sm font-bold ">
                  <span>{coin.rank} . </span>
                  <span>{coin.name}</span>
                  <span>{` ( ${coin.symbol} )`}</span>
                </div>

                <img src={coin.iconUrl} alt="" width="30px" />
              </div>

              <div className="h-40 flex flex-col justify-center gap-4">
                <p className="text-sm">
                  Price : <span>{millify(coin.price)}</span>
                </p>
                <p className="text-sm">
                  Market Cap : <span>{millify(coin.marketCap)}</span>
                </p>
                <p className="text-sm">
                  Daily Change : <span>{millify(coin.change)}%</span>
                </p>
              </div>
            </aside>
          </Link>
        ))}
      </div>
    </article>
  );
}

export default Coins;
