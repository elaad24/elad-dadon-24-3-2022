import React from "react";
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
import { Line } from "react-chartjs-2";
import { getHouers, getTempFromData } from "../../utils";
import "../../css/chart.css";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Chart({ hourWeatherData }) {
  const houers = hourWeatherData.map(
    (item) => `${getHouers(item.DateTime)}:00`
  );

  const tempacherList = getTempFromData(hourWeatherData);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          font: {
            size: 22,
          },
        },
      },
      title: {
        display: true,
        text: "Hourly Weather",
      },
    },
  };

  const labels = houers;
  const data = {
    labels,
    datasets: [
      {
        title: "houerly weather ",
        label: "Temperature",
        data: [...tempacherList],
        borderColor: "rgba(255,210,29,255)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        fill: false,
      },
    ],
  };

  return (
    <div className="chart">
      <Line options={options} data={data} />
    </div>
  );
}
