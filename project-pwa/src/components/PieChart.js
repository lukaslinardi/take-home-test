import React, { useState } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

const startupData = [
  {
    id: 1,
    name: "Offline",
    value: 40,
  },
  {
    id: 2,
    name: "AloDoc",
    value: 10,
  },
  {
    id: 3,
    name: "HaloDoc",
    value: 20,
  },
  {
    id: 4,
    name: "SehatQ",
    value: 10,
  },
  {
    id: 5,
    name: "GrabHealth",
    value: 4,
  },
  {
    id: 6,
    name: "Tokopedia",
    value: 6,
  },
  {
    id: 7,
    name: "Shoppe",
    value: 10,
  },
];

const PieChart = () => {
  const [data] = useState({
    labels: startupData.map((data) => data.name),
    datasets: [
      {
        label: "test",
        data: startupData.map((data) => data.value),
        backgroundColor: [
          "#00a7ff",
          "#022c40",
          "#f31040",
          "#dcdcdd",
          "#02f7af",
          "#aff701",
          "#fa9a01",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  });
  return <Pie data={data} />;
};

export default PieChart;
