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
import { useSelector, useDispatch } from "react-redux";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function Chart({ hourWeatherData, matricUnits }) {
  const inDarkMood = useSelector((state) => state.Settings.darkMode);

  const houers = hourWeatherData.map(
    (item) => `${getHouers(item.DateTime)}:00`
  );

  const tempacherList = getTempFromData(hourWeatherData, matricUnits);

  const axisColor = inDarkMood ? "#fff" : "#666";
  const gridColor = inDarkMood ? "#ccc" : "#ccc";
  const options = {
    responsive: true,
    scales: {
      y: {
        ticks: {
          color: axisColor,
          font: {
            size: 18,
          },
        },
        grid: {
          color: gridColor,
        },
      },
      x: {
        ticks: {
          color: axisColor,
          font: {
            size: 18,
          },
        },
        grid: {
          color: gridColor,
        },
      },
    },
    plugins: {
      legend: {
        position: "top",
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
        color: "green",
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
