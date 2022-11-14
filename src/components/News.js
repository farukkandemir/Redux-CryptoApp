import React from "react";
import {useGetCryptoNewsQuery} from "../api/cryptoNewsApi";
import Loader from "./Loader";
import moment from "moment";
import {Link} from "react-router-dom";

function News({simplified}) {
  const {data: news, isFetching} = useGetCryptoNewsQuery({
    category: "Crypto",
    count: simplified ? 12 : 24,
  });

  if (isFetching) return <Loader />;

  return (
    <article>
      <div className="pt-4 flex justify-between">
        <p className="md:text-2xl font-semibold">Latest News From Cryptocurrency</p>
        {simplified && (
          <Link to="/news">
            <button className="md:text-xl text-blue-400 font-semibold mr-4">
              Show More
            </button>
          </Link>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4 mt-4">
        {news?.value.map((newsReport, index) => (
          <aside
            key={index}
            className="h-72 bg-white p-4 rounded-xl flex flex-col  justify-between"
          >
            <div className="flex justify-between h-1/2 mb-2">
              <a
                href={newsReport.url}
                target="_blank"
                rel="noreferrer"
                className="font-semibold "
              >
                {newsReport.name}
              </a>
              <img
                src={newsReport?.image?.thumbnail?.contentUrl}
                alt=""
                className="rounded-xl h-24 w-24"
              />
            </div>
            <div>
              <p className="text-sm">
                {newsReport.description.length > 150 ? (
                  <span>
                    {newsReport.description.substring(0, 150)}
                    <span className="text-rose-600">....read more</span>
                  </span>
                ) : (
                  newsReport.description
                )}
              </p>
            </div>
            <div className="text-xs flex justify-between">
              <span>{newsReport.provider[0].name}</span>
              <span>{moment(newsReport.datePublished).startOf("ss").fromNow()}</span>
            </div>
          </aside>
        ))}
      </div>
    </article>
  );
}

export default News;
