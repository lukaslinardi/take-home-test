import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const ChartBar = () => {
  const stockData = [
    {
      id: 1,
      month: "Jan",
      stock: 1000,
    },
    {
      id: 2,
      month: "Feb",
      stock: 900,
    },
    {
      id: 3,
      month: "Mar",
      stock: 800,
    },
    {
      id: 4,
      month: "Apr",
      stock: 700,
    },
    {
      id: 5,
      month: "May",
      stock: 4300,
    },
    {
      id: 6,
      month: "Jun",
      stock: 2300,
    },
    {
      id: 7,
      month: "Jul",
      stock: 4300,
    },
    {
      id: 8,
      month: "Aug",
      stock: 5300,
    },
    {
      id: 9,
      month: "Sep",
      stock: 4300,
    },
    {
      id: 10,
      month: "Oct",
      stock: 5300,
    },
    {
      id: 11,
      month: "Nov",
      stock: 5300,
    },
    {
      id: 12,
      month: "Dec",
      stock: 7300,
    },
  ];
  const [data] = useState({
    labels: stockData.map((data) => data.month),
    datasets: [
      {
        label: "",
        data: stockData.map((data) => data.stock),
        backgroundColor: [
          "#00a7ff",
          "#00a7ff",
          "#00a7ff",
          "#00a7ff",
          "#00a7ff",
          "#00a7ff",
          "#00a7ff",
          "#00a7ff",
          "#00a7ff",
          "#00a7ff",
          "#00a7ff",
          "#fdaa06",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });

  return <Bar data={data} />;
};

export default ChartBar;
