import React from "react";
import WeatherCard from "./common/WeatherCard";
import { useSelector, useDispatch } from "react-redux";

export default function WeatherGroup({ fiveDaysForcast }) {
  const isMetric = useSelector((state) => state.Settings.metricUnits);
  const inDarkMood = useSelector((state) => state.Settings.darkMode);

  return (
    <div
      className={
        inDarkMood
          ? "row h-25 justify-content-between mt-3 bg-dark"
          : "row h-25 justify-content-between mt-3 "
      }
    >
      {fiveDaysForcast.map((item) => (
        <WeatherCard
          item={item}
          key={item.Date}
          matricUnit={isMetric}
          darkMode={inDarkMood}
        />
      ))}
    </div>
  );
}
