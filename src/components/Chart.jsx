import React from "react";
import { Line } from "react-chartjs-2";
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
// all the above required things are also supposed to be registered as well
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Chart = ({ arr = [], currency, days }) => {
  const prices = [];
  const date = [];

  for (let i = 0; i < arr.length; i++) {
    if (days === "24h") date.push(new Date(arr[i][0]).toLocaleTimeString());
    // if under 24 h convert it to time
    //  the array passed from CoinDetails array here will be destructured and array[i][0] is date and the arr[i][1] is the prices
    // otherwise convert it to date as the arrays is of pair type having two objects
    else date.push(new Date(arr[i][0]).toLocaleDateString());
    prices.push(arr[i][1]);
  }

  // this data is used as an arugment for the chartComponent and as a line component
  const data = {
    labels: date,
    datasets: [
      {
        label: `Price in ${currency}`,
        data: prices,
        borderColor: "rgb(255,255,255)",
        backgroundColor: "rgba(255,255,255,0.5)",
      },
    ],
  };

  return (
    <Line
      options={{
       responsive: true,
      }}
      data={data}
    />
  );
};

export default Chart;