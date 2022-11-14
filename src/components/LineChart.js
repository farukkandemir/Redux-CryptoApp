import React from "react";
import {Line} from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

function LineChart({coinHistory, currentPrice, coinName}) {
  const coinPrices = [];
  const coinTimeStamps = [];

  for (let i = 0; i < coinHistory?.data?.history.length; i++) {
    coinPrices.push(coinHistory.data.history[i].price);
    coinTimeStamps.push(
      new Date(coinHistory.data.history[i].timestamp * 1000).toLocaleDateString()
    );
  }

  const data = {
    labels: coinTimeStamps.reverse(),
    datasets: [
      {
        label: "Price in USD",
        data: coinPrices.reverse(),
        fill: false,
        backgroundColor: "#0071bd",
        borderColor: "#0071bd",
      },
    ],
  };

  return (
    <>
      <div className="mt-4">
        <div className="flex justify-between items-center">
          <p className="text-2xl font-bold text-[#0071bd]">{coinName} Price Chart</p>
          <div className="font-bold text-md">
            <span className="mr-4">Price Change : {coinHistory?.data?.change} %</span>
            <span>Current Price : {currentPrice}</span>
          </div>
        </div>
      </div>
      <Line data={data} />
    </>
  );
}

export default LineChart;
